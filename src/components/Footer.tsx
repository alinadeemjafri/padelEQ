import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-6 bg-slate-900 text-slate-400 text-center">
    <div className="mb-2">
      © 2025 PadelEQ. All rights reserved.
    </div>
    <div className="flex justify-center gap-4 text-xs text-slate-500">
      <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
      <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
      <Link to="/cookies" className="hover:text-slate-300 transition-colors">Cookies</Link>
    </div>
  </footer>
);

export default Footer;