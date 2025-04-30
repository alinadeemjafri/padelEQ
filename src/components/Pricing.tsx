import { Check, Star, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const plans = [
  // Updated Basic Review
  {
    name: "Basic Review",
    price: "29",
    icon: <Star className="w-6 h-6" />,
    description: "Targeted improvement for one key technique",
    features: [
      "Full match analysis by a verified coach",
      "Exclusive Technique Playbook for one signature move (e.g. vibora, bandeja, serve-return)",
      "Level assessment: assign you a level (1–7)",
      "72-hour turnaround time",
      "One-time payment, no subscription"
    ],
    cta: "Get Basic Review",
    popular: false
  },
  // Enhanced Pro Review
  {
    name: "Pro Review",
    price: "49",
    icon: <Zap className="w-6 h-6" />,
    description: "Enhanced feedback with multiple technique guides",
    features: [
      "Everything in Basic Review",
      "Trio Technique Playbooks covering three signature shots of your choice",
      "48-hour turnaround time",
      "Video annotations and timestamps",
      "Personalised drill recommendations"
    ],
    cta: "Get Pro Review",
    popular: true
  },
  // Complete Elite Review
  {
    name: "Elite Review",
    price: "99",
    icon: <Shield className="w-6 h-6" />,
    description: "Comprehensive coaching for serious players",
    features: [
      "Everything in Pro Review",
      "Access to a full guide library",
      "24-hour turnaround time",
      "Advanced strategy session",
      "Custom training program"
    ],
    cta: "Get Elite Review",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section 
      id="pricing" 
      className="section bg-slate-50 py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Review Package
          </motion.h2>
          <motion.p 
            className="text-slate-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Select the perfect package for your padel journey.
            <span className="block mt-2 text-blue-600 font-medium">
              All packages include expert analysis and personalised feedback
            </span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`card bg-white relative ${
                plan.popular 
                  ? 'md:scale-105 shadow-xl border-2 border-blue-500' 
                  : 'shadow-md'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">£{plan.price}</span>
                    <span className="text-slate-500"> / match</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check 
                        size={20} 
                        className="text-green-500 mt-0.5 mr-3 flex-shrink-0" 
                        aria-hidden="true"
                      />
                      <span className="text-slate-600">{feature.replace('personalized', 'personalised')}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/submit" 
                  className={`btn w-full mt-auto text-center ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                  aria-label={`Get started with ${plan.name}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-slate-600 mb-4">
            Trusted by padel players worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center text-slate-400">
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
              <span>100% Satisfaction Guarantee</span>
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
              <span>Secure Payment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;