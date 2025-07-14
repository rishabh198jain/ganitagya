import React from 'react';
import './AffiliateLinks.css';

interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  affiliateLink: string;
  category: string;
  rating: number;
  features: string[];
  badge?: string;
}

const AffiliateLinks: React.FC = () => {
  const affiliateProducts: AffiliateProduct[] = [
    {
      id: 'ti-84-plus',
      name: 'TI-84 Plus CE Graphing Calculator',
      description: 'The most popular graphing calculator for high school and college students.',
      price: '$119.99',
      originalPrice: '$149.99',
      image: '/images/ti-84-calculator.jpg',
      affiliateLink: 'https://amazon.com/dp/B00TFYYWQA?tag=ganitagya-20',
      category: 'Calculator',
      rating: 4.5,
      features: ['Color Display', 'Rechargeable Battery', 'Python Programming', 'Pre-loaded Apps'],
      badge: 'Best Seller'
    },
    {
      id: 'wolfram-alpha',
      name: 'Wolfram Alpha Pro',
      description: 'Advanced computational intelligence for complex mathematical problems.',
      price: '$7.25/month',
      image: '/images/wolfram-alpha.jpg',
      affiliateLink: 'https://www.wolframalpha.com/pro/?src=ganitagya',
      category: 'Software',
      rating: 4.8,
      features: ['Step-by-step Solutions', 'Image Upload', 'Extended Computation Time', 'Download Results']
    },
    {
      id: 'khan-academy',
      name: 'Khan Academy Courses',
      description: 'Comprehensive math courses from basic arithmetic to advanced calculus.',
      price: 'Free',
      image: '/images/khan-academy.jpg',
      affiliateLink: 'https://www.khanacademy.org/?utm_source=ganitagya',
      category: 'Course',
      rating: 4.7,
      features: ['Video Lessons', 'Practice Exercises', 'Progress Tracking', 'Personalized Learning']
    },
    {
      id: 'geometry-set',
      name: 'Professional Geometry Set',
      description: 'Complete geometry tools for students and professionals.',
      price: '$24.99',
      originalPrice: '$34.99',
      image: '/images/geometry-set.jpg',
      affiliateLink: 'https://amazon.com/dp/B08XYZ123?tag=ganitagya-20',
      category: 'Tools',
      rating: 4.3,
      features: ['Compass', 'Protractor', 'Rulers', 'Storage Case'],
      badge: 'Student Choice'
    },
    {
      id: 'mathematica',
      name: 'Mathematica Student Edition',
      description: 'Professional mathematical software for advanced computations.',
      price: '$179.99',
      originalPrice: '$295.00',
      image: '/images/mathematica.jpg',
      affiliateLink: 'https://www.wolfram.com/mathematica/pricing/students/?src=ganitagya',
      category: 'Software',
      rating: 4.6,
      features: ['Symbolic Computation', '3D Graphics', 'Machine Learning', 'Data Analysis'],
      badge: 'Student Discount'
    },
    {
      id: 'coursera-math',
      name: 'Coursera Math Specializations',
      description: 'University-level mathematics courses from top institutions.',
      price: '$39-79/month',
      image: '/images/coursera-math.jpg',
      affiliateLink: 'https://www.coursera.org/browse/math-and-logic?utm_source=ganitagya',
      category: 'Course',
      rating: 4.5,
      features: ['University Certificates', 'Peer Reviews', 'Flexible Schedule', 'Financial Aid Available']
    }
  ];

  const categories = ['All', ...Array.from(new Set(affiliateProducts.map(product => product.category)))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? affiliateProducts 
    : affiliateProducts.filter(product => product.category === selectedCategory);

  const handleAffiliateClick = (product: AffiliateProduct) => {
    // Track affiliate click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: product.name,
        value: parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0
      });
    }
    
    // Open affiliate link
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <div className="affiliate-links">
      <div className="container">
        <div className="affiliate-header">
          <h2>📚 Recommended Math Resources</h2>
          <p>Carefully selected tools and courses to enhance your mathematical journey</p>
          <div className="disclosure">
            <small>
              ℹ️ We may earn a commission from purchases made through these links at no extra cost to you.
            </small>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-rating">
                  {renderStars(product.rating)}
                  <span className="rating-value">({product.rating})</span>
                </div>

                <div className="product-features">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>

                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>

                <button
                  className="affiliate-button"
                  onClick={() => handleAffiliateClick(product)}
                >
                  View Details & Buy
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="affiliate-footer">
          <div className="why-recommend">
            <h3>Why We Recommend These Products</h3>
            <div className="reasons-grid">
              <div className="reason">
                <span className="reason-icon">🎯</span>
                <h4>Carefully Vetted</h4>
                <p>Each product is tested and reviewed by our math education experts.</p>
              </div>
              <div className="reason">
                <span className="reason-icon">💰</span>
                <h4>Best Value</h4>
                <p>We prioritize products that offer the best value for students and educators.</p>
              </div>
              <div className="reason">
                <span className="reason-icon">📈</span>
                <h4>Proven Results</h4>
                <p>These tools have helped thousands of students improve their math skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateLinks;
