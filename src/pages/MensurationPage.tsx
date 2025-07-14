import React, { useEffect } from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { mensurationData } from '../data/mensurationData';

const MensurationPage: React.FC = () => {
  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <MathPageTemplate
      title="Mensuration"
      subtitle="Calculate areas, volumes, and surface areas"
      description="Learn to measure and calculate areas, volumes, and surface areas of various geometric shapes and solids."
      icon="📉"
      data={mensurationData}
    />
  );
};

export default MensurationPage;
