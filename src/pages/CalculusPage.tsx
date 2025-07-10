import React from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { calculusSections } from '../data/calculusData';

const CalculusPage: React.FC = () => {
  return (
    <MathPageTemplate
      title="Calculus Reference"
      subtitle="Master limits, derivatives, and integrals with comprehensive examples and step-by-step solutions"
      sections={calculusSections}
      defaultSection="limits"
    />
  );
};

export default CalculusPage;
