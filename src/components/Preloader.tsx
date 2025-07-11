import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress - adjusted for 3-3.5 second duration
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a bit before hiding preloader
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // Wait for fade out animation
          }, 500);
          return 100;
        }
        // Adjusted increment for 3-3.5 second total duration
        // Using smaller increments with slightly longer intervals
        return prev + Math.random() * 3 + 2;
      });
    }, 80); // Slightly longer interval for 3-3.5 second duration

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      {/* GIF Container */}
      <div className="mb-8 flex items-center justify-center">
        <img
          src="/giphy.gif"
          alt="Loading..."
          className="max-w-xs max-h-64 object-contain"
        />
      </div>

      {/* Loading Line */}
      <div className="w-80 max-w-sm mx-auto">
        {/* Progress Bar Container */}
        <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
          {/* Progress Bar Fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
          
          {/* Animated Shine Effect */}
          <div 
            className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"
            style={{ 
              left: `${progress - 10}%`,
              transition: 'left 0.3s ease-out'
            }}
          />
        </div>

        {/* Loading Text */}
        <div className="mt-4 text-center">
          <p className="font-display text-sm font-medium text-gray-600 tracking-wider">
            LOADING... {Math.round(progress)}%
          </p>
        </div>
      </div>

      {/* Optional: Loading dots animation */}
      <div className="mt-6 flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default Preloader;