import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Hobbies />
        <Journey />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
