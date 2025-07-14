import React, { useEffect } from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { trigonometryData } from '../data/trigonometryData';

const TrigonometryPage: React.FC = () => {
  useEffect(() => {
    // Trigger MathJax processing after component mounts
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <MathPageTemplate
      title="Trigonometry"
      subtitle="Master the relationships between angles and sides in triangles"
      description="Explore trigonometric ratios, identities, and their applications in physics, engineering, and navigation."
      icon="🧊"
      data={trigonometryData}
    />
  );
};

export default TrigonometryPage;
