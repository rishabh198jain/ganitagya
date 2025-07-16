import React, { useState, useEffect } from 'react';
import './MathToolsPage.css';

const MathToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('desmos');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('mathToolsFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (toolId: string) => {
    const newFavorites = favorites.includes(toolId)
      ? favorites.filter(id => id !== toolId)
      : [...favorites, toolId];

    setFavorites(newFavorites);
    localStorage.setItem('mathToolsFavorites', JSON.stringify(newFavorites));
  };

  // Handle tool loading
  const handleToolSelect = (toolId: string) => {
    setIsLoading(true);
    setActiveTab(toolId);

    // Simulate loading time for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

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

  const categories = ['All', 'Favorites', ...Array.from(new Set(mathTools.map(tool => tool.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Enhanced filtering with search and favorites
  const filteredTools = mathTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' ||
                           (selectedCategory === 'Favorites' && favorites.includes(tool.id)) ||
                           tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const activeTool = mathTools.find(tool => tool.id === activeTab);

  return (
    <div className="math-tools-page">
      <div className="container">
        <header className="tools-header">
          <h1>🧮 Mathematics Tools</h1>
          <p>Free online mathematical tools to enhance your learning experience</p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search tools, categories, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
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
          {filteredTools.length === 0 ? (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No tools found</h3>
              <p>Try adjusting your search or category filter</p>
            </div>
          ) : (
            filteredTools.map(tool => (
              <div
                key={tool.id}
                className={`tool-card ${activeTab === tool.id ? 'active' : ''} ${favorites.includes(tool.id) ? 'favorited' : ''}`}
                onClick={() => handleToolSelect(tool.id)}
                onMouseEnter={() => setShowTooltip(tool.id)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <div className="tool-card-header">
                  <div className="tool-icon">{tool.icon}</div>
                  <button
                    className={`favorite-btn ${favorites.includes(tool.id) ? 'favorited' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(tool.id);
                    }}
                    title={favorites.includes(tool.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    {favorites.includes(tool.id) ? '❤️' : '🤍'}
                  </button>
                </div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                <div className="tool-footer">
                  <span className="tool-category">{tool.category}</span>
                  <div className="tool-features">
                    {tool.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                    {tool.features.length > 2 && (
                      <span className="feature-more">+{tool.features.length - 2}</span>
                    )}
                  </div>
                </div>

                {/* Tooltip */}
                {showTooltip === tool.id && (
                  <div className="tool-tooltip">
                    <strong>Features:</strong>
                    <ul>
                      {tool.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Active Tool Display */}
        {activeTool && (
          <div className="tool-display">
            <div className="tool-header">
              <div className="tool-header-left">
                <h2>{activeTool.icon} {activeTool.name}</h2>
                <p className="tool-header-description">{activeTool.description}</p>
              </div>
              <div className="tool-actions">
                <button
                  className={`favorite-btn-large ${favorites.includes(activeTool.id) ? 'favorited' : ''}`}
                  onClick={() => toggleFavorite(activeTool.id)}
                  title={favorites.includes(activeTool.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  {favorites.includes(activeTool.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
                </button>
                <button
                  className="open-new-tab-btn"
                  onClick={() => window.open(activeTool.url, '_blank')}
                >
                  🔗 Open in New Tab
                </button>
              </div>
            </div>

            <div className="tool-iframe-container">
              {isLoading && (
                <div className="loading-overlay">
                  <div className="loading-spinner"></div>
                  <p>Loading {activeTool.name}...</p>
                </div>
              )}
              <iframe
                src={activeTool.url}
                width="100%"
                height="600"
                style={{ border: 'none' }}
                title={activeTool.name}
                allowFullScreen
                loading="lazy"
                onLoad={() => setIsLoading(false)}
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
