import React, { useState, useEffect } from 'react';
import StudentInquiryChatbot from './StudentInquiryChatbot';
import './ChatbotTrigger.css';

interface ChatbotTriggerProps {
  studentInfo?: {
    name?: string;
    email?: string;
    grade?: string;
  };
}

const ChatbotTrigger: React.FC<ChatbotTriggerProps> = ({ studentInfo }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [showWelcomeTooltip, setShowWelcomeTooltip] = useState(false);

  // Show welcome tooltip for new users
  useEffect(() => {
    const hasSeenChatbot = localStorage.getItem('hasSeenChatbot');
    if (!hasSeenChatbot) {
      setTimeout(() => {
        setShowWelcomeTooltip(true);
        setHasNewMessage(true);
      }, 3000); // Show after 3 seconds

      // Hide tooltip after 10 seconds
      setTimeout(() => {
        setShowWelcomeTooltip(false);
      }, 13000);
    }
  }, []);

  const handleToggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
    setHasNewMessage(false);
    setShowWelcomeTooltip(false);
    
    // Mark as seen
    localStorage.setItem('hasSeenChatbot', 'true');
  };

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className={`chatbot-trigger ${isChatbotOpen ? 'active' : ''}`}>
        {showWelcomeTooltip && (
          <div className="welcome-tooltip">
            <div className="tooltip-content">
              <h4>👋 Need Help?</h4>
              <p>I'm here to assist you with any questions about Ganitagya!</p>
              <button 
                className="tooltip-close"
                onClick={() => setShowWelcomeTooltip(false)}
              >
                ✕
              </button>
            </div>
            <div className="tooltip-arrow"></div>
          </div>
        )}

        <button
          className={`trigger-btn ${hasNewMessage ? 'has-notification' : ''}`}
          onClick={handleToggleChatbot}
          title={isChatbotOpen ? 'Close chat' : 'Open chat'}
        >
          {isChatbotOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span className="chat-icon">💬</span>
              {hasNewMessage && <div className="notification-dot"></div>}
            </>
          )}
        </button>

        {/* Quick Help Menu (when closed) */}
        {!isChatbotOpen && (
          <div className="quick-help-menu">
            <div className="help-item" onClick={handleToggleChatbot}>
              <span className="help-icon">❓</span>
              <span className="help-text">Ask a Question</span>
            </div>
            <div className="help-item" onClick={handleToggleChatbot}>
              <span className="help-icon">📚</span>
              <span className="help-text">Course Help</span>
            </div>
            <div className="help-item" onClick={handleToggleChatbot}>
              <span className="help-icon">🔧</span>
              <span className="help-text">Technical Support</span>
            </div>
          </div>
        )}
      </div>

      {/* Chatbot Component */}
      <StudentInquiryChatbot
        isOpen={isChatbotOpen}
        onClose={handleCloseChatbot}
        studentInfo={studentInfo}
      />
    </>
  );
};

export default ChatbotTrigger;
