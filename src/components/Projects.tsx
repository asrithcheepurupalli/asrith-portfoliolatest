import React, { useState, useMemo } from 'react';
import { Github, ExternalLink, Terminal, Database, Zap, Shield, Image, Code } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'ai-debug-assistant',
      title: 'AI Debug Assistant',
      description: 'AI-powered debugging tool for developers',
      longDescription: 'An intelligent debugging assistant that helps developers identify and fix code issues using AI analysis and automated suggestions.',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'AI/ML'],
      tags: ['full-stack', 'api', 'real-time'],
      githubUrl: 'https://github.com/asrithcheepurupalli/debug-assistant',
      status: 'completed',
      featured: true,
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'cloud-url-shortener',
      title: 'Cloud URL Shortener with Analytics',
      description: 'Advanced URL shortening service with analytics dashboard',
      longDescription: 'A feature-rich URL shortening service that provides detailed analytics, custom domains, QR code generation, and real-time click tracking with geographic data.',
      technologies: ['Python', 'FastAPI', 'React', 'Chart.js', 'PostgreSQL'],
      tags: ['full-stack', 'analytics', 'api'],
      githubUrl: 'https://github.com/asrithcheepurupalli/cloud-shortener',
      status: 'completed',
      featured: true,
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 'flask-cicd-app',
      title: 'CI/CD Flask Blog Platform',
      description: 'Production-ready Flask blog with automated deployment',
      longDescription: 'A robust Flask blog platform demonstrating modern DevOps practices including automated testing, continuous integration, and deployment using GitHub Actions and Docker.',
      technologies: ['Flask', 'Docker', 'GitHub Actions', 'PostgreSQL', 'Nginx'],
      tags: ['backend', 'devops', 'automation'],
      githubUrl: 'https://github.com/asrithcheepurupalli/flask-cicd-app',
      status: 'completed',
      featured: true,
      icon: <Database className="w-5 h-5" />
    },
    {
      id: 'screenshot-organizer',
      title: 'Screenshot to Markdown Organizer',
      description: 'Automated tool for organizing screenshots into markdown docs',
      longDescription: 'An intelligent tool that automatically processes screenshots, extracts text using OCR, categorizes images, and generates organized markdown documentation with proper formatting.',
      technologies: ['Python', 'OCR', 'PIL', 'Markdown', 'OpenCV'],
      tags: ['automation', 'python', 'productivity'],
      githubUrl: 'https://github.com/asrithcheepurupalli/screen2md',
      status: 'completed',
      featured: false,
      icon: <Image className="w-5 h-5" />
    },
    {
      id: 'totp-cli',
      title: 'TOTP Authenticator CLI Tool',
      description: 'Command-line TOTP generator with secure storage',
      longDescription: 'A secure command-line tool for generating Time-based One-Time Passwords (TOTP) with encrypted local storage, backup functionality, and cross-platform compatibility.',
      technologies: ['Python', 'Cryptography', 'Click', 'SQLite'],
      tags: ['cli', 'security', 'python'],
      githubUrl: 'https://github.com/asrithcheepurupalli/totp-cli',
      status: 'completed',
      featured: false,
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const upcomingProjects = [
    {
      id: 'microservices-k8s',
      title: 'Microservices with Kubernetes',
      description: 'Learning containerization and orchestration',
      technologies: ['Kubernetes', 'Docker', 'Go', 'gRPC'],
      tags: ['devops', 'microservices'],
      status: 'planned',
      icon: <Terminal className="w-5 h-5" />
    },
    {
      id: 'ai-code-reviewer',
      title: 'AI Code Reviewer',
      description: 'Building an AI-powered code review assistant',
      technologies: ['Python', 'OpenAI API', 'Git', 'FastAPI'],
      tags: ['ai', 'automation'],
      status: 'in-progress',
      icon: <Code className="w-5 h-5" />
    }
  ];

  const filters = [
    { id: 'all', label: 'all', count: projects.length },
    { id: 'featured', label: 'featured', count: projects.filter(p => p.featured).length },
    { id: 'full-stack', label: 'full-stack', count: projects.filter(p => p.tags.includes('full-stack')).length },
    { id: 'api', label: 'api', count: projects.filter(p => p.tags.includes('api')).length }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projects;
    if (selectedFilter === 'featured') return projects.filter(p => p.featured);
    return projects.filter(p => p.tags.includes(selectedFilter));
  }, [projects, selectedFilter]);

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-green-600">
            {project.icon}
          </div>
          <div>
            <h3 className="text-lg font-mono font-semibold text-black">
              {project.title}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 text-xs font-mono ${
                project.status === 'completed' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : project.status === 'in-progress'
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                  : 'bg-blue-100 text-blue-800 border border-blue-300'
              }`}>
                {project.status}
              </span>
              {project.featured && (
                <span className="px-2 py-1 bg-black text-white text-xs font-mono">
                  featured
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-black transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-black transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-700 mb-4 font-mono text-sm">
        {project.description}
      </p>

      <div className="space-y-3">
        <div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-mono border border-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const UpcomingProjectCard: React.FC<{ project: any }> = ({ project }) => (
    <div className="border border-gray-300 border-dashed bg-gray-50/50 p-6">
      <div className="flex items-start space-x-3 mb-4">
        <div className="text-green-600">
          {project.icon}
        </div>
        <div>
          <h3 className="text-lg font-mono font-semibold text-black">
            {project.title}
          </h3>
          <span className={`inline-block px-2 py-1 text-xs font-mono mt-1 ${
            project.status === 'in-progress'
              ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
              : 'bg-blue-100 text-blue-800 border border-blue-300'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-4 font-mono text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-mono border border-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-black">
            $ ls projects/
          </h2>
          <p className="text-gray-600 font-mono">
            A collection of things I've built and shipped
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 font-mono text-sm transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-black text-white'
                    : 'border border-gray-400 text-gray-700 hover:border-gray-600 hover:text-black'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-2xl font-mono font-bold mb-8 text-black">
            $ cat learning.md
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project) => (
              <UpcomingProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Creative Portfolio Shoutout */}
          <div className="mt-12 border border-green-600/30 bg-black p-6 rounded">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-green-400">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-mono font-semibold text-white">
                Creative Portfolio
              </h4>
            </div>
            <p className="text-gray-300 mb-4 font-mono text-sm">
              Want to see my creative side? Check out my experimental projects and creative coding adventures.
            </p>
            <a
              href="https://vibemakesasrithcode.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 border border-green-600 text-green-400 font-mono text-sm hover:bg-green-600 hover:text-black transition-all duration-200"
            >
              <span>Visit Creative Portfolio</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;