import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-700">PadelEQ</Link>
      <div className="flex gap-6 items-center">
        <Link to="/privacy" className="text-slate-600 hover:text-blue-700 transition">Privacy</Link>
        <Link to="/terms" className="text-slate-600 hover:text-blue-700 transition">Terms</Link>
        <Link to="/cookies" className="text-slate-600 hover:text-blue-700 transition">Cookies</Link>
      </div>
    </nav>
  );
};

export default Navbar;