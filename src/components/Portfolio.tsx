import React, { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";


const Cyber3DCanvas = React.lazy(() => import("./Cyber3DCanvas"));
const TerminalModal = React.lazy(() => import("./TerminalModal"));
const ChatbotWidget = React.lazy(() => import("./ChatbotWidget"));
const EcommerceSimulator = React.lazy(() => import("./EcommerceSimulator"));

const GitHubCalendarLazy = React.lazy(() => import("react-github-calendar").then(m => ({ default: m.GitHubCalendar })));

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const yPositions = Array(columns).fill(0);

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#22c55e";
      ctx.font = "15px monospace";

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.floor(Math.random() * 96) + 33);
        const x = index * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    const render = () => {
      draw();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[100] w-full h-full pointer-events-none"
    />
  );
};

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  image: string;
  color: string;
  features: string[];
  status: string;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [load3D, setLoad3D] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => setLoad3D(true));
      } else {
        setTimeout(() => setLoad3D(true), 300);
      }
    }
  }, []);
  const [loadingStatus, setLoadingStatus] = useState("> BOOT: INITIATING SECURE ARCHITECTURE PROTOCOLS...");
  const [fadeLoading, setFadeLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; size: number }>>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isManualScrollRef = useRef(false);

  // Premium Features States
  const [isLightMode, setIsLightMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") return true;
      if (savedTheme === "dark") return false;
      return window.matchMedia("(prefers-color-scheme: light)").matches;
    }
    return false;
  });
  const [activeSkillTab, setActiveSkillTab] = useState(0);
  
  // Terminal console state flags
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isHacking, setIsHacking] = useState(false);

  // E-Commerce Checkout Simulator cart state (synced with Navbar)
  const [simCart, setSimCart] = useState<Array<{ id: number; name: string; price: number; image: string; quantity: number }>>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLight = document.documentElement.classList.contains('light');
      if (isLight !== isLightMode) {
        setIsLightMode(isLight);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLightMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isLightMode ? "light" : "dark");
    }
  }, [isLightMode]);

  // Interactive Toast state
  const [waToast] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const projects: Project[] = [
    {
      id: 5,
      title: "E-Logbook Radiology UNHAS",
      category: "Academic & Medical Platform",
      description: "A web-based academic monitoring and digital logbook system developed for the Radiology Specialist Medical Education Program at Hasanuddin University.",
      longDescription: "A comprehensive web-based academic monitoring and digital logbook platform developed for the Radiology Specialist Medical Education Program at Hasanuddin University (UNHAS). The system enables residents to log clinical procedures, track curriculum milestones, manage academic portfolios, and receive supervisor approvals and feedback seamlessly.",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "REST API", "PWA"],
      github: null,
      demo: "https://radiologiunhas.cloud/",
      image: "fa-solid fa-notes-medical",
      color: "from-cyan-600 via-blue-600 to-indigo-600",
      features: [
        "Digital clinical activity and learning logbook",
        "Resident academic progress monitoring & milestones",
        "Supervisor approval and feedback system",
        "Clinical case and supporting document management",
        "Study plan and course management pipelines",
        "Role-based access control for residents, supervisors, and admins",
        "Integrated dashboard analytics and reporting system",
        "Progressive Web App (PWA) installation support"
      ],
      status: "Completed"
    },
    {
      id: 4,
      title: "Topcell CRM",
      category: "Enterprise Web Application",
      description: "Comprehensive CRM system with Qontak WhatsApp API integration, custom follow-up pipelines (H1, H7, 1-Month), role privilege management, and advanced sales analytics.",
      longDescription: "An enterprise CRM platform built on Laravel, MySQL, and Tailwind CSS. The application automates customer follow-ups by integrating the Qontak WhatsApp Business API. It provides automatic checkpoint tracking engines, role privileges, transaction ledger filter reports, and marketing message templates.",
      technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Qontak API", "Axios", "Vite"],
      github: "https://github.com/reynaldabnerrr/CRM_TOPCELL.git",
      demo: null,
      image: "fa-solid fa-comments",
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
      description: "Flutter-based mobile application frontend for alumni, students, and professional networking. Supports job searches and mentorship.",
      longDescription: "Developed the frontend of ANTEKHUB, a Flutter app to facilitate networking among alumni, students, and professionals. Designed responsive UI for user comfort, directory features, mentorship portal, job listings, and RESTful API integration.",
      technologies: ["Flutter", "Dart", "Firebase", "RESTful API", "Git"],
      github: "https://github.com/reynaldabnerrr/AntekHub.git",
      demo: null,
      image: "fa-solid fa-mobile-screen-button",
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
      description: "Tourism platform introducing Makassar's culture, tourist destinations, and local culinary experiences. Equipped with an interactive itinerary planner.",
      longDescription: "A Makassar culture and travel explorer application. Provides detailed destination data, local tourism event calendars, local culinary guides, interactive maps, and a database-driven user review system.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "API Integration"],
      github: "https://github.com/reynaldabnerrr/Jokka.git",
      demo: "https://jokka-1d960.firebaseapp.com",
      image: "fa-solid fa-globe",
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
      title: "Topcell Company Profile",
      category: "Corporate Website",
      description: "Modern corporate profile website for Topcell, presenting services, vision, and digital solutions interactively and elegantly.",
      longDescription: "Professional corporate profile website designed to display Topcell's services, vision, mission, and brand identity. Built using Next.js and Tailwind CSS with smooth animations and a modern layout on both desktop and mobile.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/reynaldabnerrr",
      demo: "https://topcell.topgroup.asia/",
      image: "fa-solid fa-building",
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
    { title: "GEMASTIK XVIII", category: "Finalist — Cyber Security Division", date: "Oct 2025", icon: "fa-solid fa-trophy text-yellow-400", details: "National student technology competition organized by Balai Pengembangan Talenta Indonesia." },
    { title: "Pragyan CTF 2025", category: "1st Place (Student Category)", date: "Feb 2025", icon: "fa-solid fa-award text-yellow-500", details: "International Capture The Flag competition organized by NIT Trichy, India." },
    { title: "Interfest CTF", category: "Top 6 (Telkom University)", date: "Dec 2024", icon: "fa-solid fa-crosshairs text-red-500", details: "National cybersecurity competition with hands-on penetration testing scenarios." },
    { title: "Cyber Jawara International", category: "Top 11", date: "Oct 2024", icon: "fa-solid fa-globe text-blue-400", details: "Prestigious national/regional CTF competition for professional and student teams." },
    { title: "HOLOGY 7.0 CTF", category: "Top 20 (Brawijaya University)", date: "Oct 2024", icon: "fa-solid fa-shield-halved text-cyan-400", details: "Cyber incident analysis and national CTF challenge-solving competition." },
    { title: "COMPFEST 16 CTF", category: "Finalist (Universitas Indonesia)", date: "Sep 2024", icon: "fa-solid fa-lightbulb text-amber-400", details: "One of the most rigorous and challenging student CTF competitions in Indonesia." },
    { title: "GEMASTIK XVII", category: "Finalist — Cyber Security Division", date: "Sep 2024", icon: "fa-solid fa-lock text-purple-400", details: "Finalist in the Cyber Security division at the XVII National GEMASTIK competition." }
  ];

  const workExperience = [
    {
      role: "Software Engineer (Intern)",
      org: "RS UNHAS",
      period: "May 2025 – September 2025",
      points: [
        "Developed and maintained backend systems for a web-based E-Logbook Information System.",
        "Built RESTful APIs using Laravel and managed MySQL databases with high performance.",
        "Implemented authentication and role-based access control for system security.",
        "Collaborated with frontend developers for seamless interface integration.",
        "Conducted API testing, debugging, and prepared technical documentation."
      ]
    },
    {
      role: "Teaching Assistant – Mobile App Programming",
      org: "Universitas Hasanuddin (UNHAS)",
      period: "August 2025 – December 2025",
      points: [
        "Assisted lecturing professors in delivering mobile application programming courses for undergraduate classes.",
        "Guided students through Flutter laboratory sessions, from basic OOP concepts to deployment.",
        "Provided technical support in debugging, UI/UX design concepts, and state management optimization.",
        "Transferred understanding of clean code, folder structures, and error-solving best practices.",
        "Evaluated weekly assignments and assisted in standardizing undergraduate laboratory grading."
      ]
    },
    {
      role: "Freelance Frontend Developer",
      org: "ANTEKHUB (Mobile App)",
      period: "July 2024 – September 2024",
      points: [
        "Developed the frontend of the ANTEKHUB application using Flutter for alumni and students.",
        "Built responsive and fluid UI for comfortable networking navigation.",
        "Integrated directory features, job listings, mentorship programs, and event schedulers.",
        "Collaborated closely with the backend team for optimal consumption of RESTful API data."
      ]
    }
  ];

  const orgExperience = [
    {
      role: "Head of Digital Forensics",
      org: "ICC UH (IT Computer Club Universitas Hasanuddin)",
      period: "January 2025 – June 2025",
      points: [
        "Led regular training sessions on Digital Forensics, OSINT, and digital investigation techniques.",
        "Transferred skills in disk forensics, memory analysis, and cyber CTF challenge solving.",
        "Participated in external CTF competitions representing the university IT computer club.",
        "Developed the club's cybersecurity curriculum to be relevant with current industry trends."
      ]
    },
    {
      role: "Coordinator – Mobile App Development",
      org: "Coder Institute",
      period: "March 2024 – February 2025",
      points: [
        "Designed curriculum and compiled structured learning modules for mobile application development.",
        "Delivered training materials and facilitated hands-on mentoring in Flutter & Android frameworks.",
        "Guided members in creating real-world mobile application projects from ideation to presentation.",
        "Evaluated members' learning progress periodically for curriculum effectiveness."
      ]
    },
    {
      role: "Core Team – Technical",
      org: "Google Developer Student Clubs (GDSC)",
      period: "September 2023 – October 2024",
      points: [
        "Delivered periodic technical sessions and compiled technology introduction module assets.",
        "Mentored members in basic Flutter implementation and API connectivity.",
        "Supported the growth ecosystem of the developer community at the university level."
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        const next = Math.min(prev + step, 100);
        
        if (next < 25) {
          setLoadingStatus("> BOOT: INITIATING SECURE ARCHITECTURE PROTOCOLS...");
        } else if (next < 50) {
          setLoadingStatus("> NET: ESTABLISHING INTEGRATED CRM ENDPOINTS...");
        } else if (next < 75) {
          setLoadingStatus("> RENDER: SHADING DYNAMIC CYBER GRAPHICS GRID...");
        } else if (next < 95) {
          setLoadingStatus("> CORE: SPINNING DECORATIVE BACKGROUND PARTICLES...");
        } else {
          setLoadingStatus("> SYSTEM: COGNITIVE WORKSPACE ONLINE.");
        }
        return next;
      });
    }, 35);

    // Hard fallback safety: guarantee loading screen reaches 100% after max 1.5 seconds
    const safetyTimer = setTimeout(() => {
      setLoadingProgress(100);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    if (loadingProgress >= 100) {
      const fadeTimer = setTimeout(() => {
        setFadeLoading(true);
      }, 300);

      const exitTimer = setTimeout(() => {
        setIsLoading(false);
      }, 700);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(exitTimer);
      };
    }
  }, [loadingProgress]);

  useEffect(() => {

    const initParticles = () => {
      const newParticles = [];
      const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 55;
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 2 + 1.2
        });
      }
      setParticles(newParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      if (isManualScrollRef.current) return;
      
      const sections = ['home', 'about', 'services', 'simulator', 'skills', 'projects', 'achievements', 'github', 'contact'];
      const scrollPosition = window.scrollY + 160;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetHeight = rect.height;
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
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 160) {
          const force = (160 - distance) / 160;
          particle.x -= dx * force * 0.025;
          particle.y -= dy * force * 0.025;
        }
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
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
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.35)";
        ctx.fill();
        
        particles.forEach((otherParticle) => {
          if (particle.id !== otherParticle.id) {
            const odx = particle.x - otherParticle.x;
            const ody = particle.y - otherParticle.y;
            const odistance = Math.sqrt(odx * odx + ody * ody);
            
            if (odistance < 95) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 * (1 - odistance / 95)})`;
              ctx.lineWidth = 0.5;
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
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      isManualScrollRef.current = true;
      setActiveSection(sectionId);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        isManualScrollRef.current = false;
      }, 800);
    }
  };



  return (
    <div className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden">
      {isLoading && (
        <div className={`workspace-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-500 overflow-hidden ${
          isLightMode ? 'bg-slate-50 text-slate-900' : 'bg-[#030712] text-white'
        } ${fadeLoading ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <div className="cyber-grid absolute inset-0 opacity-30 pointer-events-none" />
          
          {/* Animated Ambient Light Blobs */}
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[100px] -top-20 -left-20 pointer-events-none animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] -bottom-20 -right-20 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative flex flex-col items-center justify-center p-6 max-w-md w-full z-10 text-center space-y-8 select-none">
            
            {/* Centerpiece 3D Cyber Reactor Gauge */}
            <div className="relative flex items-center justify-center w-48 h-48">
              {/* Outer pulsing neon ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 blur-[1px] animate-ping" style={{ animationDuration: '3s' }} />
              
              {/* Segmented rotating spinners */}
              <div className="absolute w-44 h-44 border-2 border-dashed border-indigo-500/40 rounded-full animate-spin" style={{ animationDuration: '14s' }} />
              <div className="absolute w-48 h-48 border-2 border-t-indigo-500 border-b-cyan-400 border-r-transparent border-l-transparent rounded-full animate-spin" style={{ animationDuration: '5s' }} />
              <div className="absolute w-36 h-36 border-2 border-r-pink-500 border-l-indigo-400 border-t-transparent border-b-transparent rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              
              {/* Center Glow Core */}
              <div className="absolute w-28 h-28 bg-gradient-to-tr from-indigo-600/20 via-cyan-500/20 to-pink-500/20 rounded-full blur-lg animate-pulse" />
              
              {/* Core Telemetry Text */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                <span className="text-4xl font-extrabold tracking-tighter font-outfit text-gradient bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                  {loadingProgress}%
                </span>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-indigo-500 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  SYSTEM INITIALIZING
                </span>
              </div>
            </div>

            {/* Glassmorphism Loader Terminal Panel */}
            <div className={`loader-card p-6 w-full rounded-3xl border backdrop-blur-2xl space-y-4 shadow-2xl relative transition-all duration-300 ${
              isLightMode 
                ? 'bg-white/85 border-slate-200/80 shadow-[0_20px_60px_rgba(79,70,229,0.12)] text-slate-800' 
                : 'bg-[#070b13]/80 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white'
            }`}>
              {/* Terminal Window Bar */}
              <div className={`flex items-center justify-between border-b pb-3 ${isLightMode ? 'border-slate-200' : 'border-white/10'}`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-terminal text-[10px] text-indigo-500"></i>
                  <span className={`text-[10px] font-mono font-extrabold uppercase tracking-wider ${isLightMode ? 'text-slate-600' : 'text-gray-300'}`}>
                    DON NETO // PROTOCOL
                  </span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-1.5">
                <div className={`w-full border rounded-full h-2 overflow-hidden p-[1px] ${isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-white/5 border-white/10'}`}>
                  <div 
                    className="bg-gradient-to-r from-indigo-600 via-cyan-400 to-pink-500 h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(99,102,241,0.6)] relative" 
                    style={{ width: `${loadingProgress}%` }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-400 px-0.5">
                  <span>0%</span>
                  <span className="font-bold text-indigo-500">OPTIMIZING ASSETS</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Dynamic Status Log Line */}
              <div className={`p-2.5 rounded-xl border font-mono text-[11px] flex items-center justify-center transition-colors ${
                isLightMode ? 'bg-slate-50 border-slate-200 text-indigo-600' : 'bg-[#030712]/70 border-white/5 text-cyan-400'
              }`}>
                <span className="truncate">{loadingStatus}</span>
              </div>

              {/* Runtime Module Indicators */}
              <div className="grid grid-cols-3 gap-2 pt-1" aria-label="Active runtime modules">
                <div className={`relative flex min-w-0 flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 font-mono ${
                  isLightMode
                    ? 'bg-indigo-50/80 border-indigo-200 text-indigo-700'
                    : 'bg-indigo-500/[0.08] border-indigo-400/20 text-indigo-300'
                }`}>
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.9)]" aria-hidden="true" />
                  <span className={`grid h-7 w-7 place-items-center rounded-lg border ${
                    isLightMode ? 'bg-white border-indigo-200' : 'bg-indigo-400/10 border-indigo-300/20'
                  }`}>
                    <i className="fa-solid fa-rocket text-[11px]" aria-hidden="true" />
                  </span>
                  <span className="truncate text-[9px] font-bold tracking-[0.12em]">ASTRO 5</span>
                </div>

                <div className={`relative flex min-w-0 flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 font-mono ${
                  isLightMode
                    ? 'bg-cyan-50/80 border-cyan-200 text-cyan-700'
                    : 'bg-cyan-500/[0.08] border-cyan-400/20 text-cyan-300'
                }`}>
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.9)]" aria-hidden="true" />
                  <span className={`grid h-7 w-7 place-items-center rounded-lg border ${
                    isLightMode ? 'bg-white border-cyan-200' : 'bg-cyan-400/10 border-cyan-300/20'
                  }`}>
                    <i className="fa-brands fa-react text-xs" aria-hidden="true" />
                  </span>
                  <span className="truncate text-[9px] font-bold tracking-[0.12em]">REACT 19</span>
                </div>

                <div className={`relative flex min-w-0 flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 font-mono ${
                  isLightMode
                    ? 'bg-pink-50/80 border-pink-200 text-pink-700'
                    : 'bg-pink-500/[0.08] border-pink-400/20 text-pink-300'
                }`}>
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.9)]" aria-hidden="true" />
                  <span className={`grid h-7 w-7 place-items-center rounded-lg border ${
                    isLightMode ? 'bg-white border-pink-200' : 'bg-pink-400/10 border-pink-300/20'
                  }`}>
                    <i className="fa-solid fa-shield-halved text-[11px]" aria-hidden="true" />
                  </span>
                  <span className="truncate text-[9px] font-bold tracking-[0.12em]">CYBERSEC</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
      
      {/* High-tech tech grid pattern background overlay */}
      <div className="cyber-grid" />

      {/* Decorative Blur Ambient Blobs */}
      <div className="hero-orb top-[-15%] left-[-10%]" />
      <div className="hero-orb bottom-[15%] right-[-10%] bg-radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)" />
      <div className="hero-orb top-[40%] left-[35%] w-[550px] h-[550px] bg-radial-gradient(circle,rgba(236,72,153,0.04)_0%,transparent_65%)" />
      
      {/* Interacting Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{ opacity: 0.85 }}
      />
      
      {/* Tactical Cyber Telemetry Header Bar */}
      <div className={`telemetry-bar fixed top-0 left-0 right-0 z-50 text-[10px] font-mono py-1.5 px-4 hidden md:flex items-center justify-between transition-colors duration-300 select-none ${
        isLightMode 
          ? 'bg-slate-100/90 backdrop-blur-md border-b border-slate-200 text-slate-600' 
          : 'bg-[#030712]/90 backdrop-blur-md border-b border-white/[0.06] text-gray-400'
      }`}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1.5 text-emerald-500 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>DEV_ENV: ONLINE</span>
          </div>
          <span className={`telemetry-sep ${isLightMode ? "text-slate-300" : "text-white/20"}`}>|</span>
          <span>LATENCY: <span className={isLightMode ? "text-cyan-600 font-bold" : "text-cyan-400"}>12ms</span></span>
          <span className={`telemetry-sep ${isLightMode ? "text-slate-300" : "text-white/20"}`}>|</span>
          <span>STACK: <span className={isLightMode ? "text-indigo-600 font-bold" : "text-indigo-400"}>LARAVEL / REACT / FLUTTER</span></span>
          <span className={`telemetry-sep ${isLightMode ? "text-slate-300" : "text-white/20"}`}>|</span>
          <span className="hidden lg:inline">NODE: <span className={isLightMode ? "text-purple-600 font-bold" : "text-purple-400"}>IDN-JKT-01</span></span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsHacking(!isHacking)}
            className={`px-2 py-0.5 rounded border transition-all ${
              isHacking 
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-600 font-bold' 
                : isLightMode 
                  ? 'border-slate-300 hover:bg-slate-200/60 text-slate-600 font-medium' 
                  : 'border-white/10 hover:border-white/20 text-gray-400'
            }`}
          >
            <i className="fa-solid fa-code text-[9px] mr-1"></i>
            {isHacking ? 'MATRIX: ON' : 'MATRIX: OFF'}
          </button>
          <button
            onClick={() => setIsTerminalOpen(true)}
            className={`px-2 py-0.5 rounded border transition-all ${
              isLightMode 
                ? 'border-indigo-500/30 bg-indigo-50 text-indigo-700 hover:bg-indigo-100/70 font-semibold' 
                : 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20'
            }`}
          >
            <i className="fa-solid fa-terminal text-[9px] mr-1"></i>
            TERMINAL [CTRL+K]
          </button>
          {simCart.length > 0 && (
            <button
              onClick={() => scrollToSection('simulator')}
              className={`px-2 py-0.5 rounded border animate-pulse font-bold ${
                isLightMode 
                  ? 'border-pink-500/40 bg-pink-50 text-pink-700' 
                  : 'border-pink-500/40 bg-pink-500/15 text-pink-300'
              }`}
            >
              <i className="fa-solid fa-cart-shopping text-[9px] mr-1"></i>
              CART ({simCart.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          )}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 md:top-7 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--background)]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white font-extrabold text-xl tracking-widest hover:opacity-85 transition-opacity flex items-center gap-2 group"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 font-outfit font-extrabold text-xl tracking-widest text-glow">
              DON NETO
            </span>
          </button>
          
          {/* Desktop nav links — only visible ≥1024px */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'simulator', label: 'Live Demo' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'github', label: 'Activity' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs px-3.5 py-2 rounded-full font-semibold transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? 'text-white bg-indigo-500/20 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.25)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-2"
              aria-label="Toggle Theme"
              title="Toggle Light/Dark Theme"
            >
              <i className={`fa-solid ${isLightMode ? 'fa-moon' : 'fa-sun'} text-xs`}></i>
            </button>
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-1"
              aria-label="Developer Console"
              title="Open Terminal Console"
            >
              <i className="fa-solid fa-terminal text-xs"></i>
            </button>
          </div>

          {/* Mobile/Tablet right-side action buttons — visible <1024px */}
          <div className="lg:hidden flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="text-indigo-400 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors"
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${isLightMode ? 'fa-moon' : 'fa-sun'} text-xs`}></i>
            </button>
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="text-indigo-400 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors"
              aria-label="Developer Console"
            >
              <i className="fa-solid fa-terminal text-xs"></i>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className={`w-4.5 h-4.5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu — Full-screen Overlay Drawer */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60]"
          aria-modal="true"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Slide-in Panel — stops click propagation, backdrop-blur blurs real page content */}
          <div
            className="mobile-drawer-panel absolute top-0 left-0 right-0 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl animate-slide-down"
            onClick={e => e.stopPropagation()}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 font-outfit font-extrabold text-xl tracking-widest">DON NETO</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Nav Items */}
            <div className="px-5 py-4 space-y-1">
              {[
                { id: 'home', label: 'Home', icon: 'fa-house' },
                { id: 'about', label: 'About', icon: 'fa-user' },
                { id: 'services', label: 'Services', icon: 'fa-briefcase' },
                { id: 'simulator', label: 'Live Demo', icon: 'fa-play' },
                { id: 'skills', label: 'Skills', icon: 'fa-code' },
                { id: 'projects', label: 'Projects', icon: 'fa-folder-open' },
                { id: 'achievements', label: 'Achievements', icon: 'fa-trophy' },
                { id: 'github', label: 'GitHub Activity', icon: 'fa-chart-bar' },
                { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-indigo-600/15 border border-indigo-500/30 text-indigo-400' 
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <i className={`fa-solid ${item.icon} w-4 text-center text-xs ${activeSection === item.id ? 'text-indigo-400' : 'text-gray-500'}`}></i>
                  {item.label}
                  {activeSection === item.id && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}



      {/* Hero Section with Interactive 3D Canvas */}
      <header id="home" className="relative min-h-screen flex flex-col items-center justify-between text-center px-6 pt-24 pb-12 sm:pt-32 sm:pb-24 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_65%)] pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto my-auto gap-8 text-left z-10">
          
          {/* Left Column: Bio & Hero Copy */}
          <div className="flex flex-col items-start w-full lg:w-7/12 space-y-6">
            {/* Glowing badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>FULL-STACK SOFTWARE ENGINEER & MOBILE DEVELOPER</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-syne leading-none">
              <span className="block text-gray-400 text-base sm:text-lg font-mono mb-2 tracking-widest uppercase">Reynald Abner Tananda, S.T.</span>
              <span className="text-gradient-cyber block font-outfit">
                Engineering Web Apps, Mobile & Modern Systems
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-2xl font-bold text-gray-300 min-h-[45px] font-outfit">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400">
                <Typewriter
                  words={[
                    "Full-Stack Software Engineer 💻",
                    "Web & Mobile Application Developer 📱",
                    "Laravel, React & Flutter Specialist ⚙️",
                    "Competitive CTF Player (Hobby & Enthusiast) 🛡️"
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
            
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-medium">
              Building high-performance web applications, mobile apps in Flutter, automated CRM systems, and RESTful API backends with clean code and robust software architecture.
            </p>

            {/* Key Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full my-2">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center">
                <div className="text-2xl font-black text-indigo-400 font-mono tracking-tight">3.80</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5">GPA CS UNHAS</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center">
                <div className="text-2xl font-black text-cyan-400 font-mono tracking-tight">15+ Apps</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5">Built & Deployed</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center">
                <div className="text-2xl font-black text-emerald-400 font-mono tracking-tight">1st Place</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5">Pragyan CTF '25</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-center">
                <div className="text-2xl font-black text-pink-400 font-mono tracking-tight">Finalist</div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mt-0.5">GEMASTIK XVIII</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
              <Button 
                variant="cyber"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="gap-2 rounded-full font-bold shadow-indigo-500/30"
              >
                Explore Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setIsTerminalOpen(true)}
                className="gap-2 rounded-full font-mono text-indigo-300 border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/10"
              >
                <i className="fa-solid fa-terminal text-xs"></i> Launch Terminal
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('simulator')}
                className="gap-2 rounded-full text-pink-300 border-pink-500/30 hover:border-pink-400 hover:bg-pink-500/10"
              >
                <i className="fa-solid fa-play text-xs"></i> Live Demo
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Interactive WebGL Canvas Core */}
          <div className="w-full lg:w-5/12 relative flex flex-col items-center justify-center">
            {/* Holographic Card Frame for Profile & 3D Core */}
            <div className={`hero-3d-card relative w-full max-w-[310px] sm:max-w-md aspect-square rounded-3xl border transition-all duration-300 ${
              isLightMode 
                ? 'border-indigo-500/20 bg-white/80 shadow-[0_20px_50px_rgba(79,70,229,0.12)]' 
                : 'border-cyan-500/30 bg-[#070c18]/80 shadow-[0_0_50px_rgba(0,240,255,0.15)]'
            } backdrop-blur-2xl p-6 flex flex-col items-center justify-center overflow-hidden group`}>
              {/* Interactive 3D Three.js Component */}
              <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity">
                <React.Suspense fallback={null}>
                  {load3D && <Cyber3DCanvas isLightMode={isLightMode} />}
                </React.Suspense>
              </div>

              {/* Centered Profile Avatar Badge */}
              <div className="relative z-10 flex flex-col items-center space-y-3 pointer-events-none">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 opacity-60 blur-md animate-pulse"></div>
                  <picture>
                    <source srcSet="/assets/profile.webp" type="image/webp" />
                    <img
                      src="/assets/profile.jpg"
                      alt="Reynald Abner Tananda"
                      width={130}
                      height={130}
                      fetchPriority="high"
                      decoding="async"
                      className="rounded-full relative z-10 border-2 border-white/30 shadow-2xl object-cover"
                    />
                  </picture>
                </div>
                <div className={`border rounded-full px-4 py-1.5 backdrop-blur-md flex items-center gap-2 transition-all duration-300 ${
                  isLightMode
                    ? 'bg-white/90 border-indigo-500/30 text-slate-800 shadow-sm'
                    : 'bg-[#030712]/90 border-cyan-500/40 text-white'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className={`text-[11px] font-mono font-bold tracking-wider ${isLightMode ? 'text-slate-800' : 'text-white'}`}>
                    AVAILABLE FOR DEV PROJECTS
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[10px] font-mono text-gray-400 mt-3 text-center tracking-widest uppercase">
              <i className="fa-solid fa-hand-pointer text-cyan-400 mr-1.5 animate-bounce"></i> Interactive 3D Matrix — Move Cursor to Rotate
            </p>
          </div>

        </div>
        
        {/* Floating Scroll Indicator */}
        <div className="flex flex-col items-center opacity-65 mt-8">
          <span className="text-[10px] uppercase tracking-widest text-indigo-400/90 mb-2 font-bold font-outfit">Scroll</span>
          <div className="w-5.5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 space-y-36">
        
        {/* About Me Section */}
        <section id="about" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Column 1: Info text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">[PROFILE_SUMMARY]</span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  About Me
                </h2>
                <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              </div>
              
              <div className="space-y-4.5 text-gray-400 text-base leading-relaxed font-medium">
                <p>
                  Hi! I'm <span className="text-indigo-400 font-bold">Reynald Abner Tananda, S.T.</span>, a <span className="text-emerald-400 font-bold">Fresh Graduate in Computer Science</span> from <span className="text-white font-bold">Universitas Hasanuddin</span> specializing in Software Engineering and Mobile Development with a <span className="text-cyan-400 font-black">GPA of 3.80/4.00</span>.
                </p>
                <p>
                  I have hands-on experience developing full-stack web platforms and mobile applications, including backend engineering for hospital logbook systems (RS UNHAS) and serving as a Teaching Assistant for Mobile Programming (Flutter).
                </p>
                <p>
                  As an active hobby, I enjoy participating in competitive CTF (Capture The Flag) challenges, leading the Digital Forensics division at <span className="text-pink-400 font-bold">ICC UNHAS</span>, and sharing cybersecurity learning modules with peers.
                </p>
              </div>
              
              {/* Quick statistics styled nicely */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25">
                  <span className="block text-3xl font-black text-indigo-400 tracking-tight font-outfit">3.80</span>
                  <span className="text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1">GPA Score</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25">
                  <span className="block text-3xl font-black text-cyan-400 tracking-tight font-outfit">15+</span>
                  <span className="text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1">Apps & Projects</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25">
                  <span className="block text-3xl font-black text-pink-400 tracking-tight font-outfit">3+</span>
                  <span className="text-[10px] uppercase text-gray-400 tracking-wider font-bold block mt-1">TA & Interns</span>
                </div>
              </div>
            </div>
            
            {/* Column 2: Highlights Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Software Engineer", desc: "Laravel Backend, REST APIs, MySQL databases", icon: "fa-solid fa-laptop-code text-indigo-400", color: "cyber-card-glow-indigo" },
                { title: "Mobile Specialist", desc: "Flutter UI, Android concepts, TA tutoring", icon: "fa-solid fa-mobile-screen-button text-cyan-400", color: "cyber-card-glow-cyan" },
                { title: "Web Architecture", desc: "React, Next.js, Astro & PWA solutions", icon: "fa-solid fa-layer-group text-pink-400", color: "cyber-card-glow-pink" },
                { title: "CTF Enthusiast", desc: "Pragyan CTF winner, Gemastik national finalist", icon: "fa-solid fa-trophy text-emerald-400", color: "cyber-card-glow-green" }
              ].map((item, idx) => (
                <div key={idx} className={`cyber-card p-5 rounded-3xl flex flex-col justify-between h-44 shadow-lg shadow-black/10 ${item.color}`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm font-outfit mb-1 leading-tight">{item.title}</h3>
                    <p className="text-[10px] text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Solutions Section */}
        <section id="services" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow">[CAPABILITIES]</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Services & Custom Solutions
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed">
                Custom software engineering and business digitization solutions to optimize your workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Web & App Development",
                  desc: "Custom website creation, landing pages, and responsive e-commerce systems using Next.js / Laravel with modern SEO optimization.",
                  icon: "fa-solid fa-laptop-code",
                  glow: "cyber-card-glow-indigo"
                },
                {
                  title: "API & Payment Integration",
                  desc: "Connecting systems with payment gateways (Midtrans/Xendit) for automated QRIS/VA payments, as well as external RESTful API integration.",
                  icon: "fa-solid fa-credit-card",
                  glow: "cyber-card-glow-cyan"
                },
                {
                  title: "Custom Dashboards & POS",
                  desc: "Custom back-office systems for inventory management, analytical dashboards, daily/monthly transaction reports, and admin access control.",
                  icon: "fa-solid fa-chart-line",
                  glow: "cyber-card-glow-pink"
                },
                {
                  title: "Automation & Integration",
                  desc: "Automated real-time notifications, OTP delivery, broadcasts, and automated invoices connected directly to the WhatsApp API.",
                  icon: "fa-solid fa-message",
                  glow: "cyber-card-glow-green"
                }
              ].map((service, sIdx) => (
                <div key={sIdx} className={`cyber-card p-6 sm:p-8 rounded-3xl border border-white/[0.05] hover:border-white/10 shadow-lg shadow-black/20 ${service.glow}`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white mb-6">
                    <i className={service.icon}></i>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base font-outfit mb-3">{service.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live E-Commerce Checkout Simulator */}
        <React.Suspense fallback={null}>
          <EcommerceSimulator
            isLightMode={isLightMode}
            simCart={simCart}
            setSimCart={setSimCart}
            scrollToSection={scrollToSection}
          />
        </React.Suspense>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow">[TECHNICAL_STACK]</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Skills & Core Stack</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            {/* SVG Interactive Skills Network Graph */}
            <div className="cyber-card p-6 sm:p-8 rounded-3xl border border-white/[0.04] bg-[#070b13]/60 backdrop-blur-xl relative overflow-hidden flex flex-col items-center">
              
              {/* Category Tab buttons */}
              <div className="flex flex-wrap gap-2 justify-center mb-8 w-full border-b border-white/[0.06] pb-4 z-10">
                {[
                  { label: "Programming", icon: "fa-solid fa-code" },
                  { label: "Web & Backend", icon: "fa-solid fa-server" },
                  { label: "Mobile & DS", icon: "fa-solid fa-brain" },
                  { label: "Databases & DevOps", icon: "fa-solid fa-database" }
                ].map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSkillTab(idx)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                      activeSkillTab === idx 
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20" 
                        : "bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <i className={tab.icon}></i>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Connected Nodes Canvas */}
              <div className="w-full relative h-[250px] flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  <defs>
                    <linearGradient id="laser" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow-laser">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Pulsing laser lines linking center to satellite nodes */}
                  <line x1="50%" y1="120" x2="50%" y2="35" stroke="url(#laser)" strokeWidth="2" filter="url(#glow-laser)" strokeDasharray="6,6" className="animate-[dash_3s_linear_infinite]" />
                  <line x1="50%" y1="120" x2="78%" y2="80" stroke="url(#laser)" strokeWidth="2" filter="url(#glow-laser)" strokeDasharray="6,6" className="animate-[dash_3s_linear_infinite]" />
                  <line x1="50%" y1="120" x2="70%" y2="185" stroke="url(#laser)" strokeWidth="2" filter="url(#glow-laser)" strokeDasharray="6,6" className="animate-[dash_3s_linear_infinite]" />
                  <line x1="50%" y1="120" x2="30%" y2="185" stroke="url(#laser)" strokeWidth="2" filter="url(#glow-laser)" strokeDasharray="6,6" className="animate-[dash_3s_linear_infinite]" />
                  <line x1="50%" y1="120" x2="22%" y2="80" stroke="url(#laser)" strokeWidth="2" filter="url(#glow-laser)" strokeDasharray="6,6" className="animate-[dash_3s_linear_infinite]" />
                </svg>

                {/* Central Category Node */}
                <div className="absolute left-1/2 top-[120px] -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[2px] shadow-lg shadow-indigo-600/30 animate-pulse">
                    <div className="w-full h-full rounded-full bg-[#070b13] flex flex-col items-center justify-center text-center p-2">
                      <span className="text-[10px] font-black text-indigo-300 uppercase tracking-wider font-mono">Core Hub</span>
                      <span className="text-[11px] font-extrabold text-white leading-tight font-outfit mt-0.5">
                        {[
                          "Programming",
                          "Web & Backend",
                          "Mobile & DS",
                          "DevOps & DB"
                        ][activeSkillTab]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Satellite Skill Nodes */}
                {[
                  { x: "left-1/2 top-[35px] -translate-x-1/2 -translate-y-1/2", skill: [
                    ["Python", "PHP", "JavaScript", "Kotlin", "Dart"],
                    ["Laravel", "React", "Next.js", "RESTful API", "Nginx"],
                    ["Flutter", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
                    ["MySQL", "Firebase", "Nginx Configs", "VPS Deployments", "Git"]
                  ][activeSkillTab][0] },
                  { x: "left-[78%] top-[80px] -translate-x-1/2 -translate-y-1/2", skill: [
                    ["Python", "PHP", "JavaScript", "Kotlin", "Dart"],
                    ["Laravel", "React", "Next.js", "RESTful API", "Nginx"],
                    ["Flutter", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
                    ["MySQL", "Firebase", "Nginx Configs", "VPS Deployments", "Git"]
                  ][activeSkillTab][1] },
                  { x: "left-[70%] top-[185px] -translate-x-1/2 -translate-y-1/2", skill: [
                    ["Python", "PHP", "JavaScript", "Kotlin", "Dart"],
                    ["Laravel", "React", "Next.js", "RESTful API", "Nginx"],
                    ["Flutter", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
                    ["MySQL", "Firebase", "Nginx Configs", "VPS Deployments", "Git"]
                  ][activeSkillTab][2] },
                  { x: "left-[30%] top-[185px] -translate-x-1/2 -translate-y-1/2", skill: [
                    ["Python", "PHP", "JavaScript", "Kotlin", "Dart"],
                    ["Laravel", "React", "Next.js", "RESTful API", "Nginx"],
                    ["Flutter", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
                    ["MySQL", "Firebase", "Nginx Configs", "VPS Deployments", "Git"]
                  ][activeSkillTab][3] },
                  { x: "left-[22%] top-[80px] -translate-x-1/2 -translate-y-1/2", skill: [
                    ["Python", "PHP", "JavaScript", "Kotlin", "Dart"],
                    ["Laravel", "React", "Next.js", "RESTful API", "Nginx"],
                    ["Flutter", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
                    ["MySQL", "Firebase", "Nginx Configs", "VPS Deployments", "Git"]
                  ][activeSkillTab][4] }
                ].map((node, nIdx) => (
                  <div key={nIdx} className={`absolute ${node.x} z-10 group`}>
                    <div className="px-3.5 py-2 rounded-xl bg-[#090e18]/90 border border-white/[0.08] shadow-md group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-all duration-300 flex items-center justify-center min-w-[80px]">
                      <span className="text-[10px] font-bold text-white group-hover:text-indigo-300 transition-colors font-mono">{node.skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Programming",
                  icon: "fa-solid fa-code text-indigo-400",
                  skills: ["Python", "PHP", "JavaScript", "Kotlin", "Dart"],
                  accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5"
                },
                {
                  title: "Web & Backend",
                  icon: "fa-solid fa-server text-cyan-400",
                  skills: ["Laravel", "React", "Next.js", "RESTful API", "Nginx"],
                  accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5"
                },
                {
                  title: "Mobile & DS",
                  icon: "fa-solid fa-brain text-pink-400",
                  skills: ["Flutter", "Machine Learning", "Deep Learning", "NLP", "Data Analysis"],
                  accent: "text-pink-400 border-pink-500/20 bg-pink-500/5"
                },
                {
                  title: "Databases & DevOps",
                  icon: "fa-solid fa-database text-emerald-400",
                  skills: ["MySQL", "Firebase", "Nginx Configs", "VPS Deployments", "Git"],
                  accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                }
              ].map((stack, idx) => (
                <div key={idx} className="cyber-card p-6 rounded-3xl border border-white/[0.05] hover:border-white/10 shadow-md">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                      <i className={stack.icon}></i>
                    </div>
                    <h3 className="font-extrabold text-white text-base font-outfit">{stack.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {stack.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex flex-col gap-1.5">
                        <div className="flex justify-between text-xs text-gray-300 font-medium">
                          <span>{skill}</span>
                          <span className="text-gray-400 font-bold">{(95 - sIdx * 5)}%</span>
                        </div>
                        <div className="w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full fill-bar-animate animate-pulse"
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
              <div className="cyber-card p-6 sm:p-8 rounded-3xl space-y-4 shadow-md">
                <h4 className="font-bold text-white text-base font-outfit flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-indigo-400">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  Academic Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures & Algorithms", "Web Development", "Mobile Application Development", "Machine Learning", "Data Science", "Natural Language Processing", "Cybersecurity", "Software Project Management"].map((course, cIdx) => (
                    <span key={cIdx} className="px-3.5 py-1.5 text-xs font-semibold bg-white/[0.03] border border-white/[0.06] rounded-xl text-gray-300 hover:border-indigo-500/30 transition-colors duration-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cyber-card p-6 sm:p-8 rounded-3xl space-y-4 shadow-md">
                <h4 className="font-bold text-white text-base font-outfit flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-cyan-400">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  Professional & Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Strategic Planning", "Problem Solving", "Critical Thinking", "Communication", "Team Collaboration", "B2 English", "A2 Chinese"].map((softSkill, sIdx) => (
                    <span key={sIdx} className="px-3.5 py-1.5 text-xs font-semibold bg-indigo-500/5 border border-indigo-500/25 rounded-xl text-indigo-300 hover:border-indigo-400 transition-colors duration-300">
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow">[FEATURED_PROJECTS]</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Featured Projects</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed">
                Click "View Details" to interact with live dashboard mockups and check system architectures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="cyber-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/[0.04] shadow-lg transition-transform duration-300 ease-out"
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((centerY - y) / centerY) * 10;
                    const rotateY = ((x - centerX) / centerX) * 10;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
                  }}
                >
                  <div>
                    <div className="relative h-48 bg-gradient-to-br from-indigo-950 via-[#0a0f1d] to-[#030712] flex items-center justify-center border-b border-white/[0.05] overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-110 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                      
                      <div className={`w-32 h-32 rounded-full absolute bg-gradient-to-tr ${project.color} filter blur-2xl opacity-35 animate-float-slow`}></div>
                      
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-white relative z-10 shadow-2xl">
                        <i className={project.image}></i>
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <Badge variant="default" className="bg-white/[0.08] border-white/10 backdrop-blur-md uppercase tracking-wider text-[10px]">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-4">
                      <span className="text-xs font-semibold uppercase text-indigo-400 tracking-wider font-outfit">{project.category}</span>
                      <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors font-outfit leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-medium">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-[10px] border-white/10">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="purple" className="text-[10px]">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="gap-2 text-xs font-bold"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </Button>
                    
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2 text-xs font-bold"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 border border-white/[0.06] rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold gap-2"
                      >
                        <i className="fab fa-github text-sm"></i>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Experience Timeline Section */}
        <section className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Work Experiences */}
            <div className="lg:col-span-6 space-y-8">
              <h2 className="text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-indigo-400">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                Work Experience
              </h2>
              <div className="relative border-l border-white/[0.08] ml-4 space-y-10 pt-2">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 group">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-glow transition-transform duration-300 group-hover:scale-125"></div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{exp.period}</span>
                      <h3 className="text-lg font-bold text-white font-outfit leading-snug">{exp.role}</h3>
                      <span className="text-xs text-gray-400 block font-semibold">{exp.org}</span>
                      <ul className="list-disc list-outside pl-4 text-xs text-gray-300 space-y-2 pt-2.5 font-medium leading-relaxed">
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
              <h2 className="text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-cyan-400">
                  <i className="fa-solid fa-users"></i>
                </div>
                Organization Experience
              </h2>
              <div className="relative border-l border-white/[0.08] ml-4 space-y-10 pt-2">
                {orgExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 group">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow transition-transform duration-300 group-hover:scale-125"></div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">{exp.period}</span>
                      <h3 className="text-lg font-bold text-white font-outfit leading-snug">{exp.role}</h3>
                      <span className="text-xs text-gray-400 block font-semibold">{exp.org}</span>
                      <ul className="list-disc list-outside pl-4 text-xs text-gray-300 space-y-2 pt-2.5 font-medium leading-relaxed">
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow">[ACHIEVEMENTS_INDEX]</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Competitions & Achievements</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((award, index) => (
                <div key={index} className="cyber-card p-6 rounded-3xl border border-white/[0.04] hover:border-white/10 flex flex-col justify-between space-y-4 shadow-lg">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                        <i className={award.icon}></i>
                      </div>
                      <span className="text-[10px] font-bold bg-white/[0.05] border border-white/[0.08] text-indigo-300 px-3 py-1 rounded-full">
                        {award.date}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-white text-base sm:text-lg font-outfit leading-snug">{award.title}</h3>
                    <span className="text-xs text-cyan-400 font-bold block">{award.category}</span>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">{award.details}</p>
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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow">[DEVELOPER_ACTIVITY]</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">GitHub Activity</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="flex justify-center">
              <div className="cyber-card p-6 sm:p-8 rounded-3xl w-full max-w-4xl border border-white/[0.04] overflow-x-auto shadow-xl">
                <div className="min-w-[700px] min-h-[160px] flex justify-center items-center py-2">
                  <React.Suspense fallback={<div className="h-[160px] flex items-center justify-center text-xs text-gray-400 font-mono">Loading GitHub activity data...</div>}>
                    <GitHubCalendarLazy 
                      username="reynaldabnerrr" 
                      colorScheme="dark"
                      blockSize={12}
                      blockMargin={4}
                      fontSize={13}
                    />
                  </React.Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-glow">[GET_IN_TOUCH]</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">Get In Touch</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed">
                Have an interesting project concept or collaboration offer? Please contact me through the channels below.
              </p>
            </div>

            <div className="cyber-card p-8 rounded-3xl max-w-2xl mx-auto border border-white/[0.04] shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  href="mailto:reynald030685@gmail.com"
                  className="flex flex-col items-center p-5 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope text-3xl mb-3"></i>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-outfit">Email</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/reynald-abner-tananda-a060b4227/"
                  className="flex flex-col items-center p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-3xl mb-3"></i>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-outfit">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/reynaldabnerrr"
                  className="flex flex-col items-center p-5 rounded-2xl bg-gray-500/5 border border-gray-500/10 text-gray-400 hover:bg-gray-500/10 hover:border-gray-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(156,163,175,0.2)] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-3xl mb-3"></i>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-outfit">GitHub</span>
                </a>
                
                <a
                  href="https://www.instagram.com/reynaldabnerr/"
                  className="flex flex-col items-center p-5 rounded-2xl bg-pink-500/5 border border-pink-500/10 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-3xl mb-3"></i>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-outfit">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Matrix rain overlay simulation */}
      {isHacking && <MatrixRain />}

      {/* Project Detail Modal with interactive CRM widget */}
      {selectedProject && (
        <>
          {/* Full-screen Backdrop Blur */}
          <div 
            className="fixed inset-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl transition-all duration-300 pointer-events-auto"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Scrollable Modal Container wrapper */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-10 pointer-events-none">
            <div className="cyber-card rounded-3xl max-w-4xl w-full border border-white/[0.08] shadow-2xl my-auto pointer-events-auto animate-slide-up">
              {/* Modal Banner */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-indigo-950 via-[#0d1326] to-[#030712] flex items-center justify-center border-b border-white/[0.08]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] rounded-full flex items-center justify-center text-white border border-white/[0.08] transition-colors z-20 pointer-events-auto"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className={`absolute inset-0 bg-gradient-to-tr ${selectedProject.color} opacity-20 filter blur-2xl`}></div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl sm:text-5xl text-white relative z-10 shadow-2xl">
                  <i className={selectedProject.image}></i>
                </div>
                
                <div className="absolute bottom-4 left-6">
                  <span className="px-4 py-1.5 bg-white/[0.05] border border-white/[0.08] text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-black text-white font-outfit tracking-tight">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">{selectedProject.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column: Features */}
                  <div className="md:col-span-7 space-y-4">
                    <h3 className="text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span> Key Features & Architecture
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <svg className="w-5 h-5 text-indigo-400 mr-2.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <h3 className="text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2">
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
                      <h3 className="text-lg font-bold text-white font-outfit border-b border-white/[0.05] pb-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span> Project Links
                      </h3>
                      <div className="flex flex-col gap-2.5">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 rounded-xl text-xs font-bold text-gray-300 transition-colors pointer-events-auto"
                          >
                            <span>GitHub Repository</span>
                            <i className="fab fa-github text-sm"></i>
                          </a>
                        )}
                        {selectedProject.demo && (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-indigo-600/10 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold text-indigo-300 transition-all duration-300 pointer-events-auto"
                          >
                            <span>Live Application Demo</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              {/* Close Button in Footer */}
              <div className="p-6 border-t border-white/[0.08] flex justify-end pointer-events-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-gray-500 text-white rounded-xl text-xs font-bold transition-colors pointer-events-auto"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Matrix rain overlay simulation */}
      {isHacking && <MatrixRain />}

      {/* Developer Terminal Console Modal */}
      <React.Suspense fallback={null}>
        <TerminalModal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          isHacking={isHacking}
          setIsHacking={setIsHacking}
        />
      </React.Suspense>

      {/* Floating Chatbot Widget */}
      <React.Suspense fallback={null}>
        <ChatbotWidget isLightMode={isLightMode} />
      </React.Suspense>

      {/* CRM Dynamic Toast */}
      {waToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-[#0b141a] border border-[#202c33] text-gray-200 rounded-2xl text-xs font-mono max-w-sm shadow-2xl flex items-center gap-3 animate-slide-up" role="status" aria-live="polite">
          <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px]">
            <i className="fa-solid fa-bell" aria-hidden="true"></i>
          </div>
          <span>{waToast}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[var(--background)] text-[var(--foreground)] py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-base font-bold font-outfit">
              &copy; {new Date().getFullYear()} Reynald Abner Tananda
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Crafted beautifully using Astro, React, & Tailwind CSS. Hosted on Vercel.
            </p>
          </div>
          <div className="flex gap-4 text-xs text-gray-300 font-semibold font-mono">
            <span>Makassar, ID</span>
            <span>•</span>
            <span>Secured Dev</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
