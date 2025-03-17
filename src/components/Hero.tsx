import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200 relative flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/15 to-red-900/10 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://www.jaroska.cz/wp-content/uploads/2025/01/IMG_0778-1-scaled.jpg")'
        }}
      ></div>

      {/* Content */}
      <div className="hero-content text-center text-white relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold mb-6 animate-fade-in">
            Gymnázium Jaroška
          </h1>
          <p className="text-xl mb-8 animate-fade-in">
            Vzdělávání pro budoucnost s tradicí od roku 1898
          </p>
          <div className="flex gap-6 justify-center animate-slide-up">
            <a  
              href="#pro-uchazece" 
              className="btn btn-lg px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white transition-all duration-300 rounded-md"
            >
              Pro uchazeče
            </a>
            <a 
              href="#pro-zaky" 
              className="btn btn-lg px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/50 hover:border-white transition-all duration-300 rounded-md"
            >
              Pro žáky
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}; 