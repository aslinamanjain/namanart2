import React, { useState, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Music Videos', 'Advertisements', 'Lyrical Typography', 'Concert Visuals'];

  const portfolioItems = [
    // Music Videos
    {
      id: 1,
      title: 'Tere Bina',
      category: 'Music Videos',
      thumbnail: 'https://i.ytimg.com/vi/Ej6M7MEb_2s/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=Ej6M7MEb_2s',
      description: 'A heartfelt music video showcasing emotional storytelling through visual narrative.',
    },
    {
      id: 2,
      title: 'Khamoshi',
      category: 'Music Videos',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID2/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID2',
      description: 'Cinematic music video with dramatic lighting and compelling performances.',
    },
    {
      id: 3,
      title: 'Raatein',
      category: 'Music Videos',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID3/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID3',
      description: 'Night-themed music video with atmospheric visuals and mood lighting.',
    },
    {
      id: 4,
      title: 'Sapno Ka Raja',
      category: 'Music Videos',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID4/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID4',
      description: 'Dreamy music video with surreal visuals and creative cinematography.',
    },
    {
      id: 5,
      title: 'Dil Ki Baat',
      category: 'Music Videos',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID5/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID5',
      description: 'Romantic music video featuring beautiful locations and intimate moments.',
    },
    {
      id: 6,
      title: 'Zindagi',
      category: 'Music Videos',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID6/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID6',
      description: 'Life-celebrating music video with vibrant colors and energetic performances.',
    },

    // Advertisements
    {
      id: 7,
      title: 'ICC Mens Champions Trophy 2025',
      category: 'Advertisements',
      thumbnail: 'https://i.ytimg.com/vi/nA0z8N04v70/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1',
      description: 'Official promotional video for ICC Mens Champions Trophy 2025.',
    },
    {
      id: 8,
      title: 'Brand Campaign - Tech Innovation',
      category: 'Advertisements',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID8/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID8',
      description: 'Modern tech advertisement showcasing innovation and cutting-edge design.',
    },
    {
      id: 9,
      title: 'Fashion Brand Commercial',
      category: 'Advertisements',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID9/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID9',
      description: 'Stylish fashion commercial with high-end production values.',
    },
    {
      id: 10,
      title: 'Food & Beverage Campaign',
      category: 'Advertisements',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID10/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID10',
      description: 'Appetizing food commercial with mouth-watering visuals.',
    },

    // Lyrical Typography
    {
      id: 11,
      title: 'Poetic Expressions',
      category: 'Lyrical Typography',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID11/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID11',
      description: 'Beautiful typography animation bringing poetry to life.',
    },
    {
      id: 12,
      title: 'Song Lyrics Visualization',
      category: 'Lyrical Typography',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID12/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID12',
      description: 'Dynamic text animation synchronized with music rhythm.',
    },
    {
      id: 13,
      title: 'Motivational Quotes',
      category: 'Lyrical Typography',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID13/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID13',
      description: 'Inspiring typography design with motivational messages.',
    },
    {
      id: 14,
      title: 'Hindi Poetry Animation',
      category: 'Lyrical Typography',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID14/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID14',
      description: 'Elegant Hindi poetry brought to life through typography.',
    },

    // Concert Visuals
    {
      id: 15,
      title: 'Live Concert Backdrop',
      category: 'Concert Visuals',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID15/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID15',
      description: 'Dynamic concert visuals synchronized with live performance.',
    },
    {
      id: 16,
      title: 'Music Festival Graphics',
      category: 'Concert Visuals',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID16/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID16',
      description: 'Vibrant festival graphics creating immersive audience experience.',
    },
    {
      id: 17,
      title: 'Stage LED Visuals',
      category: 'Concert Visuals',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID17/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID17',
      description: 'Custom LED screen content for major concert performances.',
    },
    {
      id: 18,
      title: 'Artist Tour Visuals',
      category: 'Concert Visuals',
      thumbnail: 'https://i.ytimg.com/vi/YourVideoID18/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=YourVideoID18',
      description: 'Complete visual package for multi-city artist tour.',
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/640x360/374151/9CA3AF?text=Video+Thumbnail';
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-6 w-6 text-gray-900 ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gray-900/80 text-gray-100 text-sm font-display font-medium rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 font-sans">
                  {item.description}
                </p>
                
                {/* Watch Button */}
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-gray-100 font-display font-medium tracking-wide transition-colors duration-300 group/link"
                >
                  <span>WATCH NOW</span>
                  <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400 font-sans">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-gray-800 to-transparent rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE TOGETHER?
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-sans text-gray-300">
            Each project tells a unique story. Let's collaborate to bring your vision to life 
            through compelling visual narratives that resonate with your audience.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-100 hover:bg-white text-gray-900 rounded-full font-display font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
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