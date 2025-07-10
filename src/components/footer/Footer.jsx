
import { useState } from 'react';
import { socialMediaLinks, quickLinks, resources, contactInfo } from '../../constants/socialMedia';
import DocumentPopup from '../ui/DocumentPopup';
import { getDocumentContent, DOCUMENT_TYPES } from '../../constants/legalDocuments';
import './Footer.css';

const Footer = () => {
  const [documentPopup, setDocumentPopup] = useState({
    isOpen: false,
    type: null,
    title: '',
    content: ''
  });

  // Document popup handlers
  const openDocumentPopup = (documentType) => {
    const document = getDocumentContent(documentType);
    setDocumentPopup({
      isOpen: true,
      type: documentType,
      title: document.title,
      content: document.content
    });
  };

  const closeDocumentPopup = () => {
    setDocumentPopup({
      isOpen: false,
      type: null,
      title: '',
      content: ''
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            {/* <h3>गणितज्ञ Ganitagya</h3> */}
            <p>Empowering minds through the beauty of mathematics</p>
            <div className="social-links">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="social-icon"
                    style={{ '--icon-color': social.color, '--icon-hover-color': social.hoverColor }}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href}>{resource.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <button
                  className="footer-document-link"
                  onClick={() => openDocumentPopup(DOCUMENT_TYPES.PRIVACY_POLICY)}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  className="footer-document-link"
                  onClick={() => openDocumentPopup(DOCUMENT_TYPES.TERMS_CONDITIONS)}
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <p key={index}><IconComponent /> {contact.text}</p>
              );
            })}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="math-quote">
            <p>"Mathematics is the language with which God has written the universe" - Galileo Galilei</p>
          </div>
          <div className="copyright">
            <p>&copy; 2024 Ganitagya. All rights reserved. | Made with ❤️ for mathematics enthusiasts</p>
          </div>
        </div>
      </div>

      {/* Document Popup */}
      <DocumentPopup
        isOpen={documentPopup.isOpen}
        onClose={closeDocumentPopup}
        documentType={documentPopup.type}
        title={documentPopup.title}
        content={documentPopup.content}
      />
    </footer>
  );
};

export default Footer;
