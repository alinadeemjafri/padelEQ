import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SubmissionPage from './pages/SubmissionPage';
import CoachDashboard from './pages/CoachDashboard';
import CoachLanding from './pages/CoachLanding';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/submit" element={<SubmissionPage />} />
          <Route path="/coach" element={<CoachLanding />} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;