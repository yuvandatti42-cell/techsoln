import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, LayoutGrid, Film, Globe, MapPin, Camera, Sparkles, Layers } from 'lucide-react';
import PremiumGallery from './PremiumGallery';
import DomeGallery from './DomeGallery';
import './YVPhotos.css';

const YVPhotos = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('cinema'); // 'cinema', 'dome', 'grid'

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const images = [
    { id: 1, src: '/gallery/photo1.jpg', alt: 'Silent Sentinels', category: 'Nature', exif: '50mm • f/2.8 • ISO 100 • 1/200s', location: 'Rishikesh, India', description: 'Smooth river pebbles resting in crystal clear waters, showing a timeless flow.' },
    { id: 2, src: '/gallery/photo2.jpg', alt: 'Ethereal Heights', category: 'Nature', exif: '24mm • f/8.0 • ISO 200 • 1/500s', location: 'Manali, India', description: 'A majestic mountain peak piercing through low-hanging clouds during golden hour.' },
    { id: 3, src: '/gallery/photo3.jpg', alt: 'Verdant Cathedral', category: 'Nature', exif: '35mm • f/4.0 • ISO 400 • 1/160s', location: 'Western Ghats, India', description: 'Sunlight filtering through a dense canopy of ancient trees in a subtropical forest.' },
    { id: 4, src: '/gallery/photo4.jpg', alt: 'Misty Woodlands', category: 'Nature', exif: '18mm • f/5.6 • ISO 100 • 1/125s', location: 'Ooty, India', description: 'A winding path engulfed by morning fog in a serene pine forest.' },
    { id: 5, src: '/gallery/photo5.jpg', alt: 'Savannah Sentinel', category: 'Nature', exif: '85mm • f/1.8 • ISO 100 • 1/800s', location: 'Mysore Zoo, India', description: 'A regal giraffe standing tall against a background of lush golden-hour foliage.' },
    { id: 6, src: '/gallery/photo6.jpg', alt: 'Sunset Serenade', category: 'Travel', exif: '50mm • f/1.8 • ISO 100 • 1/1000s', location: 'Goa, India', description: 'Warm sunset tones highlighting an elegant beachside resort nestled in palm trees.' },
    { id: 7, src: '/gallery/photo7.jpg', alt: 'Solitary Shades', category: 'Street', exif: '35mm • f/2.0 • ISO 200 • 1/250s', location: 'Bangalore, India', description: 'Lush park pathways adorned with red and white umbrellas, creating a dramatic perspective.' },
    { id: 8, src: '/gallery/photo8.jpg', alt: 'Metropolitan Glow', category: 'Street', exif: '50mm • f/1.4 • ISO 800 • 1/60s', location: 'Mumbai, India', description: 'A warm sunset cascading over a towering city skyline, bringing the concrete jungle to life.' },
    { id: 9, src: '/gallery/photo9.jpg', alt: 'Liquid Gold', category: 'Nature', exif: '70mm • f/4.0 • ISO 100 • 1/1600s', location: 'Kanyakumari, India', description: 'The sparkling sea capturing the last rays of golden sunlight along a rocky coastline.' },
    { id: 10, src: '/gallery/photo10.jpg', alt: 'Concrete Symphony', category: 'Architecture', exif: '24mm • f/11.0 • ISO 100 • 1/80s', location: 'Hyderabad, India', description: 'Geometric lines and glass facades of modern office buildings reflecting the bright sky.' },
  ];

  const categories = ['All', 'Nature', 'Travel', 'Street', 'Architecture'];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    const nextIdx = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(filteredImages[nextIdx]);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    const prevIdx = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(filteredImages[prevIdx]);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section 
          id="photography" 
          className="yv-photos-section overlay"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Close Button */}
          <button className="close-gallery-btn" onClick={onClose} aria-label="Close Showcase">
            <X size={24} />
          </button>

          {/* Fluid Ambient Lights */}
          <div className="bg-decorations">
            <div className="glow-shape shape-1"></div>
            <div className="glow-shape shape-2"></div>
            <div className="glow-shape shape-3"></div>
          </div>

          <div className="yv-showcase-wrapper">
            <header className="yv-photos-header">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="header-badge"
              >
                <Sparkles size={14} className="badge-icon text-secondary" />
                <span>EXHIBITION GALLERY</span>
              </motion.div>
              <motion.h1 
                className="hero-title font-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                YV Photos
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Framed perspectives capturing high-contrast stories & cinematic landscapes.
              </motion.p>
            </header>

            {/* Premium Dynamic Mode Switcher */}
            <div className="mode-switcher-container">
              <div className="mode-switcher-glass">
                <button 
                  className={`mode-btn ${viewMode === 'cinema' ? 'active' : ''}`}
                  onClick={() => setViewMode('cinema')}
                  title="WebGL Curved Cinema Slider"
                >
                  <Film size={18} />
                  <span>Cinema</span>
                </button>
                <button 
                  className={`mode-btn ${viewMode === 'dome' ? 'active' : ''}`}
                  onClick={() => setViewMode('dome')}
                  title="WebGL 3D Sphere Dome"
                >
                  <Globe size={18} />
                  <span>3D Dome</span>
                </button>
                <button 
                  className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Refined Masonry Grid"
                >
                  <LayoutGrid size={18} />
                  <span>Exhibit Grid</span>
                </button>
              </div>
            </div>

            {/* Dynamic Rendering based on Mode */}
            <div className="gallery-viewport">
              <AnimatePresence mode="wait">
                {viewMode === 'cinema' && (
                  <motion.div 
                    key="cinema"
                    className="cinema-viewport-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="cinema-helper-text">
                      <Layers size={14} className="text-white/60 animate-pulse" />
                      <span>Drag left or right / Use scroll wheel to rotate cinematic frames</span>
                    </div>
                    <PremiumGallery 
                      images={images}
                      bend={2.5}
                      borderRadius={0.05}
                      scrollSpeed={1.8}
                      scrollEase={0.06}
                      onItemClick={(imgSrc, idx) => {
                        const matched = images.find(img => img.src === imgSrc) || images[idx];
                        openLightbox(matched, images.indexOf(matched));
                      }}
                    />
                  </motion.div>
                )}

                {viewMode === 'dome' && (
                  <motion.div 
                    key="dome"
                    className="dome-viewport-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="cinema-helper-text">
                      <Globe size={14} className="text-white/60" />
                      <span>Drag to spin the 3D memories sphere. Click a tile to zoom in / scroll wheel to zoom inside.</span>
                    </div>
                    <div className="dome-gallery-card-wrapper">
                      <DomeGallery 
                        images={images} 
                        grayscale={false} 
                        overlayBlurColor="rgba(5, 5, 5, 0.95)"
                        imageBorderRadius="16px"
                        openedImageBorderRadius="24px"
                        openedImageWidth="420px"
                        openedImageHeight="560px"
                      />
                    </div>
                  </motion.div>
                )}

                {viewMode === 'grid' && (
                  <motion.div 
                    key="grid"
                    className="grid-viewport-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Staggered Grid Filters */}
                    <div className="filter-container">
                      {categories.map((cat, idx) => (
                        <motion.button
                          key={cat}
                          className={`filter-btn ${filter === cat ? 'active' : ''}`}
                          onClick={() => setFilter(cat)}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * idx }}
                        >
                          {cat}
                        </motion.button>
                      ))}
                    </div>

                    {/* Staggered Masonry Grid Layout */}
                    <motion.div 
                      layout 
                      className="masonry-gallery"
                    >
                      <AnimatePresence mode="popLayout">
                        {filteredImages.map((img, idx) => (
                          <motion.div
                            key={img.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={`image-card card-span-${(idx % 3) + 1}`}
                            onClick={() => openLightbox(img, idx)}
                          >
                            <div className="image-inner">
                              <img src={img.src} alt={img.alt} loading="lazy" />
                              <div className="image-overlay">
                                <span className="image-cat">{img.category}</span>
                                <h3 className="card-title font-heading">{img.alt}</h3>
                                <div className="card-exif">
                                  <Camera size={12} />
                                  <span>{img.exif}</span>
                                </div>
                                <div className="card-loc">
                                  <MapPin size={12} />
                                  <span>{img.location}</span>
                                </div>
                                <div className="zoom-circle">
                                  <Maximize2 size={16} />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Upgraded High-performance Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div 
                className="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeLightbox}
              >
                {/* Close Lightbox */}
                <button className="lb-close" onClick={closeLightbox} aria-label="Close Lightbox">
                  <X size={20} />
                </button>

                {/* Navigation Arrows */}
                <button className="lb-prev" onClick={prevImage} aria-label="Previous Image">
                  <ChevronLeft size={24} />
                </button>
                <button className="lb-next" onClick={nextImage} aria-label="Next Image">
                  <ChevronRight size={24} />
                </button>
                
                <motion.div 
                  className="lb-content"
                  initial={{ scale: 0.9, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 20, opacity: 0 }}
                  transition={{ type: "spring", damping: 28, stiffness: 260 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="lb-image-wrapper">
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                  </div>
                  
                  {/* Highly Polished Bottom Info Panel */}
                  <div className="lb-info-glass">
                    <div className="lb-header-row">
                      <div className="lb-title-group">
                        <span className="lb-category-tag">{selectedImage.category}</span>
                        <h3 className="font-heading">{selectedImage.alt}</h3>
                      </div>
                      <div className="lb-location">
                        <MapPin size={14} className="text-secondary" />
                        <span>{selectedImage.location}</span>
                      </div>
                    </div>
                    
                    <p className="lb-description">{selectedImage.description}</p>
                    
                    <div className="lb-exif-strip">
                      <div className="exif-item">
                        <Camera size={14} className="text-white/40" />
                        <span>{selectedImage.exif}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default YVPhotos;
