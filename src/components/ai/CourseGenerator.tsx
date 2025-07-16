import React, { useState } from 'react';
import { aiService, AIGeneratedCourse } from '@/services/AIService';
import './CourseGenerator.css';

interface CourseGeneratorProps {
  onCourseGenerated?: (course: AIGeneratedCourse) => void;
}

const CourseGenerator: React.FC<CourseGeneratorProps> = ({ onCourseGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCourse, setGeneratedCourse] = useState<AIGeneratedCourse | null>(null);
  const [formData, setFormData] = useState({
    topic: '',
    difficulty: 'intermediate',
    targetAudience: 'high school students',
    duration: '4 weeks',
    includeExercises: true,
    includeVideos: true,
    priceRange: 'premium'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const generateCourse = async () => {
    if (!formData.topic.trim()) {
      alert('Please enter a topic for the course');
      return;
    }

    setIsGenerating(true);
    try {
      const course = await aiService.generateCourse(
        formData.topic,
        formData.difficulty,
        formData.targetAudience
      );
      
      setGeneratedCourse(course);
      onCourseGenerated?.(course);
    } catch (error) {
      console.error('Course generation failed:', error);
      alert('Failed to generate course. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const exportCourse = () => {
    if (!generatedCourse) return;
    
    const dataStr = JSON.stringify(generatedCourse, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${generatedCourse.title.replace(/\s+/g, '_')}_course.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="course-generator">
      <div className="generator-header">
        <h2>🤖 AI Course Generator</h2>
        <p>Create comprehensive math courses with AI assistance</p>
      </div>

      <div className="generator-form">
        <div className="form-group">
          <label htmlFor="topic">Course Topic *</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            placeholder="e.g., Linear Algebra, Calculus, Statistics"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty Level</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="targetAudience">Target Audience</label>
            <select
              id="targetAudience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleInputChange}
            >
              <option value="middle school students">Middle School</option>
              <option value="high school students">High School</option>
              <option value="college students">College</option>
              <option value="adult learners">Adult Learners</option>
              <option value="professionals">Professionals</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="duration">Course Duration</label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            >
              <option value="2 weeks">2 Weeks</option>
              <option value="4 weeks">4 Weeks</option>
              <option value="8 weeks">8 Weeks</option>
              <option value="12 weeks">12 Weeks</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priceRange">Price Range</label>
            <select
              id="priceRange"
              name="priceRange"
              value={formData.priceRange}
              onChange={handleInputChange}
            >
              <option value="free">Free</option>
              <option value="basic">Basic ($29-49)</option>
              <option value="premium">Premium ($99-199)</option>
              <option value="enterprise">Enterprise ($299+)</option>
            </select>
          </div>
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="includeExercises"
              checked={formData.includeExercises}
              onChange={handleInputChange}
            />
            Include Practice Exercises
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="includeVideos"
              checked={formData.includeVideos}
              onChange={handleInputChange}
            />
            Generate Video Scripts
          </label>
        </div>

        <button
          className="generate-btn"
          onClick={generateCourse}
          disabled={isGenerating || !formData.topic.trim()}
        >
          {isGenerating ? (
            <>
              <span className="spinner"></span>
              Generating Course...
            </>
          ) : (
            <>
              🚀 Generate Course
            </>
          )}
        </button>
      </div>

      {generatedCourse && (
        <div className="generated-course">
          <div className="course-header">
            <h3>{generatedCourse.title}</h3>
            <div className="course-meta">
              <span className="difficulty">{generatedCourse.difficulty}</span>
              <span className="duration">{generatedCourse.duration}</span>
              <span className="price">${generatedCourse.price}</span>
            </div>
          </div>

          <p className="course-description">{generatedCourse.description}</p>

          <div className="course-details">
            <div className="detail-section">
              <h4>📚 Topics Covered</h4>
              <div className="topics-list">
                {generatedCourse.topics.map((topic, index) => (
                  <span key={index} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h4>🎯 Learning Outcomes</h4>
              <ul className="outcomes-list">
                {generatedCourse.learningOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4>📋 Prerequisites</h4>
              <ul className="prerequisites-list">
                {generatedCourse.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4>📖 Course Structure</h4>
              <div className="lessons-preview">
                {generatedCourse.lessons.slice(0, 3).map((lesson, index) => (
                  <div key={lesson.id} className="lesson-preview">
                    <h5>Lesson {index + 1}: {lesson.title}</h5>
                    <p>Estimated time: {lesson.estimatedTime} minutes</p>
                  </div>
                ))}
                {generatedCourse.lessons.length > 3 && (
                  <p className="more-lessons">
                    +{generatedCourse.lessons.length - 3} more lessons
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="course-actions">
            <button className="export-btn" onClick={exportCourse}>
              📥 Export Course
            </button>
            <button className="publish-btn">
              🚀 Publish Course
            </button>
            <button className="edit-btn">
              ✏️ Edit Course
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseGenerator;
