import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Award, Code, Briefcase, GraduationCap, Rocket, ExternalLink, ChevronLeft, ChevronRight, Download, Image as ImageIcon } from 'lucide-react';
// import { Analytics } from "@vercel/analytics/react";

// ===== CONFIGURATION FILE =====
const CONFIG = {
  personal: {
    name: "Luis Gabriel Laguardia",
    title: "Software Developer & Cybersecurity Enthusiast",
    location: "Bonifacio Global City, Taguig, Philippines",
    phone: "+639491564061",
    email: "laguardialuisgabriel@gmail.com",
    linkedin: "www.linkedin.com/in/devluislaguardia",
    github: "github.com/luuuuuuuilaguardia",
    resumeUrl: "/LuisGabrieLaguardia-RESUME.pdf"
  },
  
  summary: "Innovative and detail-oriented Software Developer & Cybersecurity Enthusiast with expertise in mobile and web. Passionate about leveraging technology to enhance user experience, optimize security, and drive digital transformation.",
  
  skills: {
    "Programming Languages": ["Python", "Java", "JavaScript", "C++", "SQL", "Dart", "PHP"],
    "Frontend Development": ["React", "Next.js", "Flutter", "HTML5", "CSS3"],
    "Backend Development": ["Node.js", "Express", "Laravel", "RESTful APIs"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL"],
    "DevOps & Tools": ["Git", "Docker", "CI/CD", "Linux"],
    "Cybersecurity": ["Penetration Testing", "CTF","Network Analysis", "Ethical Hacking", "Web Exploitation", "Reverse Engineering"],
    "Other Skills": ["IoT Development", "Robotics", "System Design", "Project Management"]
  },
  


  // ===================== // PROJECTS ... NAKAKALITO KASI -- // =========================================

  projects: [
    {
      name: "E-Collect – Smart E-Waste Management System",
      description: "Intelligent IoT-powered e-waste collection system with AI object recognition, mobile app for users, and admin dashboard. Cameras analyze e-waste items, reward users with points convertible to e-cash (GCash), and monitor drop-box capacity.",
      tech: ["IoT", "Computer Vision", "Flutter", "React", "Node.js", "MongoDB", "AI/ML"],
      highlights: ["AI-powered e-waste detection", "Gamified rewards system", "Real-time capacity monitoring", "E-cash conversion"],
      images: [
        "images/ecollect/ecollect1.png",
        "images/ecollect/ecollect2.png"
      ],
      github: "https://github.com/luuuuuuuilaguardia/E-Collect-WebAdmin",
      demo: "https://e-collect-eight.vercel.app",
      featured: false
    },

    // ========================================= // SOS Panic Pin // =========================================

    {
      name: "SOS Panic Pin – Emergency Alert System",
      description: "IoT panic button system that alerts local barangay authorities with live GPS tracking. Mobile app allows users to add emergency contacts who receive instant alerts. Web dashboard for authorities to track and respond to emergencies.",
      tech: ["IoT", "Flutter", "React", "Node.js", "Express", "MongoDB", "GPS Tracking"],
      highlights: ["Real-time location tracking", "Multi-recipient alerts", "Authority dashboard", "Emergency contact management"],
      images: [
        "https://via.placeholder.com/800x600/667eea/ffffff?text=SOS+Mobile+App",
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=Tracking+Dashboard",
        "https://via.placeholder.com/800x600/667eea/ffffff?text=IoT+Device"
      ],
      github: "https://github.com/luuuuuuuilaguardia/panic-pin-frontend",
      demo: "https://panic-pin-frontend.vercel.app",
      featured: false
    },

    // ========================================= // Scam See You // =========================================
    
    {
      name: "Scam See You – Scam Detection Extension",
      description: "Chrome extension powered by trained ML model to detect potential scam websites and phishing attempts. Built using scraped datasets from Kaggle and other sources for comprehensive scam pattern recognition.",
      tech: ["Chrome Extension", "Machine Learning", "Python", "TensorFlow", "JavaScript"],
      highlights: ["Real-time scam detection", "ML-powered analysis", "Browser integration", "Custom trained model"],
      images: [
        "/images/scamseeyou/scamseeyou1.png",
        "/images/scamseeyou/scamseeyou2.png"
      ],
      github: "https://github.com/luuuuuuuilaguardia/AI-AI-Delas-alas/tree/scam-check",
      demo: "",
      featured: false
    },
    {
      name: "LOLA NENA – Credit Scoring Tracker",
      description: "Innovative credit scoring and tracking system proposed to banking institutions during hackathon. Analyzes user financial behavior and provides credit worthiness assessments.",
      tech: ["React", "Node.js", "MongoDB", "Data Analytics"],
      highlights: ["Credit score algorithms", "User behavior analysis", "Banking integration", "Hackathon finalist project"],
      images: [
        "https://via.placeholder.com/800x600/667eea/ffffff?text=LOLA+NENA+Dashboard",
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=Credit+Analysis"
      ],
      github: "https://github.com/luuuuuuuilaguardia/lola-nena",
      demo: ""
    },

    // ========================================= // Splitwise Clone // =========================================
   
    {
      name: "Splitwise Clone – Bill Splitting App",
      description: "Social bill-splitting application that simplifies group expense management. Share bills via QR codes, manage contacts, and track who owes what with an intuitive interface.",
      tech: ["Flutter", "Node.js", "Express", "MongoDB"],
      highlights: ["QR code sharing", "Contact integration", "Expense tracking", "Real-time synchronization"],
      images: [
        "https://via.placeholder.com/800x600/667eea/ffffff?text=Splitwise+Home",
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=QR+Sharing"
      ],
      github: "https://github.com/luuuuuuuilaguardia/splitwise-clone",
      demo: ""
    },

    // ========================================= // EcoTrack // =========================================
    
    {
      name: "EcoTrack – IoT Energy Monitoring System",
      description: "IoT-based energy monitoring platform inspired by Meralco system with real-time power tracking, usage history, and cost computation.",
      tech: ["Flutter", "React", "Node.js", "MongoDB", "IoT"],
      highlights: ["Smart plug integration", "Real-time tracking", "Energy-saving insights"],
      images: ["https://via.placeholder.com/800x600/667eea/ffffff?text=EcoTrack+Dashboard"],
      github: "https://github.com/luuuuuuuilaguardia/ecotrack",
      demo: ""
    },

    // ========================================= // Improved Tic-Tac-Toe // =========================================
   
    {
      name: "Improved Tic-Tac-Toe",
      description: "Enhanced version of the classic Tic-Tac-Toe game with advanced AI opponent, multiple difficulty levels, and modern UI/UX design.",
      tech: ["JavaScript", "React", "Game Logic"],
      highlights: ["AI opponent", "Multiple difficulty modes", "Score tracking"],
      images: ["https://via.placeholder.com/800x600/667eea/ffffff?text=Tic-Tac-Toe+Game"],
      github: "https://github.com/luuuuuuuilaguardia/tictactoe",
      demo: ""
    },

    // ========================================= // Diffie-Hellman Key Exchange Chat System // =========================================

    {
      name: "Diffie-Hellman Key Exchange Chat System",
      description: "Secure messaging application with end-to-end encryption implementation using Diffie-Hellman key exchange protocol.",
      tech: ["Python", "Cryptography", "Socket Programming"],
      highlights: ["End-to-end encryption", "Secure key exchange", "Real-time messaging"],
      images: ["https://via.placeholder.com/800x600/667eea/ffffff?text=Secure+Chat"],
      github: "https://github.com/luuuuuuuilaguardia/dh-chat",
      demo: ""
    },

    // ========================================= // E-Jeep QR Payment System // =========================================

    {
      name: "E-Jeep QR Payment System",
      description: "QR-based fare payment system for public transportation with secure wallet transactions and automatic balance deduction.",
      tech: ["Python", "KivyMD", "SQLite"],
      highlights: ["QR code generation", "Secure transactions", "Automatic deduction"],
      images: ["https://via.placeholder.com/800x600/667eea/ffffff?text=E-Jeep+Payment"],
      github: "https://github.com/luuuuuuuilaguardia/ejeep-qr",
      demo: ""
    },

    // ========================================= // Facebook & Instagram Clone // =========================================

    {
      name: "Facebook & Instagram Clone",
      description: "Full-featured social media application with modern UI and real-time capabilities including chat and post interactions.",
      tech: ["Flutter", "Express", "MongoDB"],
      highlights: ["Authentication", "Real-time chat", "Post interactions"],
      images: ["https://via.placeholder.com/800x600/667eea/ffffff?text=Social+Media+Feed"],
      github: "https://github.com/luuuuuuuilaguardia/social-clone",
      demo: ""
    }
    //
  ],
  

  // ===================================== AWARDS....
  awards: [
    { 
      title: "Best App Award #1", 
      event: "National University Manila Techfiesta", 
      year: "2024",
      description: "Recognized for innovative mobile application development with outstanding UI/UX and functionality.",
      journey: [
        "Developed a full-stack mobile application from concept to deployment",
        "Designed intuitive user interface that impressed judges and users",
        "Implemented advanced features that set our app apart from competitors",
        "Received recognition for technical excellence and basis on rubrics"
      ],
      images: [
        "images/techfiesta/techfiesta1.jpeg",
        "images/techfiesta/techfiesta2.jpeg",
        "images/techfiesta/techfiesta3.jpeg"
      ]
    },
    { 
      title: "Champion", 
      event: "JPCS Programming Competition", 
      year: "2022",
      description: "First place winner in competitive programming challenge, solving complex algorithmic problems.",
      journey: [
        "Competed against top students in National University",
        "Solved complex algorithmic challenges under time pressure",
        "Demonstrated mastery of data structures and algorithms",
        "Outperformed competitors in multiple rounds of elimination",
        "Achieved first place through consistent problem-solving excellence"
      ],
      images: [
        "images/jpcs-compe/jpcs1.jpg",
        "images/jpcs-compe/jpcs2.jpg"
      ]
    },
    { 
      title: "Finalist", 
      event: "CoinsPH Hackathon", 
      year: "2023",
      description: "Developed fintech solution for digital payments and cryptocurrency integration.",
      journey: [
        "Built a fintech application integrating digital wallet and crypto features",
        "Collaborated with a team to create secure payment solutions",
        "Implemented blockchain technology for transaction security",
        "Pitched our solution to CoinsPH executives and fintech experts",
        "Reached finals among top fintech innovations in the competition"
      ],
      images: [
        "images/coinsph/coinss.png"
      ]
    },
    { 
      title: "Finalist", 
      event: "Hackfest 2024 - GDSC Ateneo de Manila", 
      year: "2024",
      description: "Built innovative tech solution hackathon with Google Developer Student Club.",
      journey: [
        "Participated in an intense multi day hackathon at Ateneo de Manila",
        "Leveraged Google Cloud Platform and modern web technologies",
        "Developed a working prototype from scratch in one day",
        "Presented our solution to Google engineers and GDSC mentors",
        "Competed against teams from top universities across the Philippines"
      ],
      images: [
        "images/admu/gdsc1.jpeg",
        "images/admu/gdsc2.png",
        "images/admu/gdsc3.jpg"
      ]
    },
    { 
      title: "Finalist", 
      event: "Trend Micro Capture the Flag", 
      year: "2024",
      description: "Competed in cybersecurity CTF competition, demonstrating ethical hacking and security skills.",
      journey: [
        "Tackled real-world cybersecurity challenges and vulnerabilities",
        "Applied penetration testing techniques and security analysis",
        "Solved complex reverse engineering and forensics problems",
        "Competed against professional security researchers and ethical hackers",
        "Demonstrated expertise in web exploitation and network security"
      ],
      images: [
        
        "images/trendmicro/tmctf1.png",
        "images/trendmicro/tmctf4.jpg",


      ]
    },
    { 
      title: "4th Place", 
      event: "International Robotics Competition", 
      year: "2024",
      description: "Designed and developed an autonomous competition robot featuring a high-precision line-following system optimized with sensor calibration, PID control, and real-time navigation algorithms.",
      journey: [
        "Designed and built an autonomous robot from the ground up",
        "Developed a high-precision line-following system using calibrated sensors and PID control",
        "Integrated sensors, actuators, and control logic for accurate and responsive navigation",
        "Competed against teams from universities across the Philippines",
        "Achieved 4th place in a highly competitive international robotics challenge"
      ],
      images: [
        "images/umak/robotics3.png",
        "images/umak/robotics2.png",
        "images/umak/robotics1.png",
        "images/umak/robotics4.png",
        "images/umak/robotics5.png"

      ]
    },
    { 
      title: "2nd & 3rd Place", 
      event: "Capture the Flag - TIP Quezon City", 
      year: "2025",
      description: "Multiple podium finishes in cybersecurity challenges and penetration testing scenarios.",
      journey: [
        "Competed in multiple CTF categories including web security and cryptography",
        "Solved challenging security puzzles and exploit development tasks",
        "Demonstrated advanced skills in ethical hacking and vulnerability assessment",
        "Proved expertise across various cybersecurity domains"
      ],
      images: [
        "images/tip/ctf1.JPG",
        "images/tip/ctf2.JPG",
        "images/tip/ctf4.JPG",
        "images/tip/ctf3.JPG"
      ]
    },
    { 
      title: "2nd Place", 
      event: "Alertong Arduino Hackathon", 
      year: "2025",
      description: "Developed IoT emergency alert system using Arduino and mobile integration.",
      journey: [
        "Built an IoT emergency alert system using Arduino microcontrollers",
        "Integrated hardware sensors with mobile app for real-time alerts",
        "Developed a complete solution addressing public safety concerns",
        "Demonstrated the system to judges and emergency response professionals",
        "Won 2nd place for innovative IoT solution with practical applications"
      ],
      images: [

        "images/sti/arduino1.png",
        "images/sti/arduino2.png",
        "images/sti/arduino5.png",
        "images/sti/arduino4.png"

      ]
    },
    { 
      title: "Finalist", 
      event: "Algolympics 2025 - UP Diliman", 
      year: "2025",
      description: "Competed in algorithmic programming olympiad at University of the Philippines.",
      journey: [
        "Competed in prestigious algorithmic programming competition at UP Diliman",
        "Solved complex mathematical and computational problems",
        "Applied advanced algorithms and optimization techniques",
        "Competed against top programming students nationwide",
        "Reached finals demonstrating strong problem-solving capabilities"
      ],
      images: [
        "images/up/algo1.JPG",
        "images/up/algo2.JPEG",
        "images/up/algo3.png"
      ]
    },
    { 
      title: "Finalist", 
      event: "PacketHacks IoT Conference", 
      year: "2025",
      description: "Showcased IoT project integrating hardware, software, and cloud services.",
      journey: [
        "Developed a comprehensive IoT solution connecting hardware to cloud services",
        "Integrated multiple sensors and devices with cloud-based analytics",
        "Presented our IoT architecture to industry professionals and researchers",
        "Demonstrated real-time data processing and remote device management",
        "Showcased innovative IoT applications at a major tech conference"
      ],
      images: [
        
        "images/smx/iot1.png",
        "images/smx/iot2.png",
        "images/smx/iot3.png",
        "images/smx/iot4.png",
        "images/smx/iot5.png"


      ]
    }
  ],
  
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "National University - Philippines",
    major: "Mobile and Web Applications",
    period: "2022 - Present",
    achievements: ["Taguig City Scholar", "Security Bank Scholar", "Consistent Dean's Lister", "Microsoft Student Ambassador", "Ayala Young Leaders Organization Candidate"],
  },
  
  experience: {
    title: "Freelance Software Developer",
    period: "2023 - Present",
    responsibilities: [
      "Developed and deployed web and mobile applications using React, Next.js, and Laravel",
      "Integrated RESTful APIs, databases (MySQL, MongoDB), and third-party services",
      "Conducted security audits and penetration testing for client applications",
      "Conducted network traffic analysis and vulnerability assessments",
      "Participated in Capture The Flag (CTF) challenges and ethical hacking modules",
      "Implemented secure coding practices in software development projects"
    ]
  }
};

