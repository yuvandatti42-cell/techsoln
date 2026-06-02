import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Download, ChevronLeft, ChevronRight, Layout, Cat, Smartphone } from 'lucide-react';
import './Projects.css';

const BackgroundDesign = () => (
  <div className="hobbies-background-design">
    <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      {/* Faint Grid */}
      <pattern id="grid-pattern-projects" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M 100 0 L 0 0 0 100" className="faint-grid" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid-pattern-projects)" />

      {/* Main Curved Paths */}
      <motion.path
        d="M -100 200 Q 300 150 500 400 T 1100 300"
        className="abstract-line animate-line"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M 1100 800 Q 700 850 500 600 T -100 700"
        className="abstract-line animate-line"
        style={{ animationDirection: 'reverse' }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M 200 -100 Q 250 300 100 500 T 200 1100"
        className="abstract-line opacity-30"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Technical Elements */}
      <motion.circle
        cx="900" cy="100" r="150"
        className="technical-circle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.circle
        cx="900" cy="100" r="180"
        className="technical-circle opacity-50"
        style={{ strokeDasharray: "10 20" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Design Dots */}
      {[...Array(15)].map((_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 1000}
          cy={Math.random() * 1000}
          r={Math.random() * 2 + 1}
          className="design-dot"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ 
            duration: Math.random() * 5 + 3, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
        />
      ))}

      {/* Small Accents (Blue instead of Red for contrast on Red background) */}
      <motion.path
        d="M 50 150 L 150 50"
        stroke="rgba(49, 84, 156, 0.6)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      />
      <motion.path
        d="M 850 950 L 950 850"
        stroke="rgba(49, 84, 156, 0.6)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
      />
    </svg>
  </div>
);

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const studyCatSlides = [
    {
      id: 1,
      name: "StudyCat Dashboard",
      badge: "Desktop Experience",
      icon: <Layout size={24} className="text-white" />,
      description: "A comprehensive all-in-one AI productivity dashboard designed for large screens, helping students focus better, plan smarter, and track progress with ease.",
      image: "/studycat-project.png",
      technologies: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
      links: { view: "#", github: "#", download: "#" }
    },
    {
      id: 2,
      name: "StudyCat Mobile",
      badge: "On-the-go Productivity",
      icon: <Smartphone size={24} className="text-white" />,
      description: "The mobile-first companion app for StudyCat, featuring the same powerful AI tools and productivity trackers optimized for a seamless mobile experience.",
      image: "/studycat-mobile.png",
      technologies: ["React Native", "Tailwind CSS", "AI Helper"],
      links: { view: "#", github: "#", download: "#" }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % studyCatSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + studyCatSlides.length) % studyCatSlides.length);
  };

  const slide = studyCatSlides[currentSlide];

  return (
    <section id="projects" className="projects-showcase-section">
      <BackgroundDesign />
      <div className="container projects-container">
        <header className="projects-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="highlight">Projects</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Innovative solutions built with purpose and passion.
          </motion.p>
        </header>

        <div className="slider-wrapper">
          <div className="bg-text-large">STUDYCAT</div>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              className="project-slide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Left Side: Image */}
              <div className="project-image-container">
                <div 
                  className="image-glow" 
                  style={{ '--glow-color': 'var(--primary)' }}
                ></div>
                <div className="image-frame">
                  <div className="image-scanning-line"></div>
                  <div className="corner-marker corner-tl"></div>
                  <div className="corner-marker corner-br"></div>
                  <img src={slide.image} alt={slide.name} className={currentSlide === 1 ? 'object-contain' : ''} />
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="project-details">
                <div className="project-icon-box">
                  {slide.icon}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                    <Cat size={24} className="text-white" />
                    <h3 className="project-name" style={{ marginBottom: 0 }}>StudyCat</h3>
                </div>
                <h4 className="text-xl font-bold text-white/90 mb-4">{slide.name}</h4>
                <p className="project-description">{slide.description}</p>
                
                <div className="tech-stack">
                  {slide.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <motion.a 
                    href={slide.links.view} 
                    className="btn-showcase primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project <ExternalLink size={18} />
                  </motion.a>
                  <motion.a 
                    href={slide.links.github} 
                    className="btn-showcase outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} /> GitHub
                  </motion.a>
                  <motion.a 
                    href={slide.links.download} 
                    className="btn-showcase text-only"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={18} /> Brochure
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="slider-controls">
            <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
              <ChevronLeft size={24} />
            </button>
            <div className="slider-dots">
              {studyCatSlides.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="nav-btn next" onClick={nextSlide} aria-label="Next Slide">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
