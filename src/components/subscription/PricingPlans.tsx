import React, { useState } from 'react';
import './PricingPlans.css';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  color: string;
}

const PricingPlans: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Basic',
      price: 0,
      period: 'Forever',
      description: 'Perfect for getting started with math learning',
      features: [
        'Access to basic math topics',
        'Free online calculators',
        'Basic problem sets',
        'Community support',
        'Mobile responsive design'
      ],
      buttonText: 'Get Started Free',
      color: '#6366f1'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: billingPeriod === 'monthly' ? 9.99 : 99.99,
      period: billingPeriod === 'monthly' ? 'per month' : 'per year',
      description: 'Advanced features for serious math learners',
      features: [
        'Everything in Basic',
        'Step-by-step solutions',
        'Video explanations',
        'Progress tracking',
        'Downloadable worksheets',
        'Priority email support',
        'Advanced calculators',
        'No advertisements'
      ],
      popular: true,
      buttonText: 'Start Premium',
      color: '#10b981'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: billingPeriod === 'monthly' ? 19.99 : 199.99,
      period: billingPeriod === 'monthly' ? 'per month' : 'per year',
      description: 'Complete solution for math mastery',
      features: [
        'Everything in Premium',
        '1-on-1 tutoring sessions (2/month)',
        'Custom learning paths',
        'Advanced analytics',
        'Certification courses',
        'Live group sessions',
        'Phone support',
        'API access'
      ],
      buttonText: 'Go Pro',
      color: '#f59e0b'
    }
  ];

  const handleSubscribe = (planId: string) => {
    // Implement subscription logic here
    console.log(`Subscribing to ${planId} plan`);
    // Redirect to payment processor (Stripe, PayPal, etc.)
  };

  return (
    <div className="pricing-plans">
      <div className="container">
        <div className="pricing-header">
          <h2>Choose Your Learning Plan</h2>
          <p>Start free and upgrade as you grow</p>
          
          <div className="billing-toggle">
            <button
              className={billingPeriod === 'monthly' ? 'active' : ''}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={billingPeriod === 'yearly' ? 'active' : ''}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
              <span className="discount-badge">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              style={{ '--plan-color': plan.color } as React.CSSProperties}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
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
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All plans include a 14-day free trial. No credit card required for Basic plan.</p>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              💳 💰 🏦 📱
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
