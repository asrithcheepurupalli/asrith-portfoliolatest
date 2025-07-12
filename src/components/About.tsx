import React from 'react';
import { Terminal, Code, Zap, Database } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'FastAPI', level: 92 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Docker', level: 80 },
  ];

  const tools = [
    { icon: <Terminal size={20} />, name: 'Terminal', desc: 'Command line wizard' },
    { icon: <Code size={20} />, name: 'VS Code', desc: 'Primary IDE' },
    { icon: <Zap size={20} />, name: 'FastAPI', desc: 'Backend framework' },
    { icon: <Database size={20} />, name: 'PostgreSQL', desc: 'Database of choice' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - About Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-black">
              $ whoami
            </h2>
            
            <div className="space-y-6 text-gray-700 font-mono leading-relaxed">
              <p>
                <span className="text-green-600">&gt;</span> Full-stack developer with 3+ years of experience
              </p>
              <p>
                <span className="text-green-600">&gt;</span> Specialized in Python, React, and API development
              </p>
              <p>
                <span className="text-green-600">&gt;</span> Passionate about automation and AI workflows
              </p>
              <p>
                <span className="text-green-600">&gt;</span> Always learning new technologies and best practices
              </p>
            </div>

            <div className="mt-8 p-4 border border-gray-300 bg-gray-50">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-600 text-sm font-mono ml-2">terminal</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-green-600">$ cat current_status.txt</div>
                <div className="text-gray-700 mt-2">
                  Status: Available for hire<br />
                  Location: Remote-friendly<br />
                  Focus: AI/ML workflows & full-stack development<br />
                  Coffee_level: Maximum
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Tools */}
          <div className="space-y-12">
            {/* Core Skills */}
            <div>
              <h3 className="text-xl font-mono font-bold mb-8 text-white">
                Core Skills
              </h3>
              
              <div className="space-y-8">
                {/* Languages & Frameworks */}
                <div>
                  <h4 className="text-lg font-mono font-semibold mb-4 text-green-400">
                    Languages & Frameworks
                  </h4>
                  <div className="space-y-2 text-gray-300 font-mono text-sm">
                    <div>• Python (FastAPI)</div>
                    <div>• JavaScript (React, Node.js)</div>
                    <div>• HTML5, CSS3, TailwindCSS</div>
                  </div>
                </div>

                {/* Databases & Tools */}
                <div>
                  <h4 className="text-lg font-mono font-semibold mb-4 text-green-400">
                    Databases & Tools
                  </h4>
                  <div className="space-y-2 text-gray-300 font-mono text-sm">
                    <div>• PostgreSQL • Redis</div>
                    <div>• Docker • Git & GitHub</div>
                  </div>
                </div>

                {/* Dev Practices */}
                <div>
                  <h4 className="text-lg font-mono font-semibold mb-4 text-green-400">
                    Dev Practices
                  </h4>
                  <div className="space-y-2 text-gray-300 font-mono text-sm">
                    <div>• API Design & Integration</div>
                    <div>• CI/CD (GitHub Actions, Railway)</div>
                    <div>• Test Automation (Basic Unit & API Testing)</div>
                  </div>
                </div>

                {/* Other Familiar Tools */}
                <div>
                  <h4 className="text-lg font-mono font-semibold mb-4 text-green-400">
                    Other Familiar Tools
                  </h4>
                  <div className="space-y-2 text-gray-300 font-mono text-sm">
                    <div>• Supabase • Firebase • Vercel</div>
                    <div>• No-code/Low-code: bolt.new, Glitch</div>
                    <div>• AI Integration (OpenAI APIs, LLM fine-tuning)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;