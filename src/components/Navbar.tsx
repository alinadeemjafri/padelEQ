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
    </nav>
  );
};

export default Navbar;