import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className={`${isHomePage ? 'h-screen overflow-hidden bg-white text-gray-800' : 'min-h-screen bg-gray-900 text-gray-100'}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? isHomePage 
              ? 'bg-white/95 backdrop-blur-md shadow-xl' 
              : 'bg-gray-900/95 backdrop-blur-md shadow-xl'
            : isHomePage 
              ? 'bg-white/80' 
              : 'bg-gray-900/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <Play className={`h-7 w-7 transition-all duration-300 group-hover:scale-110 ${
                isHomePage ? 'text-gray-600' : 'text-gray-300'
              }`} />
              <span className={`font-display text-2xl font-bold tracking-wider ${
                isHomePage ? 'text-gray-800' : 'text-gray-100'
              }`}>
                NAMAN ART
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 font-display font-medium tracking-wide transition-all duration-300 ${
                    location.pathname === item.path 
                      ? isHomePage ? 'text-gray-800' : 'text-gray-100'
                      : isHomePage 
                        ? 'text-gray-600 hover:text-gray-800' 
                        : 'text-gray-400 hover:text-gray-100'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isHomePage ? 'bg-gray-800' : 'bg-gray-100'
                    }`} />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isHomePage 
                    ? 'hover:bg-gray-100 text-gray-600' 
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden backdrop-blur-md border-t ${
            isHomePage 
              ? 'bg-white/98 border-gray-200' 
              : 'bg-gray-900/98 border-gray-700'
          }`}>
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-4 rounded-lg font-display font-medium tracking-wide transition-all duration-300 ${
                    location.pathname === item.path
                      ? isHomePage 
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gray-800 text-gray-100'
                      : isHomePage
                        ? 'text-gray-600 hover:bg-gray-50'
                        : 'text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className={isHomePage ? '' : 'pt-20'}>
        {children}
      </main>

      {/* Footer - Only show on non-home pages */}
      {!isHomePage && (
        <footer className="bg-gray-800 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="text-center">
              <p className="mb-4 font-sans text-gray-400">
                © 2025 Naman Art. All rights reserved.
              </p>
              <p className="font-display italic tracking-wide text-gray-300">
                "Creating timeless visual stories through emotion & AI"
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;