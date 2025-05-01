import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'player' | 'coach'>('player');
  const [error, setError] = useState('');
  const { signup, userRole } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password, role);
      // After registration, redirect to sign-in with a flag
      navigate('/signin?registered=true');
    } catch (err: any) {
      setError(err.message || 'Failed to sign up');
    }
  };

  return (
    <div className="py-12">
      <div className="container max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input w-full"
            />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input w-full"
            />
          </div>
          <div>
            <label className="label" htmlFor="role">I am a</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as 'player' | 'coach')}
              className="input w-full"
            >
              <option value="player">Player</option>
              <option value="coach">Coach</option>
            </select>
          </div>
          <div>
            <label className="label" htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="input w-full"
            />
          </div>
          <div>
            <label className="label" htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="input w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">Sign Up</button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp; 