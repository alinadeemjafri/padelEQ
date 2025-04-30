import { Link } from 'react-router-dom';
import { Brackets as Racquet, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-slate-900 text-white py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4 group"
              aria-label="PadelEQ Home"
            >
              <Racquet 
                size={24} 
                className="text-blue-400 group-hover:text-blue-300 transition-colors" 
                aria-hidden="true"
              />
              <span className="font-bold text-xl">PadelEQ</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Smarter Padel Coaching.<br />One Match at a Time.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="mailto:hello@padeleq.com" 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail size={16} aria-hidden="true" />
                hello@padeleq.com
              </a>
              <a 
                href="tel:+441234567890" 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone size={16} aria-hidden="true" />
                +44 123 456 7890
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav 
            className="col-span-1"
            aria-label="Quick links"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/#how-it-works" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/#pricing" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/submit" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Submit Match
                </Link>
              </li>
              <li>
                <Link 
                  to="/#faq" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav 
            className="col-span-1"
            aria-label="Resources"
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/coach" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Become a Coach
                </Link>
              </li>
              <li>
                <Link 
                  to="/coach-dashboard" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Coach Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social & Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://twitter.com/padeleq" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://instagram.com/padeleq" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://youtube.com/padeleq" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={20} aria-hidden="true" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
              <form 
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} PadelEQ. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link 
                to="/privacy" 
                className="text-slate-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-slate-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className="text-slate-500 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;