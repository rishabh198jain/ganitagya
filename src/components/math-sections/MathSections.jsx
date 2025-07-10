
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mathTopics, famousMathematicians } from '../../constants/mathData';
import './MathSections.css';

const MathSections = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  const handleLearnMore = (topicId) => {
    if (topicId === 'algebra' || topicId === 'geometry' || topicId === 'calculus' || topicId === 'statistics') {
      navigate(`/${topicId}`);
      // Ensure page scrolls to top after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    } else {
      // For other topics, you can add more routes later
      console.log(`Learn more clicked for: ${topicId}`);
      // Placeholder for future topic pages
    }
  };

  return (
    <section className="math-sections">
      <div className="container">
        <h2 className="section-title">Mathematical Domains</h2>
        <p className="section-subtitle">
          Dive deep into the fundamental areas of mathematics
        </p>
        
        <div className="topics-grid">
          {mathTopics.map((topic) => (
            <div key={topic.id} id={topic.id} className="topic-card">
              <div className="topic-header">
                <div className="topic-icon">{topic.icon}</div>
                <h3 className="topic-title">{topic.title}</h3>
              </div>
              
              <p className="topic-description">{topic.description}</p>
              
              <div className="topic-formula">
                <code>${topic.formula}$</code>
              </div>
              
              <ul className="topic-list">
                {topic.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <button
                className="topic-btn"
                onClick={() => handleLearnMore(topic.id)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="famous-mathematicians">
          <h3>Famous Mathematicians</h3>
          <div className="mathematicians-grid">
            {famousMathematicians.map((mathematician, index) => (
              <div key={index} className="mathematician">
                <h4>{mathematician.name}</h4>
                <p className="mathematician-period">{mathematician.period}</p>
                <p className="mathematician-contribution">{mathematician.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathSections;
