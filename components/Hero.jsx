import React from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText';
import ShapeGrid from './ShapeGrid';

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-accent to-primary">
      {/* Dynamic Background Gradient elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[150px] rounded-full" />
      </div>

      {/* Animated Shape Grid Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <ShapeGrid 
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor="#2F293A"
          hoverFillColor='#EAD419'
          shape='square'
          hoverTrailAmount={8}
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center flex flex-col items-center">
          <div className="pointer-events-auto">
            <SplitText
              text="HELLO!"
              className="text-6xl md:text-8xl lg:text-[12rem] font-bold font-heading text-white tracking-tighter leading-none"
              delay={30}
              duration={1}
              ease="expo.out"
              splitType="chars"
              from={{ opacity: 0, y: 30, scale: 0.9 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
              textAlign="center"
              tag="h1"
            />
          </div>
          <div className="h-0 md:-mt-6 lg:-mt-10" />
          <div className="pointer-events-auto">
            <SplitText
              text="IM YUVAN"
              className="text-6xl md:text-8xl lg:text-[12rem] font-bold font-heading text-white tracking-tighter leading-none"
              delay={30}
              duration={1}
              ease="expo.out"
              splitType="chars"
              from={{ opacity: 0, y: 30, scale: 0.9 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
              textAlign="center"
              tag="h1"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <span className="text-secondary font-bold tracking-[0.4em] text-sm uppercase italic opacity-80 max-w-lg text-center leading-relaxed">
              "CRAFTING DIGITAL EXPERIENCES"
            </span>
            <div className="h-[1px] w-24 bg-white/20" />
            <span className="text-white/50 font-medium tracking-[0.2em] text-[10px] uppercase">
              Web Developer • UI Enthusiast • Designer
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-20">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-6 bg-secondary rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
