import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Payment.css'

const PricingPlans = () => {
  const { user, updateUser } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      price: 0,
      period: 'Forever',
      description: 'Perfect for getting started with basic mathematics',
      features: [
        'Access to 3 basic courses',
        'Basic practice problems',
        'Community support',
        'Progress tracking',
        'Mobile app access'
      ],
      limitations: [
        'Limited to basic courses',
        'No premium content',
        'No personalized tutoring',
        'No certificates'
      ],
      popular: false,
      current: user?.subscription === 'free'
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 29,
      period: 'per month',
      description: 'Unlock all features and advanced mathematics courses',
      features: [
        'Access to ALL courses',
        'Advanced practice problems',
        'Priority support',
        'Detailed analytics',
        'Downloadable resources',
        'Live Q&A sessions',
        'Personalized study plans',
        'Course certificates',
        'Offline access',
        'Ad-free experience'
      ],
      limitations: [],
      popular: true,
      current: user?.subscription === 'premium'
    },
    {
      id: 'lifetime',
      name: 'Lifetime Access',
      price: 299,
      period: 'one-time',
      description: 'Get lifetime access to all current and future content',
      features: [
        'Everything in Premium',
        'Lifetime access',
        'All future courses included',
        'Exclusive masterclasses',
        'Direct access to instructors',
        'Custom learning paths',
        'Advanced AI tutoring',
        'Priority feature requests'
      ],
      limitations: [],
      popular: false,
      current: user?.subscription === 'lifetime'
    }
  ]

  const handleSelectPlan = async (plan) => {
    if (plan.current) return

    setLoading(true)
    setSelectedPlan(plan.id)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))

      if (plan.id === 'free') {
        // Downgrade to free
        updateUser({ subscription: 'free' })
        alert('Successfully downgraded to Free plan')
      } else {
        // Upgrade to premium or lifetime
        updateUser({ subscription: plan.id })
        alert(`Successfully upgraded to ${plan.name}!`)
      }

      navigate('/dashboard')
    } catch (error) {
      alert('Payment failed. Please try again.')
    } finally {
      setLoading(false)
      setSelectedPlan(null)
    }
  }

  const getButtonText = (plan) => {
    if (plan.current) return 'Current Plan'
    if (loading && selectedPlan === plan.id) return 'Processing...'
    if (plan.id === 'free') return 'Downgrade to Free'
    return `Upgrade to ${plan.name}`
  }

  const getButtonClass = (plan) => {
    if (plan.current) return 'btn-current'
    if (plan.popular) return 'btn-popular'
    return 'btn-upgrade'
  }

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Choose Your Learning Plan</h1>
        <p>Select the perfect plan to accelerate your mathematical journey</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''} ${plan.current ? 'current' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            {plan.current && <div className="current-badge">Current Plan</div>}
            
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="price">${plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
            </div>

            <div className="plan-features">
              <h4>What's included:</h4>
              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✅</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.limitations.length > 0 && (
                <>
                  <h4>Limitations:</h4>
                  <ul className="limitations-list">
                    {plan.limitations.map((limitation, index) => (
                      <li key={index} className="limitation-item">
                        <span className="limitation-icon">❌</span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <button
              className={`plan-button ${getButtonClass(plan)}`}
              onClick={() => handleSelectPlan(plan)}
              disabled={plan.current || (loading && selectedPlan === plan.id)}
            >
              {getButtonText(plan)}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-features">
        <h2>Why Choose Ganitagya Premium?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Learning</h3>
            <p>AI-powered recommendations based on your learning style and progress</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>Learn from experienced mathematicians and educators</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Learn Anywhere</h3>
            <p>Access courses on any device, online or offline</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Certificates</h3>
            <p>Earn verified certificates upon course completion</p>
          </div>
        </div>
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I cancel anytime?</h4>
            <p>Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a money-back guarantee?</h4>
            <p>We offer a 30-day money-back guarantee for all premium plans. If you're not satisfied, we'll refund your payment.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer student discounts?</h4>
            <p>Yes! Students can get 50% off premium plans with a valid student ID. Contact support for details.</p>
          </div>
        </div>
      </div>

      <div className="pricing-guarantee">
        <div className="guarantee-content">
          <h3>🛡️ 30-Day Money-Back Guarantee</h3>
          <p>Try Ganitagya Premium risk-free. If you're not completely satisfied within 30 days, we'll refund your money, no questions asked.</p>
        </div>
      </div>
    </div>
  )
}

export default PricingPlans
