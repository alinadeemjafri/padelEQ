import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-700">
        <img src={logo} alt="PadelEQ Logo" className="h-8 w-auto" style={{ display: 'block' }} />
        <span>
          Padel<span style={{ color: '#043CDA' }}>EQ</span>
        </span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/privacy" className="text-slate-600 hover:text-blue-700 transition">Privacy</Link>
        <Link to="/terms" className="text-slate-600 hover:text-blue-700 transition">Terms</Link>
        <Link to="/cookies" className="text-slate-600 hover:text-blue-700 transition">Cookies</Link>
      </div>
    </nav>
  );
};

export default Navbar;