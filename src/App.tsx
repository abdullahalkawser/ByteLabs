import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIShowcase from './components/AIShowcase';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/team';


function App() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Hero />

      <About />
         <Team/>
      <Services />
      <AIShowcase />
      <Portfolio />

      <Pricing />
    
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;