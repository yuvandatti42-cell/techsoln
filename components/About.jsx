import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import './About.css';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="about" className="about-cinematic-section">
      <div className="about-cinematic-container container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="about-cinematic-content"
        >
          <h2 className="about-cinematic-title">About Me.</h2>
          
          <div className="about-cinematic-desc">
            <p>
              I'm a Computer Science student who is deeply passionate about understanding how things work under the hood. For me, software engineering isn't just about writing code—it's about <strong>solving real problems</strong> and building systems that make sense.
            </p>
            
            <p>
              I believe that strong fundamentals are the key to everything. Whether I'm tackling a complex algorithm or designing an application architecture, I approach it with a <strong>logical, disciplined mindset</strong> to learn and grow.
            </p>
            
            <p>
              But I'm not just staring at code all day. I'm actively involved in telling stories through a different medium. I do <strong>photography and video editing</strong> for college events, which constantly reminds me to balance technical precision with a strong creative vision.
            </p>
          </div>

          {/* Connect Button */}
          <div className="flex items-center mt-10">
            <a 
              href="https://www.linkedin.com/in/yuvan-datti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center gap-3 font-bold rounded-full text-lg shadow-premium"
              style={{ pointerEvents: 'auto', zIndex: 20, position: 'relative' }}
            >
              <Linkedin size={20} /> Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
