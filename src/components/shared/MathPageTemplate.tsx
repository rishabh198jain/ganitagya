import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './MathPageTemplate.css';

// Declare MathJax for TypeScript
declare global {
  interface Window {
    MathJax: any;
  }
}

export interface MathItem {
  id: string;
  name: string;
  formula: string;
  example: {
    problem: string;
    solution: string;
    steps: string[];
  };
}

export interface MathSection {
  id: string;
  title: string;
  description: string;
  items: MathItem[];
}

interface MathPageTemplateProps {
  title: string;
  subtitle: string;
  sections: MathSection[];
  defaultSection?: string;
}

const MathPageTemplate: React.FC<MathPageTemplateProps> = ({
  title,
  subtitle,
  sections,
  defaultSection
}) => {
  const navigate = useNavigate();
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>(
    defaultSection || sections[0]?.id || ''
  );

  // Re-render MathJax when content changes
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [expandedRow, activeSection]);

  // Initial MathJax render and scroll to top
  useEffect(() => {
    // Disable scroll restoration for this page
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      if (window.MathJax) {
        window.MathJax.typesetPromise();
      }
    }, 100);
    
    // Cleanup: restore scroll restoration
    return () => {
      clearTimeout(timer);
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  const handleRowClick = (itemId: string) => {
    // Get the clicked row element
    const clickedRowElement = document.querySelector(`[data-item-id="${itemId}"]`);
    
    // If clicking the same row, just toggle it
    if (expandedRow === itemId) {
      setExpandedRow(null);
      return;
    }
    
    // Update the expanded row (this will close any currently expanded row and open the new one)
    setExpandedRow(itemId);
    
    // After expansion, scroll to show the beginning of the clicked row
    setTimeout(() => {
      if (clickedRowElement) {
        const rowRect = clickedRowElement.getBoundingClientRect();
        const currentScrollY = window.scrollY;
        const rowTopPosition = currentScrollY + rowRect.top;
        
        // Scroll to show clicked row at top with small offset
        window.scrollTo({
          top: Math.max(0, rowTopPosition - 20),
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setExpandedRow(null);
    
    // Scroll to section navigation smoothly to keep it visible
    setTimeout(() => {
      const sectionNav = document.querySelector('.section-navigation');
      if (sectionNav) {
        sectionNav.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);
  };

  const handleBackClick = () => {
    navigate('/', { replace: true });
    // Scroll to top of home page after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <div className="math-page">
      <div className="math-container">
        {/* Header */}
        <div className="math-header">
          <button className="back-button" onClick={handleBackClick}>
            <FaArrowLeft />
            <span>Back</span>
          </button>
          <h1 className="math-title">{title}</h1>
          <p className="math-subtitle">{subtitle}</p>
        </div>

        {/* Section Navigation */}
        <div className="section-navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`section-btn ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleSectionChange(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Current Section Info */}
        {currentSection && (
          <div className="section-info">
            <h2 className="section-title">{currentSection.title}</h2>
            <p className="section-description">{currentSection.description}</p>
          </div>
        )}

        {/* Interactive Table */}
        <div className="math-table-container">
          <div className="table-header">
            <div className="header-cell type-header">Concept</div>
            <div className="header-cell formula-header">Formula</div>
            <div className="header-cell expand-header"></div>
          </div>

          {currentSection?.items.map((item) => (
            <div key={item.id} className="table-row-container">
              {/* Main Row */}
              <div 
                className={`table-row ${expandedRow === item.id ? 'expanded' : ''}`}
                onClick={() => handleRowClick(item.id)}
                data-item-id={item.id}
              >
                <div className="table-cell type-cell">
                  {item.name}
                </div>
                <div className="table-cell formula-cell">
                  <span dangerouslySetInnerHTML={{ __html: item.formula }} />
                </div>
                <div className="table-cell expand-cell">
                  {expandedRow === item.id ? <FaChevronDown /> : <FaChevronRight />}
                </div>
              </div>

              {/* Expanded Example Row */}
              {expandedRow === item.id && (
                <div className="example-row">
                  <div className="example-content">
                    <div className="example-header">
                      <h3>Example</h3>
                    </div>
                    <div className="example-problem">
                      <strong>Problem:</strong> 
                      <span dangerouslySetInnerHTML={{ __html: item.example.problem }} />
                    </div>
                    <div className="example-solution">
                      <strong>Solution:</strong>
                      <div className="solution-steps">
                        {item.example.steps.map((step, index) => (
                          <div key={index} className="solution-step">
                            <span className="step-number">{index + 1}.</span>
                            <span dangerouslySetInnerHTML={{ __html: step }} />
                          </div>
                        ))}
                      </div>
                      <div className="final-answer">
                        <strong>Answer:</strong> 
                        <span dangerouslySetInnerHTML={{ __html: item.example.solution }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="math-footer">
          <p>💡 <strong>Tip:</strong> Click on any row to see a detailed example with step-by-step solution!</p>
          <p>📚 <strong>Note:</strong> Navigate between sections to explore different areas of mathematics.</p>
        </div>
      </div>
    </div>
  );
};

export default MathPageTemplate;
