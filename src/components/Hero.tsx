import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  return (
    <section 
      className="relative overflow-hidden bg-slate-900 text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container relative z-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">Smarter Padel Coaching.</span>
            <span className="block text-blue-400">One Match at a Time.</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get personalized feedback from expert coaches by submitting your game footage. 
            <span className="block mt-2 font-medium">No in-person sessions needed. Start improving today.</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              className="btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all rounded-lg font-semibold"
              onClick={() => setShowWaitlist(true)}
              aria-label="Join the waitlist"
            >
              <span className="flex items-center justify-center gap-2">
                Join the Waitlist
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8 items-center text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-blue-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>Expert Coaches</span>
            </div>
            <div className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-blue-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-blue-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>Secure Platform</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative z-60 max-w-lg w-full mx-auto">
            <button
              className="absolute top-2 right-2 text-3xl text-slate-400 hover:text-slate-600"
              onClick={() => setShowWaitlist(false)}
              aria-label="Close waitlist form"
            >
              &times;
            </button>
            <WaitlistForm />
          </div>
        </div>
      )}

      {/* Bottom Wave */}
      <div 
        className="absolute bottom-0 left-0 right-0"
        aria-hidden="true"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          className="w-full h-auto"
          role="img"
          aria-label="Decorative wave pattern"
        >
          <path 
            fill="#f8fafc" 
            fillOpacity="1" 
            d="M0,96L80,101.3C160,107,320,117,480,106.7C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;