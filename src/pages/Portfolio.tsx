import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'music-videos', name: 'Music Videos' },
    { id: 'lyrical-typography', name: 'Lyrical Typography' },
    { id: 'concert-visuals', name: 'Concert Visuals' },
    { id: 'advertisements', name: 'Advertisements' },
    { id: 'album-art', name: 'Album Art' },
  ];

  const projects = [
    // Music Videos
    {
      id: 1,
      title: 'Sufi Soul Journey',
      category: 'music-videos',
      type: 'Music Video',
      description: 'A spiritual exploration through visual storytelling',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      tags: ['Sufi', 'Spiritual', 'Cinematic'],
    },
    {
      id: 2,
      title: 'Urban Beats',
      category: 'music-videos',
      type: 'Music Video',
      description: 'Contemporary hip-hop visual narrative',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      tags: ['Hip-Hop', 'Urban', 'Street'],
    },

    // Lyrical Typography
    {
      id: 3,
      title: 'Ikka Collaboration',
      category: 'lyrical-typography',
      type: 'Lyrical Typography',
      description: 'Dynamic text animation synchronized with beats',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      tags: ['Typography', 'Animation', 'Rap'],
    },
    {
      id: 4,
      title: 'Poetic Motion',
      category: 'lyrical-typography',
      type: 'Lyrical Typography',
      description: 'Elegant typography dancing with melody',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      tags: ['Poetry', 'Motion', 'Elegant'],
    },

    // Concert Visuals
    {
      id: 5,
      title: 'Live Concert Experience',
      category: 'concert-visuals',
      type: 'Concert Visuals',
      description: 'Immersive live performance visuals',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example5',
      tags: ['Live', 'Concert', 'Immersive'],
    },
    {
      id: 6,
      title: 'Festival Stage Design',
      category: 'concert-visuals',
      type: 'Concert Visuals',
      description: 'Large-scale festival visual production',
      image: 'https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=example6',
      tags: ['Festival', 'Stage', 'Production'],
    },

    // Advertisements
    {
      id: 7,
      title: 'Karamyogi Atul Patel | TRIDENT GROUP',
      category: 'advertisements',
      type: 'Advertisement',
      description: 'Corporate brand storytelling through visual narrative',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=h34UTWSKOyk',
      tags: ['Corporate', 'Brand', 'Storytelling'],
    },
    {
      id: 8,
      title: 'Jeeto Baazi Khel Ke | ICC Men\'s Champions Trophy 2025',
      category: 'advertisements',
      type: 'Advertisement',
      description: 'Sports campaign with dynamic energy and excitement',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1',
      tags: ['Sports', 'Cricket', 'Campaign'],
    },

    // Album Art
    {
      id: 9,
      title: 'Mystic Melodies',
      category: 'album-art',
      type: 'Album Art',
      description: 'Ethereal album cover design',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: null,
      tags: ['Album', 'Cover', 'Design'],
    },
    {
      id: 10,
      title: 'Electronic Dreams',
      category: 'album-art',
      type: 'Album Art',
      description: 'Futuristic electronic music artwork',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: null,
      tags: ['Electronic', 'Futuristic', 'Digital'],
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.slice(0, 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return videoId ? `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg` : null;
  };

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            PORTFOLIO
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-sans text-gray-300">
            A curated collection of visual stories, each crafted with passion and precision
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
            FEATURED WORK
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 relative">
                    <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer">
                      <img
                        src={project.videoUrl ? getYouTubeThumbnail(project.videoUrl) || project.image : project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {project.videoUrl ? (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                          >
                            <Play className="h-8 w-8 text-gray-800 ml-1" />
                          </a>
                        ) : (
                          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                            <ExternalLink className="h-8 w-8 text-gray-800" />
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <span className="inline-block px-3 py-1 bg-gray-700/80 text-gray-200 text-sm font-display font-medium rounded-full mb-3 tracking-wide">
                          {project.type}
                        </span>
                        <h3 className="font-display text-3xl font-bold mb-2 tracking-wide text-white">
                          {project.title}
                        </h3>
                        <p className="font-sans text-white/80 text-lg">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 text-white hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 text-white hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gray-100' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
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
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.videoUrl ? getYouTubeThumbnail(project.videoUrl) || project.image : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.videoUrl ? (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                    >
                      <Play className="h-6 w-6 text-gray-800 ml-1" />
                    </a>
                  ) : (
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-6 w-6 text-gray-800" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm font-display font-medium rounded-full tracking-wide">
                    {project.type}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold mb-2 tracking-wide text-gray-100">
                  {project.title}
                </h3>

                <p className="font-sans text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs font-display rounded tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gray-800 rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans text-gray-300">
            Let's collaborate on your next visual project. From concept to completion, 
            I'll help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-100 hover:bg-white text-gray-900 rounded-full font-display font-semibold tracking-wider transition-all duration-300 hover:scale-105"
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