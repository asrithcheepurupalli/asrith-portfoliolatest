import React from 'react';
import { ArrowDown, Eye, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
      {/* Black dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, #000000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating cursor indicator */}
      <div className="absolute top-1/4 right-1/4 text-green-600 animate-pulse">
        <div className="w-2 h-4 bg-green-600 animate-pulse"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6 text-black leading-tight">
            Asrith
            <br />
            Cheepurupalli
          </h1>
          
          {/* Subtitle */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl text-gray-600 font-mono mb-2">
              Full-Stack Engineer @ the intersection of AI, UX, and Automation
            </h2>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 font-mono">
              <span>GenAI Tinkerer</span>
              <span>|</span>
              <span>Full-Stack Engineer</span>
              <span>|</span>
              <span>Definitely Human</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-mono">
         I build AI tools that organize chaos, automate boring stuff, and sometimes surprise me too
          </p>
          
          <p className="text-sm text-gray-500 mb-12 font-mono">
           Let's just say — I enjoy making computers useful and weird
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToProjects}
              className="group px-6 py-3 bg-black text-white font-mono font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2"
            >
              <Eye size={18} />
              <span>View Projects</span>
            </button>
            <button
              onClick={() => window.open('https://github.com/asrith', '_blank')}
              className="group px-6 py-3 border border-gray-400 text-gray-700 font-mono font-medium hover:border-gray-600 hover:text-black transition-all duration-200 flex items-center space-x-2"
            >
              <Github size={18} />
              <span>GitHub</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;