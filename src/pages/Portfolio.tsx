import React, { useEffect, useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'music-videos', name: 'Music Videos' },
    { id: 'lyrical', name: 'Lyrical Typography' },
    { id: 'concert', name: 'Concert Visuals' },
    { id: 'advertisements', name: 'Advertisements' },
    { id: 'album-art', name: 'Album Art' },
  ];

  const portfolioItems = [
    // Music Videos
    {
      id: 1,
      title: 'Emotional Ballad',
      category: 'music-videos',
      type: 'Music Video',
      image: '/SnapInsta.to_173090840_308200040751966_8679189721205119769_n.jpg',
      description: 'A heartfelt visual narrative',
    },
    {
      id: 2,
      title: 'Urban Beats',
      category: 'music-videos',
      type: 'Music Video',
      image: '/SnapInsta.to_275600141_146335131183628_4164826839623651607_n.jpg',
      description: 'High-energy street visuals',
    },
    {
      id: 3,
      title: 'Indie Folk',
      category: 'music-videos',
      type: 'Music Video',
      image: '/SnapInsta.to_276003019_488834996058322_6776313799444352570_n.jpg',
      description: 'Organic storytelling approach',
    },
    {
      id: 4,
      title: 'Electronic Dreams',
      category: 'music-videos',
      type: 'Music Video',
      image: '/SnapInsta.to_314026947_850130653003703_4847075968031239765_n.jpg',
      description: 'Futuristic visual experience',
    },
    {
      id: 5,
      title: 'Acoustic Sessions',
      category: 'music-videos',
      type: 'Music Video',
      image: '/SnapInsta.to_318135098_674830017452305_6397829693916687356_n.jpg',
      description: 'Intimate performance capture',
    },
    {
      id: 6,
      title: 'Pop Anthem',
      category: 'music-videos',
      type: 'Music Video',
      image: '/SnapInsta.to_341955428_238375682189322_8903338927072876169_n.jpg',
      description: 'Vibrant and energetic visuals',
    },

    // Lyrical Typography
    {
      id: 7,
      title: 'Lyrical Motion',
      category: 'lyrical',
      type: 'Typography Video',
      image: '/SnapInsta.to_411873655_761169756046871_1653460974569319683_n.jpg',
      description: 'Dynamic text animations',
    },
    {
      id: 8,
      title: 'Word Flow',
      category: 'lyrical',
      type: 'Typography Video',
      image: '/SnapInsta.to_176520996_1665412927180045_6728980124454699181_n.jpg',
      description: 'Elegant typography design',
    },
    {
      id: 9,
      title: 'Verse Visuals',
      category: 'lyrical',
      type: 'Typography Video',
      image: '/SnapInsta.to_290351441_1398438347290547_6745698366078385163_n.jpg',
      description: 'Creative text storytelling',
    },

    // Concert Visuals
    {
      id: 10,
      title: 'Live Concert Experience',
      category: 'concert',
      type: 'Concert Visuals',
      image: '/SnapInsta.to_308028021_4867071576727564_4488088787961724423_n.jpg',
      description: 'Immersive stage visuals',
    },
    {
      id: 11,
      title: 'Festival Backdrop',
      category: 'concert',
      type: 'Concert Visuals',
      image: '/SnapInsta.to_426340470_7182970705105711_6488078939018039786_n.jpg',
      description: 'Large-scale visual production',
    },
    {
      id: 12,
      title: 'Arena Show',
      category: 'concert',
      type: 'Concert Visuals',
      image: '/SnapInsta.to_358639305_18374822476062406_5771097012007308836_n.jpg',
      description: 'Dynamic lighting and effects',
    },

    // Album Art
    {
      id: 13,
      title: 'Album Cover Design',
      category: 'album-art',
      type: 'Album Art',
      image: '/SnapInsta.to_468209500_18474030433062406_9066135542449298808_n.jpg',
      description: 'Conceptual artwork design',
    },
    {
      id: 14,
      title: 'EP Artwork',
      category: 'album-art',
      type: 'Album Art',
      image: '/SnapInsta.to_470174654_18477468892062406_4998258246393935202_n.jpg',
      description: 'Minimalist visual approach',
    },
    {
      id: 15,
      title: 'Single Cover',
      category: 'album-art',
      type: 'Album Art',
      image: '/SnapInsta.to_504441240_18511530358062406_1162404576387789428_n.jpg',
      description: 'Bold graphic design',
    },
  ];

  const advertisements = [
    {
      title: 'Limitless | TRIDENT GROUP',
      url: 'https://www.youtube.com/watch?v=h34UTWSKOyk',
      thumbnail: `https://img.youtube.com/vi/h34UTWSKOyk/maxresdefault.jpg`,
    },
    {
      title: 'Jeeto Baazi Khel Ke | ICC Men\'s Champions Trophy 2025',
      url: 'https://www.youtube.com/watch?v=nA0z8N04v70',
      thumbnail: `https://img.youtube.com/vi/nA0z8N04v70/maxresdefault.jpg`,
    },
    {
      title: 'New Advertisement Campaign',
      url: 'https://rb.gy/empmvs',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

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
            to create memorable experiences across music, brands, and digital media.
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
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {selectedCategory !== 'advertisements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-display font-medium text-gray-300 mb-2 tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="font-display text-xl font-bold mb-2 tracking-wide text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-sm font-sans text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Advertisement Campaigns Section */}
        {selectedCategory === 'advertisements' && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
                ADVERTISEMENT CAMPAIGNS
              </h2>
              <p className="text-lg max-w-3xl mx-auto font-sans text-gray-300">
                Creating compelling brand stories through visual excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advertisements.map((ad, index) => (
                <div key={index} className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={ad.thumbnail}
                      alt={ad.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        {ad.url.includes('youtube.com') ? (
                          <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                        ) : (
                          <ExternalLink className="h-6 w-6 text-gray-800" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 tracking-wide text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                      {ad.title}
                    </h3>
                  </div>
                  
                  {/* Click overlay */}
                  <a
                    href={ad.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Watch ${ad.title}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-transparent rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE?
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-sans text-gray-300">
            Let's collaborate and bring your vision to life through compelling visual storytelling.
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