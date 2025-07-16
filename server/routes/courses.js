// Course management routes
const express = require('express');
const router = express.Router();
const { mongoDb } = require('../config/database');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { validateCourse, validateEnrollment } = require('../middleware/validation');
const { ObjectId } = require('mongodb');

// GET /api/courses - List all courses with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      difficulty,
      search,
      sort = 'created_at',
      order = 'desc'
    } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const query = {};

    // Apply filters
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Sort options
    const sortOptions = {};
    sortOptions[sort] = order === 'desc' ? -1 : 1;

    const db = mongoDb();
    const courses = await db.collection('courses')
      .find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .toArray();

    const total = await db.collection('courses').countDocuments(query);

    res.json({
      success: true,
      data: {
        courses,
        pagination: {
          current_page: parseInt(page),
          total_pages: Math.ceil(total / parseInt(limit)),
          total_items: total,
          items_per_page: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch courses'
    });
  }
});

// GET /api/courses/:id - Get specific course
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course ID'
      });
    }

    const db = mongoDb();
    const course = await db.collection('courses').findOne({ _id: new ObjectId(id) });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch course'
    });
  }
});

// POST /api/courses - Create new course (admin/instructor only)
router.post('/', authenticateToken, requireRole(['admin', 'teacher']), validateCourse, async (req, res) => {
  try {
    const courseData = {
      ...req.body,
      instructor_id: req.user.id,
      created_at: new Date(),
      updated_at: new Date()
    };

    const db = mongoDb();
    const result = await db.collection('courses').insertOne(courseData);

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: {
        id: result.insertedId,
        ...courseData
      }
    });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create course'
    });
  }
});

// PUT /api/courses/:id - Update course
router.put('/:id', authenticateToken, requireRole(['admin', 'teacher']), validateCourse, async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course ID'
      });
    }

    const db = mongoDb();
    const course = await db.collection('courses').findOne({ _id: new ObjectId(id) });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Check if user owns the course or is admin
    if (course.instructor_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this course'
      });
    }

    const updateData = {
      ...req.body,
      updated_at: new Date()
    };

    await db.collection('courses').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    res.json({
      success: true,
      message: 'Course updated successfully'
    });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update course'
    });
  }
});

// DELETE /api/courses/:id - Delete course
router.delete('/:id', authenticateToken, requireRole(['admin', 'teacher']), async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course ID'
      });
    }

    const db = mongoDb();
    const course = await db.collection('courses').findOne({ _id: new ObjectId(id) });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Check if user owns the course or is admin
    if (course.instructor_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this course'
      });
    }

    await db.collection('courses').deleteOne({ _id: new ObjectId(id) });

    res.json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete course'
    });
  }
});

// POST /api/courses/:id/enroll - Enroll in course
router.post('/:id/enroll', authenticateToken, validateEnrollment, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course ID'
      });
    }

    const db = mongoDb();
    const course = await db.collection('courses').findOne({ _id: new ObjectId(id) });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Check if already enrolled
    const { pgPool } = require('../config/database');
    const existingEnrollment = await pgPool.query(
      'SELECT id FROM user_progress WHERE user_id = $1 AND course_id = $2 LIMIT 1',
      [userId, id]
    );

    if (existingEnrollment.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Already enrolled in this course'
      });
    }

    // Create enrollment record
    await pgPool.query(
      'INSERT INTO user_progress (user_id, course_id, lesson_id, progress_percentage) VALUES ($1, $2, $3, $4)',
      [userId, id, 'intro', 0]
    );

    res.json({
      success: true,
      message: 'Successfully enrolled in course'
    });
  } catch (error) {
    console.error('Error enrolling in course:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to enroll in course'
    });
  }
});

module.exports = router;
