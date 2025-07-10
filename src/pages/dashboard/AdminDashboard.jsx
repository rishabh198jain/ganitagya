import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Dashboard.css'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  const stats = {
    totalStudents: 1247,
    activeCourses: 12,
    totalRevenue: 45680,
    newSignups: 23,
    courseCompletions: 156,
    averageRating: 4.8
  }

  const recentStudents = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-01-14', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2024-01-13', status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', joinDate: '2024-01-12', status: 'Active' }
  ]

  const courses = [
    {
      id: 1,
      title: 'Algebra Fundamentals',
      students: 324,
      completion: 78,
      rating: 4.9,
      revenue: 12960,
      status: 'Published'
    },
    {
      id: 2,
      title: 'Geometry Basics',
      students: 256,
      completion: 65,
      rating: 4.7,
      revenue: 10240,
      status: 'Published'
    },
    {
      id: 3,
      title: 'Calculus Introduction',
      students: 189,
      completion: 45,
      rating: 4.8,
      revenue: 7560,
      status: 'Published'
    },
    {
      id: 4,
      title: 'Statistics Mastery',
      students: 0,
      completion: 0,
      rating: 0,
      revenue: 0,
      status: 'Draft'
    }
  ]

  const recentActivity = [
    { id: 1, action: 'New student enrolled', details: 'John Doe joined Algebra Fundamentals', time: '2 hours ago' },
    { id: 2, action: 'Course completed', details: 'Jane Smith completed Geometry Basics', time: '4 hours ago' },
    { id: 3, action: 'Payment received', details: '$40 from Mike Johnson', time: '6 hours ago' },
    { id: 4, action: 'New review', details: '5-star review for Calculus Introduction', time: '1 day ago' }
  ]

  const renderOverview = () => (
    <div className="admin-overview">
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.totalStudents.toLocaleString()}</h3>
            <p>Total Students</p>
            <span className="stat-change positive">+{stats.newSignups} this week</span>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>{stats.activeCourses}</h3>
            <p>Active Courses</p>
            <span className="stat-change neutral">4 drafts</span>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>${stats.totalRevenue.toLocaleString()}</h3>
            <p>Total Revenue</p>
            <span className="stat-change positive">+12% this month</span>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>{stats.averageRating}</h3>
            <p>Average Rating</p>
            <span className="stat-change positive">+0.2 this month</span>
          </div>
        </div>
      </div>

      <div className="admin-sections">
        <div className="admin-section">
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

        <div className="admin-section">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <button className="action-btn">
              <span className="action-icon">➕</span>
              Create New Course
            </button>
            <button className="action-btn">
              <span className="action-icon">👥</span>
              Manage Students
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              View Analytics
            </button>
            <button className="action-btn">
              <span className="action-icon">💳</span>
              Payment Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderStudents = () => (
    <div className="students-section">
      <div className="section-header">
        <h3>Student Management</h3>
        <div className="header-actions">
          <input type="search" placeholder="Search students..." className="search-input" />
          <button className="btn btn-primary">Add Student</button>
        </div>
      </div>
      <div className="students-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentStudents.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.joinDate}</td>
                <td>
                  <span className={`status-badge ${student.status.toLowerCase()}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button className="btn-small">View</button>
                    <button className="btn-small">Edit</button>
                    <button className="btn-small danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderCourses = () => (
    <div className="admin-courses-section">
      <div className="section-header">
        <h3>Course Management</h3>
        <button className="btn btn-primary">Create New Course</button>
      </div>
      <div className="admin-courses-grid">
        {courses.map(course => (
          <div key={course.id} className="admin-course-card">
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
                <span className="metric-value">{course.rating || 'N/A'}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Revenue:</span>
                <span className="metric-value">${course.revenue.toLocaleString()}</span>
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

  return (
    <div className="dashboard admin-dashboard">
      <div className="dashboard-header">
        <div className="user-welcome">
          <div className="user-avatar">{user.avatar}</div>
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your Ganitagya platform</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="admin-badge">🛡️ Administrator</div>
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
          className={`nav-tab ${activeTab === 'students' ? 'active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          Students
        </button>
        <button 
          className={`nav-tab ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'students' && renderStudents()}
        {activeTab === 'courses' && renderCourses()}
      </div>
    </div>
  )
}

export default AdminDashboard
