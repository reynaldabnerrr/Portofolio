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
  
  // Interactive topcell CRM mockup states
  const [crmMockTab, setCrmMockTab] = useState<"dashboard" | "whatsapp" | "aftercare">("dashboard");
  const [qontakTokenStatus, setQontakTokenStatus] = useState<"idle" | "refreshing" | "success">("idle");
  const [crmCustomers, setCrmCustomers] = useState([
    { name: "John Doe", phone: "628123456789", h1: "pending", h7: "pending", month: "pending", type: "H+1 Today" },
    { name: "Jane Smith", phone: "628987654321", h1: "done", h7: "pending", month: "pending", type: "H+7 Pending" },
    { name: "Reynald Abner", phone: "628555123456", h1: "done", h7: "done", month: "pending", type: "1-Month Pending" },
    { name: "Alice Brown", phone: "628777999888", h1: "done", h7: "done", month: "done", type: "Completed" }
  ]);
  const [waToast, setWaToast] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const projects: Project[] = [
    {
      id: 4,
      title: "Topcell CRM",
      category: "Enterprise Web Application",
      description: "Comprehensive CRM system with Qontak WhatsApp API integrations, custom multi-stage follow-up pipelines (H1, H7, 1-Month), role privilege management, and advanced sales analytics.",
      longDescription: "An end-to-end enterprise CRM built on Laravel, MySQL, and Tailwind CSS. The platform automates customer follow-ups and marketing campaigns by integrating with the Qontak WhatsApp Business API. It includes custom status engines, role toggling logic for staff, date range filtering, and campaign template management.",
      technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Qontak API", "Axios", "Vite"],
      github: "https://github.com/reynaldabnerrr/CRM_TOPCELL.git",
      demo: null,
      image: "💬",
      color: "from-indigo-600 via-purple-600 to-cyan-500",
      features: [
        "Dynamic follow-up checkpoints tracker (H+1, H+7, 1-Month)",
        "Qontak WhatsApp Business API template syncing & broadcasting",
        "Role privilege management toggles for Sales and Aftercare staff",
        "Multi-column date range filters on massive transaction ledgers",
        "Automatic token refresh cycles for uninterrupted API communications",
        "Fully responsive modern admin dashboard layout"
      ],
      status: "Completed"
    },
    {
      id: 1,
      title: "ANTEKHUB (Mobile App)",
      category: "Mobile Application",
      description: "Developed the frontend of ANTEKHUB, a Flutter-based mobile application for alumni, students, and professional networking. Features networking, job listings, and mentorship.",
      longDescription: "Developed the frontend of ANTEKHUB, a Flutter-based mobile application for alumni, students, and professional networking. Built responsive and user-friendly UI to ensure smooth navigation and user experience. Implemented features including networking, job listings, mentorship, and event management. Collaborated with the team to ensure seamless integration with backend systems.",
      technologies: ["Flutter", "Dart", "Firebase", "RESTful API", "Git"],
      github: "https://github.com/reynaldabnerrr",
      demo: null,
      image: "📱",
      color: "from-blue-600 to-purple-600",
      features: [
        "Responsive and user-friendly UI for professional networking",
        "Alumni and student directories integration",
        "Mentorship portal and opportunity sharing features",
        "Job listings and event management pipelines",
        "Seamless integration with RESTful backend endpoints"
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
      color: "from-emerald-500 to-teal-600",
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

  const achievements = [
    { title: "GEMASTIK XVIII", category: "Finalist — Cyber Security Division", date: "Oct 2025", icon: "🏆", details: "National software and security competition held by Balai Pengembangan Talenta Indonesia." },
    { title: "Pragyan CTF 2025", category: "1st Place (Student Category)", date: "Feb 2025", icon: "🥇", details: "International Capture The Flag competition organized by NIT Trichy, India." },
    { title: "Interfest CTF", category: "Top 6 (Telkom University)", date: "Dec 2024", icon: "🎯", details: "National cybersecurity competition involving active threat hacking environments." },
    { title: "Cyber Jawara International", category: "Top 11", date: "Oct 2024", icon: "🌐", details: "Prestigious cybersecurity challenge for professional and student teams in Indonesia." },
    { title: "HOLOGY 7.0 CTF", category: "Top 20 (Brawijaya University)", date: "Oct 2024", icon: "🛡️", details: "National cyber incident analysis and Capture The Flag competition." },
    { title: "COMPFEST 16 CTF", category: "Finalist (Universitas Indonesia)", date: "Sep 2024", icon: "💡", details: "One of the most competitive student CTF competitions in Indonesia." },
    { title: "GEMASTIK XVII", category: "Finalist — Cyber Security Division", date: "Sep 2024", icon: "🔒", details: "National Cyber Security division finalist held by Puspresnas." }
  ];

  const workExperience = [
    {
      role: "Software Engineer (Intern)",
      org: "RS UNHAS",
      period: "May 2025 – September 2025",
      points: [
        "Developed and maintained backend systems for a web-based E-Logbook Information System.",
        "Built RESTful APIs using Laravel and managed MySQL databases for scalable performance.",
        "Implemented authentication and role-based access control to ensure system security.",
        "Collaborated with frontend developers to ensure seamless system integration.",
        "Conducted API testing, debugging, and technical documentation to maintain reliability."
      ]
    },
    {
      role: "Teaching Assistant – Mobile App Programming",
      org: "Universitas Hasanuddin (UNHAS)",
      period: "August 2025 – December 2025",
      points: [
        "Assisted lecturers in delivering undergraduate mobile application programming courses.",
        "Guided students through hands-on sessions in Flutter-based mobile development, from basic concepts to application implementation.",
        "Provided technical support in debugging, UI/UX design, and application deployment.",
        "Mentored students to understand core programming concepts, clean code practices, and problem solving approaches.",
        "Evaluated assignments and supported grading processes to ensure fair and consistent assessment."
      ]
    },
    {
      role: "Freelance Frontend Developer",
      org: "ANTEKHUB (Mobile App)",
      period: "July 2024 – September 2024",
      points: [
        "Developed the frontend of ANTEKHUB, a Flutter-based mobile application for alumni, students, and professional networking.",
        "Built responsive and user-friendly UI to ensure smooth navigation and user experience.",
        "Implemented features including networking, job listings, mentorship, and event management.",
        "Collaborated with the team to ensure seamless integration with backend systems."
      ]
    }
  ];

  const orgExperience = [
    {
      role: "Head of Digital Forensics",
      org: "ICC UH (IT Computer Club Universitas Hasanuddin)",
      period: "January 2025 – June 2025",
      points: [
        "Led training sessions on digital forensics, OSINT, and cyber investigation techniques.",
        "Mentored members in forensic analysis and real-world cybersecurity problem solving.",
        "Participated in Capture The Flag (CTF) competitions focusing on forensics and reverse engineering.",
        "Developed members' skills in cyber threat analysis and investigation methodologies."
      ]
    },
    {
      role: "Coordinator – Mobile App Development",
      org: "Coder Institute",
      period: "March 2024 – February 2025",
      points: [
        "Designed curriculum and structured learning modules for mobile application development.",
        "Delivered training sessions and hands-on mentoring in Flutter and Android development.",
        "Guided members in developing real-world applications from concept to implementation.",
        "Evaluated learning progress and improved training effectiveness."
      ]
    },
    {
      role: "Core Team – Technical",
      org: "Google Developer Student Clubs (GDSC)",
      period: "September 2023 – October 2024",
      points: [
        "Led technical sessions and developed structured learning materials.",
        "Mentored members in mobile application development.",
        "Supported community growth through collaborative learning activities."
      ]
    }
  ];

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Initialize particles
    const initParticles = () => {
      const newParticles = [];
      const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2 + 1.2
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
      setIsScrolled(window.scrollY > 40);
      
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'github', 'contact'];
      const scrollPosition = window.scrollY + 120;
      
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

  // Particle canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        // Magnetic pull toward mouse cursor
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.x -= dx * force * 0.03;
          particle.y -= dy * force * 0.03;
        }
        
        // Update velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundaries checks
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -1;
        } else if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -1;
        }
        
        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -1;
        } else if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -1;
        }
        
        // Draw glow particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.4)";
        ctx.fill();
        
        // Draw fine connections
        particles.forEach((otherParticle) => {
          if (particle.id !== otherParticle.id) {
            const odx = particle.x - otherParticle.x;
            const ody = particle.y - otherParticle.y;
            const odistance = Math.sqrt(odx * odx + ody * ody);
            
            if (odistance < 90) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - odistance / 90)})`;
              ctx.lineWidth = 0.6;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, mousePosition]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Mock CRM actions
  const triggerQontakTokenRefresh = () => {
    setQontakTokenStatus("refreshing");
    setTimeout(() => {
      setQontakTokenStatus("success");
      showWaToast("Qontak Token Refreshed Successfully! (OAuth 2.0 Synced)");
      setTimeout(() => setQontakTokenStatus("idle"), 3000);
    }, 1200);
  };

  const showWaToast = (message: string) => {
    setWaToast(message);
    setTimeout(() => setWaToast(null), 3000);
  };

  const handleUpdateCrmStatus = (index: number, checkpoint: "h1" | "h7" | "month", newStatus: string) => {
    const updated = [...crmCustomers];
    if (checkpoint === "h1") updated[index].h1 = newStatus;
    if (checkpoint === "h7") updated[index].h7 = newStatus;
    if (checkpoint === "month") updated[index].month = newStatus;
    setCrmCustomers(updated);
    showWaToast(`Updated status for ${updated[index].name} to ${newStatus.toUpperCase()}`);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden">
        {/* Loading Ring */}
        <div className="relative flex items-center justify-center w-28 h-28">
          <div className="absolute w-20 h-20 border-[3px] border-t-indigo-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute w-24 h-24 border-[3px] border-b-cyan-400 border-t-transparent border-r-transparent border-l-transparent rounded-full animate-spin-reverse" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute w-28 h-28 border-[3px] border-l-pink-500 border-t-transparent border-r-transparent border-b-transparent rounded-full animate-spin" style={{ animationDuration: '2.5s' }}></div>
          <span className="text-xl font-black text-indigo-400 tracking-widest text-glow">RT</span>
        </div>
        <h2 className="text-2xl font-bold text-white mt-8 tracking-wider font-outfit">Loading Experience</h2>
        <p className="text-gray-400 text-sm mt-2 animate-pulse">Initializing Cyber-Obsidian Workspace...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#030712] text-gray-100 selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden">
      {/* Glow rings in background */}
      <div className="glow-ring w-[600px] h-[600px] top-[-200px] left-[-200px]" />
      <div className="glow-ring w-[500px] h-[500px] bottom-[100px] right-[-100px]" />
      
      {/* Interacting Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.8 }}
      />
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white font-extrabold text-2xl tracking-widest hover:opacity-85 transition-opacity"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-outfit">RA.T</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'github', label: 'Activity' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? 'text-white bg-white/[0.06] border border-white/[0.08]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 border-b border-white/[0.08] bg-[#030712]/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 max-h-screen visible py-4' : 'opacity-0 max-h-0 invisible overflow-hidden'
        }`}>
          <div className="px-6 space-y-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'github', label: 'GitHub Activity' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                  activeSection === item.id 
                    ? 'bg-indigo-600/10 border border-indigo-500/20 text-indigo-400' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex flex-col items-center justify-between text-center px-6 py-12 sm:py-16 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none"></div>
        
        {/* Spacer at the top for layout balance */}
        <div className="h-4 sm:h-8"></div>
        
        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto my-auto space-y-6">
          {/* Glowing badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-2 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Available for Positions & Freelance
          </div>
          
          {/* Profile Picture */}
          <div className="relative mb-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-cyan-500 blur-xl opacity-40 scale-105 animate-float-medium"></div>
            <Image
              src="/assets/profile.jpg"
              alt="Reynald Abner Tananda"
              width={160}
              height={160}
              className="rounded-full relative z-10 border-2 border-white/20 shadow-2xl scale-95 transition-all duration-500 hover:scale-100 hover:border-indigo-400/50"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 font-outfit max-w-4xl">
            <span className="block text-gray-400 text-2xl sm:text-3xl font-light mb-2">Hello, World! 👋 I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-pink-300">
              Reynald Abner Tananda
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-300 min-h-[50px] font-outfit">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              <Typewriter
                words={[
                  "Software Engineer (Intern) ⚙️",
                  "Mobile App Assistant 📱",
                  "1st Place Pragyan CTF Winner 🥇",
                  "Head of Digital Forensics 🔐"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={45}
                delaySpeed={1800}
              />
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-6">
            Final-year Computer Science student at Universitas Hasanuddin. Passionate about software engineering, secure mobile development, and data systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 cyber-button"
            >
              Explore Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] rounded-full text-gray-200 font-semibold transition-all duration-300 hover:scale-105 hover:border-gray-500 flex items-center justify-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        {/* Floating Indicator (No longer absolute, naturally placed at bottom of page flow to avoid button collision) */}
        <div className="flex flex-col items-center opacity-60 mt-8 pt-4">
          <span className="text-xs uppercase tracking-widest text-indigo-400/80 mb-2 font-bold font-outfit">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-12 space-y-36">
        
        {/* About Me Section */}
        <section id="about" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Column 1: Info text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit">01 / Profile</span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  About Me
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              </div>
              
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  Hi! I'm <span className="text-indigo-400 font-bold">Reynald Abner Tananda</span>, a final-year Computer Science student at <span className="text-white font-semibold">Universitas Hasanuddin</span> specializing in Software Engineering and cybersecurity structures. I maintain a <span className="text-cyan-400 font-bold">GPA of 3.78/4.00</span>.
                </p>
                <p>
                  I have built and integrated scalable software architectures, serving as a backend developer intern for hospital systems and a teaching assistant for mobile application programming classes.
                </p>
                <p>
                  In addition, I led cybersecurity labs as the <span className="text-pink-400 font-semibold">Head of Digital Forensics at ICC UH</span>, coordinating technical workshops on OSINT, reverse engineering, and threat mitigation.
                </p>
              </div>
              
              {/* Quick statistics */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-center">
                  <span className="block text-3xl font-black text-indigo-400 tracking-tight font-outfit">3.78</span>
                  <span className="text-xs uppercase text-gray-500 tracking-wider">GPA Score</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-center">
                  <span className="block text-3xl font-black text-cyan-400 tracking-tight font-outfit">7+</span>
                  <span className="text-xs uppercase text-gray-500 tracking-wider">CTF Awards</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-center">
                  <span className="block text-3xl font-black text-pink-400 tracking-tight font-outfit">3+</span>
                  <span className="text-xs uppercase text-gray-500 tracking-wider">TA / Intern Roles</span>
                </div>
              </div>
            </div>
            
            {/* Column 2: Highlights Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { title: "Software Engineer", desc: "Laravel Backend, REST APIs, hospital logbook systems", icon: "⚙️", color: "cyber-card-glow-indigo" },
                { title: "Mobile Specialist", desc: "Flutter layouts, Android concepts, TA guidance", icon: "📱", color: "cyber-card-glow-cyan" },
                { title: "Digital Forensic", desc: "OSINT training, Incident response pipelines", icon: "🛡️", color: "cyber-card-glow-pink" },
                { title: "Competitive CTF", desc: "Pragyan CTF winner, Gemastik cybersecurity", icon: "🥇", color: "cyber-card-glow-green" }
              ].map((item, idx) => (
                <div key={idx} className={`cyber-card p-6 rounded-3xl flex flex-col justify-between h-44 ${item.color}`}>
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-white text-base font-outfit mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">02 / Stack</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Skills & Core Stack</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Programming Languages",
                  icon: "💻",
                  skills: ["Python", "PHP", "JavaScript", "Kotlin", "Dart"],
                  accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5"
                },
                {
                  title: "Web & Backend Development",
                  icon: "⚙️",
                  skills: ["Laravel", "React", "Next.js", "RESTful API", "Nginx"],
                  accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5"
                },
                {
                  title: "Mobile & Data Science",
                  icon: "📱",
                  skills: ["Flutter", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
                  accent: "text-pink-400 border-pink-500/20 bg-pink-500/5"
                },
                {
                  title: "Databases & Deployment",
                  icon: "🗄️",
                  skills: ["MySQL", "Firebase", "Nginx Configs", "VPS Deployments", "Git"],
                  accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                }
              ].map((stack, idx) => (
                <div key={idx} className="cyber-card p-6 rounded-3xl border border-white/[0.05] hover:border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{stack.icon}</span>
                    <h3 className="font-extrabold text-white text-lg font-outfit">{stack.title}</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {stack.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex flex-col gap-1.5">
                        <div className="flex justify-between text-xs text-gray-300 font-medium">
                          <span>{skill}</span>
                          <span className="text-gray-500">{(95 - sIdx * 5)}%</span>
                        </div>
                        <div className="w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full fill-bar-animate"
                            style={{ width: `${95 - sIdx * 5}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Added Coursework Tags & Soft Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="cyber-card p-6 rounded-3xl space-y-4">
                <h4 className="font-bold text-white text-lg font-outfit flex items-center gap-2">
                  <span className="text-indigo-400">🎓</span> Academic Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures & Algorithms", "Web Development", "Mobile Application Development", "Machine Learning", "Data Science", "Natural Language Processing", "Cybersecurity", "Software Project Management"].map((course, cIdx) => (
                    <span key={cIdx} className="px-3 py-1.5 text-xs font-semibold bg-white/[0.03] border border-white/[0.06] rounded-xl text-gray-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cyber-card p-6 rounded-3xl space-y-4">
                <h4 className="font-bold text-white text-lg font-outfit flex items-center gap-2">
                  <span className="text-cyan-400">🤝</span> Professional & Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Strategic Planning", "Problem Solving", "Critical Thinking", "Communication", "Team Collaboration", "B2 English", "A2 Chinese"].map((softSkill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-300">
                      {softSkill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">03 / Works</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Featured Projects</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-gray-400 text-lg max-w-xl mx-auto pt-2">
                Click "View Details" to interact with live dashboard mockups and check system architectures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="cyber-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/[0.04]"
                >
                  <div>
                    <div className="relative h-48 bg-gradient-to-br from-indigo-950 via-[#0a0f1d] to-[#030712] flex items-center justify-center border-b border-white/[0.05] overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-110 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                      
                      {/* Floating glowing background ball */}
                      <div className={`w-32 h-32 rounded-full absolute bg-gradient-to-tr ${project.color} filter blur-2xl opacity-35 animate-float-slow`}></div>
                      
                      <div className="text-6xl relative z-10 drop-shadow-xl">{project.image}</div>
                      
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-indigo-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-4">
                      <span className="text-xs font-semibold uppercase text-indigo-400 tracking-wider font-outfit">{project.category}</span>
                      <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors font-outfit leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/[0.06] text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-300 flex items-center justify-center text-sm font-semibold tracking-wide gap-2 shadow-lg shadow-indigo-600/15"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 border border-white/[0.06] rounded-xl transition-all duration-300 flex items-center justify-center text-sm font-semibold gap-2"
                    >
                      <i className="fab fa-github text-base"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Detail Modal with interactive topcell CRM widget */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#030712]/90 backdrop-blur-md animate-fade-in flex justify-center items-start p-4 sm:p-10">
            <div className="cyber-card rounded-3xl max-w-4xl w-full border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              {/* Modal Banner */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-indigo-950 via-[#0d1326] to-[#030712] flex items-center justify-center border-b border-white/[0.08]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] rounded-full flex items-center justify-center text-white border border-white/[0.08] transition-colors z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className={`absolute inset-0 bg-gradient-to-tr ${selectedProject.color} opacity-20 filter blur-2xl`}></div>
                <div className="text-7xl sm:text-8xl relative z-10 drop-shadow-2xl">{selectedProject.image}</div>
                
                <div className="absolute bottom-4 left-6">
                  <span className="px-4 py-1.5 bg-white/[0.05] border border-white/[0.08] text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-8">
                {/* Description Header */}
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-black text-white font-outfit tracking-tight">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-base leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                {/* Tech & Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column: Key Features Checklist */}
                  <div className="md:col-span-7 space-y-4">
                    <h3 className="text-xl font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span> Key Features & Architecture
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <svg className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right Column: Tech & Resources */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span> Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.06] text-gray-300 rounded-lg text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-pink-400 rounded-full"></span> Project Assets
                      </h3>
                      <div className="space-y-2">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] text-white rounded-xl transition-colors text-sm font-semibold gap-3"
                        >
                          <i className="fab fa-github text-lg text-gray-400"></i>
                          Browse Git Repository
                        </a>
                        
                        {selectedProject.demo && (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors text-sm font-semibold gap-3"
                          >
                            <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Explore Live Application
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* INTERACTIVE COMPONENT FOR TOPCELL CRM */}
                {selectedProject.id === 4 && (
                  <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-black text-white font-outfit flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                          </span>
                          Interactive Live CRM Mockup
                        </h4>
                        <p className="text-xs text-gray-500">Click tabs to preview real modules built in Topcell CRM.</p>
                      </div>
                      
                      {/* Tab buttons */}
                      <div className="flex bg-white/[0.03] border border-white/[0.06] rounded-xl p-1 text-xs">
                        <button 
                          onClick={() => setCrmMockTab("dashboard")}
                          className={`px-3 py-1.5 rounded-lg transition-all ${crmMockTab === "dashboard" ? "bg-indigo-600 text-white shadow" : "text-gray-400 hover:text-white"}`}
                        >
                          Dashboard
                        </button>
                        <button 
                          onClick={() => setCrmMockTab("whatsapp")}
                          className={`px-3 py-1.5 rounded-lg transition-all ${crmMockTab === "whatsapp" ? "bg-indigo-600 text-white shadow" : "text-gray-400 hover:text-white"}`}
                        >
                          Qontak WA API
                        </button>
                        <button 
                          onClick={() => setCrmMockTab("aftercare")}
                          className={`px-3 py-1.5 rounded-lg transition-all ${crmMockTab === "aftercare" ? "bg-indigo-600 text-white shadow" : "text-gray-400 hover:text-white"}`}
                        >
                          Aftercare Pipeline
                        </button>
                      </div>
                    </div>

                    {/* MOCK CLIENT DISPLAY BOX */}
                    <div className="mock-window p-6 text-xs relative">
                      
                      {/* Toast notification inside mock */}
                      {waToast && (
                        <div className="absolute top-4 right-4 bg-indigo-600 border border-indigo-400 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-2xl animate-bounce z-30">
                          <i className="fab fa-whatsapp text-lg"></i>
                          <span>{waToast}</span>
                        </div>
                      )}

                      {/* Header line */}
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                          <span className="text-gray-400 text-[10px] ml-2">topcell-crm.test / admin</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/20 text-[10px]">
                          Role: Superadmin
                        </span>
                      </div>

                      {/* TAB CONTENT: DASHBOARD */}
                      {crmMockTab === "dashboard" && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-xl">
                              <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Total Sales</span>
                              <span className="text-lg font-extrabold text-white font-outfit">1,482 Transactions</span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-xl">
                              <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Today Follow-ups</span>
                              <span className="text-lg font-extrabold text-cyan-400 font-outfit">8 Customers</span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-xl">
                              <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Pending Pipeline</span>
                              <span className="text-lg font-extrabold text-pink-400 font-outfit">42 Customers</span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-xl">
                              <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Qontak API</span>
                              <span className="text-lg font-extrabold text-green-400 font-outfit">Online</span>
                            </div>
                          </div>
                          
                          <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl space-y-2">
                            <h5 className="font-bold text-white text-sm">Follow-up Activity Chart Preview</h5>
                            <div className="h-16 flex items-end gap-2 pt-2 border-b border-white/10 pb-1">
                              <div className="bg-indigo-500 w-full h-[60%] rounded-t"></div>
                              <div className="bg-indigo-500 w-full h-[85%] rounded-t"></div>
                              <div className="bg-indigo-500 w-full h-[40%] rounded-t"></div>
                              <div className="bg-cyan-500 w-full h-[100%] rounded-t"></div>
                              <div className="bg-indigo-500 w-full h-[70%] rounded-t"></div>
                              <div className="bg-indigo-500 w-full h-[90%] rounded-t"></div>
                              <div className="bg-pink-500 w-full h-[55%] rounded-t"></div>
                            </div>
                            <div className="flex justify-between text-[9px] text-gray-500">
                              <span>Mon</span>
                              <span>Tue</span>
                              <span>Wed</span>
                              <span>Thu (Today)</span>
                              <span>Fri</span>
                              <span>Sat</span>
                              <span>Sun</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB CONTENT: WHATSAPP CONFIG */}
                      {crmMockTab === "whatsapp" && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl space-y-3">
                              <h5 className="font-bold text-white text-sm">Qontak credentials</h5>
                              <div className="space-y-2">
                                <div>
                                  <label className="text-[10px] text-gray-500 block">QONTAK_BASE_URL</label>
                                  <input type="text" readOnly value="https://service.qontak.com/api/v1/templates" className="w-full bg-white/[0.04] border border-white/[0.06] text-gray-300 rounded px-2.5 py-1.5 focus:outline-none" />
                                </div>
                                <div>
                                  <label className="text-[10px] text-gray-500 block">API ACCESS TOKEN</label>
                                  <input type="password" readOnly value="••••••••••••••••••••••••••••••••••••••••" className="w-full bg-white/[0.04] border border-white/[0.06] text-gray-300 rounded px-2.5 py-1.5 focus:outline-none" />
                                </div>
                              </div>
                              <button 
                                onClick={triggerQontakTokenRefresh}
                                disabled={qontakTokenStatus === "refreshing"}
                                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-lg text-white transition-colors"
                              >
                                {qontakTokenStatus === "refreshing" ? "Syncing credentials..." : "Refresh Qontak OAuth Token"}
                              </button>
                            </div>

                            <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl space-y-3">
                              <h5 className="font-bold text-white text-sm">Synced WhatsApp Templates</h5>
                              <div className="space-y-2">
                                <div className="p-2.5 bg-white/[0.03] border border-white/[0.04] rounded-lg">
                                  <span className="font-semibold text-white block">followup_h1_customer</span>
                                  <p className="text-gray-400 text-[10px] mt-1">{"Halo {{1}}, terima kasih telah berbelanja di Topcell. Bagaimana pengalaman Anda?"}</p>
                                </div>
                                <div className="p-2.5 bg-white/[0.03] border border-white/[0.04] rounded-lg">
                                  <span className="font-semibold text-white block">followup_h7_aftercare</span>
                                  <p className="text-gray-400 text-[10px] mt-1">{"Halo {{1}}, produk {{2}} Anda sudah berumur 1 minggu. Jika ada pertanyaan hubungi..."}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB CONTENT: AFTERCARE PIPELINE */}
                      {crmMockTab === "aftercare" && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center bg-white/[0.02] p-2 border border-white/[0.04] rounded-xl">
                            <span className="font-bold text-white">Aftercare Ledger Milestones (Active Actions)</span>
                            <button 
                              onClick={() => showWaToast("Broadcast dispatch queue sent to Qontak API!")}
                              className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-white font-semibold"
                            >
                              Broadcast All Pending
                            </button>
                          </div>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full text-left">
                              <thead>
                                <tr className="border-b border-white/[0.06] text-gray-500 text-[10px]">
                                  <th className="pb-2">Name</th>
                                  <th className="pb-2">Trigger Type</th>
                                  <th className="pb-2">H+1</th>
                                  <th className="pb-2">H+7</th>
                                  <th className="pb-2">1-Month</th>
                                  <th className="pb-2 text-right">Action</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/[0.04]">
                                {crmCustomers.map((cust, index) => (
                                  <tr key={index} className="text-gray-300">
                                    <td className="py-2.5 font-medium text-white">{cust.name}</td>
                                    <td className="py-2.5 text-gray-400">{cust.type}</td>
                                    
                                    {/* H+1 cell */}
                                    <td className="py-2.5">
                                      <button 
                                        onClick={() => handleUpdateCrmStatus(index, "h1", cust.h1 === "done" ? "pending" : "done")}
                                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${cust.h1 === "done" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"}`}
                                      >
                                        {cust.h1}
                                      </button>
                                    </td>

                                    {/* H+7 cell */}
                                    <td className="py-2.5">
                                      <button 
                                        onClick={() => handleUpdateCrmStatus(index, "h7", cust.h7 === "done" ? "pending" : "done")}
                                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${cust.h7 === "done" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"}`}
                                      >
                                        {cust.h7}
                                      </button>
                                    </td>

                                    {/* 1-Month cell */}
                                    <td className="py-2.5">
                                      <button 
                                        onClick={() => handleUpdateCrmStatus(index, "month", cust.month === "done" ? "pending" : "done")}
                                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${cust.month === "done" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"}`}
                                      >
                                        {cust.month}
                                      </button>
                                    </td>

                                    <td className="py-2.5 text-right">
                                      <button 
                                        onClick={() => showWaToast(`WA message sent via Qontak API to ${cust.name} (${cust.phone})`)}
                                        className="px-2 py-1 bg-white/[0.04] border border-white/[0.08] hover:bg-indigo-600 hover:text-white rounded text-[10px] text-gray-300 font-bold transition-all"
                                      >
                                        Send WA
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Experience Timeline Section */}
        <section className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Work Experiences */}
            <div className="lg:col-span-6 space-y-8">
              <h3 className="text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3">
                <span className="text-indigo-400">💼</span> Work Experience
              </h3>
              <div className="relative border-l border-white/[0.08] ml-3 space-y-10 pt-2">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 group">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-glow transition-all group-hover:scale-125"></div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">{exp.period}</span>
                      <h4 className="text-lg font-bold text-white font-outfit">{exp.role}</h4>
                      <span className="text-xs text-gray-500 block font-semibold">{exp.org}</span>
                      <ul className="list-disc list-outside pl-4 text-xs text-gray-400 space-y-1 pt-2">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Organization Experiences */}
            <div className="lg:col-span-6 space-y-8">
              <h3 className="text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3">
                <span className="text-cyan-400">🤝</span> Organization Experience
              </h3>
              <div className="relative border-l border-white/[0.08] ml-3 space-y-10 pt-2">
                {orgExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 group">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow transition-all group-hover:scale-125"></div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">{exp.period}</span>
                      <h4 className="text-lg font-bold text-white font-outfit">{exp.role}</h4>
                      <span className="text-xs text-gray-500 block font-semibold">{exp.org}</span>
                      <ul className="list-disc list-outside pl-4 text-xs text-gray-400 space-y-1 pt-2">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Competitions & Achievements Section */}
        <section id="achievements" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">04 / Awards</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Competitions & Achievements</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((award, index) => (
                <div key={index} className="cyber-card p-6 rounded-3xl border border-white/[0.04] hover:border-white/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{award.icon}</span>
                      <span className="text-[10px] font-semibold bg-white/[0.05] border border-white/[0.08] text-indigo-300 px-2 py-0.5 rounded-full">
                        {award.date}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-white text-lg font-outfit leading-snug">{award.title}</h4>
                    <span className="text-xs text-cyan-400 font-semibold block">{award.category}</span>
                    <p className="text-gray-400 text-xs leading-relaxed">{award.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Activity Section */}
        <section id="github" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">05 / Code</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">GitHub Activity</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="flex justify-center">
              <div className="cyber-card p-6 sm:p-8 rounded-3xl w-full max-w-4xl border border-white/[0.04] overflow-x-auto">
                <div className="min-w-[700px] flex justify-center py-2">
                  <GitHubCalendar 
                    username="reynaldabnerrr" 
                    colorScheme="dark"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={13}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">06 / Contact</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Get In Touch</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-gray-400 text-base max-w-xl mx-auto pt-2">
                Have a project concept or potential role? Reach out through any channel below.
              </p>
            </div>

            <div className="cyber-card p-8 rounded-3xl max-w-2xl mx-auto border border-white/[0.04]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  href="mailto:reynald030685@gmail.com"
                  className="flex flex-col items-center p-5 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope text-3xl mb-3"></i>
                  <span className="text-xs font-bold uppercase tracking-wider font-outfit">Email</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/reynald-abner-tananda-a060b4227/"
                  className="flex flex-col items-center p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-3xl mb-3"></i>
                  <span className="text-xs font-bold uppercase tracking-wider font-outfit">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/reynaldabnerrr"
                  className="flex flex-col items-center p-5 rounded-2xl bg-gray-500/5 border border-gray-500/10 text-gray-400 hover:bg-gray-500/10 hover:border-gray-300 hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-3xl mb-3"></i>
                  <span className="text-xs font-bold uppercase tracking-wider font-outfit">GitHub</span>
                </a>
                
                <a
                  href="https://www.instagram.com/reynaldabnerr/"
                  className="flex flex-col items-center p-5 rounded-2xl bg-pink-500/5 border border-pink-500/10 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-3xl mb-3"></i>
                  <span className="text-xs font-bold uppercase tracking-wider font-outfit">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#02050c] text-white py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-base font-bold font-outfit">
              &copy; {new Date().getFullYear()} Reynald Abner Tananda
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Crafting premium solutions with Next.js, TypeScript, & Tailwind CSS.
            </p>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>Makassar, ID</span>
            <span>•</span>
            <span>Secured Dev</span>
          </div>
        </div>
      </footer>
    </div>
  );
}