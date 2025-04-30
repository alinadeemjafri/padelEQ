import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarClock, PiggyBank, Sparkles, UserCheck, Star, Shield, Globe2 } from 'lucide-react';

const CoachLanding = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Coach On Your Terms.<br />
              Earn What You're Worth.
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join PadelEQ's network of elite coaches. Share your expertise with players worldwide, 
              work flexibly, and earn £50-100 per hour analysing matches.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/coach-signup" className="btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all relative overflow-hidden group">
                <span className="relative z-10">Apply as Coach</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -right-1 -top-1 w-24 h-24 bg-white opacity-20 rounded-full transform rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Coaching Works</h2>
            <p className="text-slate-600 text-lg">
              A simple, flexible way to coach players and earn consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Globe2 size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Review Matches</h3>
              <p className="text-slate-600">
                Players submit match footage. You watch and analyze their game when it suits your schedule.
              </p>
            </div>

            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Shield size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Share Insights</h3>
              <p className="text-slate-600">
                Provide detailed feedback on technique, strategy, and areas for improvement.
              </p>
            </div>

            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <PiggyBank size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Paid</h3>
              <p className="text-slate-600">
                Earn £25-45 per match review. Most reviews take 30-45 minutes to complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who We're Looking For</h2>
            
            <div className="space-y-4">
              <div className="card flex items-start p-6">
                <Star size={24} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experienced Players & Coaches</h3>
                  <p className="text-slate-600">
                    Current or former competitive players, certified coaches, or experienced instructors 
                    with deep knowledge of padel technique and strategy.
                  </p>
                </div>
              </div>

              <div className="card flex items-start p-6">
                <Shield size={24} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strong Communication</h3>
                  <p className="text-slate-600">
                    Ability to provide clear, actionable feedback that helps players improve their game.
                  </p>
                </div>
              </div>

              <div className="card flex items-start p-6">
                <CalendarClock size={24} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reliable & Professional</h3>
                  <p className="text-slate-600">
                    Commitment to providing timely, high-quality feedback to players.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/coach-signup" className="btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all relative overflow-hidden group">
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -right-1 -top-1 w-24 h-24 bg-white opacity-20 rounded-full transform rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
              </Link>
              <p className="mt-4 text-sm text-slate-500">
                Applications typically reviewed within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachLanding;