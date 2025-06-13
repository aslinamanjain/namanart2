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
      title: 'Sufi Soul Journey',
      category: 'music-videos',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A mystical exploration of Sufi themes through visual storytelling',
      tags: ['Sufi', 'Spiritual', 'Cinematic'],
      year: '2024',
    },
    {
      id: 2,
      title: 'Urban Rhythms',
      category: 'music-videos',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary hip-hop visuals with dynamic urban aesthetics',
      tags: ['Hip-Hop', 'Urban', 'Dynamic'],
      year: '2024',
    },
    {
      id: 3,
      title: 'Ikka Collaboration',
      category: 'music-videos',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-energy music video featuring bold visual narratives',
      tags: ['Collaboration', 'Energy', 'Bold'],
      year: '2023',
    },

    // Lyrical Typography
    {
      id: 4,
      title: 'Dancing Words',
      category: 'lyrical-typography',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Typography that moves with the rhythm of the music',
      tags: ['Typography', 'Motion', 'Rhythm'],
      year: '2024',
    },
    {
      id: 5,
      title: 'Poetic Visuals',
      category: 'lyrical-typography',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant typography design for emotional ballads',
      tags: ['Poetry', 'Elegant', 'Emotional'],
      year: '2024',
    },

    // Concert Visuals
    {
      id: 6,
      title: 'Live Concert Experience',
      category: 'concert-visuals',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Immersive visual experience for live performances',
      tags: ['Live', 'Immersive', 'Performance'],
      year: '2024',
    },
    {
      id: 7,
      title: 'Stage Dynamics',
      category: 'concert-visuals',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dynamic stage visuals synchronized with live music',
      tags: ['Stage', 'Dynamic', 'Synchronized'],
      year: '2023',
    },

    // Advertisements
    {
      id: 8,
      title: 'Brand Campaign',
      category: 'advertisements',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Creative advertising campaign with compelling narratives',
      tags: ['Brand', 'Campaign', 'Narrative'],
      year: '2024',
    },
  ];

  const advertisements = [
    {
      title: 'Karamyogi Atul Patel | TRIDENT GROUP',
      url: 'https://www.youtube.com/watch?v=h34UTWSKOyk',
      thumbnail: 'https://img.youtube.com/vi/h34UTWSKOyk/maxresdefault.jpg',
      description: 'Corporate brand campaign showcasing leadership and vision'
    },
    {
      title: 'Jeeto Baazi Khel Ke | ICC Men\'s Champions Trophy 2025',
      url: 'https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1',
      thumbnail: 'https://img.youtube.com/vi/nA0z8N04v70/maxresdefault.jpg',
      description: 'Sports campaign for ICC Men\'s Champions Trophy 2025'
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
            A curated collection of visual stories, each crafted with passion and precision
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

        {/* Advertisement Videos Section - Only show when advertisements category is selected */}
        {selectedCategory === 'advertisements' && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
                ADVERTISEMENT CAMPAIGNS
              </h2>
              <p className="text-lg max-w-3xl mx-auto font-sans text-gray-300">
                Creating compelling visual narratives for brands and campaigns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {advertisements.map((ad, index) => (
                <a
                  key={index}
                  href={ad.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative aspect-video bg-gray-700 overflow-hidden">
                    <img
                      src={ad.thumbnail}
                      alt={ad.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-gray-800 ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ExternalLink className="h-5 w-5 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 tracking-wide text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                      {ad.title}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm mb-2">
                      {ad.description}
                    </p>
                    <p className="font-sans text-gray-500 text-xs">
                      Click to watch on YouTube
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <Play className="h-6 w-6 text-gray-800 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gray-900/80 text-gray-100 px-3 py-1 rounded-full text-sm font-display font-medium">
                  {project.year}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 tracking-wide text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-sans text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-display font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-4 text-gray-100">
              No projects found
            </h3>
            <p className="font-sans text-gray-400 max-w-md mx-auto">
              No projects match the selected category. Try selecting a different category to explore more work.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gray-800 rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans text-gray-300">
            Each project tells a unique story. Let's collaborate to bring your vision to life 
            through compelling visual narratives.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-100 hover:bg-white text-gray-900 rounded-full font-display font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>START A PROJECT</span>
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;