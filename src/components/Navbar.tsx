import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PadelRacketIcon from './ui/PadelRacketIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle smooth scrolling for anchor links on the landing page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav 
      className="py-4 bg-white shadow-sm sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform hover:scale-105"
          aria-label="PadelEQ Home"
        >
          <PadelRacketIcon size={28} color="#2563eb" />
          <span className="font-bold text-xl">PadelEQ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          {location.pathname === '/' ? (
            <>
              <a 
                href="#how-it-works" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={(e) => handleNavClick(e, 'how-it-works')}
                aria-label="How It Works section"
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onClick={(e) => handleNavClick(e, 'pricing')}
                aria-label="Pricing section"
              >
                Pricing
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#how-it-works" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                How It Works
              </Link>
              <Link 
                to="/#pricing" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                Pricing
              </Link>
            </>
          )}
          <Link 
            to="/coach" 
            className="btn btn-primary transition-all hover:shadow-lg"
            aria-label="Become a Coach"
          >
            Become a Coach
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white absolute top-16 left-0 right-0 shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <Link 
            to="/" 
            className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
            role="menuitem"
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          {location.pathname === '/' ? (
            <>
              <a 
                href="#how-it-works" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={(e) => handleNavClick(e, 'how-it-works')}
                role="menuitem"
                aria-label="How It Works section"
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={(e) => handleNavClick(e, 'pricing')}
                role="menuitem"
                aria-label="Pricing section"
              >
                Pricing
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#how-it-works" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
                role="menuitem"
              >
                How It Works
              </Link>
              <Link 
                to="/#pricing" 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors py-2"
                role="menuitem"
              >
                Pricing
              </Link>
            </>
          )}
          <Link 
            to="/coach" 
            className="btn btn-primary w-full text-center transition-all hover:shadow-lg"
            role="menuitem"
            aria-label="Become a Coach"
          >
            Become a Coach
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;