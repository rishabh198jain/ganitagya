import React, { useState, useEffect } from 'react';
import { aiService, MonetizationInsight } from '@/services/AIService';
import './MonetizationDashboard.css';

interface RevenueData {
  month: string;
  subscriptions: number;
  courses: number;
  ads: number;
  total: number;
}

interface MonetizationDashboardProps {
  className?: string;
}

const MonetizationDashboard: React.FC<MonetizationDashboardProps> = ({ className = '' }) => {
  const [insights, setInsights] = useState<MonetizationInsight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [revenueData] = useState<RevenueData[]>([
    { month: 'Jan', subscriptions: 2500, courses: 1200, ads: 800, total: 4500 },
    { month: 'Feb', subscriptions: 3200, courses: 1800, ads: 950, total: 5950 },
    { month: 'Mar', subscriptions: 4100, courses: 2400, ads: 1100, total: 7600 },
    { month: 'Apr', subscriptions: 5200, courses: 3100, ads: 1300, total: 9600 },
    { month: 'May', subscriptions: 6800, courses: 4200, ads: 1500, total: 12500 },
    { month: 'Jun', subscriptions: 8500, courses: 5800, ads: 1800, total: 16100 }
  ]);

  const [metrics] = useState({
    totalUsers: 15420,
    paidUsers: 2340,
    conversionRate: 15.2,
    avgRevenuePerUser: 89.50,
    churnRate: 3.2,
    monthlyGrowth: 24.5
  });

  useEffect(() => {
    loadMonetizationInsights();
  }, []);

  const loadMonetizationInsights = async () => {
    setIsLoading(true);
    try {
      const data = await aiService.analyzeMonetizationOpportunities(
        metrics.totalUsers,
        metrics.conversionRate
      );
      setInsights(data);
    } catch (error) {
      console.error('Failed to load monetization insights:', error);
      // Fallback data for demo
      setInsights([
        {
          strategy: 'Premium Course Subscriptions',
          potentialRevenue: 50000,
          implementation: ['Create tiered pricing', 'Add exclusive content', 'Implement progress tracking'],
          timeline: '3 months',
          difficulty: 'medium'
        },
        {
          strategy: 'AI-Powered Tutoring Service',
          potentialRevenue: 75000,
          implementation: ['Integrate AI tutoring', 'Offer 1-on-1 sessions', 'Create pricing tiers'],
          timeline: '4 months',
          difficulty: 'high'
        },
        {
          strategy: 'Corporate Training Packages',
          potentialRevenue: 120000,
          implementation: ['Develop B2B offerings', 'Create enterprise features', 'Build sales team'],
          timeline: '6 months',
          difficulty: 'high'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'low': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const currentMonth = revenueData[revenueData.length - 1];
  const previousMonth = revenueData[revenueData.length - 2];
  const monthlyGrowth = ((currentMonth.total - previousMonth.total) / previousMonth.total) * 100;

  return (
    <div className={`monetization-dashboard ${className}`}>
      <div className="dashboard-header">
        <h2>💰 Monetization Dashboard</h2>
        <p>AI-powered insights for revenue optimization</p>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon">👥</div>
          <div className="metric-content">
            <h3>{metrics.totalUsers.toLocaleString()}</h3>
            <p>Total Users</p>
          </div>
        </div>
        
        <div className="metric-card">
          <div className="metric-icon">💎</div>
          <div className="metric-content">
            <h3>{metrics.paidUsers.toLocaleString()}</h3>
            <p>Paid Users</p>
          </div>
        </div>
        
        <div className="metric-card">
          <div className="metric-icon">📈</div>
          <div className="metric-content">
            <h3>{metrics.conversionRate}%</h3>
            <p>Conversion Rate</p>
          </div>
        </div>
        
        <div className="metric-card">
          <div className="metric-icon">💵</div>
          <div className="metric-content">
            <h3>{formatCurrency(metrics.avgRevenuePerUser)}</h3>
            <p>ARPU</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="insights-section">
        <div className="section-header">
          <h3>🤖 AI Monetization Insights</h3>
          <button 
            className="refresh-btn"
            onClick={loadMonetizationInsights}
            disabled={isLoading}
          >
            {isLoading ? '⏳' : '🔄'} Refresh
          </button>
        </div>
        
        {isLoading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Analyzing monetization opportunities...</p>
          </div>
        ) : (
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className="insight-card">
                <div className="insight-header">
                  <h4>{insight.strategy}</h4>
                  <div className="insight-meta">
                    <span 
                      className="difficulty-badge"
                      style={{ backgroundColor: getDifficultyColor(insight.difficulty) }}
                    >
                      {insight.difficulty}
                    </span>
                    <span className="timeline">{insight.timeline}</span>
                  </div>
                </div>
                
                <div className="revenue-potential">
                  <span className="potential-label">Revenue Potential:</span>
                  <span className="potential-amount">{formatCurrency(insight.potentialRevenue)}</span>
                </div>
                
                <div className="implementation-steps">
                  <h5>Implementation Steps:</h5>
                  <ul>
                    {insight.implementation.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="implement-btn">
                  🚀 Start Implementation
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MonetizationDashboard;
