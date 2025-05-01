import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, userRole, user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const registered = searchParams.get('registered');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/player-dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    }
  };

  useEffect(() => {
    if (user && userRole === 'coach') navigate('/coach-dashboard');
    else if (user && userRole === 'player') navigate('/player-dashboard');
  }, [user, userRole, navigate]);

  return (
    <div className="py-12">
      <div className="container max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        {registered === 'true' && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded">
            Registration successful! Please sign in to continue.
          </div>
        )}
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
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
          <button type="submit" className="btn btn-primary w-full">Sign In</button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn; 