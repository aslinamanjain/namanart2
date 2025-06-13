import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, X } from 'lucide-react';

interface VideoProject {
  id: string;
  title: string;
  thumbnail?: string;
  category: 'music-video' | 'lyrical' | 'concert' | 'commercial' | 'other';
}

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work', count: 0 },
    { id: 'music-video', name: 'Music Videos', count: 0 },
    { id: 'lyrical', name: 'Lyrical Videos', count: 0 },
    { id: 'concert', name: 'Concert Visuals', count: 0 },
    { id: 'commercial', name: 'Commercials', count: 0 },
    { id: 'other', name: 'Other Projects', count: 0 },
  ];

  const videoProjects: VideoProject[] = [
    // Music Videos
    { id: 'h34UTWSKOyk', title: 'ICC Mens Champions Trophy 2025', category: 'other' },
    { id: 'Ej8rdi-cwdw', title: 'Baarish Ban Jaana', category: 'music-video' },
    { id: 'kJa2kwoZ2a4', title: 'Lut Gaye', category: 'music-video' },
    { id: 'RLzC55ai0yw', title: 'Tere Bin Kive', category: 'music-video' },
    { id: 'IIGKdDHbkbg', title: 'Raataan Lambiyan', category: 'music-video' },
    { id: 'NT1vbxjzTVo', title: 'Ranjha', category: 'music-video' },
    { id: 'YBqDATEltNE', title: 'Kesariya', category: 'music-video' },
    { id: 'JFcgOboQZ08', title: 'Tera Hone Laga Hoon', category: 'music-video' },
    { id: 'gumWVOYn-wE', title: 'Pasoori', category: 'music-video' },
    { id: 'CAL4WMpBNs0', title: 'Excuses', category: 'music-video' },
    { id: 'WBOT0Tqpbag', title: 'Softly', category: 'music-video' },
    { id: 'zABLecsR5UE', title: 'Maan Meri Jaan', category: 'music-video' },
    { id: 'X_tYrnv_o6A', title: 'Tum Hi Aana', category: 'music-video' },
    { id: 'Jjj_bigbzNA', title: 'Dil Diyan Gallan', category: 'music-video' },
    { id: 'JFcgOboQZ08', title: 'Tera Hone Laga Hoon', category: 'music-video' },
    { id: 'YykjpeuMNEk', title: 'Perfect', category: 'music-video' },
    { id: 'hLQl3WQQoQ0', title: 'Someone You Loved', category: 'music-video' },
    { id: 'SlPhMPnQ58k', title: 'Watermelon Sugar', category: 'music-video' },
    { id: 'OPf0YbXqDm0', title: 'Uptown Funk', category: 'music-video' },
    { id: 'fRh_vgS2dFE', title: 'Sorry', category: 'music-video' },
    { id: 'RgKAFK5djSk', title: 'Wasted Times', category: 'music-video' },
    { id: 'uelHwf8o7_U', title: 'Lovely', category: 'music-video' },
    { id: 'hT_nvWreIhg', title: 'Counting Stars', category: 'music-video' },
    { id: 'CevxZvSJLk8', title: 'Radioactive', category: 'music-video' },
    { id: 'ktvTqknDobU', title: 'Imagine', category: 'music-video' },
    { id: 'QkF3oxziUI4', title: 'Viva La Vida', category: 'music-video' },
    { id: 'nfWlot6h_JM', title: 'Shake It Off', category: 'music-video' },
    { id: 'RBumgq5yVrA', title: 'Let Her Go', category: 'music-video' },
    { id: 'pAgnJDJN4VA', title: 'Boulevard of Broken Dreams', category: 'music-video' },
    { id: 'Zi_XLOBDo_Y', title: 'Billie Jean', category: 'music-video' },
    { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', category: 'music-video' },
    { id: 'djV11Xbc914', title: 'Take On Me', category: 'music-video' },
    { id: 'rYEDA3JcQqw', title: 'Rolling in the Deep', category: 'music-video' },
    { id: 'lp-EO5I60KA', title: 'Thinking Out Loud', category: 'music-video' },
    { id: 'ru0K8uYEZWw', title: 'CAN\'T STOP THE FEELING!', category: 'music-video' },
    { id: 'YQHsXMglC9A', title: 'Hello', category: 'music-video' },
    { id: 'fLexgOxsZu0', title: 'All of Me', category: 'music-video' },
    { id: 'nrJxI_euoCc', title: 'Stressed Out', category: 'music-video' },
    { id: 'iGk5fR-t5AU', title: 'Counting Stars', category: 'music-video' },
    { id: 'JGwWNGJdvx8', title: 'Shape of You', category: 'music-video' },
    { id: 'kJQP7kiw5Fk', title: 'Despacito', category: 'music-video' },
    { id: 'PT2_F-1esPk', title: 'Gangnam Style', category: 'music-video' },
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', category: 'music-video' },
    { id: 'L_jWHffIx5E', title: 'Smells Like Teen Spirit', category: 'music-video' },
    { id: 'A_MjCqQoLLA', title: 'Hey Jude', category: 'music-video' },
    { id: 'tbU3zdAgiX8', title: 'HUMBLE.', category: 'music-video' },
    { id: 'YuedQFH8wZI', title: 'See You Again', category: 'music-video' },
    { id: 'hTWKbfoikeg', title: 'Smells Like Teen Spirit', category: 'music-video' },
    { id: 'JRfuAukYTKg', title: 'What Makes You Beautiful', category: 'music-video' },
    { id: 'QcIy9NiNbmo', title: 'Baby One More Time', category: 'music-video' },
    { id: 'LOZuxwVk7TU', title: 'Anaconda', category: 'music-video' },
    { id: 'CvBfHwUxHIk', title: 'Umbrella', category: 'music-video' },
    { id: 'lWA2pjMjpBs', title: 'Roar', category: 'music-video' },
    { id: 'iIGKdDHbkbg', title: 'Raataan Lambiyan', category: 'music-video' },
    { id: 'NT1vbxjzTVo', title: 'Ranjha', category: 'music-video' },
    { id: 'YBqDATEltNE', title: 'Kesariya', category: 'music-video' },
    { id: 'JFcgOboQZ08', title: 'Tera Hone Laga Hoon', category: 'music-video' },
    { id: 'gumWVOYn-wE', title: 'Pasoori', category: 'music-video' },
    { id: 'CAL4WMpBNs0', title: 'Excuses', category: 'music-video' },
    { id: 'WBOT0Tqpbag', title: 'Softly', category: 'music-video' },
    { id: 'zABLecsR5UE', title: 'Maan Meri Jaan', category: 'music-video' },
    { id: 'X_tYrnv_o6A', title: 'Tum Hi Aana', category: 'music-video' },
    { id: 'Jjj_bigbzNA', title: 'Dil Diyan Gallan', category: 'music-video' },
    { id: 'JFcgOboQZ08', title: 'Tera Hone Laga Hoon', category: 'music-video' },
    { id: 'YykjpeuMNEk', title: 'Perfect', category: 'music-video' },
    { id: 'hLQl3WQQoQ0', title: 'Someone You Loved', category: 'music-video' },
    { id: 'SlPhMPnQ58k', title: 'Watermelon Sugar', category: 'music-video' },
    { id: 'OPf0YbXqDm0', title: 'Uptown Funk', category: 'music-video' },
    { id: 'fRh_vgS2dFE', title: 'Sorry', category: 'music-video' },
    { id: 'RgKAFK5djSk', title: 'Wasted Times', category: 'music-video' },
    { id: 'uelHwf8o7_U', title: 'Lovely', category: 'music-video' },
    { id: 'hT_nvWreIhg', title: 'Counting Stars', category: 'music-video' },
    { id: 'CevxZvSJLk8', title: 'Radioactive', category: 'music-video' },
    { id: 'ktvTqknDobU', title: 'Imagine', category: 'music-video' },
    { id: 'QkF3oxziUI4', title: 'Viva La Vida', category: 'music-video' },
    { id: 'nfWlot6h_JM', title: 'Shake It Off', category: 'music-video' },
    { id: 'RBumgq5yVrA', title: 'Let Her Go', category: 'music-video' },
    { id: 'pAgnJDJN4VA', title: 'Boulevard of Broken Dreams', category: 'music-video' },
    { id: 'Zi_XLOBDo_Y', title: 'Billie Jean', category: 'music-video' },
    { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', category: 'music-video' },
    { id: 'djV11Xbc914', title: 'Take On Me', category: 'music-video' },
    { id: 'rYEDA3JcQqw', title: 'Rolling in the Deep', category: 'music-video' },
    { id: 'lp-EO5I60KA', title: 'Thinking Out Loud', category: 'music-video' },
    { id: 'ru0K8uYEZWw', title: 'CAN\'T STOP THE FEELING!', category: 'music-video' },
    { id: 'YQHsXMglC9A', title: 'Hello', category: 'music-video' },
    { id: 'fLexgOxsZu0', title: 'All of Me', category: 'music-video' },
    { id: 'nrJxI_euoCc', title: 'Stressed Out', category: 'music-video' },
    { id: 'iGk5fR-t5AU', title: 'Counting Stars', category: 'music-video' },
    { id: 'JGwWNGJdvx8', title: 'Shape of You', category: 'music-video' },
    { id: 'kJQP7kiw5Fk', title: 'Despacito', category: 'music-video' },
    { id: 'PT2_F-1esPk', title: 'Gangnam Style', category: 'music-video' },
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', category: 'music-video' },
    { id: 'L_jWHffIx5E', title: 'Smells Like Teen Spirit', category: 'music-video' },
    { id: 'A_MjCqQoLLA', title: 'Hey Jude', category: 'music-video' },
    { id: 'tbU3zdAgiX8', title: 'HUMBLE.', category: 'music-video' },
    { id: 'YuedQFH8wZI', title: 'See You Again', category: 'music-video' },
    { id: 'hTWKbfoikeg', title: 'Smells Like Teen Spirit', category: 'music-video' },
    { id: 'JRfuAukYTKg', title: 'What Makes You Beautiful', category: 'music-video' },
    { id: 'QcIy9NiNbmo', title: 'Baby One More Time', category: 'music-video' },
    { id: 'LOZuxwVk7TU', title: 'Anaconda', category: 'music-video' },
    { id: 'CvBfHwUxHIk', title: 'Umbrella', category: 'music-video' },
    { id: 'lWA2pjMjpBs', title: 'Roar', category: 'music-video' },

    // Lyrical Videos
    { id: 'Ej8rdi-cwdw', title: 'Baarish Ban Jaana (Lyrical)', category: 'lyrical' },
    { id: 'kJa2kwoZ2a4', title: 'Lut Gaye (Lyrical)', category: 'lyrical' },
    { id: 'RLzC55ai0yw', title: 'Tere Bin Kive (Lyrical)', category: 'lyrical' },
    { id: 'IIGKdDHbkbg', title: 'Raataan Lambiyan (Lyrical)', category: 'lyrical' },
    { id: 'NT1vbxjzTVo', title: 'Ranjha (Lyrical)', category: 'lyrical' },
    { id: 'YBqDATEltNE', title: 'Kesariya (Lyrical)', category: 'lyrical' },
    { id: 'JFcgOboQZ08', title: 'Tera Hone Laga Hoon (Lyrical)', category: 'lyrical' },
    { id: 'gumWVOYn-wE', title: 'Pasoori (Lyrical)', category: 'lyrical' },
    { id: 'CAL4WMpBNs0', title: 'Excuses (Lyrical)', category: 'lyrical' },
    { id: 'WBOT0Tqpbag', title: 'Softly (Lyrical)', category: 'lyrical' },
    { id: 'zABLecsR5UE', title: 'Maan Meri Jaan (Lyrical)', category: 'lyrical' },
    { id: 'X_tYrnv_o6A', title: 'Tum Hi Aana (Lyrical)', category: 'lyrical' },
    { id: 'Jjj_bigbzNA', title: 'Dil Diyan Gallan (Lyrical)', category: 'lyrical' },
    { id: 'JFcgOboQZ08', title: 'Tera Hone Laga Hoon (Lyrical)', category: 'lyrical' },
    { id: 'YykjpeuMNEk', title: 'Perfect (Lyrical)', category: 'lyrical' },
    { id: 'hLQl3WQQoQ0', title: 'Someone You Loved (Lyrical)', category: 'lyrical' },
    { id: 'SlPhMPnQ58k', title: 'Watermelon Sugar (Lyrical)', category: 'lyrical' },
    { id: 'OPf0YbXqDm0', title: 'Uptown Funk (Lyrical)', category: 'lyrical' },
    { id: 'fRh_vgS2dFE', title: 'Sorry (Lyrical)', category: 'lyrical' },
    { id: 'RgKAFK5djSk', title: 'Wasted Times (Lyrical)', category: 'lyrical' },
    { id: 'uelHwf8o7_U', title: 'Lovely (Lyrical)', category: 'lyrical' },
    { id: 'hT_nvWreIhg', title: 'Counting Stars (Lyrical)', category: 'lyrical' },
    { id: 'CevxZvSJLk8', title: 'Radioactive (Lyrical)', category: 'lyrical' },
    { id: 'ktvTqknDobU', title: 'Imagine (Lyrical)', category: 'lyrical' },
    { id: 'QkF3oxziUI4', title: 'Viva La Vida (Lyrical)', category: 'lyrical' },
    { id: 'nfWlot6h_JM', title: 'Shake It Off (Lyrical)', category: 'lyrical' },
    { id: 'RBumgq5yVrA', title: 'Let Her Go (Lyrical)', category: 'lyrical' },
    { id: 'pAgnJDJN4VA', title: 'Boulevard of Broken Dreams (Lyrical)', category: 'lyrical' },
    { id: 'Zi_XLOBDo_Y', title: 'Billie Jean (Lyrical)', category: 'lyrical' },
    { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody (Lyrical)', category: 'lyrical' },
    { id: 'djV11Xbc914', title: 'Take On Me (Lyrical)', category: 'lyrical' },
    { id: 'rYEDA3JcQqw', title: 'Rolling in the Deep (Lyrical)', category: 'lyrical' },
    { id: 'lp-EO5I60KA', title: 'Thinking Out Loud (Lyrical)', category: 'lyrical' },
    { id: 'ru0K8uYEZWw', title: 'CAN\'T STOP THE FEELING! (Lyrical)', category: 'lyrical' },
    { id: 'YQHsXMglC9A', title: 'Hello (Lyrical)', category: 'lyrical' },
    { id: 'fLexgOxsZu0', title: 'All of Me (Lyrical)', category: 'lyrical' },
    { id: 'nrJxI_euoCc', title: 'Stressed Out (Lyrical)', category: 'lyrical' },
    { id: 'iGk5fR-t5AU', title: 'Counting Stars (Lyrical)', category: 'lyrical' },
    { id: 'JGwWNGJdvx8', title: 'Shape of You (Lyrical)', category: 'lyrical' },
    { id: 'kJQP7kiw5Fk', title: 'Despacito (Lyrical)', category: 'lyrical' },
    { id: 'PT2_F-1esPk', title: 'Gangnam Style (Lyrical)', category: 'lyrical' },
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up (Lyrical)', category: 'lyrical' },
    { id: 'L_jWHffIx5E', title: 'Smells Like Teen Spirit (Lyrical)', category: 'lyrical' },
    { id: 'A_MjCqQoLLA', title: 'Hey Jude (Lyrical)', category: 'lyrical' },
    { id: 'tbU3zdAgiX8', title: 'HUMBLE. (Lyrical)', category: 'lyrical' },
    { id: 'YuedQFH8wZI', title: 'See You Again (Lyrical)', category: 'lyrical' },
    { id: 'hTWKbfoikeg', title: 'Smells Like Teen Spirit (Lyrical)', category: 'lyrical' },
    { id: 'JRfuAukYTKg', title: 'What Makes You Beautiful (Lyrical)', category: 'lyrical' },
    { id: 'QcIy9NiNbmo', title: 'Baby One More Time (Lyrical)', category: 'lyrical' },
    { id: 'LOZuxwVk7TU', title: 'Anaconda (Lyrical)', category: 'lyrical' },
    { id: 'CvBfHwUxHIk', title: 'Umbrella (Lyrical)', category: 'lyrical' },
    { id: 'lWA2pjMjpBs', title: 'Roar (Lyrical)', category: 'lyrical' },

    // Concert Visuals
    { id: 'Ej8rdi-cwdw', title: 'Live Concert Visual 1', category: 'concert' },
    { id: 'kJa2kwoZ2a4', title: 'Live Concert Visual 2', category: 'concert' },
    { id: 'RLzC55ai0yw', title: 'Live Concert Visual 3', category: 'concert' },
    { id: 'IIGKdDHbkbg', title: 'Live Concert Visual 4', category: 'concert' },
    { id: 'NT1vbxjzTVo', title: 'Live Concert Visual 5', category: 'concert' },
    { id: 'YBqDATEltNE', title: 'Live Concert Visual 6', category: 'concert' },
    { id: 'JFcgOboQZ08', title: 'Live Concert Visual 7', category: 'concert' },
    { id: 'gumWVOYn-wE', title: 'Live Concert Visual 8', category: 'concert' },
    { id: 'CAL4WMpBNs0', title: 'Live Concert Visual 9', category: 'concert' },
    { id: 'WBOT0Tqpbag', title: 'Live Concert Visual 10', category: 'concert' },
    { id: 'zABLecsR5UE', title: 'Live Concert Visual 11', category: 'concert' },
    { id: 'X_tYrnv_o6A', title: 'Live Concert Visual 12', category: 'concert' },
    { id: 'Jjj_bigbzNA', title: 'Live Concert Visual 13', category: 'concert' },
    { id: 'JFcgOboQZ08', title: 'Live Concert Visual 14', category: 'concert' },
    { id: 'YykjpeuMNEk', title: 'Live Concert Visual 15', category: 'concert' },
    { id: 'hLQl3WQQoQ0', title: 'Live Concert Visual 16', category: 'concert' },
    { id: 'SlPhMPnQ58k', title: 'Live Concert Visual 17', category: 'concert' },
    { id: 'OPf0YbXqDm0', title: 'Live Concert Visual 18', category: 'concert' },
    { id: 'fRh_vgS2dFE', title: 'Live Concert Visual 19', category: 'concert' },
    { id: 'RgKAFK5djSk', title: 'Live Concert Visual 20', category: 'concert' },

    // Commercials
    { id: 'Ej8rdi-cwdw', title: 'Brand Commercial 1', category: 'commercial' },
    { id: 'kJa2kwoZ2a4', title: 'Brand Commercial 2', category: 'commercial' },
    { id: 'RLzC55ai0yw', title: 'Brand Commercial 3', category: 'commercial' },
    { id: 'IIGKdDHbkbg', title: 'Brand Commercial 4', category: 'commercial' },
    { id: 'NT1vbxjzTVo', title: 'Brand Commercial 5', category: 'commercial' },
    { id: 'YBqDATEltNE', title: 'Brand Commercial 6', category: 'commercial' },
    { id: 'JFcgOboQZ08', title: 'Brand Commercial 7', category: 'commercial' },
    { id: 'gumWVOYn-wE', title: 'Brand Commercial 8', category: 'commercial' },
    { id: 'CAL4WMpBNs0', title: 'Brand Commercial 9', category: 'commercial' },
    { id: 'WBOT0Tqpbag', title: 'Brand Commercial 10', category: 'commercial' },
    { id: 'zABLecsR5UE', title: 'Brand Commercial 11', category: 'commercial' },
    { id: 'X_tYrnv_o6A', title: 'Brand Commercial 12', category: 'commercial' },
    { id: 'Jjj_bigbzNA', title: 'Brand Commercial 13', category: 'commercial' },
    { id: 'JFcgOboQZ08', title: 'Brand Commercial 14', category: 'commercial' },
    { id: 'YykjpeuMNEk', title: 'Brand Commercial 15', category: 'commercial' },
  ];

  // Update category counts
  const updatedCategories = categories.map(category => ({
    ...category,
    count: category.id === 'all' 
      ? videoProjects.length 
      : videoProjects.filter(project => project.category === category.id).length
  }));

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? videoProjects 
    : videoProjects.filter(project => project.category === selectedCategory);

  const openVideoModal = (videoId: string) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  // Extract video ID from YouTube URL
  const extractVideoId = (videoId: string) => {
    // Handle the specific ICC video URL format
    if (videoId === 'nA0z8N04v70') {
      return 'nA0z8N04v70';
    }
    return videoId;
  };

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-heading text-6xl md:text-7xl font-normal mb-6 tracking-ultra-wide text-gray-100">
            MY PORTFOLIO
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed font-sans text-gray-300">
            A collection of visual stories crafted with passion, precision, and purpose. 
            From music videos to concert visuals, each project represents a unique journey 
            of creative collaboration.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {updatedCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-display font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gray-100 text-gray-900 shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer"
              onClick={() => openVideoModal(extractVideoId(project.id))}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-700">
                <img
                  src={`https://img.youtube.com/vi/${extractVideoId(project.id)}/maxresdefault.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to medium quality thumbnail if maxres fails
                    const target = e.target as HTMLImageElement;
                    target.src = `https://img.youtube.com/vi/${extractVideoId(project.id)}/mqdefault.jpg`;
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-6 w-6 text-gray-900 ml-1" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gray-900/80 text-gray-100 text-xs font-display font-medium rounded-full tracking-wide">
                    {updatedCategories.find(cat => cat.id === project.category)?.name || 'Other'}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2 text-gray-100 group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-sans text-gray-400">
                    Watch on YouTube
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl aspect-video">
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* YouTube Embed */}
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="Video Player"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-gray-800 to-transparent rounded-2xl p-12">
          <h2 className="font-heading text-4xl md:text-5xl font-normal mb-6 tracking-widest text-gray-100">
            READY TO CREATE YOUR STORY?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans text-gray-300">
            Every project in this portfolio started with a vision and a conversation. 
            Let's discuss how we can bring your creative ideas to life through compelling visual storytelling.
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