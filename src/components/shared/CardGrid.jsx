import React from 'react';

const CardGrid = ({ 
  items, 
  className = '',
  cardClassName = '',
  columns = 'auto',
  gap = '2rem',
  renderCard,
  onCardClick
}) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: columns === 'auto' ? 'repeat(auto-fit, minmax(300px, 1fr))' : columns,
    gap: gap,
  };

  const defaultRenderCard = (item, index) => (
    <div 
      key={item.id || index}
      className={`card ${cardClassName} ${item.className || ''}`}
      onClick={() => onCardClick && onCardClick(item, index)}
    >
      {item.image && (
        <div className="card-image">
          <img src={item.image} alt={item.title} />
        </div>
      )}
      
      {item.icon && (
        <div className="card-icon">
          {typeof item.icon === 'string' ? (
            <span className="icon-text">{item.icon}</span>
          ) : (
            <item.icon className="icon-component" />
          )}
        </div>
      )}
      
      <div className="card-content">
        {item.title && <h3 className="card-title">{item.title}</h3>}
        {item.subtitle && <h4 className="card-subtitle">{item.subtitle}</h4>}
        {item.description && <p className="card-description">{item.description}</p>}
        
        {item.features && (
          <ul className="card-features">
            {item.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
        
        {item.tags && (
          <div className="card-tags">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      
      {(item.button || item.link) && (
        <div className="card-actions">
          {item.button && (
            <button 
              className={`card-button ${item.button.className || ''}`}
              onClick={(e) => {
                e.stopPropagation();
                item.button.onClick && item.button.onClick(item);
              }}
            >
              {item.button.text}
            </button>
          )}
          
          {item.link && (
            <a 
              href={item.link.url}
              className={`card-link ${item.link.className || ''}`}
              target={item.link.external ? '_blank' : '_self'}
              rel={item.link.external ? 'noopener noreferrer' : ''}
              onClick={(e) => e.stopPropagation()}
            >
              {item.link.text}
            </a>
          )}
        </div>
      )}
      
      {item.footer && (
        <div className="card-footer">
          {item.footer}
        </div>
      )}
    </div>
  );

  return (
    <div className={`card-grid ${className}`} style={gridStyle}>
      {items.map((item, index) => {
        if (renderCard) {
          return renderCard(item, index);
        }
        return defaultRenderCard(item, index);
      })}
    </div>
  );
};

// Example data structures for different card types
export const mathTopicCards = [
  {
    id: 'algebra',
    title: 'Algebra',
    description: 'Master equations, functions, and algebraic structures',
    icon: '📐',
    features: ['Linear Equations', 'Quadratic Functions', 'Polynomials'],
    button: {
      text: 'Learn More',
      className: 'primary-button',
      onClick: (item) => console.log('Navigate to', item.id)
    },
    tags: ['Beginner', 'Intermediate']
  },
  {
    id: 'geometry',
    title: 'Geometry',
    description: 'Explore shapes, angles, and spatial relationships',
    icon: '📏',
    features: ['Triangles', 'Circles', 'Solid Geometry'],
    button: {
      text: 'Learn More',
      className: 'primary-button',
      onClick: (item) => console.log('Navigate to', item.id)
    },
    tags: ['Visual', 'Practical']
  }
];

export const featureCards = [
  {
    id: 'interactive',
    title: 'Interactive Learning',
    description: 'Engage with dynamic content and real-time feedback',
    icon: '🎯',
    className: 'feature-card'
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Coverage',
    description: 'From basic arithmetic to advanced calculus',
    icon: '📚',
    className: 'feature-card'
  }
];

export const contactCards = [
  {
    id: 'email',
    title: 'Email Us',
    description: 'support@ganitagya.com',
    icon: '📧',
    link: {
      text: 'Send Email',
      url: 'mailto:support@ganitagya.com',
      external: true
    }
  },
  {
    id: 'phone',
    title: 'Call Us',
    description: '+1 (555) 123-4567',
    icon: '📞',
    footer: 'Mon-Fri from 8am to 5pm'
  }
];

export default CardGrid;
