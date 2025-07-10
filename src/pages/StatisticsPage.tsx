import React from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { statisticsSections } from '../data/statisticsData';

const StatisticsPage: React.FC = () => {
  return (
    <MathPageTemplate
      title="Statistics Reference"
      subtitle="Explore data analysis, probability, and statistical distributions with practical examples"
      sections={statisticsSections}
      defaultSection="measures-of-central-tendency"
    />
  );
};

export default StatisticsPage;
