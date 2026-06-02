import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Crown, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Awards.css';

const awardsData = [
  {
    title: "IEEE Web Craft Competition",
    badge: "Runner Up",
    icon: "award",
    desc: "Secured second place in the regional web development challenge.",
    event: "IEEE Tech",
    year: "2025"
  },
  {
    title: "Global UI/UX Design Hackathon",
    badge: "Winner",
    icon: "trophy",
    desc: "Crafted a next-gen immersive interface that won top honors among 500+ teams.",
    event: "DevPost",
    year: "2025"
  },
  {
    title: "Anveshana Techno-Cultural Fest",
    badge: "Featured",
    icon: "crown",
    desc: "Successfully led and managed the premier technical fest at SASI.",
    event: "SASI Fest",
    year: "2024"
  },
  {
    title: "Open Source Contributor",
    badge: "Featured",
    icon: "medal",
    desc: "Recognized for outstanding contributions to core web animation libraries.",
    event: "GitHub",
    year: "2023"
  },
  {
    title: "Real-world UI Projects",
    badge: "Winner",
    icon: "star",
    desc: "Developed and deployed multiple high-end UI projects for global clients.",
    event: "Freelance",
    year: "2024-2026"
  }
];

const getIcon = (iconName) => {
  switch (iconName) {
    case 'trophy': return <Trophy size={26} />;
    case 'medal': return <Medal size={26} />;
    case 'award': return <Award size={26} />;
    case 'crown': return <Crown size={26} />;
    case 'star': return <Star size={26} />;
    default: return <Award size={26} />;
  }
};

const Achievements = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Number.MAX_VALUE;

    const cards = container.querySelectorAll('.award-card');
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Run initial check once mounted
    handleScroll();

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      const card = containerRef.current.querySelector('.award-card');
      if (card) {
        const scrollAmount = card.clientWidth + 40; // card width + gap
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const card = containerRef.current.querySelector('.award-card');
      if (card) {
        const scrollAmount = card.clientWidth + 40; // card width + gap
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section id="awards" className="awards-section">
      <div className="awards-bg-glow" />
      
      <div className="awards-header">
        <span className="awards-label">Awards & Recognition</span>
        <h2 className="awards-title">
          Proof of Our Work.
          <span className="awards-underline" />
        </h2>
      </div>

      <motion.div 
        ref={containerRef}
        className="awards-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            className={`award-card ${index === activeIndex ? 'active' : ''}`}
            variants={cardVariants}
          >
            <span className={`award-badge ${award.badge.toLowerCase() === 'winner' ? 'winner' : ''}`}>
              {award.badge}
            </span>

            <div className="award-icon-container">
              {getIcon(award.icon)}
            </div>

            <div>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-desc">{award.desc}</p>
            </div>

            <div className="award-footer">
              <span className="award-event">{award.event}</span>
              <span className="award-year">{award.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="awards-nav-container">
        <button className="awards-nav-btn" onClick={scrollLeft} aria-label="Previous Award">
          <ChevronLeft size={20} />
        </button>
        <button className="awards-nav-btn" onClick={scrollRight} aria-label="Next Award">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Achievements;
