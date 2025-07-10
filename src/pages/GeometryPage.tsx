import React from 'react';
import MathPageTemplate from '../components/shared/MathPageTemplate';
import { geometrySections } from '../data/geometryData';

const GeometryPage: React.FC = () => {
  return (
    <MathPageTemplate
      title="Geometry Reference"
      subtitle="Master geometric concepts from angles to 3D shapes with interactive examples"
      sections={geometrySections}
      defaultSection="angles"
    />
  );
};

export default GeometryPage;
