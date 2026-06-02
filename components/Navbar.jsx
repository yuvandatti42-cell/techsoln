import React, { useState, useEffect } from 'react';
import PillNav from './PillNav';
import { Code } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Journey', href: '#journey' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' }
];

const placeholderLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='14' fill='%23EAD419'%3EYV%3C/text%3E%3C/svg%3E";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'hobbies', 'journey', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PillNav
      logo={placeholderLogo}
      logoAlt="Yuvan Logo"
      items={navItems}
      activeHref={activeSection}
      baseColor="#0a0a0a"
      pillColor="#951A0A"
      pillTextColor="#f5f5f5"
      hoveredPillTextColor="#EAD419"
      ease="power3.out"
      initialLoadAnimation={true}
    />
  );
};

export default Navbar;
