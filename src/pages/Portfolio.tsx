import React, { useState, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Music Videos', 'Concert Visuals', 'Lyrical Typography', 'Brand Campaigns'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Ethereal Dreams',
      category: 'Music Videos',
      image: '/SnapInsta.to_173090840_308200040751966_8679189721205119769_n.jpg',
      description: 'A cinematic journey through sound and vision',
      tags: ['Direction', 'Color Grading', 'VFX'],
    },
    {
      id: 2,
      title: 'Urban Pulse',
      category: 'Concert Visuals',
      image: '/SnapInsta.to_275600141_146335131183628_4164826839623651607_n.jpg',
      description: 'Live concert visual experience',
      tags: ['Motion Graphics', 'Live Visuals', 'LED Design'],
    },
    {
      id: 3,
      title: 'Neon Nights',
      category: 'Lyrical Typography',
      image: '/SnapInsta.to_276003019_488834996058322_6776313799444352570_n.jpg',
      description: 'Typography meets emotion in motion',
      tags: ['Typography', 'Animation', 'Design'],
    },
    {
      id: 4,
      title: 'Brand Evolution',
      category: 'Brand Campaigns',
      image: '/SnapInsta.to_314026947_850130653003703_4847075968031239765_n.jpg',
      description: 'Transforming brand identity through visual storytelling',
      tags: ['Branding', 'Campaign', 'Strategy'],
    },
    {
      id: 5,
      title: 'Cosmic Resonance',
      category: 'Music Videos',
      image: '/SnapInsta.to_318135098_674830017452305_6397829693916687356_n.jpg',
      description: 'Exploring the universe through music',
      tags: ['Sci-Fi', 'VFX', 'Cinematography'],
    },
    {
      id: 6,
      title: 'Festival Fever',
      category: 'Concert Visuals',
      image: '/SnapInsta.to_341955428_238375682189322_8903338927072876169_n.jpg',
      description: 'Immersive festival visual experience',
      tags: ['Festival', 'Projection', 'Interactive'],
    },
    {
      id: 7,
      title: 'Lyrical Flow',
      category: 'Lyrical Typography',
      image: '/SnapInsta.to_411873655_761169756046871_1653460974569319683_n.jpg',
      description: 'Words that dance with rhythm',
      tags: ['Kinetic Typography', 'Music Sync', 'Creative'],
    },
    {
      id: 8,
      title: 'Corporate Vision',
      category: 'Brand Campaigns',
      image: '/SnapInsta.to_176520996_1665412927180045_6728980124454699181_n.jpg',
      description: 'Professional brand storytelling',
      tags: ['Corporate', 'Professional', 'Clean'],
    },
    {
      id: 9,
      title: 'Digital Dreams',
      category: 'Music Videos',
      image: '/SnapInsta.to_290351441_1398438347290547_6745698366078385163_n.jpg',
      description: 'Where technology meets artistry',
      tags: ['Digital Art', 'Futuristic', 'Innovation'],
    },
    {
      id: 10,
      title: 'Stage Dynamics',
      category: 'Concert Visuals',
      image: '/SnapInsta.to_308028021_4867071576727564_4488088787961724423_n.jpg',
      description: 'Dynamic stage visual design',
      tags: ['Stage Design', 'Lighting', 'Performance'],
    },
    {
      id: 11,
      title: 'Text in Motion',
      category: 'Lyrical Typography',
      image: '/SnapInsta.to_426340470_7182970705105711_6488078939018039786_n.jpg',
      description: 'Bringing lyrics to life through motion',
      tags: ['Motion Design', 'Typography', 'Storytelling'],
    },
    {
      id: 12,
      title: 'Brand Identity',
      category: 'Brand Campaigns',
      image: '/SnapInsta.to_358639305_18374822476062406_5771097012007308836_n.jpg',
      description: 'Crafting memorable brand experiences',
      tags: ['Identity', 'Branding', 'Visual Strategy'],
    },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
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
            A curated collection of visual stories, each crafted with passion and precision. 
            From music videos to brand campaigns, every project tells a unique story.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-display font-medium tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
          
          {/* Special Advertisement Button */}
          <a
            href="https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-display font-medium tracking-wider transition-all duration-300 bg-gray-100 text-gray-900 hover:bg-white hover:scale-105 flex items-center space-x-2"
          >
            <Play className="h-4 w-4" />
            <span>Jeeto Baazi Khel Ke | ICC Men's Champions Trophy 2025</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-xl font-bold mb-2 tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700/80 text-xs font-display font-medium tracking-wide text-gray-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold tracking-wide text-gray-100">
                    {item.title}
                  </h3>
                  <span className="text-xs font-display font-medium tracking-wider text-gray-400 uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
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
            Every project in this portfolio started with a vision. Let's bring your vision to life 
            with the same passion and attention to detail.
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