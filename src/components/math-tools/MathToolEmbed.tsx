import React, { useState } from 'react';
import './MathToolEmbed.css';

interface MathTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  category: string;
  features?: string[];
}

interface MathToolEmbedProps {
  tool: MathTool;
  isActive: boolean;
  onSelect: () => void;
}

const MathToolEmbed: React.FC<MathToolEmbedProps> = ({ tool, isActive, onSelect }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`math-tool-embed ${isActive ? 'active' : ''}`}>
      {/* Tool Card */}
      <div className="tool-card" onClick={onSelect}>
        <div className="tool-icon">{tool.icon}</div>
        <h3 className="tool-name">{tool.name}</h3>
        <p className="tool-description">{tool.description}</p>
        <span className="tool-category">{tool.category}</span>
        
        {tool.features && (
          <div className="tool-features">
            {tool.features.map((feature, index) => (
              <span key={index} className="feature-tag">{feature}</span>
            ))}
          </div>
        )}
      </div>

      {/* Embedded Tool */}
      {isActive && (
        <div className="tool-embed-container">
          <div className="embed-header">
            <h3>{tool.icon} {tool.name}</h3>
            <div className="embed-actions">
              <button
                className="fullscreen-btn"
                onClick={() => window.open(tool.url, '_blank')}
                title="Open in new tab"
              >
                🔗 Open in New Tab
              </button>
            </div>
          </div>

          <div className="iframe-wrapper">
            {isLoading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
                <p>Loading {tool.name}...</p>
              </div>
            )}

            {hasError ? (
              <div className="error-overlay">
                <div className="error-content">
                  <h4>⚠️ Unable to load tool</h4>
                  <p>This tool may not support embedding or requires direct access.</p>
                  <button
                    className="retry-btn"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    Open in New Tab Instead
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                src={tool.url}
                width="100%"
                height="600"
                frameBorder="0"
                title={tool.name}
                allowFullScreen
                loading="lazy"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MathToolEmbed;
