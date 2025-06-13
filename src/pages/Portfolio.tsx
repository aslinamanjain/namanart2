import React, { useEffect, useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const advertisements = [
    {
      title: 'Limitless | TRIDENT GROUP',
      url: 'https://www.youtube.com/watch?v=h34UTWSKOyk',
      thumbnail: `https://img.youtube.com/vi/h34UTWSKOyk/maxresdefault.jpg`,
      category: 'advertisement',
    },
    {
      title: 'Jeeto Baazi Khel Ke | ICC Men\'s Champions Trophy 2025',
      url: 'https://www.youtube.com/watch?v=nA0z8N04v70',
      thumbnail: `https://img.youtube.com/vi/nA0z8N04v70/maxresdefault.jpg`,
      category: 'advertisement',
    },
  ];

  const portfolioItems = [
    {
      title: 'Music Video Direction',
      category: 'music',
      image: '/SnapInsta.to_471864078_18480106300062406_656075779399158_n.jpg',
      description: 'Cinematic storytelling through music',
    },
    {
      title: 'Concert Visuals',
      category: 'concert',
      image: '/SnapInsta.to_275600141_146335131183628_4164826839623651607_n.jpg',
      description: 'Live performance visual experiences',
    },
    {
      title: 'Brand Campaign',
      category: 'brand',
      image: '/SnapInsta.to_276003019_488834996058322_6776313799444352570_n.jpg',
      description: 'Visual identity and storytelling',
    },
    {
      title: 'Lyrical Typography',
      category: 'typography',
      image: '/SnapInsta.to_314026947_850130653003703_4847075968031239765_n.jpg',
      description: 'Text-based visual narratives',
    },
    {
      title: 'Album Artwork',
      category: 'artwork',
      image: '/SnapInsta.to_318135098_674830017452305_6397829693916687356_n.jpg',
      description: 'Visual representation of sound',
    },
    {
      title: 'Motion Graphics',
      category: 'motion',
      image: '/SnapInsta.to_341955428_238375682189322_8903338927072876169_n.jpg',
      description: 'Dynamic visual storytelling',
    },
    {
      title: 'Digital Art',
      category: 'digital',
      image: '/SnapInsta.to_411873655_761169756046871_1653460974569319683_n.jpg',
      description: 'Contemporary digital expressions',
    },
    {
      title: 'Creative Direction',
      category: 'direction',
      image: '/SnapInsta.to_176520996_1665412927180045_6728980124454699181_n.jpg',
      description: 'Comprehensive visual leadership',
    },
    {
      title: 'Visual Effects',
      category: 'vfx',
      image: '/SnapInsta.to_290351441_1398438347290547_6745698366078385163_n.jpg',
      description: 'Reality-bending visual magic',
    },
    {
      title: 'Promotional Content',
      category: 'promo',
      image: '/SnapInsta.to_308028021_4867071576727564_4488088787961724423_n.jpg',
      description: 'Engaging promotional visuals',
    },
    {
      title: 'Social Media Content',
      category: 'social',
      image: '/SnapInsta.to_426340470_7182970705105711_6488078939018039786_n.jpg',
      description: 'Platform-optimized content',
    },
    {
      title: 'Event Visuals',
      category: 'event',
      image: '/SnapInsta.to_358639305_18374822476062406_5771097012007308836_n.jpg',
      description: 'Memorable event experiences',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'advertisement', name: 'Advertisements' },
    { id: 'music', name: 'Music Videos' },
    { id: 'concert', name: 'Concert Visuals' },
    { id: 'brand', name: 'Brand Campaigns' },
    { id: 'typography', name: 'Typography' },
    { id: 'artwork', name: 'Artwork' },
    { id: 'motion', name: 'Motion Graphics' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? [...advertisements, ...portfolioItems]
    : selectedCategory === 'advertisement'
    ? advertisements
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            PORTFOLIO
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-sans text-gray-300">
            A curated collection of visual stories, creative campaigns, and artistic expressions 
            that showcase the power of visual storytelling across music, brands, and digital media.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-display font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                {'url' in item ? (
                  // Advertisement item (YouTube video)
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        <Play className="h-6 w-6 text-gray-800 ml-1" />
                      </div>
                    </div>
                    
                    {/* Click overlay */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Watch ${item.title}`}
                    />
                  </>
                ) : (
                  // Regular portfolio item
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div>
                        <p className="text-sm font-display font-medium text-gray-300 mb-1 tracking-wide">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-xs font-sans">View Details</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 tracking-wide text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                  {item.title}
                </h3>
                {'category' in item && (
                  <p className="text-sm font-sans text-gray-400 capitalize">
                    {item.category.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-gray-800 to-transparent rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE?
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-sans text-gray-300">
            Every project tells a story. Let's craft yours with the same passion, 
            creativity, and attention to detail you see in this portfolio.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-100 hover:bg-white text-gray-900 rounded-full font-display font-semibold tracking-wider transition-all duration-300 hover:scale-105"
          >
            <span>START YOUR PROJECT</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;