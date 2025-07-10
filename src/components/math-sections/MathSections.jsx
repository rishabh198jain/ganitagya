
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mathTopics, famousMathematicians } from '../../constants/mathData';
import './MathSections.css';

const MathSections = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  // Constants for carousel logic
  const CARDS_PER_VIEW = isMobile ? 1 : 3; // Mobile: 1 card, Desktop: 3 cards
  const TOTAL_CARDS = mathTopics.length; // 4 cards total
  const MAX_SLIDE = Math.max(0, TOTAL_CARDS - CARDS_PER_VIEW); // Desktop: 1 (2 positions), Mobile: 3 (4 positions)

  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
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

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, MAX_SLIDE));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, MAX_SLIDE));
  };

  // Helper function to create dot groups based on carousel positions
  const createDotGroups = () => {
    const groups = [];
    const totalPositions = MAX_SLIDE + 1; // Number of possible slide positions
    const dotsPerGroup = 3;

    // Desktop: 2 positions (0: shows cards 1-3, 1: shows cards 2-4) = 2 dots
    // Mobile: 4 positions (0: card 1, 1: card 2, 2: card 3, 3: card 4) = 4 dots
    for (let i = 0; i < totalPositions; i += dotsPerGroup) {
      const groupDots = [];
      for (let j = i; j < Math.min(i + dotsPerGroup, totalPositions); j++) {
        groupDots.push(j);
      }
      groups.push(groupDots);
    }
    return groups;
  };

  const dotGroups = createDotGroups();
  const activeGroupIndex = Math.floor(currentSlide / 3);

  return (
    <section className="math-sections">
      <div className="container">
        <h2 className="section-title">Mathematical Domains</h2>
        <p className="section-subtitle">
          Dive deep into the fundamental areas of mathematics
        </p>
        
        <div className={`topics-carousel-container ${!isMobile ? 'desktop-carousel' : ''}`}>
          {/* Carousel Arrows - Positioned on sides of cards */}
          {!isMobile && (
            <div className="carousel-arrows">
              <button
                className="carousel-btn prev"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                ‹
              </button>

              <button
                className="carousel-btn next"
                onClick={nextSlide}
                disabled={currentSlide >= MAX_SLIDE}
              >
                ›
              </button>
            </div>
          )}

          <div className="carousel-viewport">
            <div className={`topics-grid carousel-mode`}
                 style={{
                   transform: `translateX(-${currentSlide * (isMobile ? 100 : 33.333)}%)`,
                 }}>
              {mathTopics.map((topic, index) => (
                <React.Fragment key={topic.id}>
                  <div id={topic.id} className="topic-card">
                    <div className="topic-header">
                      <div className="topic-icon">{topic.icon}</div>
                      <h3 className="topic-title">{topic.title}</h3>
                    </div>

                    <p className="topic-description">{topic.description}</p>

                    <div className="topic-formula">
                      <code>${topic.formula}$</code>
                    </div>

                    <ul className="topic-list">
                      {topic.features.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>

                    <button
                      className="topic-btn"
                      onClick={() => handleLearnMore(topic.id)}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* Add divider after each card except the last one */}
                  {index < mathTopics.length - 1 && (
                    <div className="card-divider"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="carousel-nav">
            {/* Mobile arrows */}
            {isMobile && (
              <div className="carousel-arrows">
                <button
                  className="carousel-btn prev"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  ‹
                </button>

                <button
                  className="carousel-btn next"
                  onClick={nextSlide}
                  disabled={currentSlide >= MAX_SLIDE}
                >
                  ›
                </button>
              </div>
            )}

            <div className="carousel-indicators">
              {dotGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="carousel-dot-group">
                  {group.map((dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`carousel-dot ${
                        dotIndex === currentSlide ? 'active' :
                        groupIndex === activeGroupIndex ? 'in-active-group' : ''
                      }`}
                      onClick={() => goToSlide(dotIndex)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
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
