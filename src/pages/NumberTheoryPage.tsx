import React, { useEffect } from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { numberTheoryData } from '../data/numberTheoryData';

const NumberTheoryPage: React.FC = () => {
  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <MathPageTemplate
      title="Number Theory"
      subtitle="Explore the fascinating properties of integers"
      description="Discover prime numbers, divisibility rules, modular arithmetic, and mathematical patterns in number systems."
      icon="🧠"
      data={numberTheoryData}
    />
  );
};

export default NumberTheoryPage;
