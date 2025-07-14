import React, { useState } from 'react';
import './IndianPricingPlans.css';

interface IndianPricingPlan {
  id: string;
  name: string;
  nameHindi: string;
  price: number;
  period: string;
  description: string;
  descriptionHindi: string;
  features: string[];
  featuresHindi: string[];
  popular?: boolean;
  buttonText: string;
  buttonTextHindi: string;
  color: string;
  targetAudience: string[];
}

const IndianPricingPlans: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');

  const plans: IndianPricingPlan[] = [
    {
      id: 'free',
      name: 'Basic',
      nameHindi: 'बेसिक',
      price: 0,
      period: 'Forever',
      description: 'Perfect for CBSE board exam preparation',
      descriptionHindi: 'सीबीएसई बोर्ड परीक्षा की तैयारी के लिए उपयुक्त',
      features: [
        'Access to basic math topics',
        'Free online calculators',
        'NCERT-aligned content',
        'Basic problem sets',
        'Community support'
      ],
      featuresHindi: [
        'बुनियादी गणित विषयों तक पहुंच',
        'मुफ्त ऑनलाइन कैलकुलेटर',
        'एनसीईआरटी-संरेखित सामग्री',
        'बुनियादी समस्या सेट',
        'सामुदायिक सहायता'
      ],
      buttonText: 'Start Free',
      buttonTextHindi: 'मुफ्त शुरू करें',
      color: '#6366f1',
      targetAudience: ['Class 6-10', 'CBSE Board', 'Basic Learning']
    },
    {
      id: 'premium',
      name: 'Premium',
      nameHindi: 'प्रीमियम',
      price: billingPeriod === 'monthly' ? 199 : 1999,
      period: billingPeriod === 'monthly' ? 'per month' : 'per year',
      description: 'Complete preparation for Class 11-12 and competitive exams',
      descriptionHindi: 'कक्षा 11-12 और प्रतियोगी परीक्षाओं की पूर्ण तैयारी',
      features: [
        'Everything in Basic',
        'Step-by-step solutions',
        'Video explanations in Hindi/English',
        'JEE/NEET preparation content',
        'Progress tracking',
        'Downloadable PDFs',
        'Priority support',
        'No advertisements'
      ],
      featuresHindi: [
        'बेसिक की सभी सुविधाएं',
        'चरणबद्ध समाधान',
        'हिंदी/अंग्रेजी में वीडियो स्पष्टीकरण',
        'जेईई/नीट तैयारी सामग्री',
        'प्रगति ट्रैकिंग',
        'डाउनलोड योग्य पीडीएफ',
        'प्राथमिकता सहायता',
        'कोई विज्ञापन नहीं'
      ],
      popular: true,
      buttonText: 'Start Premium',
      buttonTextHindi: 'प्रीमियम शुरू करें',
      color: '#10b981',
      targetAudience: ['Class 11-12', 'JEE/NEET', 'Board Exams']
    },
    {
      id: 'pro',
      name: 'Pro',
      nameHindi: 'प्रो',
      price: billingPeriod === 'monthly' ? 399 : 3999,
      period: billingPeriod === 'monthly' ? 'per month' : 'per year',
      description: 'Complete solution for serious JEE/NEET aspirants',
      descriptionHindi: 'गंभीर जेईई/नीट अभ्यर्थियों के लिए पूर्ण समाधान',
      features: [
        'Everything in Premium',
        '1-on-1 tutoring sessions (2/month)',
        'Live doubt clearing sessions',
        'Custom study plans',
        'Mock tests for JEE/NEET',
        'Performance analytics',
        'Phone support in Hindi',
        'Exam strategy guidance'
      ],
      featuresHindi: [
        'प्रीमियम की सभी सुविधाएं',
        '1-पर-1 ट्यूटरिंग सत्र (2/महीना)',
        'लाइव संदेह निवारण सत्र',
        'कस्टम अध्ययन योजना',
        'जेईई/नीट के लिए मॉक टेस्ट',
        'प्रदर्शन विश्लेषण',
        'हिंदी में फोन सहायता',
        'परीक्षा रणनीति मार्गदर्शन'
      ],
      buttonText: 'Go Pro',
      buttonTextHindi: 'प्रो बनें',
      color: '#f59e0b',
      targetAudience: ['JEE Advanced', 'NEET', 'Serious Aspirants']
    }
  ];

  const handleSubscribe = (planId: string) => {
    // Track subscription attempt for Indian market
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'subscription_attempt_india', {
        event_category: 'subscription_india',
        event_label: planId,
        currency: 'INR'
      });
    }
    
    // Redirect to Razorpay or other Indian payment gateway
    console.log(`Subscribing to ${planId} plan in India`);
    // Implementation: Integrate with Razorpay, PayU, or Instamojo
  };

  return (
    <div className="indian-pricing-plans">
      <div className="container">
        <div className="pricing-header">
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
              ? 'Choose Your Learning Plan' 
              : 'अपनी शिक्षा योजना चुनें'
            }
          </h2>
          <p>
            {language === 'english'
              ? 'Affordable plans designed for Indian students'
              : 'भारतीय छात्रों के लिए डिज़ाइन की गई किफायती योजनाएं'
            }
          </p>
          
          <div className="billing-toggle">
            <button
              className={billingPeriod === 'monthly' ? 'active' : ''}
              onClick={() => setBillingPeriod('monthly')}
            >
              {language === 'english' ? 'Monthly' : 'मासिक'}
            </button>
            <button
              className={billingPeriod === 'yearly' ? 'active' : ''}
              onClick={() => setBillingPeriod('yearly')}
            >
              {language === 'english' ? 'Yearly' : 'वार्षिक'}
              <span className="discount-badge">
                {language === 'english' ? 'Save 17%' : '17% बचत'}
              </span>
            </button>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card indian-style ${plan.popular ? 'popular' : ''}`}
              style={{ '--plan-color': plan.color } as React.CSSProperties}
            >
              {plan.popular && (
                <div className="popular-badge">
                  {language === 'english' ? 'Most Popular' : 'सबसे लोकप्रिय'}
                </div>
              )}
              
              <div className="plan-header">
                <h3 className="plan-name">
                  {language === 'english' ? plan.name : plan.nameHindi}
                </h3>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">
                    /{language === 'english' ? plan.period : 
                      plan.period === 'per month' ? 'प्रति माह' : 
                      plan.period === 'per year' ? 'प्रति वर्ष' : 'हमेशा के लिए'}
                  </span>
                </div>
                <p className="plan-description">
                  {language === 'english' ? plan.description : plan.descriptionHindi}
                </p>
                
                <div className="target-audience">
                  <strong>
                    {language === 'english' ? 'Perfect for:' : 'के लिए उपयुक्त:'}
                  </strong>
                  {plan.targetAudience.map((audience, index) => (
                    <span key={index} className="audience-tag">{audience}</span>
                  ))}
                </div>
              </div>

              <div className="plan-features">
                <ul>
                  {(language === 'english' ? plan.features : plan.featuresHindi).map((feature, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="plan-button"
                onClick={() => handleSubscribe(plan.id)}
                style={{ backgroundColor: plan.color }}
              >
                {language === 'english' ? plan.buttonText : plan.buttonTextHindi}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>
            {language === 'english'
              ? 'All plans include 7-day free trial. Pay securely with UPI, Cards, or Net Banking.'
              : 'सभी योजनाओं में 7-दिन का मुफ्त परीक्षण शामिल है। UPI, कार्ड या नेट बैंकिंग से सुरक्षित भुगतान करें।'
            }
          </p>
          <div className="payment-methods">
            <span>
              {language === 'english' ? 'We accept:' : 'हम स्वीकार करते हैं:'}
            </span>
            <div className="payment-icons">
              <span>💳 UPI</span>
              <span>🏦 Net Banking</span>
              <span>📱 Paytm</span>
              <span>💰 Razorpay</span>
            </div>
          </div>
          
          <div className="trust-indicators">
            <span className="trust-badge">🔒 100% Secure</span>
            <span className="trust-badge">📞 Hindi Support</span>
            <span className="trust-badge">🇮🇳 Made for India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPricingPlans;
