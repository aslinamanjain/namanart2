import React, { useEffect, useState } from 'react';
import { Award, Users, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Creative Excellence',
      description: 'Recognized for innovative approaches in AI-assisted video production',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaborative Spirit',
      description: 'Worked with renowned artists including Ikka and emerging talents',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Technical Innovation',
      description: 'Pioneering the integration of AI technology with traditional filmmaking',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Passion-Driven',
      description: 'Every project is infused with genuine emotion and artistic integrity',
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
            VISUAL STORYTELLER • CREATIVE DIRECTOR • AI INNOVATOR
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                  Welcome to my creative universe. I'm Naman, a visual storyteller who believes in the 
                  power of emotion-driven narratives enhanced by cutting-edge artificial intelligence.
                </p>
                
                <p>
                  My journey began with a simple fascination: how can technology amplify human creativity 
                  rather than replace it? This question has guided my work across multiple disciplines, 
                  from directing compelling video content to crafting lyrical typography that dances 
                  with music.
                </p>
                
                <p>
                  Through collaborations with artists like <span className="font-display font-semibold tracking-wide text-gray-100">Ikka</span> and 
                  explorations of <span className="font-display font-semibold tracking-wide text-gray-100">Sufi themes</span>, I've discovered 
                  that the most powerful stories emerge when traditional artistry meets technological innovation.
                </p>
                
                <p>
                  Each project is a journey of discovery, whether I'm creating immersive concert visuals 
                  that sync with live performances or designing album artwork that captures the soul of music.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-center mb-12 tracking-widest text-gray-100">
            CREATIVE PHILOSOPHY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-700 text-gray-300 rounded-lg flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-3 tracking-wide text-gray-100">
                      {achievement.title}
                    </h3>
                    <p className="leading-relaxed font-sans text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
                "The Making Of: Sufi Soul Journey"
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