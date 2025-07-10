import React from 'react';
import { demoCredentials } from '../../data/formConfigs';

const DemoCredentials = ({ onCredentialSelect }) => {
  const handleCredentialClick = (credential) => {
    if (onCredentialSelect) {
      onCredentialSelect(credential);
    }
  };

  return (
    <div className="demo-credentials">
      <h3>Demo Credentials</h3>
      <p>Click any credential below to auto-fill the form:</p>
      
      <div className="credentials-grid">
        {demoCredentials.map((credential, index) => (
          <div 
            key={index} 
            className="credential-card"
            onClick={() => handleCredentialClick(credential)}
          >
            <div className="credential-header">
              <h4>{credential.type}</h4>
              <span className="credential-badge">{credential.userType}</span>
            </div>
            
            <div className="credential-details">
              <div className="credential-field">
                <strong>Email:</strong> {credential.email}
              </div>
              <div className="credential-field">
                <strong>Password:</strong> {credential.password}
              </div>
              <div className="credential-description">
                {credential.description}
              </div>
            </div>
            
            <button className="use-credential-btn">
              Use These Credentials
            </button>
          </div>
        ))}
      </div>
      
      <div className="demo-note">
        <p><strong>Note:</strong> These are demo credentials for testing purposes only.</p>
      </div>
    </div>
  );
};

export default DemoCredentials;
