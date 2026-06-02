import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import YVPhotos from './YVPhotos';
import './Hobbies.css';

const BackgroundDesign = () => (
  <div className="hobbies-background-design">
    <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      {/* Faint Grid */}
      <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M 100 0 L 0 0 0 100" className="faint-grid" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />

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
      <motion.path
        d="M 800 -100 Q 750 300 900 500 T 800 1100"
        className="abstract-line opacity-30"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Circuit-like Paths */}
      <motion.path
        d="M 100 200 L 150 200 L 150 250"
        className="technical-circle opacity-40"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
      <motion.path
        d="M 900 800 L 850 800 L 850 750"
        className="technical-circle opacity-40"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      />
      <motion.path
        d="M 500 50 L 500 150 M 450 100 L 550 100"
        className="technical-circle opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Additional Abstract Lines */}
      <motion.path
        d="M 0 500 L 1000 500"
        className="abstract-line opacity-10"
        style={{ strokeDasharray: "5 15" }}
      />
      <motion.path
        d="M 300 0 L 300 1000"
        className="abstract-line opacity-10"
        style={{ strokeDasharray: "5 15" }}
      />
      <motion.path
        d="M 700 0 L 700 1000"
        className="abstract-line opacity-10"
        style={{ strokeDasharray: "5 15" }}
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

      {/* Small Red Accents */}
      <motion.path
        d="M 50 150 L 150 50"
        className="red-line"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      />
      <motion.path
        d="M 850 950 L 950 850"
        className="red-line"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
      />
      
      {/* Floating Abstract Shapes */}
      <motion.rect
        x="800" y="800" width="40" height="40"
        className="technical-circle"
        animate={{ rotate: 45, opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </svg>
  </div>
);

const Hobbies = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const hobbiesList = [
    {
      title: "Yuvan Photography",
      icon: <Camera size={32} />,
      skills: ["Portrait Photography", "Landscape Captures", "Street Photography", "Photo Editing"]
    }
  ];

  return (
    <section id="hobbies" className="section-padding hobbies-section text-white">
      <BackgroundDesign />
      
      <div className="container hobbies-container">
        <div className="text-center mb-16">
          <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-4 block">Interests</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">Hobbies</h2>
        </div>

        <div className="max-w-md mx-auto">
          {hobbiesList.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setIsGalleryOpen(true)}
              className="relative z-20 hobby-card overflow-hidden group cursor-pointer shadow-2xl"
            >
              <div className="hobby-card-image-container">
                <img 
                  src="/photography-bg.png" 
                  alt="Yuvan Photography" 
                  className="hobby-card-image group-hover:scale-110 transition-transform duration-700"
                />
                <div className="hobby-card-overlay"></div>
              </div>

              <div className="hobby-card-content flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform border border-white/30">
                  {hobby.icon}
                </div>
                <h3 className="font-heading">{hobby.title}</h3>
                <ul className="space-y-2 mb-6">
                  {hobby.skills.map(skill => (
                    <li key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-2 uppercase tracking-widest group-hover:text-white transition-colors">
                  <Maximize2 size={16} /> Tap to view gallery
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <YVPhotos 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />
    </section>
  );
};

export default Hobbies;
