import React, { useEffect } from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { logicalReasoningData } from '../data/logicalReasoningData';

const LogicalReasoningPage: React.FC = () => {
  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <MathPageTemplate
      title="Logical Reasoning"
      subtitle="Develop critical thinking skills through mathematical logic"
      description="Learn logical statements, proof techniques, set theory, and systematic problem-solving methods."
      icon="🔍"
      data={logicalReasoningData}
    />
  );
};

export default LogicalReasoningPage;
