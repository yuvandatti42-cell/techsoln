import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import './PhotographyPage.css';

const PhotographyPage = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const photographyImages = [
    { src: '/gallery/photo1.jpg', alt: 'Stones and Pebbles' },
    { src: '/gallery/photo4.jpg', alt: 'Forest Canopy' },
    { src: '/gallery/photo5.jpg', alt: 'Giraffe in Enclosure' },
    { src: '/gallery/photo6.jpg', alt: 'Golden Hour Beach Resort' },
    { src: '/gallery/photo7.jpg', alt: 'Lush Green Park with Umbrellas' },
    { src: '/gallery/photo8.jpg', alt: 'City Sunset from Rooftop' },
    { src: '/gallery/photo9.jpg', alt: 'Sparkling Ocean Shoreline' }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentImageIndex === null) return;
      if (e.key === 'Escape') {
        setCurrentImageIndex(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex]);

  const showNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % photographyImages.length);
    setIsZoomed(false);
  };

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + photographyImages.length) % photographyImages.length);
    setIsZoomed(false);
  };

  // Mobile Swipe Detection
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) showNext();
    if (isRightSwipe) showPrev();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="photography-page-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Subtle Background Glows */}
          <div className="bg-glow bg-glow-1"></div>
          <div className="bg-glow bg-glow-2"></div>

          {/* Close main page */}
          <button className="close-page-btn" onClick={onClose} aria-label="Close Photography Showcase">
            <X size={24} />
          </button>

          <div className="photography-page-container">
            {/* Header */}
            <motion.header 
              className="photography-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="cinematic-title">YV Photos</h1>
              <p className="cinematic-subtitle">Captured through my lens.</p>
            </motion.header>

            {/* Masonry Grid */}
            <div className="masonry-grid-wrapper">
              {photographyImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="masonry-item-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <div className="card-image-wrapper">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="card-overlay">
                      <p>{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fullview Lightbox */}
          <AnimatePresence>
            {currentImageIndex !== null && (
              <motion.div
                className="lightbox-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Close Lightbox */}
                <button className="lightbox-control-btn close-lightbox" onClick={() => setCurrentImageIndex(null)}>
                  <X size={24} />
                </button>

                {/* Left Arrow */}
                <button className="lightbox-nav-btn left-arrow" onClick={showPrev}>
                  <ChevronLeft size={32} />
                </button>

                {/* Right Arrow */}
                <button className="lightbox-nav-btn right-arrow" onClick={showNext}>
                  <ChevronRight size={32} />
                </button>

                <motion.div 
                  className="lightbox-content"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ type: 'spring', damping: 25 }}
                  onClick={() => setCurrentImageIndex(null)}
                >
                  <img
                    src={photographyImages[currentImageIndex].src}
                    alt={photographyImages[currentImageIndex].alt}
                    className={`lightbox-img ${isZoomed ? 'zoomed' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(!isZoomed);
                    }}
                  />
                  {!isZoomed && (
                    <p className="lightbox-caption">
                      {photographyImages[currentImageIndex].alt}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotographyPage;
