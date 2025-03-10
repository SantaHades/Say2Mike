
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-24 pb-12 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full animate-bounce-light">
            Break Language Barriers While Traveling
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Communicate in Any Language, <span className="text-gradient">Anytime, Anywhere</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Speak your native language and instantly be understood in any language. Perfect for travelers, 
            international shopping, and dining experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-3 text-white font-medium bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover-lift">
              Start Chatting
            </button>
            <Link 
              to="/getting-started" 
              className="w-full sm:w-auto px-8 py-3 text-blue-600 font-medium bg-white border border-blue-200 rounded-full hover:border-blue-400 transition-all hover-lift"
            >
              Learn More
            </Link>
          </div>
          
          <div className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden shadow-2xl">
            <div className="glass-morphism absolute inset-0 z-10 rounded-3xl"></div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-10 rounded-3xl relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col space-y-4 text-left">
                  <h3 className="text-xl font-semibold text-blue-800">Real-time Voice Translation</h3>
                  <p className="text-sm text-gray-600">
                    Speak naturally in your language and have your words instantly translated. 
                    Perfect for travelers exploring new countries.
                  </p>
                  <div className="flex space-x-3">
                    <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                      40+ Languages
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full">
                      Offline Support
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-sky-700 bg-sky-50 rounded-full">
                      Real-time
                    </span>
                  </div>
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-medium text-center p-4">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <p>Watch how it works</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <a href="#features" className="text-gray-500 hover:text-blue-600 transition-colors">
            <span className="block text-sm font-medium mb-2">Discover More</span>
            <ArrowDown className="mx-auto w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
