import React, { useState } from 'react';
import './DigitalProducts.css';

interface DigitalProduct {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi: string;
  price: number;
  originalPrice?: number;
  image: string;
  downloadLink: string;
  category: string;
  targetClass: string[];
  examType: string[];
  features: string[];
  featuresHindi: string[];
  badge?: string;
  previewLink?: string;
  pages?: number;
  format: string;
}

const DigitalProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');

  const products: DigitalProduct[] = [
    {
      id: 'ncert-class-10-solutions',
      name: 'NCERT Class 10 Mathematics Solutions',
      nameHindi: 'एनसीईआरटी कक्षा 10 गणित समाधान',
      description: 'Complete step-by-step solutions for all NCERT Class 10 Mathematics chapters',
      descriptionHindi: 'एनसीईआरटी कक्षा 10 गणित के सभी अध्यायों के पूर्ण चरणबद्ध समाधान',
      price: 199,
      originalPrice: 299,
      image: '/images/ncert-10-solutions.jpg',
      downloadLink: '/downloads/ncert-class-10-math-solutions.pdf',
      category: 'NCERT Solutions',
      targetClass: ['Class 10'],
      examType: ['CBSE Board', 'State Board'],
      features: [
        'All 15 chapters covered',
        'Step-by-step solutions',
        'Important formulas highlighted',
        'Board exam pattern',
        'Instant download'
      ],
      featuresHindi: [
        'सभी 15 अध्याय शामिल',
        'चरणबद्ध समाधान',
        'महत्वपूर्ण सूत्र हाइलाइट',
        'बोर्ड परीक्षा पैटर्न',
        'तुरंत डाउनलोड'
      ],
      badge: 'Bestseller',
      previewLink: '/preview/ncert-10-solutions',
      pages: 250,
      format: 'PDF'
    },
    {
      id: 'jee-formula-sheet',
      name: 'JEE Mathematics Formula Sheet',
      nameHindi: 'जेईई गणित सूत्र शीट',
      description: 'Complete formula collection for JEE Main and Advanced Mathematics',
      descriptionHindi: 'जेईई मुख्य और एडवांस गणित के लिए पूर्ण सूत्र संग्रह',
      price: 299,
      originalPrice: 499,
      image: '/images/jee-formula-sheet.jpg',
      downloadLink: '/downloads/jee-math-formulas.pdf',
      category: 'Formula Sheets',
      targetClass: ['Class 11', 'Class 12'],
      examType: ['JEE Main', 'JEE Advanced'],
      features: [
        'All JEE topics covered',
        'Quick revision format',
        'Color-coded sections',
        'Previous year analysis',
        'Mobile-friendly format'
      ],
      featuresHindi: [
        'सभी जेईई विषय शामिल',
        'त्वरित संशोधन प्रारूप',
        'रंग-कोडित अनुभाग',
        'पिछले वर्ष का विश्लेषण',
        'मोबाइल-अनुकूल प्रारूप'
      ],
      badge: 'JEE Special',
      previewLink: '/preview/jee-formulas',
      pages: 50,
      format: 'PDF'
    },
    {
      id: 'trigonometry-worksheets',
      name: 'Trigonometry Practice Worksheets',
      nameHindi: 'त्रिकोणमिति अभ्यास कार्यपत्रक',
      description: 'Comprehensive practice worksheets for trigonometry with solutions',
      descriptionHindi: 'समाधान के साथ त्रिकोणमिति के लिए व्यापक अभ्यास कार्यपत्रक',
      price: 149,
      originalPrice: 249,
      image: '/images/trigonometry-worksheets.jpg',
      downloadLink: '/downloads/trigonometry-worksheets.pdf',
      category: 'Worksheets',
      targetClass: ['Class 11', 'Class 12'],
      examType: ['CBSE Board', 'JEE Main', 'NEET'],
      features: [
        '100+ practice problems',
        'Detailed solutions included',
        'Difficulty levels marked',
        'Exam-style questions',
        'Print-ready format'
      ],
      featuresHindi: [
        '100+ अभ्यास समस्याएं',
        'विस्तृत समाधान शामिल',
        'कठिनाई स्तर चिह्नित',
        'परीक्षा शैली के प्रश्न',
        'प्रिंट-तैयार प्रारूप'
      ],
      badge: 'Practice Pack',
      previewLink: '/preview/trigonometry-worksheets',
      pages: 75,
      format: 'PDF'
    },
    {
      id: 'calculus-notes',
      name: 'Complete Calculus Notes',
      nameHindi: 'पूर्ण कैलकुलस नोट्स',
      description: 'Comprehensive calculus notes for Class 12 and competitive exams',
      descriptionHindi: 'कक्षा 12 और प्रतियोगी परीक्षाओं के लिए व्यापक कैलकुलस नोट्स',
      price: 399,
      originalPrice: 599,
      image: '/images/calculus-notes.jpg',
      downloadLink: '/downloads/calculus-complete-notes.pdf',
      category: 'Study Notes',
      targetClass: ['Class 12'],
      examType: ['CBSE Board', 'JEE Advanced', 'Engineering'],
      features: [
        'Theory with examples',
        'Graphical illustrations',
        'Important theorems',
        'Application problems',
        'Exam tips included'
      ],
      featuresHindi: [
        'उदाहरणों के साथ सिद्धांत',
        'ग्राफिकल चित्रण',
        'महत्वपूर्ण प्रमेय',
        'अनुप्रयोग समस्याएं',
        'परीक्षा युक्तियां शामिल'
      ],
      badge: 'Advanced',
      previewLink: '/preview/calculus-notes',
      pages: 180,
      format: 'PDF'
    },
    {
      id: 'board-exam-papers',
      name: 'CBSE Board Previous Year Papers',
      nameHindi: 'सीबीएसई बोर्ड पिछले वर्ष के प्रश्न पत्र',
      description: 'Last 10 years CBSE board mathematics question papers with solutions',
      descriptionHindi: 'समाधान के साथ पिछले 10 वर्षों के सीबीएसई बोर्ड गणित प्रश्न पत्र',
      price: 249,
      originalPrice: 399,
      image: '/images/board-papers.jpg',
      downloadLink: '/downloads/cbse-previous-papers.pdf',
      category: 'Question Papers',
      targetClass: ['Class 10', 'Class 12'],
      examType: ['CBSE Board'],
      features: [
        '10 years question papers',
        'Detailed solutions',
        'Marking scheme included',
        'Pattern analysis',
        'Important questions marked'
      ],
      featuresHindi: [
        '10 वर्षों के प्रश्न पत्र',
        'विस्तृत समाधान',
        'अंकन योजना शामिल',
        'पैटर्न विश्लेषण',
        'महत्वपूर्ण प्रश्न चिह्नित'
      ],
      badge: 'Board Special',
      previewLink: '/preview/board-papers',
      pages: 300,
      format: 'PDF'
    },
    {
      id: 'geometry-formulas',
      name: 'Geometry Formulas & Theorems',
      nameHindi: 'ज्यामिति सूत्र और प्रमेय',
      description: 'Complete collection of geometry formulas and important theorems',
      descriptionHindi: 'ज्यामिति सूत्रों और महत्वपूर्ण प्रमेयों का पूर्ण संग्रह',
      price: 99,
      originalPrice: 199,
      image: '/images/geometry-formulas.jpg',
      downloadLink: '/downloads/geometry-formulas.pdf',
      category: 'Formula Sheets',
      targetClass: ['Class 9', 'Class 10', 'Class 11'],
      examType: ['CBSE Board', 'State Board', 'Foundation'],
      features: [
        'All geometry formulas',
        'Important theorems',
        'Diagram illustrations',
        'Quick reference format',
        'Pocket-sized design'
      ],
      featuresHindi: [
        'सभी ज्यामिति सूत्र',
        'महत्वपूर्ण प्रमेय',
        'आरेख चित्रण',
        'त्वरित संदर्भ प्रारूप',
        'पॉकेट-साइज़ डिज़ाइन'
      ],
      badge: 'Quick Reference',
      previewLink: '/preview/geometry-formulas',
      pages: 25,
      format: 'PDF'
    }
  ];

  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handlePurchase = (product: DigitalProduct) => {
    // Track purchase attempt
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'digital_product_purchase', {
        event_category: 'digital_products',
        event_label: product.name,
        value: product.price,
        currency: 'INR'
      });
    }
    
    // Redirect to payment gateway (Razorpay, Instamojo, etc.)
    console.log(`Purchasing ${product.name} for ₹${product.price}`);
    // Implementation: Integrate with payment gateway
  };

  const handlePreview = (product: DigitalProduct) => {
    if (product.previewLink) {
      window.open(product.previewLink, '_blank');
    }
  };

  return (
    <div className="digital-products">
      <div className="container">
        <div className="products-header">
          <div className="language-toggle">
            <button
              className={language === 'english' ? 'active' : ''}
              onClick={() => setLanguage('english')}
            >
              English
            </button>
            <button
              className={language === 'hindi' ? 'active' : ''}
              onClick={() => setLanguage('hindi')}
            >
              हिंदी
            </button>
          </div>

          <h2>
            {language === 'english' 
              ? '📚 Digital Study Materials' 
              : '📚 डिजिटल अध्ययन सामग्री'
            }
          </h2>
          <p>
            {language === 'english'
              ? 'Affordable PDFs and study materials for Indian students'
              : 'भारतीय छात्रों के लिए किफायती पीडीएफ और अध्ययन सामग्री'
            }
          </p>
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
            <div key={product.id} className="product-card digital">
              {product.badge && <div className="product-badge">{product.badge}</div>}
              
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-format">{product.format}</div>
                {product.pages && <div className="product-pages">{product.pages} pages</div>}
              </div>

              <div className="product-content">
                <h3 className="product-name">
                  {language === 'english' ? product.name : product.nameHindi}
                </h3>
                
                <p className="product-description">
                  {language === 'english' ? product.description : product.descriptionHindi}
                </p>

                <div className="product-meta">
                  <div className="target-info">
                    <span className="meta-label">
                      {language === 'english' ? 'For:' : 'के लिए:'}
                    </span>
                    {product.targetClass.map((cls, index) => (
                      <span key={index} className="meta-tag">{cls}</span>
                    ))}
                  </div>
                  
                  <div className="exam-info">
                    <span className="meta-label">
                      {language === 'english' ? 'Exams:' : 'परीक्षाएं:'}
                    </span>
                    {product.examType.map((exam, index) => (
                      <span key={index} className="meta-tag">{exam}</span>
                    ))}
                  </div>
                </div>

                <div className="product-features">
                  {(language === 'english' ? product.features : product.featuresHindi).slice(0, 3).map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>

                <div className="product-price">
                  <span className="current-price">₹{product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="original-price">₹{product.originalPrice}</span>
                      <span className="discount">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>

                <div className="product-actions">
                  {product.previewLink && (
                    <button
                      className="preview-button"
                      onClick={() => handlePreview(product)}
                    >
                      {language === 'english' ? '👁️ Preview' : '👁️ पूर्वावलोकन'}
                    </button>
                  )}
                  
                  <button
                    className="buy-button"
                    onClick={() => handlePurchase(product)}
                  >
                    {language === 'english' ? '💳 Buy Now' : '💳 अभी खरीदें'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-footer">
          <div className="guarantee-section">
            <h3>
              {language === 'english' ? '🛡️ Our Guarantee' : '🛡️ हमारी गारंटी'}
            </h3>
            <div className="guarantees">
              <div className="guarantee-item">
                <span className="guarantee-icon">⚡</span>
                <span>
                  {language === 'english' ? 'Instant Download' : 'तुरंत डाउनलोड'}
                </span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">💰</span>
                <span>
                  {language === 'english' ? '7-Day Money Back' : '7-दिन पैसे वापसी'}
                </span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">🔒</span>
                <span>
                  {language === 'english' ? 'Secure Payment' : 'सुरक्षित भुगतान'}
                </span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">📱</span>
                <span>
                  {language === 'english' ? 'Mobile Friendly' : 'मोबाइल अनुकूल'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;
