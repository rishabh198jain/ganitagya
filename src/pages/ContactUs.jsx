import { useState } from 'react'
import { socialMediaLinks } from '../constants/socialMedia'
import { contactInfoCards } from '../constants/contactData'
import DynamicForm from '../components/shared/DynamicForm'
import { contactFormFields } from '../data/formConfigs'
import './ContactUs.css'

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)
    setError(null)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Form submitted:', formData)
      setSubmitStatus('success')
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Failed to send message. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions about mathematics or our platform</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfoCards.map((card, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>

            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! We will get back to you soon.
              </div>
            )}

            <DynamicForm
              fields={contactFormFields}
              onSubmit={handleSubmit}
              submitText="Send Message"
              loading={isSubmitting}
              error={error}
              className="contact-form-fields"
            />
          </div>
        </div>

        <div className="social-media-section">
          <h2>Connect with Us</h2>
          <p>Follow us on social media for the latest updates and mathematical content</p>
          
          <div className="social-media-grid">
            {socialMediaLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color, '--social-hover': social.hoverColor }}
                >
                  <div className="social-icon"><IconComponent /></div>
                  <span className="social-name">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <p>Interactive Map Coming Soon</p>
              <p>Mathematics Institute, New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
