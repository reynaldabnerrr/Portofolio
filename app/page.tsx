"use client";

import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  demo: string | null;
  image: string;
  color: string;
  features: string[];
  status: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; size: number }>>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const projects = [
    {
      id: 1,
      title: "Alumni Hub FT-UH",
      category: "Mobile Application",
      description: "Modern social media platform connecting alumni of Fakultas Teknik Universitas Hasanuddin. Features networking, event announcements, and discussion forums to strengthen alumni community bonds.",
      longDescription: "A comprehensive social networking platform designed specifically for alumni of the Faculty of Engineering at Hasanuddin University. The application includes features such as alumni directory, event management, job postings, news feed, and discussion forums. Built with Flutter for cross-platform mobile app and Laravel backend with MySQL database.",
      technologies: ["Flutter", "Laravel", "MySQL", "Firebase", "Node.js", "Docker"],
      github: "https://github.com/arctanziru/alumni_hub_ft_uh.git",
      demo: null,
      image: "📱",
      color: "from-blue-600 to-purple-600",
      features: [
        "User authentication and profile management",
        "Alumni directory with search and filter",
        "Event creation and management",
        "Real-time messaging and notifications",
        "News feed and content sharing",
        "Job board and opportunity sharing"
      ],
      status: "Completed"
    },
    {
      id: 2,
      title: "Jokka Web",
      category: "Web Application",
      description: "Travel platform showcasing Makassar's rich culture and attractions. Features event exploration, destination discovery, and culinary experiences with intuitive interface for seamless travel planning.",
      longDescription: "A comprehensive travel and cultural exploration platform for Makassar city. The website provides detailed information about local attractions, cultural events, traditional cuisine, and travel guides. Features an interactive map, event calendar, restaurant finder, and user review system.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "API Integration"],
      github: "https://github.com/reynaldabnerrr/Jokka.git",
      demo: "https://jokka-1d960.firebaseapp.com",
      image: "🌐",
      color: "from-green-600 to-blue-600",
      features: [
        "Interactive destination explorer",
        "Event calendar and booking system",
        "Cultural heritage showcase",
        "Culinary guide and recommendations",
        "Travel itinerary planner",
        "User reviews and ratings"
      ],
      status: "Completed"
    },
    {
      id: 3,
      title: "Topcell Portfolio",
      category: "Corporate Website",
      description: "Modern portfolio website for Topcell, presenting the company profile, services, and digital solutions with a polished and responsive experience.",
      longDescription: "A professional corporate portfolio website designed to highlight Topcell's capabilities, services, and brand identity. The site offers a clean presentation for company information, products, and contact points with a smooth user experience across devices.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/reynaldabnerrr",
      demo: "https://topcell.topgroup.asia/",
      image: "🏢",
      color: "from-orange-500 to-red-500",
      features: [
        "Professional company profile presentation",
        "Responsive and modern landing page",
        "Service and portfolio showcase",
        "Clear call-to-action sections",
        "Optimized experience for desktop and mobile"
      ],
      status: "Completed"
    }
  ];

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Initialize particles
    const initParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1
        });
      }
      setParticles(newParticles);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll effect for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'github', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    initParticles();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          particle.x -= dx * 0.01;
          particle.y -= dy * 0.01;
        }
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.6})`;
        ctx.fill();
        
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });
      
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [particles, mousePosition]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-blue-400 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
          <p className="text-gray-300">Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-fade-in relative">
      {/* Interactive Particle Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.7 }}
      />
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-white font-bold text-xl">
              <span className="text-gradient">RA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'github', label: 'GitHub' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-slate-900/95 backdrop-blur-md`}>
          <div className="px-4 py-2 space-y-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'github', label: 'GitHub' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-purple-600/20 text-purple-400' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-8">
          <div className="animate-fade-in-up">
            <Image
              src="/assets/profile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 animate-float shadow-2xl ring-4 ring-white/20 transition-all duration-500 hover:ring-8 hover:ring-purple-400/50"
            />
          </div>
          
          <h1 className="text-3xl sm:text-6xl font-bold mb-6 animate-bounce-in">
            <span className="text-gradient block mb-2">
              <Typewriter
                words={[
                  "Hello, everyone! 👋",
                  "I'm Reynald Abner Tananda",
                  "Mobile App Developer 📱",
                  "Web Developer 💻",
                  "CTF Player 🔐",
                  "Welcome to My Portfolio ✨",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl font-light mb-8 animate-slide-in-up text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences through mobile apps, web solutions, and cybersecurity challenges
          </p>
          
          <div className="animate-fade-in-up delay-300">
            <button 
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              aria-label="Scroll to about section"
            >
              Explore My Work
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative bg-gradient-to-b from-slate-900 to-slate-800">
        {/* About Me Section */}
        <section id="about" className="py-20 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="glass-card p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-gradient-2">Who I Am</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-300">
                    Hi! I'm <span className="text-purple-400 font-semibold">Reynald Abner Tananda</span>, a Computer Science student at Universitas Hasanuddin with a passion for full-stack and mobile development. I specialize in creating modern, scalable applications using cutting-edge technologies.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-300">
                    Currently serving as <span className="text-purple-400 font-semibold">Head of Digital Forensic at ICC UH</span> and working as a <span className="text-blue-400 font-semibold">freelance developer</span>. Previously held leadership roles at GSC UNHAS and Coder Institute, focusing on mobile app development and team coordination.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    I'm also an active <span className="text-cyan-400 font-semibold">CTF player and cybersecurity enthusiast</span>, combining my development skills with security expertise to create robust and secure applications.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-card p-6 text-center text-white hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl mb-3">📱</div>
                    <h4 className="font-semibold mb-2">Mobile Development</h4>
                    <p className="text-sm text-gray-300">Flutter, Kotlin</p>
                  </div>
                  <div className="glass-card p-6 text-center text-white hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl mb-3">💻</div>
                    <h4 className="font-semibold mb-2">Web Development</h4>
                    <p className="text-sm text-gray-300">Next.js, React, Laravel</p>
                  </div>
                  <div className="glass-card p-6 text-center text-white hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl mb-3">�️</div>
                    <h4 className="font-semibold mb-2">Database & Cloud</h4>
                    <p className="text-sm text-gray-300">MySQL, Firebase, MongoDB</p>
                  </div>
                  <div className="glass-card p-6 text-center text-white hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl mb-3">�</div>
                    <h4 className="font-semibold mb-2">DevOps & Security</h4>
                    <p className="text-sm text-gray-300">Docker, AWS, Vercel, CTF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">Skills & Technologies</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                  <span className="mr-2">🎨</span> Frontend
                </h3>
                <div className="space-y-3">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((skill, index) => (
                    <div key={skill} className="flex items-center justify-between text-white">
                      <span>{skill}</span>
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${95 - index * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                  <span className="mr-2">⚙️</span> Backend
                </h3>
                <div className="space-y-3">
                  {['Laravel', 'Node.js', 'PHP', 'Express.js', 'RESTful API'].map((skill, index) => (
                    <div key={skill} className="flex items-center justify-between text-white">
                      <span>{skill}</span>
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${90 - index * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center">
                  <span className="mr-2">🗃️</span> Database
                </h3>
                <div className="space-y-3">
                  {['MySQL', 'Firebase', 'MongoDB', 'PostgreSQL', 'Redis'].map((skill, index) => (
                    <div key={skill} className="flex items-center justify-between text-white">
                      <span>{skill}</span>
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                          style={{ width: `${88 - index * 4}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile & DevOps */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center">
                  <span className="mr-2">📱</span> Mobile & DevOps
                </h3>
                <div className="space-y-3">
                  {['Flutter', 'Kotlin', 'Git', 'Docker', 'Vercel', 'AWS', 'Figma'].map((skill, index) => (
                    <div key={skill} className="flex items-center justify-between text-white">
                      <span className="text-sm">{skill}</span>
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${85 - index * 3}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for development
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="gradient-card rounded-2xl overflow-hidden group hover-lift">
                  <div className="relative overflow-hidden">
                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <div className="text-6xl">{project.image}</div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{project.category}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </button>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <div className={`h-64 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center relative`}>
                  <div className="text-8xl">{selectedProject.image}</div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-6">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                      <p className="text-lg text-gray-600">{selectedProject.longDescription}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech: string) => (
                          <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Links</h3>
                      <div className="space-y-3">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                        >
                          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          View Source Code on GitHub
                        </a>
                        
                        {selectedProject.demo && (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center w-full px-4 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors"
                          >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Timeline Section */}
        <section className="py-20 px-4 sm:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">Experience & Journey</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                My professional journey and key milestones in software development
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>
              
              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="glass-card p-6 text-white md:ml-auto max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-purple-400 font-semibold">2024 - Present</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Head of Digital Forensic</h3>
                      <p className="text-sm text-purple-300 mb-3">ICC UH (IT Computer Club Universitas Hasanuddin)</p>
                      <p className="text-gray-300">
                        Leading the digital forensic division, conducting cybersecurity research and training. 
                        Focus on incident response, malware analysis, and security awareness programs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-6 h-6 bg-purple-600 rounded-full border-4 border-slate-800 relative z-10"></div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  
                  <div className="hidden md:block w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-800 relative z-10"></div>
                  
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="glass-card p-6 text-white max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-blue-400 font-semibold">2024 - Present</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Freelance Developer</h3>
                      <p className="text-sm text-blue-300 mb-3">Full Stack & Mobile Development</p>
                      <p className="text-gray-300">
                        Developing modern web and mobile applications using Next.js, React, Flutter, and Laravel. 
                        Creating user-friendly interfaces and robust backend systems for various clients.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="glass-card p-6 text-white md:ml-auto max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-green-400 font-semibold">2024</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Head Mobile App Division</h3>
                      <p className="text-sm text-green-300 mb-3">Coder Institute 2024</p>
                      <p className="text-gray-300">
                        Leading mobile application development initiatives and mentoring fellow developers. 
                        Organizing workshops and training programs on Flutter and mobile app development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-6 h-6 bg-green-600 rounded-full border-4 border-slate-800 relative z-10"></div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                {/* Timeline Item 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  
                  <div className="hidden md:block w-6 h-6 bg-yellow-600 rounded-full border-4 border-slate-800 relative z-10"></div>
                  
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="glass-card p-6 text-white max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-yellow-400 font-semibold">2023 - 2024</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Head Mobile App Division</h3>
                      <p className="text-sm text-yellow-300 mb-3">Coder Institute 2023/2024</p>
                      <p className="text-gray-300">
                        Led mobile application development projects and coordinated with team members. 
                        Focused on developing cross-platform mobile solutions using Flutter and native technologies.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="glass-card p-6 text-white md:ml-auto max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-orange-400 font-semibold">2023 - 2024</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Core Team Mobile Development</h3>
                      <p className="text-sm text-orange-300 mb-3">GSC UNHAS (Google Student Club)</p>
                      <p className="text-gray-300">
                        Active core team member specializing in mobile app development. 
                        Participated in organizing tech events, workshops, and collaborative development projects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-6 h-6 bg-orange-600 rounded-full border-4 border-slate-800 relative z-10"></div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                {/* Timeline Item 6 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  
                  <div className="hidden md:block w-6 h-6 bg-cyan-600 rounded-full border-4 border-slate-800 relative z-10"></div>
                  
                  <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="glass-card p-6 text-white max-w-md">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                        <span className="text-cyan-400 font-semibold">2022 - Present</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Computer Science Student</h3>
                      <p className="text-sm text-cyan-300 mb-3">Universitas Hasanuddin</p>
                      <p className="text-gray-300">
                        Studying Computer Science with focus on software engineering, algorithms, and cybersecurity. 
                        Active in competitive programming, CTF competitions, and various tech communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* GitHub Activity Section */}
        <section id="github" className="py-20 px-4 sm:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">GitHub Activity</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Here's an overview of my GitHub contributions and coding activity
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="glass-card p-8 w-full max-w-4xl">
                <GitHubCalendar 
                  username="reynaldabnerrr" 
                  colorScheme="dark"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Feel free to reach out to me via email or connect with me on social media
              </p>
            </div>

            <div className="glass-card p-8 max-w-2xl mx-auto text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a
                  href="mailto:reynald030685@gmail.com"
                  className="flex flex-col items-center p-4 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope text-3xl mb-2"></i>
                  <span className="text-sm font-medium">Email</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/reynald-abner-tananda-a060b4227/"
                  className="flex flex-col items-center p-4 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-3xl mb-2"></i>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/reynaldabnerrr"
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-500/10 text-gray-400 hover:bg-gray-500/20 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-3xl mb-2"></i>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a
                  href="https://www.instagram.com/reynaldabnerr/"
                  className="flex flex-col items-center p-4 rounded-lg bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-3xl mb-2"></i>
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">
            &copy; {new Date().getFullYear()} Reynald Abner Tananda
          </p>
          <p className="text-gray-400">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}