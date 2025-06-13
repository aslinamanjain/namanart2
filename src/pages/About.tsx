import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

        {/* Making Of Section */}
        <div className="bg-gray-800 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
              BEHIND THE SCENES
            </h2>
            <p className="text-lg max-w-3xl mx-auto font-sans text-gray-300">
              Get an inside look at my creative process and the passion that drives every project
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-gray-700 rounded-xl overflow-hidden mb-8 group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="The Making Of"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                <div className="w-0 h-0 border-l-[16px] border-l-gray-800 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="font-display text-2xl font-semibold mb-2 tracking-wide text-white">
                "The Making Of: Creative Journey"
              </h3>
              <p className="font-sans text-white/70">
                A deep dive into the creative process behind one of my most meaningful projects
              </p>
            </div>
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
    </div>
  );
};

export default About;