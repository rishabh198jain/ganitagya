import React, { useEffect } from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { arithmeticData } from '../data/arithmeticData';

const ArithmeticPage: React.FC = () => {
  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <MathPageTemplate
      title="Arithmetic"
      subtitle="Master the fundamental operations of mathematics"
      description="Learn addition, subtraction, multiplication, and division with whole numbers, fractions, and decimals."
      icon="🔢"
      sections={arithmeticData.sections}
    />
  );
};

export default ArithmeticPage;
