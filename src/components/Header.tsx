import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DollarSign, Zap, AlertTriangle, Radio } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">NexGen</span>
          <span className="text-text">Company</span>
          <span className="text-primary">.ai</span>
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <button onClick={() => scrollToSection('problem')} className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out flex items-center">
                <AlertTriangle className="w-4 h-4 mr-1" />
                The Problem
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('solution')} className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                The Solution
              </button>
            </li>
            <li>
              <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out flex items-center">
                <DollarSign className="w-4 h-4 mr-1" />
                Pricing
              </Link>
            </li>
            <li>
              <a 
                href="https://discovery.nexgencompany.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="discovery-btn text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-hover transition-all duration-200 ease-in-out flex items-center"
              >
                <Radio className="w-4 h-4 mr-1" />
                Discovery
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;