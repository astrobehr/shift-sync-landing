import React from 'react';

export default function Header({ onOpenModal }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#042136]/70 border-b border-white/10">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-center">
        <nav className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white font-medium transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('solution')}
            className="text-white/80 hover:text-white font-medium transition-colors"
          >
            Solution
          </button>
          <button 
            onClick={() => scrollToSection('signup')}
            className="text-white/80 hover:text-white font-medium transition-colors"
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}