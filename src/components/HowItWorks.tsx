import { Video, FileSearch, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Video size={40} className="text-blue-600" />,
    title: "Share Your Match",
    description: "Upload your match to YouTube (unlisted) or drop a stream link. Add notes if you want specific focus areas.",
    details: [
      "Support for YouTube, Vimeo, and direct video uploads",
      "Add timestamps for specific moments",
      "Include match context and player positions"
    ]
  },
  {
    icon: <FileSearch size={40} className="text-blue-600" />,
    title: "Expert Analysis",
    description: "One of our verified padel coaches analyses your gameplay — footwork, positioning, shot selection and more.",
    details: [
      "Comprehensive technique review",
      "Strategic decision analysis",
      "Performance metrics tracking"
    ]
  },
  {
    icon: <FileText size={40} className="text-blue-600" />,
    title: "Get Personalised Feedback",
    description: "A full report with practical tips, priorities, and strengths — delivered within 48 hours.",
    details: [
      "Actionable improvement steps",
      "Video annotations and examples",
      "Progress tracking recommendations"
    ]
  }
];

const HowItWorks = () => {
  return (
    <section 
      id="how-it-works" 
      className="section bg-slate-50 py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How PadelEQ Works
          </motion.h2>
          <motion.p 
            className="text-slate-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process gets you professional feedback with minimal hassle.
            <span className="block mt-2 text-blue-600 font-medium">
              Start improving your game in three simple steps
            </span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div 
            className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-blue-200"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="card bg-white hover:shadow-lg group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  {step.icon}
                </div>
                <div className="flex items-start mb-4">
                  <span 
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold text-sm mr-3"
                    aria-label={`Step ${index + 1}`}
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{step.description}</p>
                
                {/* Step Details */}
                <ul className="space-y-2 text-sm text-slate-500">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <svg 
                        className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow for non-last items */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-400"
                    aria-hidden="true"
                  >
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#pricing" 
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            aria-label="View our pricing plans"
          >
            See Pricing Plans
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
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;