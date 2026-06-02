import React from 'react';
import CircularGallery from './CircularGallery';

const Journey = () => {
  const journeyItems = [
    { image: '/journey/journey1.jpg', text: 'IEEE Recognition' },
    { image: '/journey/journey2.jpg', text: 'Project Pitch' },
    { image: '/journey/journey3.jpg', text: 'MindCare+ Presentation' },
    { image: '/journey/journey4.jpg', text: 'Award Ceremony' }
  ];

  return (
    <section id="journey" className="section-padding bg-gradient-premium text-white">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white drop-shadow-md">My Journey</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Every great story is a series of focused moments. My journey has been driven by a relentless curiosity to capture the world through both the logic of code and the artistry of the lens. It's not just about where I'm going, but the continuous pursuit of perfecting the craft along the way.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-premium border border-white/20 bg-black/10" style={{ height: '600px', position: 'relative' }}>
          <CircularGallery 
            items={journeyItems}
            bend={2} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
};

export default Journey;
