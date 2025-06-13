import React, { useEffect, useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'ICC Men\'s Champions Trophy 2025',
      category: 'Music Videos',
      thumbnail: 'https://img.youtube.com/vi/nA0z8N04v70/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1',
      description: 'Official promotional video for ICC Men\'s Champions Trophy 2025',
    },
    {
      id: 2,
      title: 'Lyrical Typography - "Heartbeats"',
      category: 'Typography',
      thumbnail: '/SnapInsta.to_173090840_308200040751966_8679189721205119769_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      description: 'Dynamic lyrical typography animation with synchronized motion graphics',
    },
    {
      id: 3,
      title: 'Brand Campaign - Urban Vibes',
      category: 'Commercial',
      thumbnail: '/SnapInsta.to_275600141_146335131183628_4164826839623651607_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      description: 'High-energy commercial campaign featuring urban lifestyle aesthetics',
    },
    {
      id: 4,
      title: 'Concert Visuals - Electronic Dreams',
      category: 'Concert Visuals',
      thumbnail: '/SnapInsta.to_276003019_488834996058322_6776313799444352570_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      description: 'Immersive visual experience for electronic music concert',
    },
    {
      id: 5,
      title: 'Music Video - "Neon Nights"',
      category: 'Music Videos',
      thumbnail: '/SnapInsta.to_314026947_850130653003703_4847075968031239765_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example5',
      description: 'Cinematic music video with neon-soaked urban landscapes',
    },
    {
      id: 6,
      title: 'Typography Art - "Flow State"',
      category: 'Typography',
      thumbnail: '/SnapInsta.to_318135098_674830017452305_6397829693916687356_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example6',
      description: 'Fluid typography animation exploring the concept of flow',
    },
    {
      id: 7,
      title: 'Brand Identity - Tech Startup',
      category: 'Commercial',
      thumbnail: '/SnapInsta.to_341955428_238375682189322_8903338927072876169_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example7',
      description: 'Complete brand identity package for innovative tech startup',
    },
    {
      id: 8,
      title: 'Live Performance Visuals',
      category: 'Concert Visuals',
      thumbnail: '/SnapInsta.to_411873655_761169756046871_1653460974569319683_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example8',
      description: 'Real-time generated visuals for live music performance',
    },
    {
      id: 9,
      title: 'Music Video - "Digital Love"',
      category: 'Music Videos',
      thumbnail: '/SnapInsta.to_176520996_1665412927180045_6728980124454699181_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example9',
      description: 'Futuristic love story told through digital aesthetics',
    },
    {
      id: 10,
      title: 'Kinetic Typography - "Rhythm"',
      category: 'Typography',
      thumbnail: '/SnapInsta.to_290351441_1398438347290547_6745698366078385163_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example10',
      description: 'Typography that moves to the beat of the music',
    },
    {
      id: 11,
      title: 'Product Launch Campaign',
      category: 'Commercial',
      thumbnail: '/SnapInsta.to_308028021_4867071576727564_4488088787961724423_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example11',
      description: 'High-impact product launch campaign with motion graphics',
    },
    {
      id: 12,
      title: 'Festival Stage Visuals',
      category: 'Concert Visuals',
      thumbnail: '/SnapInsta.to_426340470_7182970705105711_6488078939018039786_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example12',
      description: 'Large-scale visuals for music festival main stage',
    },
    {
      id: 13,
      title: 'Music Video - "Midnight Drive"',
      category: 'Music Videos',
      thumbnail: '/SnapInsta.to_358639305_18374822476062406_5771097012007308836_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example13',
      description: 'Atmospheric night drive through the city',
    },
    {
      id: 14,
      title: 'Animated Logo Series',
      category: 'Typography',
      thumbnail: '/SnapInsta.to_468209500_18474030433062406_9066135542449298808_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example14',
      description: 'Collection of animated logo designs for various brands',
    },
    {
      id: 15,
      title: 'Corporate Video - Innovation',
      category: 'Commercial',
      thumbnail: '/SnapInsta.to_470174654_18477468892062406_4998258246393935202_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example15',
      description: 'Corporate video showcasing innovation and technology',
    },
    {
      id: 16,
      title: 'DJ Set Visuals - Underground',
      category: 'Concert Visuals',
      thumbnail: '/SnapInsta.to_504441240_18511530358062406_1162404576387789428_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example16',
      description: 'Dark, underground aesthetic for electronic DJ set',
    },
  ];

  const categories = ['All', 'Music Videos', 'Typography', 'Commercial', 'Concert Visuals'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            PORTFOLIO
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-sans text-gray-300">
            A curated collection of visual stories, from music videos and concert visuals 
            to brand campaigns and lyrical typography. Each project represents a unique 
            collaboration and creative journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
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
        </div>

        {/* Projects Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>

                    {/* Video Link */}
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`Watch ${project.title}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-display font-medium rounded-full tracking-wider">
                        {project.category}
                      </span>
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
                        aria-label={`Open ${project.title} in new tab`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <h3 className="font-display text-xl font-bold mb-2 text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="font-sans text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-transparent rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans text-gray-300">
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