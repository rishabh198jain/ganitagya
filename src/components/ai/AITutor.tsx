import React, { useState, useRef, useEffect } from 'react';
import { aiService, AITutorResponse } from '@/services/AIService';
import './AITutor.css';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  relatedTopics?: string[];
}

interface AITutorProps {
  className?: string;
  initialContext?: string;
}

const AITutor: React.FC<AITutorProps> = ({ className = '', initialContext }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your AI Math Tutor 🤖. I'm here to help you with any math questions you have. Feel free to ask me about algebra, geometry, calculus, statistics, or any other math topic!",
      timestamp: new Date(),
      suggestions: [
        "Explain quadratic equations",
        "Help with calculus derivatives",
        "Solve this algebra problem",
        "What is the Pythagorean theorem?"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response: AITutorResponse = await aiService.askAITutor(inputValue, initialContext);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response.response,
        timestamp: new Date(),
        suggestions: response.suggestions,
        relatedTopics: response.relatedTopics
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  const clearChat = () => {
    setMessages([messages[0]]); // Keep the initial greeting
  };

  return (
    <div className={`ai-tutor ${className} ${isMinimized ? 'minimized' : ''}`}>
      <div className="tutor-header">
        <div className="header-left">
          <div className="tutor-avatar">🤖</div>
          <div className="tutor-info">
            <h3>AI Math Tutor</h3>
            <span className="status">Online</span>
          </div>
        </div>
        <div className="header-actions">
          <button 
            className="clear-btn"
            onClick={clearChat}
            title="Clear chat"
          >
            🗑️
          </button>
          <button 
            className="minimize-btn"
            onClick={() => setIsMinimized(!isMinimized)}
            title={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? '⬆️' : '⬇️'}
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-content">
                  <p>{message.content}</p>
                  <span className="timestamp">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
                
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="suggestions">
                    <p className="suggestions-label">💡 Try asking:</p>
                    <div className="suggestions-list">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          className="suggestion-btn"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {message.relatedTopics && message.relatedTopics.length > 0 && (
                  <div className="related-topics">
                    <p className="topics-label">🔗 Related topics:</p>
                    <div className="topics-list">
                      {message.relatedTopics.map((topic, index) => (
                        <span key={index} className="topic-tag">{topic}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="message ai loading">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="timestamp">Thinking...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <div className="input-container">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me any math question..."
                disabled={isLoading}
              />
              <button
                className="send-btn"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
              >
                {isLoading ? '⏳' : '📤'}
              </button>
            </div>
            <div className="input-help">
              <span>Press Enter to send • Shift+Enter for new line</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AITutor;
