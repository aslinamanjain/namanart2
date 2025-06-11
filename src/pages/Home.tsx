import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathsRef = useRef<Array<{ x: number; y: number; opacity: number; timestamp: number }>>([]);
  const animationRef = useRef<number>();
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler with interpolation for fast movements
    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      if (lastMousePosRef.current) {
        const lastX = lastMousePosRef.current.x;
        const lastY = lastMousePosRef.current.y;
        
        // Calculate distance between current and last position
        const distance = Math.sqrt(
          Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2)
        );
        
        // If distance is large (fast movement), interpolate points
        if (distance > 5) {
          const steps = Math.ceil(distance / 3); // Create points every 3 pixels
          
          for (let i = 0; i <= steps; i++) {
            const ratio = i / steps;
            const interpolatedX = lastX + (currentX - lastX) * ratio;
            const interpolatedY = lastY + (currentY - lastY) * ratio;
            
            pathsRef.current.push({
              x: interpolatedX,
              y: interpolatedY,
              opacity: 1,
              timestamp: Date.now()
            });
          }
        } else {
          // Normal movement, add single point
          pathsRef.current.push({
            x: currentX,
            y: currentY,
            opacity: 1,
            timestamp: Date.now()
          });
        }
      } else {
        // First point
        pathsRef.current.push({
          x: currentX,
          y: currentY,
          opacity: 1,
          timestamp: Date.now()
        });
      }
      
      lastMousePosRef.current = { x: currentX, y: currentY };
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const currentTime = Date.now();
      
      // Filter out old paths and update opacity
      pathsRef.current = pathsRef.current.filter(point => {
        const age = currentTime - point.timestamp;
        const maxAge = 2000; // 2 seconds fade time
        
        if (age > maxAge) return false;
        
        // Fade out over time
        point.opacity = Math.max(0, 1 - (age / maxAge));
        return true;
      });

      // Draw pencil strokes
      if (pathsRef.current.length > 1) {
        ctx.strokeStyle = '#000000'; // Black color for white background
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < pathsRef.current.length; i++) {
          const prevPoint = pathsRef.current[i - 1];
          const currentPoint = pathsRef.current[i];
          
          // Draw continuous lines without distance restriction
          const avgOpacity = (prevPoint.opacity + currentPoint.opacity) / 2;
          ctx.globalAlpha = avgOpacity;
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(currentPoint.x, currentPoint.y);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners to document
    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Create simple pencil cursor SVG
  const pencilCursor = `data:image/svg+xml;base64,${btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Pencil body -->
      <rect x="8" y="2" width="4" height="20" fill="#FFD700" stroke="#000" stroke-width="1"/>
      <!-- Pencil tip -->
      <polygon points="8,22 12,22 10,28" fill="#8B4513" stroke="#000" stroke-width="1"/>
      <!-- Pencil eraser -->
      <rect x="7" y="0" width="6" height="3" rx="1" fill="#FF69B4" stroke="#000" stroke-width="1"/>
    </svg>
  `)}`;

  return (
    <div 
      className="relative" 
      style={{ 
        cursor: `url("${pencilCursor}") 10 28, auto`
      }}
    >
      {/* Pencil Sketch Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-10"
        style={{ 
          mixBlendMode: 'multiply',
          width: '100vw',
          height: '100vh'
        }}
      />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden bg-white">
        {/* Content Container - Centered */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* NAMAN ART GIF - Shifted 3% to the right (5% - 2% = 3%) */}
            <div className="mb-2 flex justify-center" style={{ transform: 'translateX(3%)' }}>
              <img
                src="/NAMAN ART.gif"
                alt="NAMAN ART"
                className="max-w-full h-auto"
                style={{ maxHeight: '300px' }}
              />
            </div>

            {/* Updated Description - Two Lines with Different Sizes */}
            <div className="mb-8 max-w-4xl mx-auto">
              <p className="font-display text-2xl md:text-2xl lg:text-3xl font-bold leading-tight text-gray-800 tracking-wide">
                An independent visual artist
              </p>
              <p className="font-display text-base md:text-lg font-medium leading-relaxed text-gray-600 tracking-wide mt-2">
                working across music labels, brands, and digital studios.
              </p>
              <p className="font-display text-base md:text-lg font-medium leading-relaxed text-gray-600 tracking-wide mt-1">
                Blending cinematic direction, lyrical design, and motion into storytelling that resonates.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/portfolio"
                className="group px-8 py-3 rounded-full font-display font-semibold text-base tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full font-display font-semibold text-base tracking-wider transition-all duration-300 hover:scale-105"
              >
                HIRE ME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;