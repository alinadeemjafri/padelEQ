import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SubmissionPage from './pages/SubmissionPage';
import CoachDashboard from './pages/CoachDashboard';
import CoachLanding from './pages/CoachLanding';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookie from './pages/Cookie';
import CoachSignup from './pages/CoachSignup';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PlayerDashboard from './pages/PlayerDashboard.tsx';
import ProtectedRoute from './components/ProtectedRoute';
import BrowseCoaches from './pages/BrowseCoaches.tsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/submit"
            element={
              <ProtectedRoute requiredRole="player">
                <SubmissionPage />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/player-dashboard" element={<PlayerDashboard />} />
          <Route path="/browse-coaches" element={
            <ProtectedRoute requiredRole="player">
              <BrowseCoaches />
            </ProtectedRoute>
          } />
          <Route path="/coach" element={<CoachLanding />} />
          <Route
            path="/coach-dashboard"
            element={
              <ProtectedRoute requiredRole="coach">
                <CoachDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/coach-signup" element={<CoachSignup />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookie />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;