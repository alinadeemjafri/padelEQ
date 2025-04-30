import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brackets as Racquet } from 'lucide-react';

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

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Racquet size={28} className="text-blue-600" />
          <span className="font-bold text-xl">PadelEQ TEST</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          {location.pathname === '/' ? (
            <>
              <a 
                href="#how-it-works" 
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={(e) => handleNavClick(e, 'how-it-works')}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={(e) => handleNavClick(e, 'pricing')}
              >
                Pricing
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#how-it-works" 
                className="text-slate-700 hover:text-blue-600 font-medium"
              >
                How It Works
              </Link>
              <Link 
                to="/#pricing" 
                className="text-slate-700 hover:text-blue-600 font-medium"
              >
                Pricing
              </Link>
            </>
          )}
          <Link to="/coach" className="btn btn-primary">
            Become a Coach
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-16 left-0 right-0 shadow-md">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-slate-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            {location.pathname === '/' ? (
              <>
                <a 
                  href="#how-it-works" 
                  className="text-slate-700 hover:text-blue-600 font-medium"
                  onClick={(e) => handleNavClick(e, 'how-it-works')}
                >
                  How It Works
                </a>
                <a 
                  href="#pricing" 
                  className="text-slate-700 hover:text-blue-600 font-medium"
                  onClick={(e) => handleNavClick(e, 'pricing')}
                >
                  Pricing
                </a>
              </>
            ) : (
              <>
                <Link 
                  to="/#how-it-works" 
                  className="text-slate-700 hover:text-blue-600 font-medium"
                >
                  How It Works
                </Link>
                <Link 
                  to="/#pricing" 
                  className="text-slate-700 hover:text-blue-600 font-medium"
                >
                  Pricing
                </Link>
              </>
            )}
            <Link 
              to="/coach" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
            >
              Become a Coach
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;