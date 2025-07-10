import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Dashboard.css'

const EducatorDashboard = () => {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  const stats = {
    totalStudents: 156,
    activeCourses: 4,
    totalLessons: 48,
    averageRating: 4.9,
    completionRate: 87,
    monthlyEarnings: 3200
  }

  const myCourses = [
    {
      id: 1,
      title: 'Advanced Algebra',
      students: 45,
      completion: 78,
      rating: 4.9,
      status: 'Published',
      lastUpdated: '2024-01-10'
    },
    {
      id: 2,
      title: 'Calculus Fundamentals',
      students: 38,
      completion: 65,
      rating: 4.8,
      status: 'Published',
      lastUpdated: '2024-01-08'
    },
    {
      id: 3,
      title: 'Linear Algebra',
      students: 42,
      completion: 82,
      rating: 4.9,
      status: 'Published',
      lastUpdated: '2024-01-05'
    },
    {
      id: 4,
      title: 'Statistics for Beginners',
      students: 31,
      completion: 45,
      rating: 4.7,
      status: 'Draft',
      lastUpdated: '2024-01-12'
    }
  ]

  const recentStudents = [
    { id: 1, name: 'Alice Johnson', course: 'Advanced Algebra', progress: 85, lastActive: '2 hours ago' },
    { id: 2, name: 'Bob Smith', course: 'Calculus Fundamentals', progress: 67, lastActive: '5 hours ago' },
    { id: 3, name: 'Carol Davis', course: 'Linear Algebra', progress: 92, lastActive: '1 day ago' },
    { id: 4, name: 'David Wilson', course: 'Advanced Algebra', progress: 73, lastActive: '2 days ago' }
  ]

  const recentActivity = [
    { id: 1, action: 'New student enrolled', details: 'Alice Johnson joined Advanced Algebra', time: '2 hours ago' },
    { id: 2, action: 'Course completed', details: 'Bob Smith completed Calculus Fundamentals', time: '4 hours ago' },
    { id: 3, action: 'New review received', details: '5-star review for Linear Algebra', time: '6 hours ago' },
    { id: 4, action: 'Lesson updated', details: 'Updated lesson 3 in Advanced Algebra', time: '1 day ago' }
  ]

  const renderOverview = () => (
    <div className="educator-overview">
      <div className="educator-stats-grid">
        <div className="educator-stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.totalStudents}</h3>
            <p>Total Students</p>
            <span className="stat-change positive">+12 this month</span>
          </div>
        </div>
        <div className="educator-stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>{stats.activeCourses}</h3>
            <p>Active Courses</p>
            <span className="stat-change neutral">1 draft</span>
          </div>
        </div>
        <div className="educator-stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h3>{stats.totalLessons}</h3>
            <p>Total Lessons</p>
            <span className="stat-change positive">+3 this week</span>
          </div>
        </div>
        <div className="teacher-stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>{stats.averageRating}</h3>
            <p>Average Rating</p>
            <span className="stat-change positive">+0.1 this month</span>
          </div>
        </div>
        <div className="teacher-stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{stats.completionRate}%</h3>
            <p>Completion Rate</p>
            <span className="stat-change positive">+5% this month</span>
          </div>
        </div>
        <div className="teacher-stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>${stats.monthlyEarnings}</h3>
            <p>Monthly Earnings</p>
            <span className="stat-change positive">+15% this month</span>
          </div>
        </div>
      </div>

      <div className="teacher-sections">
        <div className="teacher-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-content">
                  <p><strong>{activity.action}</strong></p>
                  <p className="activity-details">{activity.details}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="teacher-section">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <button className="action-btn">
              <span className="action-icon">➕</span>
              Create New Lesson
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              View Analytics
            </button>
            <button className="action-btn">
              <span className="action-icon">👥</span>
              Manage Students
            </button>
            <button className="action-btn">
              <span className="action-icon">💬</span>
              Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCourses = () => (
    <div className="teacher-courses-section">
      <div className="section-header">
        <h3>My Courses</h3>
        <button className="btn btn-primary">Create New Course</button>
      </div>
      <div className="teacher-courses-grid">
        {myCourses.map(course => (
          <div key={course.id} className="teacher-course-card">
            <div className="course-header">
              <h4>{course.title}</h4>
              <span className={`status-badge ${course.status.toLowerCase()}`}>
                {course.status}
              </span>
            </div>
            <div className="course-metrics">
              <div className="metric">
                <span className="metric-label">Students:</span>
                <span className="metric-value">{course.students}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Completion:</span>
                <span className="metric-value">{course.completion}%</span>
              </div>
              <div className="metric">
                <span className="metric-label">Rating:</span>
                <span className="metric-value">{course.rating}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Last Updated:</span>
                <span className="metric-value">{course.lastUpdated}</span>
              </div>
            </div>
            <div className="course-actions">
              <button className="btn-small">Edit</button>
              <button className="btn-small">Analytics</button>
              <button className="btn-small">Students</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderStudents = () => (
    <div className="teacher-students-section">
      <div className="section-header">
        <h3>Recent Students</h3>
        <input type="search" placeholder="Search students..." className="search-input" />
      </div>
      <div className="students-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Progress</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentStudents.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                  <span>{student.progress}%</span>
                </td>
                <td>{student.lastActive}</td>
                <td>
                  <div className="table-actions">
                    <button className="btn-small">Message</button>
                    <button className="btn-small">View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="dashboard educator-dashboard">
      <div className="dashboard-header">
        <div className="user-welcome">
          <div className="user-avatar">{user.avatar}</div>
          <div>
            <h1>Educator Dashboard</h1>
            <p>Welcome back, {user.name}! Manage your courses and students.</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="educator-badge">👩‍🏫 Educator</div>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="dashboard-nav">
        <button 
          className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`nav-tab ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          My Courses
        </button>
        <button 
          className={`nav-tab ${activeTab === 'students' ? 'active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          Students
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'students' && renderStudents()}
      </div>
    </div>
  )
}

export default EducatorDashboard
