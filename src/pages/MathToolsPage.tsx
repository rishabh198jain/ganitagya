import React, { useState } from 'react';
import MathToolEmbed from '../components/math-tools/MathToolEmbed';
import './MathToolsPage.css';

const MathToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('desmos');

  const mathTools = [
    {
      id: 'desmos',
      name: 'Desmos Graphing Calculator',
      description: 'Plot graphs, functions, sliders, and data with this powerful graphing calculator.',
      icon: '📈',
      url: 'https://www.desmos.com/calculator',
      category: 'Graphing',
      features: ['Functions', 'Sliders', 'Statistics', 'Regressions']
    },
    {
      id: 'geogebra-graphing',
      name: 'GeoGebra Graphing',
      description: 'Dynamic graphing calculator with algebra and calculus capabilities.',
      icon: '📊',
      url: 'https://www.geogebra.org/graphing',
      category: 'Graphing',
      features: ['2D Graphing', 'Calculus', 'Statistics', 'Probability']
    },
    {
      id: 'geogebra-geometry',
      name: 'GeoGebra Geometry',
      description: 'Interactive geometry tool for constructions and proofs.',
      icon: '📐',
      url: 'https://www.geogebra.org/geometry',
      category: 'Geometry',
      features: ['Constructions', 'Proofs', 'Measurements', 'Transformations']
    },
    {
      id: 'geogebra-3d',
      name: 'GeoGebra 3D Calculator',
      description: 'Explore 3D functions, surfaces, and solid geometry.',
      icon: '🧊',
      url: 'https://www.geogebra.org/3d',
      category: '3D Math',
      features: ['3D Graphing', 'Surfaces', 'Solids', 'Cross-sections']
    },
    {
      id: 'geogebra-cas',
      name: 'GeoGebra CAS',
      description: 'Computer Algebra System for symbolic calculations.',
      icon: '🔢',
      url: 'https://www.geogebra.org/cas',
      category: 'Algebra',
      features: ['Symbolic Math', 'Equations', 'Calculus', 'Number Theory']
    },
    {
      id: 'scientific-calculator',
      name: 'Scientific Calculator',
      description: 'Advanced scientific calculator with trigonometric and logarithmic functions.',
      icon: '🧮',
      url: 'https://www.calculator.net/scientific-calculator.html',
      category: 'Calculator',
      features: ['Trigonometry', 'Logarithms', 'Exponentials', 'Statistics']
    },
    {
      id: 'unit-converter',
      name: 'Unit Converter',
      description: 'Convert between different units of measurement.',
      icon: '⚖️',
      url: 'https://www.unitconverters.net/',
      category: 'Converter',
      features: ['Length', 'Weight', 'Temperature', 'Volume']
    },
    {
      id: 'matrix-calculator',
      name: 'Matrix Calculator',
      description: 'Perform matrix operations, determinants, and linear algebra.',
      icon: '🔲',
      url: 'https://www.calculator.net/matrix-calculator.html',
      category: 'Linear Algebra',
      features: ['Matrix Operations', 'Determinants', 'Eigenvalues', 'Systems']
    }
  ];

  const categories = ['All', ...Array.from(new Set(mathTools.map(tool => tool.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? mathTools 
    : mathTools.filter(tool => tool.category === selectedCategory);

  const activeTool = mathTools.find(tool => tool.id === activeTab);

  return (
    <div className="math-tools-page">
      <div className="container">
        <header className="tools-header">
          <h1>🧮 Mathematics Tools</h1>
          <p>Free online mathematical tools to enhance your learning experience</p>
        </header>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              className={`tool-card ${activeTab === tool.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tool.id)}
            >
              <div className="tool-icon">{tool.icon}</div>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-description">{tool.description}</p>
              <span className="tool-category">{tool.category}</span>
            </div>
          ))}
        </div>

        {/* Active Tool Display */}
        {activeTool && (
          <div className="tool-display">
            <div className="tool-header">
              <h2>{activeTool.icon} {activeTool.name}</h2>
              <div className="tool-actions">
                <button
                  className="open-new-tab-btn"
                  onClick={() => window.open(activeTool.url, '_blank')}
                >
                  Open in New Tab 🔗
                </button>
              </div>
            </div>
            
            <div className="tool-iframe-container">
              <iframe
                src={activeTool.url}
                width="100%"
                height="600"
                frameBorder="0"
                title={activeTool.name}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Usage Tips */}
        <div className="usage-tips">
          <h3>💡 Usage Tips</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>📈 Graphing Tools</h4>
              <p>Use Desmos and GeoGebra for plotting functions, exploring calculus concepts, and visualizing mathematical relationships.</p>
            </div>
            <div className="tip-card">
              <h4>📐 Geometry Tools</h4>
              <p>Create geometric constructions, explore properties of shapes, and verify geometric theorems interactively.</p>
            </div>
            <div className="tip-card">
              <h4>🧮 Calculators</h4>
              <p>Perform complex calculations, solve equations, and verify your manual calculations with scientific tools.</p>
            </div>
            <div className="tip-card">
              <h4>⚖️ Converters</h4>
              <p>Convert between different units for physics problems, engineering calculations, and real-world applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathToolsPage;
