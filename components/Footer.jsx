import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe, Heart, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 bg-primary text-white">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 max-w-4xl w-full border-white/20"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
              Let’s build something <span className="text-secondary">amazing</span> 🚀
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Open to internships, freelance projects, collaborations, or just a chat about creative tech.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <a href="mailto:your-email@example.com" className="bg-secondary text-bg-dark btn hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
                <Mail size={18} /> Send an Email
              </a>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={20} />, href: "your-linkedin" },
                  { icon: <Github size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Globe size={20} />, href: "your-website" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-secondary hover:text-bg-dark transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded">
              <span className="font-bold text-white">Y</span>
            </div>
            <span className="font-bold tracking-tighter">YUVAN</span>
          </div>
          
          <p className="text-sm text-white/60 flex items-center gap-1">
            Made with <Heart size={14} className="text-secondary fill-secondary" /> by Yuvan © 2025
          </p>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
