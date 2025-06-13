import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const brands = [
    { name: 'T-Series', logo: '/T-series-logo.svg' },
    { name: 'Sony Music Entertainment', logo: '/Sony Music Entertainment.png' },
    { name: 'Warner Music India', logo: '/WARNER-MUSIC-INDIA-LOGO-e1709294747578.webp' },
    { name: 'Apni Dhun', logo: '/Apni Dhun Graphic Logo.png' },
    { name: 'Images Brand', logo: '/images.png' },
    { name: 'Cropped Logo', logo: '/cropped-logo-1-1.png' },
    { name: 'Josh Skills', logo: '/5636Vx3Q_400x400.jpg' },
    { name: 'XP&D', logo: '/XP&D.png' },
  ];

  const advertisements = [
    {
      title: 'Jeeto Baazi Khel Ke | ICC Men\'s Champions Trophy 2025',
      url: 'https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1',
      thumbnail: `https://img.youtube.com/vi/nA0z8N04v70/maxresdefault.jpg`,
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            ABOUT NAMAN ART
          </h1>
          <p className="text-xl font-display font-medium tracking-widest text-gray-300">
            VISUAL ARTIST
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
              <img
                src="/image.png"
                alt="Naman Art"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-700/40 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-600/40 rounded-full blur-2xl" />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 tracking-wide text-gray-100">
                The Artist Behind the Vision
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed font-sans text-gray-300">
                <p>
                  Hi, I'm Naman, the visual mind behind NamanArt.
                </p>
                
                <p>
                  I'm an independent visual artist working across music, brands, and digital media. 
                  My work blends cinematic direction, motion design, and storytelling to create visuals 
                  that not only look good but feel powerful. From music videos and concert visuals to 
                  ad campaigns and digital art, I bring ideas to life with emotion, rhythm, and impact.
                </p>
                
                <p>
                  Each project I take on is a collaboration — a chance to build something bold, expressive, 
                  and unique. Whether you're an artist, a brand, or a creative studio, I'm here to craft 
                  visuals that move people.
                </p>
                
                <p className="font-display font-semibold tracking-wide text-gray-100">
                  Let's make something unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brands That Chose My Vision */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
              BRANDS THAT CHOSE MY VISION
            </h2>
            <p className="text-lg max-w-3xl mx-auto font-sans text-gray-300">
              Trusted by leading music labels and brands to create compelling visual narratives
            </p>
          </div>

          {/* Simple Infinite Sliding Strip */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-32 flex items-center overflow-hidden">
              <div className="logo-strip flex animate-scroll-left space-x-16 whitespace-nowrap">
                {/* Triple the logos for seamless loop */}
                {brands.concat(brands, brands).map((brand, index) => (
                  <div key={index} className="flex-shrink-0 h-20 flex items-center justify-center px-8">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
                      style={{ maxHeight: '80px', maxWidth: '200px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advertisement Campaigns */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
              ADVERTISEMENT CAMPAIGNS
            </h2>
            <p className="text-lg max-w-3xl mx-auto font-sans text-gray-300">
              Creating compelling brand stories through visual excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
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
                      <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
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

        {/* Quote Section */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-transparent rounded-2xl p-12">
          <blockquote className="font-display text-2xl md:text-3xl italic leading-relaxed mb-6 tracking-wide text-gray-100">
            "Art is not about perfection; it's about connection. Every frame, every beat, 
            every visual element should resonate with the human soul."
          </blockquote>
          <cite className="font-display font-medium text-lg tracking-wider text-gray-300">
            — NAMAN ART
          </cite>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .logo-strip:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default About;