// ===== MAIN APP COMP =====
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedAward, setSelectedAward] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const [imageErrors, setImageErrors] = useState(new Set());
  const loadingImagesRef = useRef(new Set()); 
  
  // refs for scroll anim
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const awardsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // scroll anim
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [skillsRef, projectsRef, experienceRef, awardsRef, educationRef, contactRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeProjectModal();
        closeAwardModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const normalizeImagePath = useCallback((url) => {
    if (!url) return '';
    return url.startsWith('/') ? url : `/${url}`;
  }, []);

  const preloadImages = useCallback((imageUrls) => {
    imageUrls.forEach((url) => {
      const normalizedUrl = normalizeImagePath(url);
      
      if (preloadedImages.has(url) || imageErrors.has(url) || loadingImagesRef.current.has(normalizedUrl)) {
        return;
      }
      
      loadingImagesRef.current.add(normalizedUrl);
      
      const img = new Image();
      img.onload = () => {
        loadingImagesRef.current.delete(normalizedUrl);
        setPreloadedImages(prev => {
          if (prev.has(url)) return prev;
          return new Set([...prev, url]);
        });
      };
      img.onerror = () => {
        loadingImagesRef.current.delete(normalizedUrl);
        setImageErrors(prev => {
          if (prev.has(url)) return prev;
          return new Set([...prev, url]);
        });
      };
      img.src = normalizedUrl;
    });
  }, [preloadedImages, imageErrors, normalizeImagePath]);

  useEffect(() => {
    if (selectedProject?.images) {
      preloadImages(selectedProject.images);
    }
    if (selectedAward?.images) {
      preloadImages(selectedAward.images);
    }
  }, [selectedProject, selectedAward, preloadImages]);

  useEffect(() => {
    const images = selectedProject?.images || selectedAward?.images;
    if (!images || images.length <= 1) return;

    const adjacentUrls = [];
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    
    if (images[prevIndex]) adjacentUrls.push(images[prevIndex]);
    if (images[nextIndex]) adjacentUrls.push(images[nextIndex]);
    
    if (adjacentUrls.length > 0) {
      preloadImages(adjacentUrls);
    }
  }, [currentImageIndex, selectedProject, selectedAward, preloadImages]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setImageLoading(true);
    setImageErrors(new Set());
    document.body.style.overflow = 'hidden';
    
    if (project.images && project.images.length > 0) {
      const firstImage = project.images[0];
      const normalizedPath = firstImage.startsWith('/') ? firstImage : `/${firstImage}`;
      const img = new Image();
      img.onload = () => {
        setImageLoading(false);
        setPreloadedImages(prev => new Set([...prev, firstImage]));
      };
      img.onerror = () => {
        setImageLoading(false);
        setImageErrors(prev => new Set([...prev, firstImage]));
      };
      img.src = normalizedPath;
    } else {
      setImageLoading(false);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setImageLoading(false);
    document.body.style.overflow = 'unset';
  };

  const openAwardModal = (award) => {
    setSelectedAward(award);
    setCurrentImageIndex(0);
    setImageLoading(true);
    setImageErrors(new Set());
    document.body.style.overflow = 'hidden';
    
    if (award.images && award.images.length > 0) {
      const firstImage = award.images[0];
      const normalizedPath = firstImage.startsWith('/') ? firstImage : `/${firstImage}`;
      const img = new Image();
      img.onload = () => {
        setImageLoading(false);
        setPreloadedImages(prev => new Set([...prev, firstImage]));
      };
      img.onerror = () => {
        setImageLoading(false);
        setImageErrors(prev => new Set([...prev, firstImage]));
      };
      img.src = normalizedPath;
    } else {
      setImageLoading(false);
    }
  };

  const closeAwardModal = () => {
    setSelectedAward(null);
    setCurrentImageIndex(0);
    setImageLoading(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const images = selectedProject?.images || selectedAward?.images;
    if (images) {
      const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      const nextImageUrl = images[nextIndex];
      
      if (!preloadedImages.has(nextImageUrl) && !imageErrors.has(nextImageUrl)) {
        setImageLoading(true);
      }
      
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    const images = selectedProject?.images || selectedAward?.images;
    if (images) {
      const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
      const prevImageUrl = images[prevIndex];
      
      if (!preloadedImages.has(prevImageUrl) && !imageErrors.has(prevImageUrl)) {
        setImageLoading(true);
      }
      
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          color: #fff;
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
        }

        /* Scroll Animations */
        .section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .nav.scrolled {
          background: rgba(15, 12, 41, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          padding: 1rem 5%;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 5%;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: float 20s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50px, 50px) rotate(180deg); }
        }

        .hero-content {
          max-width: 800px;
          text-align: center;
          z-index: 1;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: #a8a8a8;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease 0.2s backwards;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #d0d0d0;
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease 0.4s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease 0.6s backwards;
        }

        .btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          transform: translateY(-3px);
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.5);
        }

        .skill-category-title {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: #667eea;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .skill-tag {
          background: rgba(102, 126, 234, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(102, 126, 234, 0.4);
          transform: scale(1.05);
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .project-card.featured::before {
          content: 'FEATURED';
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(118, 75, 162, 0.3);
        }

        .project-name {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #764ba2;
        }

        .project-description {
          color: #d0d0d0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-badge {
          background: rgba(118, 75, 162, 0.3);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
        }

        .project-highlights {
          list-style: none;
          margin-top: 1rem;
        }

        .project-highlights li {
          padding: 0.5rem 0;
          color: #a8a8a8;
          position: relative;
          padding-left: 1.5rem;
        }

        .project-highlights li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #667eea;
          font-size: 1.2rem;
        }

        /* Awards Section */
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .award-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1.5rem;
          border-left: 4px solid #667eea;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .award-card:hover {
          transform: translateX(10px);
          border-left-color: #764ba2;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .award-title {
          font-size: 1.1rem;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .award-event {
          color: #d0d0d0;
          margin-bottom: 0.3rem;
        }

        .award-year {
          color: #a8a8a8;
          font-size: 0.9rem;
        }

        /* Experience Section */
        .experience-content {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .experience-header {
          margin-bottom: 2rem;
        }

        .experience-title {
          font-size: 1.8rem;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .experience-period {
          color: #a8a8a8;
          font-size: 1.1rem;
        }

        .experience-list {
          list-style: none;
        }

        .experience-list li {
          padding: 1rem 0;
          color: #d0d0d0;
          line-height: 1.6;
          position: relative;
          padding-left: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .experience-list li:last-child {
          border-bottom: none;
        }

        .experience-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.2rem;
        }

        /* Education Section */
        .education-content {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .education-degree {
          font-size: 1.8rem;
          color: #764ba2;
          margin-bottom: 0.5rem;
        }

        .education-school {
          font-size: 1.3rem;
          color: #d0d0d0;
          margin-bottom: 0.5rem;
        }

        .education-major {
          color: #a8a8a8;
          margin-bottom: 0.5rem;
        }

        .education-period {
          color: #a8a8a8;
          margin-bottom: 1.5rem;
        }

        .education-achievements {
          list-style: none;
        }

        .education-achievements li {
          padding: 0.8rem 0;
          color: #d0d0d0;
          position: relative;
          padding-left: 2rem;
        }

        .education-achievements li::before {
          content: '🏆';
          position: absolute;
          left: 0;
        }

        /* Contact Section */
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          color: #fff;
        }

        .contact-item:hover {
          transform: translateY(-5px);
          border-color: #667eea;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 20px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          border: 2px solid rgba(102, 126, 234, 0.3);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(255, 0, 0, 0.3);
          transform: rotate(90deg);
        }

        .modal-image-section {
          position: relative;
          width: 100%;
          height: 400px;
          background: #000;
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          display: flex; /* Added for spinner centering */
          align-items: center; /* Added for spinner centering */
          justify-content: center; /* Added for spinner centering */
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease; /* Optional: for a smoother transition */
        }

        .modal-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(102, 126, 234, 0.8);
          border: none;
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 5;
        }

        .modal-nav-btn:hover {
          background: rgba(102, 126, 234, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .modal-nav-btn.prev {
          left: 1rem;
        }

        .modal-nav-btn.next {
          right: 1rem;
        }

        .modal-image-indicators {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 5;
        }

        .image-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .image-indicator.active {
          background: #667eea;
          width: 30px;
          border-radius: 5px;
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-project-name,
        .modal-award-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .modal-project-description,
        .modal-award-description {
          color: #d0d0d0;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .modal-tech-stack {
          margin-bottom: 1.5rem;
        }

        .modal-tech-title {
          color: #667eea;
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .modal-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .modal-tech-tag {
          background: rgba(102, 126, 234, 0.2);
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: 0.95rem;
          border: 1px solid rgba(102, 126, 234, 0.4);
        }

        .modal-highlights {
          margin-bottom: 2rem;
        }

        .modal-highlights-title {
          color: #764ba2;
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .modal-highlights-list {
          list-style: none;
        }

        .modal-highlights-list li {
          padding: 0.8rem 0;
          color: #d0d0d0;
          position: relative;
          padding-left: 2rem;
          line-height: 1.6;
        }

        .modal-highlights-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.3rem;
        }

        .modal-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid;
        }

        .modal-link-btn.github {
          background: transparent;
          color: #fff;
          border-color: #667eea;
        }

        .modal-link-btn.github:hover {
          background: #667eea;
          transform: translateY(-3px);
        }

        .modal-link-btn.demo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border-color: transparent;
        }

        .modal-link-btn.demo:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
        }

        .modal-link-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .modal-link-btn:disabled:hover {
          transform: none;
        }

        .modal-award-event {
          color: #a8a8a8;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .loading-spinner-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7); /* Dark semi-transparent background */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10; /* Ensure it's above the image container but below nav buttons */
        }

        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-top: 5px solid #667eea; /* Color of the spinning part */
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }


        /* Responsive */
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: rgba(15, 12, 41, 0.98);
            flex-direction: column;
            padding: 5rem 2rem;
            transition: right 0.3s ease;
          }

          .nav-menu.open {
            right: 0;
          }

          .menu-toggle {
            display: block;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .skills-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .modal-content {
            margin: 1rem;
            max-height: 95vh;
          }

          .modal-image-section {
            height: 250px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">LG</div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a href="#awards" className="nav-link" onClick={() => scrollToSection('awards')}>Awards</a></li>
          <li><a href="#education" className="nav-link" onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{CONFIG.personal.name}</h1>
          <h2 className="hero-subtitle">{CONFIG.personal.title}</h2>
          <p className="hero-description">{CONFIG.summary}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              <Rocket size={20} /> View Projects
            </button>
            <a href={CONFIG.personal.resumeUrl} download className="btn btn-secondary">
              <Download size={20} /> Download Resume
            </a>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <Mail size={20} /> Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" ref={skillsRef} style={{ padding: '5rem 5%' }}>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(CONFIG.skills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">
                <Code size={20} /> {category}
              </h3>
              <div className="skill-tags">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" ref={projectsRef} style={{ padding: '5rem 5%' }}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {CONFIG.projects.map(project => (
            <div 
              key={project.name} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onClick={() => openProjectModal(project)}
            >
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.slice(0, 3).map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p style={{ marginTop: '1rem', color: '#667eea', fontSize: '0.9rem', fontWeight: '600' }}>
                Click to view more →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" ref={experienceRef} style={{ padding: '5rem 5%' }}>
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-content">
          <div className="experience-header">
            <h3 className="experience-title">
              <Briefcase size={24} style={{ display: 'inline', marginRight: '10px' }} />
              {CONFIG.experience.title}
            </h3>
            <p className="experience-period">{CONFIG.experience.period}</p>
          </div>
          <ul className="experience-list">
            {CONFIG.experience.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section" ref={awardsRef} style={{ padding: '5rem 5%' }}>
        <h2 className="section-title">Awards & Achievements</h2>
        <div className="awards-grid">
          {CONFIG.awards.map((award, idx) => (
            <div key={idx} className="award-card" onClick={() => openAwardModal(award)}>
              <h3 className="award-title">
                <Award size={18} style={{ display: 'inline', marginRight: '8px' }} />
                {award.title}
              </h3>
              <p className="award-event">{award.event}</p>
              <p className="award-year">{award.year}</p>
              <p style={{ marginTop: '0.8rem', color: '#667eea', fontSize: '0.85rem', fontWeight: '600' }}>
                Click to view journey →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section" ref={educationRef} style={{ padding: '5rem 5%' }}>
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <h3 className="education-degree">
            <GraduationCap size={24} style={{ display: 'inline', marginRight: '10px' }} />
            {CONFIG.education.degree}
          </h3>
          <p className="education-school">{CONFIG.education.school}</p>
          <p className="education-major">Major: {CONFIG.education.major}</p>
          <p className="education-period">{CONFIG.education.period}</p>
          <ul className="education-achievements">
            {CONFIG.education.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" ref={contactRef} style={{ padding: '5rem 5%' }}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#d0d0d0' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-info">
            <a href={`mailto:${CONFIG.personal.email}`} className="contact-item">
              <Mail size={24} />
              <span>{CONFIG.personal.email}</span>
            </a>
            <a href={`tel:${CONFIG.personal.phone}`} className="contact-item">
              <Phone size={24} />
              <span>{CONFIG.personal.phone}</span>
            </a>
            <a href={`https://${CONFIG.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <Linkedin size={24} />
              <span>LinkedIn Profile</span>
            </a>
            <a href={`https://${CONFIG.personal.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <Github size={24} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 {CONFIG.personal.name} xD</p>
        <p style={{ marginTop: '0.5rem', color: '#a8a8a8', fontSize: '0.9rem' }}>
          {CONFIG.personal.location}
        </p>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <X size={24} />
            </button>

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="modal-image-section">
                {imageLoading && (
                    <div className="loading-spinner-overlay">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                
                {imageErrors.has(selectedProject.images[currentImageIndex]) ? (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '100%',
                    color: '#a8a8a8',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <ImageIcon size={48} />
                    <p>Image failed to load</p>
                  </div>
                ) : (
                  <img 
                    src={selectedProject.images[currentImageIndex].startsWith('/') 
                      ? selectedProject.images[currentImageIndex] 
                      : `/${selectedProject.images[currentImageIndex]}`} 
                    alt={`${selectedProject.name} screenshot ${currentImageIndex + 1}`}
                    className="modal-image"
                    onLoad={() => setImageLoading(false)} 
                    onError={() => {
                      setImageLoading(false);
                      setImageErrors(prev => new Set([...prev, selectedProject.images[currentImageIndex]]));
                    }}
                    style={{ opacity: imageLoading ? 0 : 1 }} 
                    loading="eager"
                  />
                )}
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button className="modal-nav-btn prev" onClick={prevImage}>
                      <ChevronLeft size={24} />
                    </button>
                    <button className="modal-nav-btn next" onClick={nextImage}>
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="modal-image-indicators">
                      {selectedProject.images.map((_, index) => (
                        <div
                          key={index}
                          className={`image-indicator ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => {
                            const targetImage = selectedProject.images[index];
                            if (!preloadedImages.has(targetImage) && !imageErrors.has(targetImage)) {
                              setImageLoading(true);
                            }
                            setCurrentImageIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="modal-body">
              <h2 className="modal-project-name">{selectedProject.name}</h2>
              <p className="modal-project-description">{selectedProject.description}</p>

              <div className="modal-tech-stack">
                <h3 className="modal-tech-title">Technology Stack</h3>
                <div className="modal-tech-tags">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-highlights">
                <h3 className="modal-highlights-title">Key Features</h3>
                <ul className="modal-highlights-list">
                  {selectedProject.highlights.map(highlight => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-links">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link-btn github"
                  >
                    <Github size={20} /> View on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link-btn demo"
                  >
                    <ExternalLink size={20} /> Site
                  </a>
                )}
                {!selectedProject.demo && (
                  <button className="modal-link-btn demo" disabled>
                    <ExternalLink size={20} /> Demo Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Award Modal */}
      {selectedAward && (
        <div className="modal-overlay" onClick={closeAwardModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAwardModal}>
              <X size={24} />
            </button>

            {selectedAward.images && selectedAward.images.length > 0 && (
              <div className="modal-image-section">
                {imageLoading && (
                    <div className="loading-spinner-overlay">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                
                {imageErrors.has(selectedAward.images[currentImageIndex]) ? (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '100%',
                    color: '#a8a8a8',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <ImageIcon size={48} />
                    <p>Image failed to load</p>
                  </div>
                ) : (
                  <img 
                    src={selectedAward.images[currentImageIndex].startsWith('/') 
                      ? selectedAward.images[currentImageIndex] 
                      : `/${selectedAward.images[currentImageIndex]}`} 
                    alt={`${selectedAward.title} ${currentImageIndex + 1}`}
                    className="modal-image"
                    onLoad={() => setImageLoading(false)} 
                    onError={() => {
                      setImageLoading(false);
                      setImageErrors(prev => new Set([...prev, selectedAward.images[currentImageIndex]]));
                    }}
                    style={{ opacity: imageLoading ? 0 : 1 }}
                    loading="eager"
                  />
                )}
                
                {selectedAward.images.length > 1 && (
                  <>
                    <button className="modal-nav-btn prev" onClick={prevImage}>
                      <ChevronLeft size={24} />
                    </button>
                    <button className="modal-nav-btn next" onClick={nextImage}>
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="modal-image-indicators">
                      {selectedAward.images.map((_, index) => (
                        <div
                          key={index}
                          className={`image-indicator ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => {
                            const targetImage = selectedAward.images[index];
                            if (!preloadedImages.has(targetImage) && !imageErrors.has(targetImage)) {
                              setImageLoading(true);
                            }
                            setCurrentImageIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="modal-body">
              <h2 className="modal-award-title">
                <Award size={28} style={{ display: 'inline', marginRight: '10px' }} />
                {selectedAward.title}
              </h2>
              <p className="modal-award-event">{selectedAward.event} • {selectedAward.year}</p>
              <p className="modal-award-description">{selectedAward.description}</p>

              {selectedAward.journey && selectedAward.journey.length > 0 && (
                <div className="modal-highlights">
                  <h3 className="modal-highlights-title">Journey</h3>
                  <ul className="modal-highlights-list">
                    {selectedAward.journey.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;