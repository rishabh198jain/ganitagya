import React, { useState, useRef, useEffect } from 'react';
import { aiService } from '@/services/AIService';
import './StudentInquiryChatbot.css';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
  attachments?: ChatAttachment[];
}

interface ChatAttachment {
  type: 'link' | 'image' | 'document';
  url: string;
  title: string;
  description?: string;
}

interface StudentInquiryChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  studentInfo?: {
    name?: string;
    email?: string;
    grade?: string;
  };
}

const StudentInquiryChatbot: React.FC<StudentInquiryChatbotProps> = ({
  isOpen,
  onClose,
  studentInfo
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize chatbot with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        type: 'bot',
        content: `Hi${studentInfo?.name ? ` ${studentInfo.name}` : ''}! 👋 I'm here to help you with any questions about Ganitagya. What can I assist you with today?`,
        timestamp: new Date(),
        quickReplies: [
          'Course Information',
          'Technical Support',
          'Account Help',
          'Pricing & Plans',
          'Study Tips',
          'Contact Teacher'
        ]
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, studentInfo]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim();
    if (!messageText || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await getBotResponse(messageText);
      
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: response.content,
          timestamp: new Date(),
          quickReplies: response.quickReplies,
          attachments: response.attachments
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // Simulate typing delay
    } catch (error) {
      setIsTyping(false);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again or contact our support team directly.",
        timestamp: new Date(),
        quickReplies: ['Try Again', 'Contact Support']
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const getBotResponse = async (userMessage: string): Promise<{
    content: string;
    quickReplies?: string[];
    attachments?: ChatAttachment[];
  }> => {
    const lowerMessage = userMessage.toLowerCase();

    // Course Information
    if (lowerMessage.includes('course') || lowerMessage.includes('subject') || lowerMessage.includes('math')) {
      setCurrentCategory('courses');
      return {
        content: "Great! I can help you with course information. We offer comprehensive mathematics courses including:\n\n📐 Algebra - Linear equations, quadratic functions\n📏 Geometry - Shapes, angles, theorems\n📈 Calculus - Derivatives, integrals\n📊 Statistics - Data analysis, probability\n\nWhich subject interests you most?",
        quickReplies: ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'All Courses'],
        attachments: [{
          type: 'link',
          url: '/courses',
          title: 'Browse All Courses',
          description: 'Explore our complete course catalog'
        }]
      };
    }

    // Technical Support
    if (lowerMessage.includes('technical') || lowerMessage.includes('problem') || lowerMessage.includes('error') || lowerMessage.includes('bug')) {
      setCurrentCategory('technical');
      return {
        content: "I'm here to help with technical issues! Common solutions:\n\n🔄 Try refreshing the page\n🌐 Check your internet connection\n📱 Clear browser cache\n🔐 Make sure you're logged in\n\nWhat specific issue are you experiencing?",
        quickReplies: ['Login Problems', 'Video Not Loading', 'Page Not Working', 'Other Issue']
      };
    }

    // Account Help
    if (lowerMessage.includes('account') || lowerMessage.includes('profile') || lowerMessage.includes('password') || lowerMessage.includes('login')) {
      setCurrentCategory('account');
      return {
        content: "I can help with account-related questions:\n\n👤 Profile management\n🔑 Password reset\n📧 Email changes\n🔐 Login issues\n💳 Subscription management\n\nWhat do you need help with?",
        quickReplies: ['Reset Password', 'Update Profile', 'Subscription', 'Delete Account'],
        attachments: [{
          type: 'link',
          url: '/profile',
          title: 'Go to Profile',
          description: 'Manage your account settings'
        }]
      };
    }

    // Pricing & Plans
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('plan') || lowerMessage.includes('subscription')) {
      return {
        content: "Here are our current plans:\n\n🆓 **Free Plan**\n- Basic course access\n- Limited AI tutoring\n- Community support\n\n💎 **Premium Plan** - $19.99/month\n- Unlimited course access\n- Full AI tutoring\n- Priority support\n- Progress tracking\n\n🏆 **Lifetime Plan** - $199.99\n- Everything in Premium\n- Lifetime access\n- Exclusive content\n\nWould you like to upgrade?",
        quickReplies: ['Upgrade to Premium', 'Learn More', 'Compare Plans'],
        attachments: [{
          type: 'link',
          url: '/pricing',
          title: 'View Pricing Details',
          description: 'Compare all available plans'
        }]
      };
    }

    // Study Tips
    if (lowerMessage.includes('study') || lowerMessage.includes('tips') || lowerMessage.includes('learn') || lowerMessage.includes('improve')) {
      return {
        content: "Here are some effective study tips for mathematics:\n\n📚 **Practice Regularly**: Solve problems daily\n🎯 **Focus on Concepts**: Understand the 'why' behind formulas\n📝 **Take Notes**: Write down key formulas and methods\n👥 **Study Groups**: Discuss problems with peers\n🤖 **Use AI Tutor**: Get instant help when stuck\n⏰ **Time Management**: Break study sessions into chunks\n\nNeed help with a specific topic?",
        quickReplies: ['Algebra Tips', 'Geometry Tips', 'Exam Preparation', 'Time Management']
      };
    }

    // Contact Teacher
    if (lowerMessage.includes('teacher') || lowerMessage.includes('instructor') || lowerMessage.includes('contact')) {
      return {
        content: "I can help you connect with our educators:\n\n👨‍🏫 **Live Sessions**: Join scheduled Q&A sessions\n📧 **Direct Message**: Send questions to instructors\n📅 **Book Appointment**: Schedule 1-on-1 help\n💬 **Discussion Forum**: Ask in community forums\n\nHow would you like to connect?",
        quickReplies: ['Schedule Session', 'Send Message', 'Join Forum', 'View Schedule'],
        attachments: [{
          type: 'link',
          url: '/teachers',
          title: 'Meet Our Teachers',
          description: 'Learn about our expert instructors'
        }]
      };
    }

    // Specific subject responses based on current category
    if (currentCategory === 'courses') {
      if (lowerMessage.includes('algebra')) {
        return {
          content: "Algebra is fundamental to mathematics! Our algebra course covers:\n\n📐 Linear Equations\n📊 Quadratic Functions\n🔢 Polynomial Operations\n📈 Graphing Techniques\n🧮 Word Problems\n\nThe course includes 20 lessons with interactive examples and practice problems. Would you like to start with the basics or jump to a specific topic?",
          quickReplies: ['Start Basics', 'Linear Equations', 'Quadratic Functions', 'Practice Problems']
        };
      }
    }

    // Default AI response for complex queries
    try {
      const aiResponse = await aiService.askAITutor(
        userMessage,
        `Student inquiry context: ${studentInfo?.name || 'Student'} is asking about Ganitagya platform. Provide helpful, friendly response about mathematics learning.`
      );
      
      return {
        content: aiResponse.response,
        quickReplies: aiResponse.suggestions?.slice(0, 4)
      };
    } catch (error) {
      return {
        content: "I understand you're asking about that topic. Let me connect you with the right resources or you can try rephrasing your question. Is there something specific about Ganitagya I can help you with?",
        quickReplies: ['Course Information', 'Technical Support', 'Account Help', 'Contact Human']
      };
    }
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setCurrentCategory(null);
    // Re-initialize with welcome message
    setTimeout(() => {
      const welcomeMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'bot',
        content: "Chat cleared! How can I help you today?",
        timestamp: new Date(),
        quickReplies: [
          'Course Information',
          'Technical Support',
          'Account Help',
          'Pricing & Plans'
        ]
      };
      setMessages([welcomeMessage]);
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className={`student-inquiry-chatbot ${isMinimized ? 'minimized' : ''}`}>
      <div className="chatbot-header">
        <div className="header-info">
          <div className="bot-avatar">🎓</div>
          <div className="bot-details">
            <h3>Ganitagya Assistant</h3>
            <span className="status">Online • Ready to help</span>
          </div>
        </div>
        <div className="header-actions">
          <button 
            className="minimize-btn"
            onClick={() => setIsMinimized(!isMinimized)}
            title={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? '⬆️' : '⬇️'}
          </button>
          <button 
            className="clear-btn"
            onClick={clearChat}
            title="Clear chat"
          >
            🗑️
          </button>
          <button 
            className="close-btn"
            onClick={onClose}
            title="Close chat"
          >
            ✕
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-content">
                  <div className="message-text">
                    {message.content.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>

                {message.attachments && (
                  <div className="message-attachments">
                    {message.attachments.map((attachment, index) => (
                      <a
                        key={index}
                        href={attachment.url}
                        className="attachment-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="attachment-icon">🔗</div>
                        <div className="attachment-info">
                          <div className="attachment-title">{attachment.title}</div>
                          {attachment.description && (
                            <div className="attachment-desc">{attachment.description}</div>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {message.quickReplies && (
                  <div className="quick-replies">
                    {message.quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        className="quick-reply-btn"
                        onClick={() => handleQuickReply(reply)}
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="message bot typing">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="message-time">Typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <div className="input-container">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                disabled={isTyping}
              />
              <button
                className="send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
              >
                {isTyping ? '⏳' : '📤'}
              </button>
            </div>
            <div className="input-footer">
              <span>Press Enter to send • Powered by AI</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentInquiryChatbot;
