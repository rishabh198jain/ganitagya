
import { useEffect } from 'react';
import { heroButtons, mathFormulas, mathSymbols } from '../../constants/mathData';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Ganitagya</span>
          </h1>
          <h2 className="hero-subtitle">
            The World of Mathematics
          </h2>
          <p className="hero-description">
            Explore the beauty and power of mathematics. From basic arithmetic to advanced calculus, 
            discover the patterns and principles that govern our universe.
          </p>
          <div className="hero-buttons">
            {heroButtons.map((button, index) => (
              <button key={index} className={`btn btn-${button.type}`}>
                {button.text}
              </button>
            ))}
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="math-formula">
            {mathFormulas.map((formula, index) => (
              <div key={index} className="formula-item" title={formula.name}>
                ${formula.formula}$
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="math-symbols">
          {mathSymbols.map((item, index) => (
            <span key={index} className="math-symbol" title={item.name}>
              {item.symbol}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
