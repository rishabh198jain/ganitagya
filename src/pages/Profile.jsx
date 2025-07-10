
import { Link } from 'react-router-dom'
import { publications, courses, certifications, profileStats, researchInterests } from '../constants/profileData'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-header">
          <h1>Professional Profile</h1>
          <p>Comprehensive overview of academic and professional achievements</p>
        </div>

        <div className="profile-content">
          <div className="profile-stats">
            {profileStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="professional-summary">
            <h2>Professional Summary</h2>
            <div className="summary-content">
              <p>
                Dr. Ganitagya is a distinguished mathematician and educator with over 15 years of 
                experience in mathematical research, teaching, and curriculum development. Specializing 
                in number theory, infinite series, and mathematical pedagogy, he has contributed 
                significantly to both theoretical mathematics and mathematics education.
              </p>
              <p>
                His research focuses on the convergence properties of infinite series and their 
                applications in number theory, with particular emphasis on connecting ancient Indian 
                mathematical traditions with modern mathematical frameworks. As an educator, he has 
                developed innovative teaching methodologies that make complex mathematical concepts 
                accessible to students at all levels.
              </p>
            </div>
          </div>

          <div className="publications-section">
            <h2>Recent Publications</h2>
            <div className="publications-grid">
              {publications.map((pub, index) => (
                <div key={index} className="publication-card">
                  <h3>{pub.title}</h3>
                  <div className="publication-details">
                    <span className="journal">{pub.journal}</span>
                    <span className="year">{pub.year}</span>
                    <span className={`impact ${pub.impact.toLowerCase().replace(' ', '-')}`}>
                      {pub.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="teaching-section">
            <h2>Teaching Portfolio</h2>
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div key={index} className="course-card">
                  <h3>{course.name}</h3>
                  <div className="course-info">
                    <div className="course-detail">
                      <span className="label">Level:</span>
                      <span className="value">{course.level}</span>
                    </div>
                    <div className="course-detail">
                      <span className="label">Students:</span>
                      <span className="value">{course.students}</span>
                    </div>
                    <div className="course-detail">
                      <span className="label">Rating:</span>
                      <span className="value rating">{course.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h2>Certifications & Training</h2>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-icon">🏆</div>
                  <div className="cert-text">{cert}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="research-interests">
            <h2>Research Interests</h2>
            <div className="interests-grid">
              {researchInterests.map((interest, index) => (
                <div key={index} className="interest-item">
                  <div className="interest-icon">{interest.icon}</div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-cta">
            <h2>Collaborate with Me</h2>
            <p>Interested in research collaboration, guest lectures, or mathematical consulting?</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <a href="mailto:research@ganitagya.com" className="btn btn-secondary">Research Inquiry</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
