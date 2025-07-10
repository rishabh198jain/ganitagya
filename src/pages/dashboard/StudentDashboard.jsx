import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      id: 1,
      title: 'Algebra Fundamentals',
      progress: 75,
      status: 'In Progress',
      lessons: 12,
      completedLessons: 9,
      nextLesson: 'Quadratic Equations',
      difficulty: 'Beginner',
      duration: '4 weeks',
      instructor: 'Dr. Ganitagya'
    },
    {
      id: 2,
      title: 'Geometry Basics',
      progress: 45,
      status: 'In Progress',
      lessons: 15,
      completedLessons: 7,
      nextLesson: 'Circle Properties',
      difficulty: 'Beginner',
      duration: '5 weeks',
      instructor: 'Dr. Ganitagya'
    },
    {
      id: 3,
      title: 'Calculus Introduction',
      progress: 0,
      status: 'Not Started',
      lessons: 20,
      completedLessons: 0,
      nextLesson: 'Limits and Continuity',
      difficulty: 'Intermediate',
      duration: '8 weeks',
      instructor: 'Dr. Ganitagya',
      locked: user.subscription === 'free'
    }
  ];

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Completed your first lesson', icon: '🎯', earned: true },
    { id: 2, title: 'Problem Solver', description: 'Solved 50 practice problems', icon: '🧩', earned: true },
    { id: 3, title: 'Consistent Learner', description: '7-day learning streak', icon: '🔥', earned: false },
    { id: 4, title: 'Math Master', description: 'Completed 3 courses', icon: '👑', earned: false }
  ];

  const recentActivity = [
    { id: 1, action: 'Completed lesson', subject: 'Linear Equations', time: '2 hours ago' },
    { id: 2, action: 'Solved practice problem', subject: 'Algebraic Expressions', time: '1 day ago' },
    { id: 3, action: 'Started new topic', subject: 'Geometry Basics', time: '3 days ago' },
    { id: 4, action: 'Earned achievement', subject: 'Problem Solver', time: '1 week ago' }
  ];

  const stats = {
    totalCourses: courses.length,
    completedCourses: courses.filter(c => c.progress === 100).length,
    totalLessons: courses.reduce((sum, course) => sum + course.lessons, 0),
    completedLessons: courses.reduce((sum, course) => sum + course.completedLessons, 0),
    studyStreak: 5,
    totalStudyTime: '24 hours'
  };

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>{stats.completedCourses}/{stats.totalCourses}</h3>
            <p>Courses Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{stats.completedLessons}/{stats.totalLessons}</h3>
            <p>Lessons Completed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <h3>{stats.studyStreak}</h3>
            <p>Day Study Streak</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <h3>{stats.totalStudyTime}</h3>
            <p>Total Study Time</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section">
          <h3>Continue Learning</h3>
          <div className="course-progress-list">
            {courses.filter(course => course.status === 'In Progress').map(course => (
              <div key={course.id} className="course-progress-item">
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <p>Next: {course.nextLesson}</p>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{course.progress}% Complete</span>
                </div>
                <Link to={`/course/${course.id}`} className="continue-btn">
                  Continue
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-content">
                  <p><strong>{activity.action}</strong> - {activity.subject}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderCourses = () => (
    <div className="courses-section">
      <div className="section-header">
        <h3>My Courses</h3>
        <Link to="/courses" className="btn btn-primary">Browse All Courses</Link>
      </div>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className={`course-card ${course.locked ? 'locked' : ''}`}>
            {course.locked && <div className="lock-overlay">🔒</div>}
            <div className="course-header">
              <h4>{course.title}</h4>
              <span className={`status ${course.status.toLowerCase().replace(' ', '-')}`}>
                {course.status}
              </span>
            </div>
            <div className="course-details">
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Difficulty:</strong> {course.difficulty}</p>
              <p><strong>Lessons:</strong> {course.completedLessons}/{course.lessons}</p>
            </div>
            <div className="course-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <span>{course.progress}% Complete</span>
            </div>
            <div className="course-actions">
              {course.locked ? (
                <Link to="/pricing" className="btn btn-secondary">Upgrade to Access</Link>
              ) : (
                <Link to={`/course/${course.id}`} className="btn btn-primary">
                  {course.progress === 0 ? 'Start Course' : 'Continue'}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderAchievements = () => (
    <div className="achievements-section">
      <h3>Achievements</h3>
      <div className="achievements-grid">
        {achievements.map(achievement => (
          <div key={achievement.id} className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}>
            <div className="achievement-icon">{achievement.icon}</div>
            <h4>{achievement.title}</h4>
            <p>{achievement.description}</p>
            {achievement.earned && <div className="earned-badge">✅</div>}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="user-welcome">
          <div className="user-avatar">{user.avatar}</div>
          <div>
            <h1>Welcome back, {user.name}!</h1>
            <p>Ready to continue your mathematical journey?</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="subscription-badge">
            {user.subscription === 'free' ? '🆓 Free Plan' : '⭐ Premium'}
          </div>
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
          className={`nav-tab ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'achievements' && renderAchievements()}
      </div>
    </div>
  )
}

export default StudentDashboard
