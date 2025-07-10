import React from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { algebraSections } from '../data/algebraData';

const AlgebraPage: React.FC = () => {
  return (
    <MathPageTemplate
      title="Complete Algebra Reference"
      subtitle="Master all aspects of algebra from linear equations to advanced identities with interactive examples"
      sections={algebraSections}
      defaultSection="linear-equations"
    />
  );
};

export default AlgebraPage;
