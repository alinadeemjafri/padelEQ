import { useState } from 'react';
import WaitlistForm from '../components/WaitlistForm';
import Hero from '../components/Hero';
import CredibilitySection from '../components/CredibilitySection';
import ValueProposition from '../components/ValueProposition';
import VisualDemo from '../components/VisualDemo';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const LandingPage = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div>
      <Hero showWaitlist={showWaitlist} setShowWaitlist={setShowWaitlist} />
      <CredibilitySection setShowWaitlist={setShowWaitlist} />
      <ValueProposition setShowWaitlist={setShowWaitlist} />
      <VisualDemo setShowWaitlist={setShowWaitlist} />
      <Pricing setShowWaitlist={setShowWaitlist} />
      <FAQ />
      
      {/* Global Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 bg-white rounded-full shadow-md"
              onClick={() => setShowWaitlist(false)}
              aria-label="Close waitlist form"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <WaitlistForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;