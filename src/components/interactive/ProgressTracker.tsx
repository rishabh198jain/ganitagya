import React, { useState, useEffect } from 'react';
import './ProgressTracker.css';

interface Topic {
  id: string;
  name: string;
  icon: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

interface ProgressTrackerProps {
  className?: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ className = '' }) => {
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: 'algebra',
      name: 'Algebra',
      icon: '📐',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15
    },
    {
      id: 'geometry',
      name: 'Geometry',
      icon: '📏',
      progress: 60,
      totalLessons: 15,
      completedLessons: 9
    },
    {
      id: 'calculus',
      name: 'Calculus',
      icon: '📈',
      progress: 30,
      totalLessons: 25,
      completedLessons: 7
    },
    {
      id: 'statistics',
      name: 'Statistics',
      icon: '📊',
      progress: 45,
      totalLessons: 18,
      completedLessons: 8
    }
  ]);

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('mathProgress');
    if (savedProgress) {
      setTopics(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (updatedTopics: Topic[]) => {
    setTopics(updatedTopics);
    localStorage.setItem('mathProgress', JSON.stringify(updatedTopics));
  };

  const updateProgress = (topicId: string, increment: number = 5) => {
    const updatedTopics = topics.map(topic => {
      if (topic.id === topicId) {
        const newCompletedLessons = Math.min(
          topic.completedLessons + 1,
          topic.totalLessons
        );
        const newProgress = Math.min(
          topic.progress + increment,
          100
        );
        
        // Show celebration if milestone reached
        if (newProgress >= 100 && topic.progress < 100) {
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 3000);
        }
        
        return {
          ...topic,
          progress: newProgress,
          completedLessons: newCompletedLessons
        };
      }
      return topic;
    });
    
    saveProgress(updatedTopics);
  };

  const resetProgress = (topicId: string) => {
    const updatedTopics = topics.map(topic => {
      if (topic.id === topicId) {
        return {
          ...topic,
          progress: 0,
          completedLessons: 0
        };
      }
      return topic;
    });
    
    saveProgress(updatedTopics);
  };

  const getTotalProgress = () => {
    const totalProgress = topics.reduce((sum, topic) => sum + topic.progress, 0);
    return Math.round(totalProgress / topics.length);
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return '#10b981'; // Green
    if (progress >= 60) return '#3b82f6'; // Blue
    if (progress >= 40) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  return (
    <div className={`progress-tracker ${className}`}>
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-content">
            🎉 Congratulations! 🎉
            <p>You've completed a topic!</p>
          </div>
        </div>
      )}
      
      <div className="tracker-header">
        <h3>📚 Learning Progress</h3>
        <div className="overall-progress">
          <div className="overall-stats">
            <span className="overall-percentage">{getTotalProgress()}%</span>
            <span className="overall-label">Overall Progress</span>
          </div>
          <div className="overall-progress-bar">
            <div 
              className="overall-progress-fill"
              style={{ 
                width: `${getTotalProgress()}%`,
                backgroundColor: getProgressColor(getTotalProgress())
              }}
            />
          </div>
        </div>
      </div>

      <div className="topics-grid">
        {topics.map(topic => (
          <div 
            key={topic.id}
            className={`topic-card ${selectedTopic === topic.id ? 'selected' : ''}`}
            onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
          >
            <div className="topic-header">
              <span className="topic-icon">{topic.icon}</span>
              <h4 className="topic-name">{topic.name}</h4>
            </div>
            
            <div className="topic-stats">
              <div className="lessons-count">
                {topic.completedLessons}/{topic.totalLessons} lessons
              </div>
              <div className="progress-percentage">
                {topic.progress}%
              </div>
            </div>
            
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${topic.progress}%`,
                  backgroundColor: getProgressColor(topic.progress)
                }}
              />
            </div>
            
            {selectedTopic === topic.id && (
              <div className="topic-actions">
                <button 
                  className="action-btn complete"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateProgress(topic.id);
                  }}
                  disabled={topic.progress >= 100}
                >
                  ✓ Complete Lesson
                </button>
                <button 
                  className="action-btn reset"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetProgress(topic.id);
                  }}
                >
                  ↻ Reset
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="tracker-footer">
        <p className="motivational-text">
          {getTotalProgress() >= 80 ? "🌟 Excellent progress! Keep it up!" :
           getTotalProgress() >= 60 ? "🚀 You're doing great! Almost there!" :
           getTotalProgress() >= 40 ? "💪 Good work! Keep learning!" :
           "🌱 Every expert was once a beginner. Start your journey!"}
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;
