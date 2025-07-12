import React from 'react';
import { Github, Mail, ExternalLink, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
    url: 'https://github.com/asrithcheepurupalli',
    icon: <Github size={18} />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/asrithcheepurupalli',
    icon: <Linkedin size={18} />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/asrith',
    icon: <Twitter size={18} />
  },
  {
    name: 'Email',
    url: 'mailto:work.asrithcheepurupalli@gmail.com',
    icon: <Mail size={18} />
  }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-gray-300">
      <div className="container-max">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-mono text-black text-lg">
                  asrithcheepurupalli.
                </span>
              </div>
              <p className="text-gray-600 text-sm font-mono leading-relaxed">
                Building AI workflows and full-stack applications.
                Always learning, always coding.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-mono font-semibold text-black mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-600 hover:text-black transition-colors text-sm font-mono"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-600 hover:text-black transition-colors text-sm font-mono"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-600 hover:text-black transition-colors text-sm font-mono"
                  >
                    About
                  </button>
                </li>
                <li>
                  <a
                    href="https://vibemakesasrithcode.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors text-sm font-mono inline-flex items-center"
                  >
                    Creative Portfolio
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Quote */}
            <div>
              <h4 className="font-mono font-semibold text-black mb-4">Connect</h4>
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-300 text-gray-600 hover:text-black hover:border-gray-400 transition-colors"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              
              <div className="border border-gray-300 bg-gray-50 p-4">
                <blockquote className="text-sm text-gray-600 font-mono italic">
                  "Any fool can write code that a computer can understand. 
                  Good programmers write code that humans can understand."
                </blockquote>
                <cite className="text-xs text-gray-500 font-mono mt-2 block">
                  - Martin Fowler
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-mono">
              © {currentYear} Asrith Cheepurupalli. Built with React & Tailwind.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm font-mono">Made with</span>
              <span className="text-red-500">❤️</span>
              <span className="text-gray-500 text-sm font-mono">and lots of</span>
              <span className="text-yellow-600">☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;