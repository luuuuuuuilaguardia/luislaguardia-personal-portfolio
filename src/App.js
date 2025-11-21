import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Award, Code, Briefcase, GraduationCap, Rocket } from 'lucide-react';

// test 1 
// task:
// make the projects and awards section clickable... pops up a modal with the project/award details
// ===== CONFIGURATION FILE =====
const CONFIG = {
  personal: {
    name: "Luis Gabriel Laguardia",
    title: "Software Developer & Cybersecurity Enthusiast",
    location: "Bonifacio Global City, Taguig, Philippines",
    phone: "+639491564061",
    email: "laguardialuisgabriel@gmail.com",
    linkedin: "www.linkedin.com/in/devluislaguardia",
    github: "github.com/luuuuuuuilaguardia"
  },
  
  summary: "Innovative and detail-oriented Software Developer & Cybersecurity Enthusiast with expertise in mobile and web. Passionate about leveraging technology to enhance user experience, optimize security, and drive digital transformation.",
  
  skills: {
    "Programming Languages": ["Python", "Java", "JavaScript", "C++", "SQL", "Dart", "PHP"],
    "Frontend Development": ["React", "Next.js", "Flutter", "HTML5", "CSS3"],
    "Backend Development": ["Node.js", "Express", "Laravel", "RESTful APIs"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL"],
    "DevOps & Tools": ["Git", "Docker", "CI/CD", "Linux"],
    "Cybersecurity": ["Penetration Testing", "Network Analysis", "Ethical Hacking", "CTF"],
    "Other Skills": ["IoT Development", "Robotics", "System Design", "Project Management"]
  },
  
  projects: [
    {
      name: "E-Collect – Smart E-Waste Management System",
      description: "Intelligent IoT-powered e-waste collection system with AI object recognition, mobile app for users, and admin dashboard. Cameras analyze e-waste items, reward users with points convertible to e-cash (GCash), and monitor drop-box capacity.",
      tech: ["IoT", "Computer Vision", "Flutter", "React", "Node.js", "MongoDB", "AI/ML"],
      highlights: ["AI-powered e-waste detection", "Gamified rewards system", "Real-time capacity monitoring", "E-cash conversion"]
    },
    {
      name: "SOS Panic Pin – Emergency Alert System",
      description: "IoT panic button system that alerts local barangay authorities with live GPS tracking. Mobile app allows users to add emergency contacts who receive instant alerts. Web dashboard for authorities to track and respond to emergencies.",
      tech: ["IoT", "Flutter", "React", "Node.js", "Express", "MongoDB", "GPS Tracking"],
      highlights: ["Real-time location tracking", "Multi-recipient alerts", "Authority dashboard", "Emergency contact management"]
    },
    {
      name: "Scam See You – Scam Detection Extension",
      description: "Chrome extension powered by trained ML model to detect potential scam websites and phishing attempts. Built using scraped datasets from Kaggle and other sources for comprehensive scam pattern recognition.",
      tech: ["Chrome Extension", "Machine Learning", "Python", "TensorFlow", "JavaScript"],
      highlights: ["Real-time scam detection", "ML-powered analysis", "Browser integration", "Custom trained model"]
    },
    {
      name: "LOLA NENA – Credit Scoring Tracker",
      description: "Innovative credit scoring and tracking system proposed to banking institutions during hackathon. Analyzes user financial behavior and provides credit worthiness assessments.",
      tech: ["React", "Node.js", "MongoDB", "Data Analytics"],
      highlights: ["Credit score algorithms", "User behavior analysis", "Banking integration", "Hackathon finalist project"]
    },
    {
      name: "Splitwise Clone – Bill Splitting App",
      description: "Social bill-splitting application that simplifies group expense management. Share bills via QR codes, manage contacts, and track who owes what with an intuitive interface.",
      tech: ["Flutter", "Node.js", "Express", "MongoDB"],
      highlights: ["QR code sharing", "Contact integration", "Expense tracking", "Real-time synchronization"]
    },
    {
      name: "EcoTrack – IoT Energy Monitoring System",
      description: "IoT-based energy monitoring platform inspired by Meralco system with real-time power tracking, usage history, and cost computation.",
      tech: ["Flutter", "React", "Node.js", "MongoDB", "IoT"],
      highlights: ["Smart plug integration", "Real-time tracking", "Energy-saving insights"]
    },
    {
      name: "Improved Tic-Tac-Toe",
      description: "Enhanced version of the classic Tic-Tac-Toe game with advanced AI opponent, multiple difficulty levels, and modern UI/UX design.",
      tech: ["JavaScript", "React", "Game Logic"],
      highlights: ["AI opponent", "Multiple difficulty modes", "Score tracking"]
    },
    {
      name: "Diffie-Hellman Key Exchange Chat System",
      description: "Secure messaging application with end-to-end encryption implementation using Diffie-Hellman key exchange protocol.",
      tech: ["Python", "Cryptography", "Socket Programming"],
      highlights: ["End-to-end encryption", "Secure key exchange", "Real-time messaging"]
    },
    {
      name: "E-Jeep QR Payment System",
      description: "QR-based fare payment system for public transportation with secure wallet transactions and automatic balance deduction.",
      tech: ["Python", "KivyMD", "SQLite"],
      highlights: ["QR code generation", "Secure transactions", "Automatic deduction"]
    },
    {
      name: "Facebook & Instagram Clone",
      description: "Full-featured social media application with modern UI and real-time capabilities including chat and post interactions.",
      tech: ["Flutter", "Express", "MongoDB"],
      highlights: ["Authentication", "Real-time chat", "Post interactions"]
    }
  ],
  
  awards: [
    { title: "Best App Award #1", event: "National University Manila Techfiesta", year: "2024" },
    { title: "Champion", event: "JPCS Programming Competition", year: "2022" },
    { title: "Finalist", event: "CoinsPH Hackathon", year: "2023" },
    { title: "Finalist", event: "Hackfest 2024 - GDSC Ateneo de Manila", year: "2024" },
    { title: "Finalist", event: "Trend Micro Capture the Flag", year: "2024" },
    { title: "4th Place", event: "International Robotics Competition", year: "2024" },
    // { title: "Finalist", event: "Kaya Founders Hackathon", year: "2024" },
    { title: "2nd & 3rd Place", event: "Capture the Flag - TIP Quezon City", year: "2025" },
    { title: "2nd Place", event: "Alertong Arduino Hackathon", year: "2025" },
    { title: "Finalist", event: "Algolympics 2025 - UP Diliman", year: "2025" },
    { title: "Finalist", event: "PacketHacks IoT Conference", year: "2025" }
  ],
  
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "National University - Philippines",
    major: "Mobile and Web Applications",
    period: "2022 - Present",
    achievements: ["Security Bank Scholar", "Taguig City Scholar", "Consistent Dean's Lister", "Microsoft Student Ambassador"],
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

// ===== MAIN APP COMPONENT =====
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false);
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

        /* Section Styles */
        .section {
          padding: 5rem 5%;
          position: relative;
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
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
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
        }

        .award-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1.5rem;
          border-left: 4px solid #667eea;
          transition: all 0.3s ease;
        }

        .award-card:hover {
          transform: translateX(10px);
          border-left-color: #764ba2;
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
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <Mail size={20} /> Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
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
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {CONFIG.projects.map(project => (
            <div key={project.name} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
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
      <section id="awards" className="section">
        <h2 className="section-title">Awards & Achievements</h2>
        <div className="awards-grid">
          {CONFIG.awards.map((award, idx) => (
            <div key={idx} className="award-card">
              <h3 className="award-title">
                <Award size={18} style={{ display: 'inline', marginRight: '8px' }} />
                {award.title}
              </h3>
              <p className="award-event">{award.event}</p>
              <p className="award-year">{award.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
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
      <section id="contact" className="section">
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
    </div>
  );
};

export default App;