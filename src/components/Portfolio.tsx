import React, { useState, useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Typewriter } from "react-simple-typewriter";

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
  github: string;
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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState("> BOOT: INITIATING SECURE ARCHITECTURE PROTOCOLS...");
  const [fadeLoading, setFadeLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; size: number }>>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isManualScrollRef = useRef(false);

  // Premium Features States
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState(0);
  
  // Terminal console states
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Don Neto Developer Terminal [Version 1.0.0]",
    "Type 'help' to view all available commands.",
    "guest@donneto:~$ "
  ]);
  const [isHacking, setIsHacking] = useState(false);

  // Chatbot states
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatbotInput, setChatbotInput] = useState("");
  const [chatbotMessages, setChatbotMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    { sender: "bot", text: "Hello! 👋 I'm Reynald's virtual assistant. How can I help you today? Ask me about projects, skills, or contact info." }
  ]);
  const [chatbotTyping, setChatbotTyping] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLightMode);
  }, [isLightMode]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let newLogs = [...terminalLogs];
    if (newLogs[newLogs.length - 1] === "guest@donneto:~$ ") {
      newLogs[newLogs.length - 1] = `guest@donneto:~$ ${terminalInput}`;
    } else {
      newLogs.push(`guest@donneto:~$ ${terminalInput}`);
    }

    switch (cmd) {
      case "help":
        newLogs.push(
          "Available commands:",
          "  about        - View Reynald's bio",
          "  projects     - List showcase projects and links",
          "  skills       - Show technical stack details",
          "  contact      - Display professional email and networks",
          "  achievements - List CTF competition rewards",
          "  hack         - Execute automated matrix decryption sequence",
          "  clear        - Clear console history"
        );
        break;
      case "about":
        newLogs.push(
          "Reynald Abner Tananda is a Computer Science student at Hasanuddin University",
          "focusing on Software Engineering, Laravel REST APIs, Flutter UI, and cybersecurity forensics."
        );
        break;
      case "projects":
        newLogs.push(
          "Featured Projects:",
          "  1. Topcell CRM (Laravel enterprise portal)",
          "  2. ANTEKHUB (Flutter student networking)",
          "  3. Jokka Web (Next.js culture explorer)",
          "  4. Topcell Corporate (Next.js responsive landing page)"
        );
        break;
      case "skills":
        newLogs.push(
          "Programming: Python, PHP, JS, Kotlin, Dart",
          "Web: Laravel, React, Next.js, Nginx, REST APIs",
          "Mobile/DS: Flutter, Machine Learning, Deep Learning, NLP",
          "Tools: Git, Linux, Docker, Tailwind CSS, SQL databases"
        );
        break;
      case "contact":
        newLogs.push(
          "Direct contact details:",
          "  Email    : reynald030685@gmail.com",
          "  GitHub   : github.com/reynaldabnerrr",
          "  LinkedIn : linkedin.com/in/reynald-abner-tananda"
        );
        break;
      case "achievements":
        newLogs.push(
          "Achievements Milestones:",
          "  - GEMASTIK XVIII Cyber Security Finalist (2025)",
          "  - Pragyan CTF 2025 NIT India Winner (1st Student Category)",
          "  - Interfest CTF Top 6 (2024)",
          "  - Cyber Jawara International Top 11 (2024)"
        );
        break;
      case "clear":
        newLogs = [];
        break;
      case "hack":
        setIsHacking(true);
        setTimeout(() => {
          setIsHacking(false);
          setTerminalLogs((prev) => [
            ...prev,
            "> Hacking simulator complete. Target database successfully decrypted."
          ]);
        }, 3000);
        break;
      default:
        newLogs.push(`Command not found: '${cmd}'. Type 'help' to see options.`);
    }

    if (cmd !== "clear") {
      newLogs.push("guest@donneto:~$ ");
    } else {
      newLogs = ["guest@donneto:~$ "];
    }

    setTerminalLogs(newLogs);
    setTerminalInput("");
  };

  const handleChatbotSend = (text: string) => {
    if (!text.trim()) return;
    
    setChatbotMessages((prev) => [...prev, { sender: "user", text }]);
    setChatbotInput("");
    setChatbotTyping(true);

    setTimeout(() => {
      setChatbotTyping(false);
      const query = text.toLowerCase();
      let response = "I'm not sure about that. Try selecting one of the quick options below or ask about 'projects', 'skills', or 'hire'.";
      
      if (query.includes("project") || query.includes("work")) {
        response = "Reynald has developed outstanding systems like Topcell CRM, ANTEKHUB (Flutter mobile app), and Jokka Web ( Makasar tourism planner). You can inspect them in the Projects section!";
      } else if (query.includes("skill") || query.includes("stack") || query.includes("tech")) {
        response = "His core stack includes Laravel, Next.js, React, Tailwind CSS, Flutter, Firebase, Docker, Nginx, and Cybersecurity Incident Response.";
      } else if (query.includes("hire") || query.includes("contact") || query.includes("email") || query.includes("phone")) {
        response = "You can contact Reynald directly via email at reynald030685@gmail.com or hit the Contact cards to message him on LinkedIn/WhatsApp!";
      } else if (query.includes("hello") || query.includes("hi ") || query.includes("hey")) {
        response = "Hello! Let me know what you'd like to discover about Reynald's engineering stack or custom software services.";
      }

      setChatbotMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 750);
  };
  
  // E-Commerce Checkout Simulator states
  const [simCart, setSimCart] = useState<Array<{ id: number; name: string; price: number; image: string; quantity: number }>>([]);
  const [simStep, setSimStep] = useState<"cart" | "checkout" | "qris" | "paid" | "notified">("cart");
  const [simName, setSimName] = useState("");
  const [simPhone, setSimPhone] = useState("");
  const [simPaymentMethod, setSimPaymentMethod] = useState("qris");
  const [simIsProcessing, setSimIsProcessing] = useState(false);
  const [simSuccessToast, setSimSuccessToast] = useState<string | null>(null);
  const [simOrderId, setSimOrderId] = useState(0);
  const [simTimer, setSimTimer] = useState(900); // 15 minutes in seconds

  const handleAddToCart = (product: { id: number; name: string; price: number; image: string }) => {
    setSimCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }];
    });
    setSimSuccessToast(`Added ${product.name} to cart!`);
    setTimeout(() => setSimSuccessToast(null), 2500);
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setSimCart((prev) => prev.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as typeof simCart);
  };

  const calculateSubtotal = () => {
    return simCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleStartCheckout = () => {
    if (simCart.length === 0) return;
    setSimStep("checkout");
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simName || !simPhone) return;
    setSimOrderId(Math.floor(Math.random() * 90000 + 10000));
    setSimTimer(900); // Set timer here
    setSimIsProcessing(true);
    setTimeout(() => {
      setSimIsProcessing(false);
      setSimStep("qris");
    }, 1200);
  };

  const handleSimulatePaymentSuccess = () => {
    setSimIsProcessing(true);
    setTimeout(() => {
      setSimIsProcessing(false);
      setSimStep("paid");
      setTimeout(() => {
        setSimStep("notified");
      }, 2000);
    }, 1200);
  };

  const handleResetSimulator = () => {
    setSimCart([]);
    setSimStep("cart");
    setSimName("");
    setSimPhone("");
    setSimOrderId(0);
  };

  const handleSendRealWhatsApp = () => {
    let cleanPhone = simPhone.replace(/\D/g, "");
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.slice(1);
    }
    
    const itemsText = simCart.map((item) => `- ${item.name} (x${item.quantity})`).join("\n");
    const totalText = calculateSubtotal().toLocaleString("id-ID");
    
    const message = `Halo ${simName}!\n\nTerima kasih telah berbelanja di Don Neto Store.\n\nPembayaran sebesar *Rp ${totalText}* telah kami terima.\n\nRincian Pembelian:\n${itemsText}\n\nID Transaksi: #DN-${simOrderId}\nStatus: *LUNAS via QRIS (Midtrans)*\n\n_Nota ini dikirim otomatis oleh simulator website Don Neto._`;
    const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simStep === "qris") {
      interval = setInterval(() => {
        setSimTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setSimStep("cart");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [simStep]);

  const formatTimer = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = timeInSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  
  // Interactive CRM states
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
      github: "https://github.com/reynaldabnerrr",
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
      title: "Topcell Portfolio",
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
        const step = Math.floor(Math.random() * 8) + 4;
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
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingProgress === 100) {
      const fadeTimer = setTimeout(() => {
        setFadeLoading(true);
        const exitTimer = setTimeout(() => {
          setIsLoading(false);
        }, 500);
        return () => clearTimeout(exitTimer);
      }, 500);
      return () => clearTimeout(fadeTimer);
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
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden transition-all duration-500 ${fadeLoading ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <div className="cyber-grid absolute inset-0 opacity-40" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] -top-10 -left-10 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] -bottom-10 -right-10 pointer-events-none" />
        
        <div className="relative flex flex-col items-center justify-center p-8 max-w-sm w-full z-10 text-center">
          <div className="relative flex items-center justify-center w-40 h-40 mb-10 select-none scale-110">
            <div className="absolute w-36 h-36 border-2 border-dashed border-indigo-500/30 rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>
            <div className="absolute w-40 h-40 border-2 border-t-indigo-500 border-b-indigo-500 border-r-transparent border-l-transparent rounded-full animate-spin" style={{ animationDuration: '6s' }}></div>
            <div className="absolute w-32 h-32 border-2 border-r-cyan-400 border-l-cyan-400 border-t-transparent border-b-transparent rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
            <div className="absolute w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 rounded-full blur-md animate-pulse"></div>
            <div className="flex flex-col items-center justify-center z-10">
              <span className="text-3xl font-black text-white tracking-tighter font-outfit text-glow">{loadingProgress}%</span>
              <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-bold mt-1">LOADING</span>
            </div>
          </div>

          <div className="cyber-card p-5 w-full rounded-2xl border border-white/[0.06] bg-[#070b13]/60 backdrop-blur-xl space-y-3.5 shadow-2xl relative">
            <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
              <span className="text-[9px] text-gray-500 font-mono ml-1.5 uppercase font-bold tracking-wider">Workspace Loader</span>
            </div>
            
            <div className="w-full bg-white/[0.04] border border-white/[0.08] rounded-full h-1.5 overflow-hidden p-[1px]">
              <div 
                className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 h-full rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            <div className="h-6 flex items-center justify-center">
              <p className="text-[10px] font-mono text-gray-400 tracking-tight text-center font-semibold text-indigo-300/90 truncate w-full">
                {loadingStatus}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-hidden">
      
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
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--background)]/75 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white font-extrabold text-2xl tracking-widest hover:opacity-85 transition-opacity"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 font-outfit text-glow">DON NETO</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-1.5">
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
                    ? 'text-white bg-white/[0.08] border border-white/[0.12] shadow-inner shadow-white/5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-2"
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${isLightMode ? 'fa-moon' : 'fa-sun'} text-xs`}></i>
            </button>
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all ml-1"
              aria-label="Developer Console"
            >
              <i className="fa-solid fa-terminal text-xs"></i>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1.5">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="text-indigo-400 p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${isLightMode ? 'fa-moon' : 'fa-sun'} text-xs`}></i>
            </button>
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="text-indigo-400 p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
              aria-label="Developer Console"
            >
              <i className="fa-solid fa-terminal text-xs"></i>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
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
        <div className={`md:hidden absolute top-full left-0 right-0 border-b border-white/[0.08] bg-[var(--background)]/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 max-h-screen visible py-4' : 'opacity-0 max-h-0 invisible overflow-hidden'
        }`}>
          <div className="px-6 space-y-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'simulator', label: 'Live Demo' },
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
                className={`block w-full text-left px-4 py-3.5 rounded-xl transition-all ${
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
      <header id="home" className="relative min-h-screen flex flex-col items-center justify-between text-center px-6 py-12 sm:py-24 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none"></div>
        <div className="h-4 sm:h-8"></div>
        
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto my-auto space-y-8">
          {/* Glowing badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-2 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> Available for Freelance & Custom Software Projects
          </div>
          
          {/* Profile Picture with modern glowing layout */}
          <div className="relative mb-3 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-cyan-400 blur-2xl opacity-40 scale-110 group-hover:opacity-60 transition-opacity duration-500 animate-float-medium"></div>
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-30 blur-sm scale-95 group-hover:scale-100 group-hover:opacity-65 transition-all duration-500"></div>
            <img
              src="/assets/profile.jpg"
              alt="Reynald Abner Tananda"
              width={160}
              height={160}
              className="rounded-full relative z-10 border-2 border-white/20 shadow-2xl scale-95 transition-all duration-500 hover:scale-100 hover:border-indigo-400/50"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2 font-outfit max-w-4xl">
            <span className="block text-gray-400 text-xl sm:text-2xl font-light mb-3 tracking-wide">Hello, World! 👋 I'm</span>
            <span className="text-gradient-cyber leading-tight block">
              Reynald Abner Tananda
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-300 min-h-[50px] font-outfit">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400">
              <Typewriter
                words={[
                  "Full-Stack Software Engineer 💻",
                  "Web & Mobile Developer 📱",
                  "Custom E-Commerce & POS Builder 🛒",
                  "Cybersecurity & Automation Specialist 🛡️"
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
          
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
            Software Engineer specializing in full-stack development and cybersecurity. Providing custom website creation, e-commerce & POS systems, API integration, and business automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2 cyber-button"
            >
              Explore Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] rounded-full text-gray-200 font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:border-gray-500 flex items-center justify-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        {/* Floating Indicator */}
        <div className="flex flex-col items-center opacity-65 mt-10">
          <span className="text-[10px] uppercase tracking-widest text-indigo-400/90 mb-2.5 font-bold font-outfit">Scroll</span>
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
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit">01 / Profile</span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  About Me
                </h2>
                <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
              </div>
              
              <div className="space-y-4.5 text-gray-400 text-base leading-relaxed font-medium">
                <p>
                  Hi! I'm <span className="text-indigo-400 font-bold">Reynald Abner Tananda</span>, a final-year Computer Science student at <span className="text-white font-bold">Universitas Hasanuddin</span>. I specialize in Software Engineering and cybersecurity architectures, maintaining a <span className="text-cyan-400 font-black">GPA of 3.78/4.00</span>.
                </p>
                <p>
                  I am experienced in building high-performance systems, having served as a backend developer intern for hospital logbooks and a teaching assistant for mobile application programming (Flutter).
                </p>
                <p>
                  Outside of programming, I actively lead the cybersecurity division as the <span className="text-pink-400 font-bold">Head of Digital Forensics at ICC UH</span>, designing training modules for digital forensics, OSINT, reverse engineering, and cyber defense.
                </p>
              </div>
              
              {/* Quick statistics styled nicely */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25">
                  <span className="block text-3xl font-black text-indigo-400 tracking-tight font-outfit">3.78</span>
                  <span className="text-[10px] uppercase text-gray-500 tracking-wider font-bold block mt-1">GPA Score</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25">
                  <span className="block text-3xl font-black text-cyan-400 tracking-tight font-outfit">7+</span>
                  <span className="text-[10px] uppercase text-gray-500 tracking-wider font-bold block mt-1">CTF Awards</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center shadow-md shadow-black/25">
                  <span className="block text-3xl font-black text-pink-400 tracking-tight font-outfit">3+</span>
                  <span className="text-[10px] uppercase text-gray-500 tracking-wider font-bold block mt-1">TA & Interns</span>
                </div>
              </div>
            </div>
            
            {/* Column 2: Highlights Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { title: "Software Engineer", desc: "Laravel Backend, REST APIs, hospital databases", icon: "fa-solid fa-laptop-code text-indigo-400", color: "cyber-card-glow-indigo" },
                { title: "Mobile Specialist", desc: "Flutter layouts, Android concepts, TA tutoring", icon: "fa-solid fa-mobile-screen-button text-cyan-400", color: "cyber-card-glow-cyan" },
                { title: "Digital Forensic", desc: "OSINT workflow, incident response structures", icon: "fa-solid fa-user-shield text-pink-400", color: "cyber-card-glow-pink" },
                { title: "Competitive CTF", desc: "Pragyan CTF winner, Gemastik national finalist", icon: "fa-solid fa-trophy text-emerald-400", color: "cyber-card-glow-green" }
              ].map((item, idx) => (
                <div key={idx} className={`cyber-card p-5 rounded-3xl flex flex-col justify-between h-44 shadow-lg shadow-black/10 ${item.color}`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm font-outfit mb-1 leading-tight">{item.title}</h4>
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
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">02 / Services</span>
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
        <section id="simulator" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">03 / Demo</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Interactive System Simulator
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto pt-2 leading-relaxed">
                Test system integration live. Add products, complete checkout, simulate a webhook callback from the payment gateway (Midtrans), and receive an automated WhatsApp invoice.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Product Cards Grid */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-base font-bold text-white font-outfit pb-2 border-b border-white/[0.05] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"></span> 1. Select Simulation Product
                </h3>
                
                {/* Product List */}
                <div className="space-y-3">
                  {[
                    { id: 1, name: "Mechanical Keyboard RGB", price: 650000, image: "⌨️", desc: "Premium blue switches & double-shot keycaps." },
                    { id: 2, name: "Wireless Ergonomic Mouse", price: 380000, image: "🖱️", desc: "Dual-mode Bluetooth with silent clicks." },
                    { id: 3, name: "Minimalist Desk Mat (90x40)", price: 150000, image: "🌌", desc: "Smooth microfiber surface with stitched borders." }
                  ].map((prod) => (
                    <div key={prod.id} className="cyber-card p-4 rounded-2xl flex items-center justify-between border border-white/[0.04] gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl bg-white/5 border border-white/10 w-12 h-12 rounded-xl flex items-center justify-center">{prod.image}</span>
                        <div>
                          <h4 className="font-bold text-white text-sm font-outfit">{prod.name}</h4>
                          <p className="text-[10px] text-gray-500 leading-tight mb-1">{prod.desc}</p>
                          <span className="text-xs font-semibold text-indigo-400">Rp {prod.price.toLocaleString("id-ID")}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(prod)}
                        className="px-3.5 py-2 bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 rounded-xl text-xs font-bold text-indigo-300 hover:text-white transition-all duration-300"
                      >
                        + Cart
                      </button>
                    </div>
                  ))}
                </div>

                {simSuccessToast && (
                  <div className="p-3 bg-indigo-600/10 border border-indigo-500/25 text-indigo-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-pulse">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{simSuccessToast}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Simulated Checkout Viewport */}
              <div className="lg:col-span-7">
                <div className="mock-window p-6 relative min-h-[400px] border border-white/[0.08] shadow-[0_0_50px_rgba(99,102,241,0.12)] flex flex-col justify-between">
                  
                  {/* Window Bar Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <span className="text-gray-400 text-[10px] ml-2 font-mono">checkout-gateway.test</span>
                    </div>
                    <span className="text-[9px] text-gray-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded uppercase font-semibold font-mono">
                      Step: {simStep.toUpperCase()}
                    </span>
                  </div>

                  {/* SCREEN 1: CART DISPLAY */}
                  {simStep === "cart" && (
                    <div className="flex-1 flex flex-col justify-between animate-slide-up">
                      <div className="space-y-4">
                        <h4 className="font-bold text-white text-sm font-outfit flex items-center gap-2">
                          <i className="fa-solid fa-cart-shopping text-indigo-400"></i> Your Shopping Cart
                        </h4>
                        
                        {simCart.length === 0 ? (
                          <div className="text-center py-12 text-gray-500">
                            <i className="fa-solid fa-basket-shopping text-3xl mb-3 block text-gray-600"></i>
                            <p className="text-xs font-medium">Your cart is empty. Please add products from the left column.</p>
                          </div>
                        ) : (
                          <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                            {simCart.map((item) => (
                              <div key={item.id} className="flex items-center justify-between p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs">
                                <div className="flex items-center gap-3">
                                  <span className="text-xl">{item.image}</span>
                                  <div>
                                    <span className="font-bold text-white block text-xs">{item.name}</span>
                                    <span className="text-[10px] text-gray-500">Rp {item.price.toLocaleString("id-ID")}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button type="button" onClick={() => handleUpdateQuantity(item.id, -1)} className="w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10">-</button>
                                  <span className="font-bold text-white w-4 text-center">{item.quantity}</span>
                                  <button type="button" onClick={() => handleUpdateQuantity(item.id, 1)} className="w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center font-bold text-gray-300 hover:bg-white/10">+</button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {simCart.length > 0 && (
                        <div className="border-t border-white/[0.06] pt-4 mt-4 space-y-4">
                          <div className="flex justify-between items-center text-xs font-bold text-white">
                            <span>Total Tagihan:</span>
                            <span className="text-indigo-400 text-sm">Rp {calculateSubtotal().toLocaleString("id-ID")}</span>
                          </div>
                          <button
                            type="button"
                            onClick={handleStartCheckout}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                          >
                            Isi Data Pengiriman <i className="fa-solid fa-arrow-right text-[10px]"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SCREEN 2: CHECKOUT FORM */}
                  {simStep === "checkout" && (
                    <form onSubmit={handleSubmitPayment} className="flex-1 flex flex-col justify-between animate-slide-up">
                      <div className="space-y-4">
                        <h4 className="font-bold text-white text-sm font-outfit flex items-center gap-2">
                          <i className="fa-solid fa-address-card text-cyan-400"></i> Formulir Pengiriman & Pembayaran
                        </h4>

                        <div className="space-y-3">
                          <div>
                            <label className="text-[10px] text-gray-500 block mb-1 font-bold">NAMA PELANGGAN</label>
                            <input
                              type="text"
                              required
                              placeholder="Masukkan nama Anda (e.g. Budi)"
                              value={simName}
                              onChange={(e) => setSimName(e.target.value)}
                              className="w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] text-gray-500 block mb-1 font-bold">WHATSAPP NUMBER (Simulation Invoice)</label>
                            <input
                              type="tel"
                              required
                              placeholder="e.g. 08123456789"
                              value={simPhone}
                              onChange={(e) => setSimPhone(e.target.value)}
                              className="w-full bg-white/[0.03] border border-white/[0.08] text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] text-gray-500 block mb-1 font-bold">PAYMENT METHOD</label>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={() => setSimPaymentMethod("qris")}
                                className={`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] ${simPaymentMethod === "qris" ? "bg-indigo-600/10 border-indigo-500 text-indigo-300" : "bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"}`}
                              >
                                <span className="font-bold">QRIS (Automated)</span>
                                <i className="fa-solid fa-qrcode text-xs"></i>
                              </button>
                              <button
                                type="button"
                                onClick={() => setSimPaymentMethod("va")}
                                className={`p-2.5 rounded-lg border text-left flex items-center justify-between text-[11px] ${simPaymentMethod === "va" ? "bg-indigo-600/10 border-indigo-500 text-indigo-300" : "bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/10"}`}
                              >
                                <span className="font-bold">Virtual Account</span>
                                <i className="fa-solid fa-building-columns text-xs"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-white/[0.06] pt-4 mt-4 space-y-3">
                        <div className="flex justify-between items-center text-xs font-bold text-white">
                          <span>Total Invoice:</span>
                          <span>Rp {calculateSubtotal().toLocaleString("id-ID")}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setSimStep("cart")}
                            className="w-1/3 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-colors"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={simIsProcessing}
                            className="w-2/3 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                          >
                            {simIsProcessing ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                                Generating token...
                              </>
                            ) : (
                              <>
                                Generate Payment Invoice <i className="fa-solid fa-credit-card text-[10px]"></i>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* SCREEN 3: MIDTRANS GATEWAY DISPLAY */}
                  {simStep === "qris" && (
                    <div className="flex-1 flex flex-col justify-between items-center text-center animate-slide-up py-3 font-outfit">
                      <div className="space-y-3 w-full max-w-[280px]">
                        <h4 className="font-bold text-white text-sm font-outfit">Simulated Midtrans Payment</h4>
                        
                        {/* Countdown Timer */}
                        <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-pink-500 animate-pulse pb-1">
                          <i className="fa-solid fa-clock"></i>
                          <span>Time Limit: {formatTimer(simTimer)}</span>
                        </div>

                        {simPaymentMethod === "qris" ? (
                          <div className="p-4 bg-white rounded-2xl flex flex-col items-center justify-center border border-indigo-200/50 shadow-lg relative overflow-hidden w-full">
                            <div className="w-36 h-36 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50 relative p-1.5 pt-3">
                              <span className="absolute top-1 text-[9px] font-black text-blue-900 tracking-wider">QRIS</span>
                              <img 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=110x110&color=030712&data=${encodeURIComponent("https://www.abner.my.id/")}`}
                                alt="QRIS Code" 
                                className="w-28 h-28 border border-gray-300 rounded"
                              />
                            </div>
                            <span className="text-[10px] text-gray-500 font-bold mt-2 font-mono">ORDER-ID: DN-{simOrderId}</span>
                          </div>
                        ) : (
                          <div className="p-4 bg-[#090d16] border border-white/[0.06] rounded-2xl flex flex-col items-stretch text-left w-full space-y-3 shadow-md">
                            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                              <span className="font-bold text-white text-xs">Simulated Virtual Account</span>
                              <span className="text-[10px] text-indigo-400 font-extrabold">BANK MANDIRI</span>
                            </div>
                            
                            <div className="space-y-1.5">
                              <label className="text-[9px] text-gray-500 block">VIRTUAL ACCOUNT NUMBER</label>
                              <div className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-lg p-2.5">
                                <span className="font-mono text-xs text-white tracking-widest font-bold">88012{simPhone.replace(/\D/g, "").slice(-10).padStart(10, "0")}</span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const vaNum = `88012${simPhone.replace(/\D/g, "").slice(-10).padStart(10, "0")}`;
                                    navigator.clipboard.writeText(vaNum);
                                    setSimSuccessToast("Virtual Account copied!");
                                    setTimeout(() => setSimSuccessToast(null), 2000);
                                  }}
                                  className="text-[9px] font-bold text-indigo-400 hover:text-indigo-300 px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20 transition-colors"
                                >
                                  Copy
                                </button>
                              </div>
                            </div>
                            
                            <p className="text-[9px] text-gray-400 leading-normal">
                              Copy the Virtual Account number above and simulate a paid VA transfer by clicking the green button below.
                            </p>
                          </div>
                        )}
                        <p className="text-[10px] text-gray-400 leading-tight font-mono">Total Invoice: <span className="font-bold text-indigo-400">Rp {calculateSubtotal().toLocaleString("id-ID")}</span></p>
                      </div>

                      <div className="w-full mt-4 space-y-2">
                        <button
                          type="button"
                          onClick={handleSimulatePaymentSuccess}
                          disabled={simIsProcessing}
                          className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 glow-payment-success active:scale-[0.98]"
                        >
                          {simIsProcessing ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                              Verifying Payment...
                            </>
                          ) : (
                            <>
                              <i className="fa-solid fa-circle-check"></i> {simPaymentMethod === "qris" ? "Simulate Successful Scan & Pay" : "Simulate Paid VA Transfer"}
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setSimStep("checkout")}
                          className="w-full py-2 bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.06] text-gray-500 hover:text-gray-300 rounded-xl text-[10px] transition-colors"
                        >
                          Cancel Payment
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 4: PAYMENT APPROVED */}
                  {simStep === "paid" && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center animate-slide-up space-y-4">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-3xl text-green-400 animate-bounce shadow-lg shadow-green-500/10">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-white text-lg font-outfit">Payment Successful!</h4>
                        <p className="text-xs text-gray-400 max-w-[280px] leading-relaxed">
                          Midtrans Gateway has successfully forwarded the payment webhook to the backend system.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 text-[10px] animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></div>
                        Sending Automated Invoice via WhatsApp...
                      </div>
                    </div>
                  )}

                  {/* SCREEN 5: SIMULATED WHATSAPP CHAT PREVIEW */}
                  {simStep === "notified" && (
                    <div className="flex-1 flex flex-col justify-between animate-slide-up">
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2.5 bg-green-950/20 border border-green-500/20 p-2.5 rounded-2xl">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm">
                            <i className="fab fa-whatsapp"></i>
                          </div>
                          <div>
                            <span className="font-bold text-white block text-xs">WhatsApp Notification Dispatch</span>
                            <span className="text-[9px] text-green-400 font-mono">Invoice successfully sent to +{simPhone.replace(/\D/g, "").startsWith("0") ? "62" + simPhone.replace(/\D/g, "").slice(1) : simPhone.replace(/\D/g, "")}</span>
                          </div>
                        </div>

                        {/* WhatsApp Message Box */}
                        <div className="bg-[#0b141a] border border-[#202c33] rounded-2xl p-4 text-xs font-mono text-gray-200 relative shadow-2xl">
                          <div className="absolute top-4 -left-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[10px] border-r-[#0b141a] border-b-[8px] border-b-transparent"></div>
                          
                          <div className="flex justify-between items-center text-[10px] text-green-400 font-bold mb-2">
                            <span>💬 Don Neto Store - INVOICE</span>
                            <span>{new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                          <div className="border-b border-gray-800 pb-2 mb-2 text-[10px] text-gray-400">
                            Transaction ID: <span className="text-white font-bold">#DN-{simOrderId}</span>
                          </div>
                          <div className="space-y-1 text-[11px] leading-relaxed">
                            <p>Hello <span className="text-white font-bold">{simName}</span>!</p>
                            <p>We have received your payment of <span className="text-green-400 font-bold">Rp {calculateSubtotal().toLocaleString("id-ID")}</span>.</p>
                            <p className="pt-1.5 text-gray-400">Purchase Details:</p>
                            <ul className="list-disc pl-4 text-gray-300">
                              {simCart.map((item) => (
                                <li key={item.id}>
                                  {item.name} (x{item.quantity})
                                </li>
                              ))}
                            </ul>
                            <p className="pt-2 text-[10px] text-gray-500">Status: <span className="bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded font-bold border border-green-500/20 uppercase text-[9px]">Paid via QRIS</span></p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <button
                          type="button"
                          onClick={handleSendRealWhatsApp}
                          className="w-full sm:w-2/3 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-600/10 hover:shadow-green-600/20 active:scale-95"
                        >
                          <i className="fab fa-whatsapp"></i> Send to Real WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={handleResetSimulator}
                          className="w-full sm:w-1/3 py-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-gray-300 font-bold rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <i className="fa-solid fa-rotate-left"></i> Reset
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">04 / Stack</span>
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
                          <span className="text-gray-500 font-bold">{(95 - sIdx * 5)}%</span>
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
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">05 / Works</span>
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
                        <span className="px-3.5 py-1 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-indigo-300 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {project.status}
                        </span>
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
                          <span key={tech} className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/[0.04] border border-white/[0.06] text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-300">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold tracking-wide gap-2 shadow-lg shadow-indigo-600/15"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-gray-200 border border-white/[0.06] rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-bold gap-2"
                    >
                      <i className="fab fa-github text-sm"></i>
                      GitHub
                    </a>
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
              <h3 className="text-2xl font-black text-white font-outfit border-b border-white/[0.08] pb-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-indigo-400">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                Work Experience
              </h3>
              <div className="relative border-l border-white/[0.08] ml-4 space-y-10 pt-2">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 group">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-glow transition-all group-hover:scale-125"></div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{exp.period}</span>
                      <h4 className="text-lg font-bold text-white font-outfit leading-snug">{exp.role}</h4>
                      <span className="text-xs text-gray-500 block font-semibold">{exp.org}</span>
                      <ul className="list-disc list-outside pl-4 text-xs text-gray-400 space-y-2 pt-2.5 font-medium leading-relaxed">
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
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base text-cyan-400">
                  <i className="fa-solid fa-users"></i>
                </div>
                Organization Experience
              </h3>
              <div className="relative border-l border-white/[0.08] ml-4 space-y-10 pt-2">
                {orgExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 group">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow transition-all group-hover:scale-125"></div>
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">{exp.period}</span>
                      <h4 className="text-lg font-bold text-white font-outfit leading-snug">{exp.role}</h4>
                      <span className="text-xs text-gray-500 block font-semibold">{exp.org}</span>
                      <ul className="list-disc list-outside pl-4 text-xs text-gray-400 space-y-2 pt-2.5 font-medium leading-relaxed">
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
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">06 / Awards</span>
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
                    <h4 className="font-extrabold text-white text-base sm:text-lg font-outfit leading-snug">{award.title}</h4>
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
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">07 / Code</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-outfit">GitHub Activity</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="flex justify-center">
              <div className="cyber-card p-6 sm:p-8 rounded-3xl w-full max-w-4xl border border-white/[0.04] overflow-x-auto shadow-xl">
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
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-outfit text-glow">08 / Contact</span>
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
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 rounded-xl text-xs font-bold text-gray-300 transition-colors pointer-events-auto"
                        >
                          <span>GitHub Repository</span>
                          <i className="fab fa-github text-sm"></i>
                        </a>
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
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="cyber-card w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-[#070c14]/90 overflow-hidden shadow-2xl flex flex-col h-[400px]">
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between bg-white/[0.02] border-b border-white/[0.06] px-4 py-3 select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer animate-pulse" onClick={() => setIsTerminalOpen(false)}></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="text-[10px] text-gray-400 font-mono ml-2 uppercase font-bold tracking-wider flex items-center gap-1.5">
                  <i className="fa-solid fa-terminal text-indigo-400"></i> guest@donneto: ~
                </span>
              </div>
              <button 
                onClick={() => setIsTerminalOpen(false)}
                className="text-gray-500 hover:text-white text-xs font-bold font-mono px-2 py-0.5 rounded hover:bg-white/5"
              >
                ESC
              </button>
            </div>

            {/* Logs Area */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-green-400 space-y-1.5 scrollbar-thin">
              {terminalLogs.map((log, index) => (
                <div key={index} className="whitespace-pre-wrap leading-relaxed">
                  {log}
                </div>
              ))}
            </div>

            {/* Input Line Form */}
            <form onSubmit={handleTerminalSubmit} className="bg-[#05080e]/60 border-t border-white/[0.05] p-3 flex items-center gap-2">
              <span className="font-mono text-xs text-indigo-400 font-bold">guest@donneto:~$</span>
              <input
                type="text"
                autoFocus
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help' and press Enter..."
                className="flex-1 bg-transparent text-xs font-mono text-green-300 focus:outline-none placeholder:text-gray-700"
              />
            </form>
          </div>
        </div>
      )}

      {/* Floating Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Chat Window Box */}
        {isChatbotOpen && (
          <div className="cyber-card w-[320px] sm:w-[350px] h-[450px] rounded-3xl border border-white/[0.08] bg-[#0d141d]/90 overflow-hidden shadow-2xl flex flex-col justify-between mb-4 animate-slide-up">
            
            {/* Header info */}
            <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-lg">
                  <i className="fa-solid fa-robot"></i>
                </div>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full absolute bottom-0 right-0 border border-[#075e54] animate-pulse"></div>
              </div>
              <div>
                <span className="font-bold text-sm block font-outfit">Don Neto Assistant</span>
                <span className="text-[10px] text-green-200">Online</span>
              </div>
            </div>

            {/* Messages body */}
            <div className="flex-1 p-4 bg-[#0b141a]/95 overflow-y-auto space-y-3.5 scrollbar-thin">
              {chatbotMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-2xl text-xs max-w-[85%] font-medium relative shadow ${
                    msg.sender === "user" 
                      ? "bg-[#005c4b] text-white rounded-tr-none" 
                      : "bg-[#202c33] text-gray-200 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {chatbotTyping && (
                <div className="flex justify-start">
                  <div className="p-3 bg-[#202c33] text-gray-400 rounded-2xl rounded-tl-none text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Pills */}
            <div className="px-4 py-2 bg-white/[0.01] border-t border-white/[0.04] flex flex-wrap gap-1.5">
              {[
                { label: "📁 View Projects", val: "Show Projects" },
                { label: "🛠️ Core Stack", val: "Check Core Stack" },
                { label: "💼 Contact Info", val: "Hire Reynald" }
              ].map((pill, pIdx) => (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => handleChatbotSend(pill.val)}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-indigo-500/30 rounded-full text-[10px] text-gray-300 transition-colors"
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Input field */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleChatbotSend(chatbotInput);
              }}
              className="bg-[#1f2c34] p-3 flex items-center gap-2"
            >
              <input
                type="text"
                value={chatbotInput}
                onChange={(e) => setChatbotInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 text-xs text-white focus:outline-none placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#008f72] flex items-center justify-center text-white text-xs transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        )}

        {/* Floating Trigger icon */}
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 active:scale-95 transition-all shadow-green-600/20 z-40 relative animate-bounce"
          aria-label="Chatbot Assistant"
        >
          {isChatbotOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <>
              <i className="fab fa-whatsapp"></i>
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-red-500 rounded-full border-2 border-[#030712] flex items-center justify-center text-[9px] font-bold text-white animate-pulse">1</span>
            </>
          )}
        </button>
      </div>

      {/* CRM Dynamic Toast */}
      {waToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-[#0b141a] border border-[#202c33] text-gray-200 rounded-2xl text-xs font-mono max-w-sm shadow-2xl flex items-center gap-3 animate-slide-up">
          <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px]">
            <i className="fa-solid fa-bell"></i>
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
            <p className="text-xs text-gray-500 mt-1">
              Crafted beautifully using Astro, React, & Tailwind CSS. Hosted on Vercel.
            </p>
          </div>
          <div className="flex gap-4 text-xs text-gray-400 font-semibold font-mono">
            <span>Makassar, ID</span>
            <span>•</span>
            <span>Secured Dev</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
