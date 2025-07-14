import React from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';
import './DocumentPopup.css';

const DocumentPopup = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create PDF content using browser's print functionality
    const printWindow = window.open('', '_blank');
    const pdfContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            h1 {
              color: #667eea;
              border-bottom: 2px solid #667eea;
              padding-bottom: 10px;
            }
            h2 {
              color: #667eea;
              margin-top: 30px;
            }
            h3 {
              color: #764ba2;
              margin-top: 25px;
            }
            p {
              margin-bottom: 15px;
            }
            ul, ol {
              margin: 15px 0;
              padding-left: 30px;
            }
            li {
              margin-bottom: 8px;
            }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <pre style="white-space: pre-wrap; font-family: inherit;">${content}</pre>
        </body>
      </html>
    `;

    printWindow.document.write(pdfContent);
    printWindow.document.close();

    // Trigger print dialog which allows saving as PDF
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="document-popup-overlay" onClick={handleOverlayClick}>
      <div className="document-popup">
        <div className="document-popup-header">
          <h2 className="document-popup-title">{title}</h2>
          <div className="document-popup-actions">
            <button
              className="document-popup-btn download-btn icon-only"
              onClick={handleDownload}
              title="Download as PDF"
            >
              <FaDownload />
              <span className="tooltip">Download PDF</span>
            </button>
            <button
              className="document-popup-btn close-btn icon-only"
              onClick={onClose}
              title="Close"
            >
              <FaTimes />
              <span className="tooltip">Close</span>
            </button>
          </div>
        </div>
        
        <div className="document-popup-content">
          <div className="document-text">
            {content}
          </div>
        </div>
        
        <div className="document-popup-footer">
          <button className="document-popup-btn secondary-btn icon-only" onClick={onClose} title="Close">
            <FaTimes />
            <span className="tooltip">Close</span>
          </button>
          <button className="document-popup-btn primary-btn icon-only" onClick={handleDownload} title="Download as PDF">
            <FaDownload />
            <span className="tooltip">Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentPopup;
