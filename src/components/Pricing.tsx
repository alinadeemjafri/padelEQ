import { motion } from 'framer-motion';
import { Check, Star, Clock, Users, Target } from 'lucide-react';

interface PricingProps {
  setShowWaitlist: (show: boolean) => void;
}

const Pricing = ({ setShowWaitlist }: PricingProps) => {
  const scrollToVisualDemo = () => {
    const element = document.getElementById('visual-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            No hidden fees, no subscriptions. Pay only for what you need.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <motion.div 
            className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Urgency Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                ⚡ Limited Time: Save 20%
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Single Match Review</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-5xl font-bold">£29</span>
                <div className="text-left">
                  <span className="line-through text-blue-200">£36</span>
                  <div className="text-sm text-blue-200">per match</div>
                </div>
              </div>
              <p className="text-blue-100">Perfect for trying out our service or getting feedback on a specific match</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-200" />
                <span className="text-sm">48-hour turnaround</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-200" />
                <span className="text-sm">Expert coach analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-200" />
                <span className="text-sm">Actionable feedback</span>
              </div>
            </div>

            <button 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
              onClick={() => setShowWaitlist(true)}
            >
              Get Your First Match Reviewed – £29
            </button>
          </motion.div>

          {/* Value Comparison */}
          <motion.div 
            className="mt-12 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-slate-900 mb-2">£100-200</div>
              <div className="text-slate-600 mb-4">Traditional Coaching</div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 1-hour session</li>
                <li>• Travel required</li>
                <li>• Limited availability</li>
                <li>• No video analysis</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">£29</div>
              <div className="text-blue-600 font-semibold mb-4">PadelEQ Analysis</div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Comprehensive review</li>
                <li>• Video timestamps</li>
                <li>• 48-hour delivery</li>
                <li>• Expert coaches</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-slate-900 mb-2">£0</div>
              <div className="text-slate-600 mb-4">Friend's Feedback</div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Inconsistent advice</li>
                <li>• Limited expertise</li>
                <li>• No structure</li>
                <li>• Subjective opinions</li>
              </ul>
            </div>
          </motion.div>

          {/* Additional CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Game?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of players who've already improved with expert analysis. 
                Start with just one match review for £29.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={() => setShowWaitlist(true)}
                >
                  Get Started – £29
                </button>
                <button 
                  className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/50 transition-colors"
                  onClick={scrollToVisualDemo}
                >
                  See Sample Analysis
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;