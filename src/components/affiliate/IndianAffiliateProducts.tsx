import React, { useState } from 'react';
import './IndianAffiliateProducts.css';

interface IndianProduct {
  id: string;
  name: string;
  nameHindi?: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  affiliateLink: string;
  category: string;
  rating: number;
  features: string[];
  badge?: string;
  targetAudience: string[];
}

const IndianAffiliateProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const indianProducts: IndianProduct[] = [
    {
      id: 'casio-fx-991ex',
      name: 'Casio FX-991EX Scientific Calculator',
      nameHindi: 'कैसियो वैज्ञानिक कैलकुलेटर',
      description: 'Most popular scientific calculator for JEE, NEET, and board exams in India.',
      price: '₹1,295',
      originalPrice: '₹1,595',
      image: '/images/casio-fx991ex.jpg',
      affiliateLink: 'https://amazon.in/dp/B01M0X3LNF?tag=ganitagya-21',
      category: 'Calculator',
      rating: 4.6,
      features: ['552 Functions', 'Natural Display', 'Equation Solver', 'Matrix Calculations'],
      badge: 'JEE/NEET Approved',
      targetAudience: ['Class 11-12', 'JEE Aspirants', 'Engineering Students']
    },
    {
      id: 'ncert-class-12-maths',
      name: 'NCERT Mathematics Class 12 Textbook',
      nameHindi: 'एनसीईआरटी गणित कक्षा 12',
      description: 'Official NCERT textbook for Class 12 Mathematics - CBSE Board.',
      price: '₹185',
      originalPrice: '₹220',
      image: '/images/ncert-class12-math.jpg',
      affiliateLink: 'https://amazon.in/dp/8174507350?tag=ganitagya-21',
      category: 'Textbook',
      rating: 4.8,
      features: ['CBSE Syllabus', 'Detailed Examples', 'Exercise Questions', 'Board Exam Prep'],
      badge: 'CBSE Official',
      targetAudience: ['Class 12', 'Board Exam', 'JEE Foundation']
    },
    {
      id: 'byjus-subscription',
      name: "Byju's Premium Subscription",
      nameHindi: 'बायजूस प्रीमियम सब्सक्रिप्शन',
      description: 'Complete learning app for Class 6-12 with video lessons and practice tests.',
      price: '₹1,999/month',
      originalPrice: '₹2,499/month',
      image: '/images/byjus-app.jpg',
      affiliateLink: 'https://byjus.com/premium?ref=ganitagya',
      category: 'Online Course',
      rating: 4.4,
      features: ['Video Lessons', 'Practice Tests', 'Doubt Solving', 'Progress Tracking'],
      badge: 'Most Popular',
      targetAudience: ['Class 6-12', 'Competitive Exams', 'Board Prep']
    },
    {
      id: 'rd-sharma-class-11',
      name: 'RD Sharma Mathematics Class 11',
      nameHindi: 'आर डी शर्मा गणित कक्षा 11',
      description: 'Comprehensive mathematics book for Class 11 with detailed solutions.',
      price: '₹485',
      originalPrice: '₹595',
      image: '/images/rd-sharma-11.jpg',
      affiliateLink: 'https://amazon.in/dp/9352533348?tag=ganitagya-21',
      category: 'Reference Book',
      rating: 4.5,
      features: ['Detailed Solutions', 'Practice Problems', 'Concept Clarity', 'Board + JEE Prep'],
      badge: 'Bestseller',
      targetAudience: ['Class 11', 'JEE Preparation', 'CBSE Board']
    },
    {
      id: 'vedantu-jee-course',
      name: 'Vedantu JEE Main + Advanced Course',
      nameHindi: 'वेदांतु जेईई मुख्य + एडवांस कोर्स',
      description: 'Live online classes for JEE preparation with top IIT faculty.',
      price: '₹15,999/year',
      originalPrice: '₹24,999/year',
      image: '/images/vedantu-jee.jpg',
      affiliateLink: 'https://vedantu.com/jee?ref=ganitagya',
      category: 'Online Course',
      rating: 4.3,
      features: ['Live Classes', 'IIT Faculty', 'Mock Tests', 'Doubt Sessions'],
      badge: 'IIT Faculty',
      targetAudience: ['JEE Aspirants', 'Class 11-12', 'Droppers']
    },
    {
      id: 'geometry-box-set',
      name: 'Professional Geometry Box Set',
      nameHindi: 'ज्यामिति बॉक्स सेट',
      description: 'Complete geometry instruments set for school and competitive exams.',
      price: '₹299',
      originalPrice: '₹450',
      image: '/images/geometry-box.jpg',
      affiliateLink: 'https://amazon.in/dp/B07XYZABC1?tag=ganitagya-21',
      category: 'Instruments',
      rating: 4.2,
      features: ['Compass', 'Protractor', 'Set Squares', 'Divider'],
      badge: 'School Essential',
      targetAudience: ['Class 6-12', 'Engineering Drawing', 'Architecture']
    },
    {
      id: 'cengage-jee-maths',
      name: 'Cengage Mathematics for JEE Main & Advanced',
      nameHindi: 'सेंगेज जेईई गणित',
      description: 'Comprehensive JEE mathematics preparation book series.',
      price: '₹1,299',
      originalPrice: '₹1,599',
      image: '/images/cengage-jee-math.jpg',
      affiliateLink: 'https://amazon.in/dp/9386323121?tag=ganitagya-21',
      category: 'Reference Book',
      rating: 4.7,
      features: ['JEE Pattern', 'Previous Year Questions', 'Detailed Theory', 'Practice Sets'],
      badge: 'JEE Recommended',
      targetAudience: ['JEE Advanced', 'Serious Aspirants', 'Coaching Students']
    },
    {
      id: 'unacademy-plus',
      name: 'Unacademy Plus Subscription',
      nameHindi: 'अनएकेडमी प्लस सब्सक्रिप्शन',
      description: 'Premium courses for JEE, NEET, and board exams with top educators.',
      price: '₹999/month',
      originalPrice: '₹1,499/month',
      image: '/images/unacademy-plus.jpg',
      affiliateLink: 'https://unacademy.com/plus?ref=ganitagya',
      category: 'Online Course',
      rating: 4.5,
      features: ['Live Classes', 'Recorded Videos', 'Tests', 'Study Material'],
      badge: 'Top Educators',
      targetAudience: ['JEE/NEET', 'Board Exams', 'Competitive Exams']
    }
  ];

  const categories = ['All', ...Array.from(new Set(indianProducts.map(product => product.category)))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? indianProducts 
    : indianProducts.filter(product => product.category === selectedCategory);

  const handleProductClick = (product: IndianProduct) => {
    // Track affiliate click for Indian market
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click_india', {
        event_category: 'affiliate_india',
        event_label: product.name,
        value: parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0,
        currency: 'INR'
      });
    }
    
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
    <div className="indian-affiliate-products">
      <div className="container">
        <div className="products-header">
          <h2>🇮🇳 भारतीय छात्रों के लिए सुझाए गए उत्पाद</h2>
          <h3>Recommended Products for Indian Students</h3>
          <p>Carefully selected educational products for CBSE, JEE, NEET, and board exam preparation</p>
          <div className="trust-indicators">
            <span className="trust-badge">✅ CBSE Approved</span>
            <span className="trust-badge">✅ JEE/NEET Compatible</span>
            <span className="trust-badge">✅ Best Prices</span>
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
            <div key={product.id} className="product-card indian-style">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">
                <h3 className="product-name">
                  {product.name}
                  {product.nameHindi && <span className="hindi-name">{product.nameHindi}</span>}
                </h3>
                
                <p className="product-description">{product.description}</p>

                <div className="product-rating">
                  {renderStars(product.rating)}
                  <span className="rating-value">({product.rating})</span>
                </div>

                <div className="target-audience">
                  <strong>Suitable for:</strong>
                  {product.targetAudience.map((audience, index) => (
                    <span key={index} className="audience-tag">{audience}</span>
                  ))}
                </div>

                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>

                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="discount">
                      {Math.round((1 - parseFloat(product.price.replace(/[^0-9.]/g, '')) / parseFloat(product.originalPrice.replace(/[^0-9.]/g, ''))) * 100)}% OFF
                    </span>
                  )}
                </div>

                <button
                  className="buy-button indian-style"
                  onClick={() => handleProductClick(product)}
                >
                  🛒 Buy Now on Amazon/Platform
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="affiliate-disclosure indian">
          <div className="disclosure-content">
            <h4>📢 Affiliate Disclosure / सहयोगी प्रकटीकरण</h4>
            <p>
              <strong>English:</strong> We may earn a small commission when you purchase through our links at no extra cost to you. 
              This helps us keep Ganitagya free for all students.
            </p>
            <p>
              <strong>हिंदी:</strong> जब आप हमारे लिंक के माध्यम से खरीदारी करते हैं तो हमें एक छोटा कमीशन मिल सकता है, 
              आपको कोई अतिरिक्त लागत नहीं आती। यह हमें गणितज्ञ को सभी छात्रों के लिए मुफ्त रखने में मदद करता है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianAffiliateProducts;
