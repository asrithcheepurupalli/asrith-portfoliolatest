import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/components/AsrithCheepurupalli_CV.pdf';
    link.download = 'AsrithCheepurupalli_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Full-stack development specializing in Python, React, and API design. Built multiple production applications with modern DevOps practices.',
      technologies: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Backend Developer',
      company: 'Previous Company',
      period: '2021 - 2022',
      description: 'Developed and maintained REST APIs, implemented automated testing, and optimized database performance.',
      technologies: ['Flask', 'MySQL', 'Redis', 'AWS']
    }
  ];

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-black">
            $ cat resume.txt
          </h2>
          <p className="text-gray-600 font-mono mb-8">
            Professional experience and qualifications
          </p>
          <button
            onClick={handleDownload}
            className="group px-6 py-3 bg-black text-white font-mono font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-mono font-bold mb-8 text-black">
              Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-green-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-mono font-semibold text-black">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-gray-500 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-mono font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 mb-4 font-mono text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-mono border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="border border-gray-300 bg-gray-50 p-6">
              <h3 className="text-lg font-mono font-bold mb-4 text-black">
                Contact
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="text-gray-700">
                  <span className="text-green-600">email:</span> work.asrithcheepurupalli@gmail.com
                </div>
                <div className="text-gray-700">
                  <span className="text-green-600">location:</span> Globally deployable
                </div>
                <div className="text-gray-700">
                  <span className="text-green-600">github:</span> github.com/asrithcheepurupalli
                </div>
                <div className="text-gray-700">
                  <span className="text-green-600">status:</span> Available
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="border border-gray-600 bg-gray-900 p-6">
              <h3 className="text-lg font-mono font-bold mb-4 text-white">
                Core Skills
              </h3>
              
              <div className="space-y-6">
                {/* Languages & Frameworks */}
                <div>
                  <h4 className="text-sm font-mono font-semibold mb-2 text-green-400">
                    Languages & Frameworks
                  </h4>
                  <div className="space-y-1 text-xs font-mono text-gray-300">
                    <div>• Python (FastAPI)</div>
                    <div>• JavaScript (React, Node.js)</div>
                    <div>• HTML5, CSS3, TailwindCSS</div>
                  </div>
                </div>

                {/* Databases & Tools */}
                <div>
                  <h4 className="text-sm font-mono font-semibold mb-2 text-green-400">
                    Databases & Tools
                  </h4>
                  <div className="space-y-1 text-xs font-mono text-gray-300">
                    <div>• PostgreSQL • Redis</div>
                    <div>• Docker • Git & GitHub</div>
                  </div>
                </div>

                {/* Dev Practices */}
                <div>
                  <h4 className="text-sm font-mono font-semibold mb-2 text-green-400">
                    Dev Practices
                  </h4>
                  <div className="space-y-1 text-xs font-mono text-gray-300">
                    <div>• API Design & Integration</div>
                    <div>• CI/CD (GitHub Actions, Railway)</div>
                    <div>• Test Automation (Basic Unit & API Testing)</div>
                  </div>
                </div>

                {/* Other Familiar Tools */}
                <div>
                  <h4 className="text-sm font-mono font-semibold mb-2 text-green-400">
                    Other Familiar Tools
                  </h4>
                  <div className="space-y-1 text-xs font-mono text-gray-300">
                    <div>• Supabase • Firebase • Vercel</div>
                    <div>• No-code/Low-code: bolt.new, Glitch</div>
                    <div>• AI Integration (OpenAI APIs, LLM fine-tuning)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="border border-gray-300 bg-gray-50 p-6">
              <h3 className="text-lg font-mono font-bold mb-4 text-black">
                Stats
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="text-black">3+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects:</span>
                  <span className="text-black">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coffee/day:</span>
                  <span className="text-black">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;