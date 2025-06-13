import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'music-videos', name: 'Music Videos' },
    { id: 'lyrical-typography', name: 'Lyrical Typography' },
    { id: 'concert-visuals', name: 'Concert Visuals' },
    { id: 'advertisements', name: 'Advertisements' },
  ];

  const projects = [
    // Music Videos
    {
      id: 1,
      title: 'Ikka - Sufi Soul Journey',
      category: 'music-videos',
      type: 'Music Video',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      description: 'A spiritual journey through Sufi music and visuals',
      year: '2024',
      client: 'Ikka',
    },
    {
      id: 2,
      title: 'Urban Beats Collection',
      category: 'music-videos',
      type: 'Music Video Series',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      description: 'Contemporary urban music video series',
      year: '2024',
      client: 'Independent',
    },
    
    // Lyrical Typography
    {
      id: 3,
      title: 'Poetic Motion - Hindi Verses',
      category: 'lyrical-typography',
      type: 'Lyrical Typography',
      thumbnail: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      description: 'Beautiful Hindi poetry brought to life through motion typography',
      year: '2024',
      client: 'Various Artists',
    },
    {
      id: 4,
      title: 'Rhythmic Words',
      category: 'lyrical-typography',
      type: 'Typography Animation',
      thumbnail: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      description: 'Dynamic typography synchronized with musical beats',
      year: '2023',
      client: 'Music Label',
    },
    
    // Concert Visuals
    {
      id: 5,
      title: 'Live Concert Experience',
      category: 'concert-visuals',
      type: 'Live Visuals',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example5',
      description: 'Immersive visual experience for live performances',
      year: '2024',
      client: 'Concert Venue',
    },
    {
      id: 6,
      title: 'Festival Stage Design',
      category: 'concert-visuals',
      type: 'Stage Visuals',
      thumbnail: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example6',
      description: 'Large-scale festival visual production',
      year: '2023',
      client: 'Music Festival',
    },
  ];

  const advertisements = [
    {
      title: 'Karamyogi Atul Patel | TRIDENT GROUP',
      url: 'https://www.youtube.com/watch?v=h34UTWSKOyk',
      thumbnail: 'https://img.youtube.com/vi/h34UTWSKOyk/maxresdefault.jpg',
      description: 'Corporate brand campaign showcasing leadership and vision',
      year: '2024',
      client: 'Trident Group'
    },
    {
      title: 'Jeeto Baazi Khel Ke | ICC Men\'s Champions Trophy 2025',
      url: 'https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1',
      thumbnail: 'https://img.youtube.com/vi/nA0z8N04v70/maxresdefault.jpg',
      description: 'Sports campaign for ICC Men\'s Champions Trophy 2025',
      year: '2024',
      client: 'ICC'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            PORTFOLIO
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-sans text-gray-300">
            A curated collection of visual stories, from music videos to concert experiences, 
            each crafted with passion and precision.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-display font-medium tracking-wider transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gray-100 text-gray-900 shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Advertisements Showcase */}
        {(selectedCategory === 'all' || selectedCategory === 'advertisements') && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
                ADVERTISEMENTS SHOWCASE
              </h2>
              <p className="text-lg max-w-3xl mx-auto font-sans text-gray-300">
                Creating compelling visual narratives for brands and campaigns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {advertisements.map((ad, index) => (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative aspect-video bg-gray-700 overflow-hidden">
                    <img
                      src={ad.thumbnail}
                      alt={ad.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={ad.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="h-6 w-6 text-gray-800 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-display font-medium tracking-wider text-gray-400">
                        {ad.year} • {ad.client}
                      </span>
                      <a
                        href={ad.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 tracking-wide text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                      {ad.title}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm leading-relaxed">
                      {ad.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {selectedCategory !== 'advertisements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-700 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-gray-800 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-display font-medium tracking-wider text-gray-400">
                      {project.year} • {project.type}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-3 tracking-wide text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-display font-medium tracking-wider text-gray-500">
                      CLIENT: {project.client}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && selectedCategory !== 'advertisements' && (
          <div className="text-center py-20">
            <h3 className="font-display text-2xl font-semibold mb-4 text-gray-300">
              Coming Soon
            </h3>
            <p className="font-sans text-gray-400">
              New projects in this category are currently in development.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gray-800 rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE?
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-sans text-gray-300">
            Let's collaborate on your next visual project. From concept to completion, 
            I'll help bring your creative vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-100 hover:bg-white text-gray-900 rounded-full font-display font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>START A PROJECT</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;