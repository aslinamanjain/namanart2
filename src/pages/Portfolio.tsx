import React, { useState, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Music Videos', 'Lyrical Videos', 'Concert Visuals', 'Brand Work'];

  const projects = [
    {
      id: 1,
      title: 'Gagan - Lyrical Video',
      category: 'Lyrical Videos',
      image: '/SnapInsta.to_173090840_308200040751966_8679189721205119769_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      description: 'A vibrant lyrical video featuring dynamic typography and visual storytelling.',
    },
    {
      id: 2,
      title: 'Concert Visual Experience',
      category: 'Concert Visuals',
      image: '/SnapInsta.to_275600141_146335131183628_4164826839623651607_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      description: 'Immersive concert visuals designed to enhance live performance experiences.',
    },
    {
      id: 3,
      title: 'Brand Campaign - Visual Identity',
      category: 'Brand Work',
      image: '/SnapInsta.to_276003019_488834996058322_6776313799444352570_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      description: 'Complete visual identity and campaign design for emerging brand.',
    },
    {
      id: 4,
      title: 'Music Video Production',
      category: 'Music Videos',
      image: '/SnapInsta.to_314026947_850130653003703_4847075968031239765_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      description: 'Full-scale music video production with cinematic direction and post-production.',
    },
    {
      id: 5,
      title: 'Typography Animation',
      category: 'Lyrical Videos',
      image: '/SnapInsta.to_318135098_674830017452305_6397829693916687356_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example5',
      description: 'Kinetic typography animation synchronized with musical beats.',
    },
    {
      id: 6,
      title: 'Live Performance Visuals',
      category: 'Concert Visuals',
      image: '/SnapInsta.to_341955428_238375682189322_8903338927072876169_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example6',
      description: 'Real-time visual effects and projections for live stage performances.',
    },
    {
      id: 7,
      title: 'Commercial Advertisement',
      category: 'Brand Work',
      image: '/SnapInsta.to_411873655_761169756046871_1653460974569319683_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example7',
      description: 'Creative commercial advertisement with compelling visual narrative.',
    },
    {
      id: 8,
      title: 'Artistic Music Video',
      category: 'Music Videos',
      image: '/SnapInsta.to_176520996_1665412927180045_6728980124454699181_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example8',
      description: 'Artistic approach to music video with experimental visual techniques.',
    },
    {
      id: 9,
      title: 'Lyrical Storytelling',
      category: 'Lyrical Videos',
      image: '/SnapInsta.to_290351441_1398438347290547_6745698366078385163_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example9',
      description: 'Narrative-driven lyrical video combining text and visual metaphors.',
    },
    {
      id: 10,
      title: 'Festival Stage Design',
      category: 'Concert Visuals',
      image: '/SnapInsta.to_308028021_4867071576727564_4488088787961724423_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example10',
      description: 'Large-scale festival stage visual design and implementation.',
    },
    {
      id: 11,
      title: 'Product Launch Campaign',
      category: 'Brand Work',
      image: '/SnapInsta.to_426340470_7182970705105711_6488078939018039786_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example11',
      description: 'Comprehensive visual campaign for major product launch.',
    },
    {
      id: 12,
      title: 'Cinematic Music Video',
      category: 'Music Videos',
      image: '/SnapInsta.to_358639305_18374822476062406_5771097012007308836_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example12',
      description: 'Cinematic storytelling approach with high production value.',
    },
    {
      id: 13,
      title: 'Dynamic Lyrical Design',
      category: 'Lyrical Videos',
      image: '/SnapInsta.to_468209500_18474030433062406_9066135542449298808_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example13',
      description: 'Dynamic typography and motion graphics for lyrical content.',
    },
    {
      id: 14,
      title: 'Interactive Concert Experience',
      category: 'Concert Visuals',
      image: '/SnapInsta.to_470174654_18477468892062406_4998258246393935202_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example14',
      description: 'Interactive visual elements responding to live music performance.',
    },
    {
      id: 15,
      title: 'ICC Mens Champions Trophy 2025',
      category: 'Brand Work',
      image: '/SnapInsta.to_504441240_18511530358062406_1162404576387789428_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=nA0z8N04v70&list=RDnA0z8N04v70&start_radio=1',
      description: 'Official promotional video for ICC Mens Champions Trophy 2025.',
    },
    {
      id: 16,
      title: 'Emotional Music Video',
      category: 'Music Videos',
      image: '/SnapInsta.to_471864078_18480106300062406_656075779399158_n.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example16',
      description: 'Emotionally driven music video with powerful visual storytelling.',
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
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
            A curated collection of visual stories, from music videos and concert visuals 
            to brand campaigns and lyrical typography.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-display font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                  priority={index < 6} // Prioritize first 6 images
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full font-display font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Play className="h-4 w-4" />
                    <span>WATCH</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-display font-medium tracking-wider text-gray-400 uppercase">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3 text-gray-100 tracking-wide">
                  {project.title}
                </h3>
                
                <p className="font-sans text-gray-300 leading-relaxed">
                  {project.description}
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
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans text-gray-300">
            Let's collaborate on your next visual project. From concept to completion, 
            I'll help bring your creative vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-3 bg-gray-100 hover:bg-white text-gray-900 px-8 py-4 rounded-full font-display font-semibold tracking-wider transition-all duration-300 hover:scale-105"
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