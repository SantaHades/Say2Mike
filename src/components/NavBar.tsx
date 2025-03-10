
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl md:text-2xl text-gradient">TravelVoicely</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#realtime-chat" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Chat Service
          </a>
          <a href="#store-assist" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Store Assistant
          </a>
          <a href="#order-food" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Food Ordering
          </a>
        </div>
        
        <div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors hover-lift">
            Try it now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
