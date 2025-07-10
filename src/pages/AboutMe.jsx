
import { skills, achievements, educationTimeline, philosophyItems } from '../constants/profileData'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <div className="about-header">
          <div className="profile-section">
            <div className="profile-image">
              <div className="avatar">👨‍🏫</div>
            </div>
            <div className="profile-info">
              <h1>Dr. Ganitagya</h1>
              <h2>गणितज्ञ - Mathematician & Educator</h2>
              <p className="tagline">
                "Mathematics is not about numbers, equations, computations, or algorithms: 
                it is about understanding." - William Paul Thurston
              </p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="bio-section">
            <h3>About Me</h3>
            <p>
              Welcome to my mathematical journey! I am Dr. Ganitagya, a passionate mathematician 
              and educator dedicated to making mathematics accessible and enjoyable for everyone. 
              With over 15 years of experience in mathematical research and teaching, I have had 
              the privilege of exploring the beautiful world of numbers, patterns, and logical reasoning.
            </p>
            <p>
              My journey began with a deep fascination for the ancient Indian mathematical traditions, 
              particularly the works of great mathematicians like Aryabhata, Brahmagupta, and 
              Srinivasa Ramanujan. This inspiration led me to pursue advanced studies in pure and 
              applied mathematics, culminating in a Ph.D. in Mathematical Sciences.
            </p>
            <p>
              Through this platform, I aim to bridge the gap between complex mathematical concepts 
              and practical understanding, making mathematics not just a subject to study, but a 
              language to appreciate the beauty of our universe.
            </p>
          </div>

          <div className="education-section">
            <h3>Education & Qualifications</h3>
            <div className="education-timeline">
              {educationTimeline.map((education, index) => (
                <div key={index} className="education-item">
                  <div className="year">{education.year}</div>
                  <div className="details">
                    <h4>{education.degree}</h4>
                    <p>{education.institution}</p>
                    <p>{education.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>Areas of Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h3>Achievements & Recognition</h3>
            <div className="achievements-timeline">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-year">{achievement.year}</div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="philosophy-section">
            <h3>Teaching Philosophy</h3>
            <div className="philosophy-content">
              {philosophyItems.map((item, index) => (
                <div key={index} className="philosophy-item">
                  <div className="philosophy-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
