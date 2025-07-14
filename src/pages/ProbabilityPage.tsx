import React, { useEffect } from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { probabilityData } from '../data/probabilityData';

const ProbabilityPage: React.FC = () => {
  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <MathPageTemplate
      title="Probability"
      subtitle="Understand chance, randomness, and uncertainty"
      description="Learn probability theory, conditional probability, distributions, and real-world applications of chance."
      icon="🎲"
      sections={probabilityData.sections}
    />
  );
};

export default ProbabilityPage;
