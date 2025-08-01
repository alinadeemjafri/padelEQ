import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, DollarSign, Users, Target } from 'lucide-react';

interface ValuePropositionProps {
  setShowWaitlist: (show: boolean) => void;
}

const whyPadelEQWorks = [
  {
    icon: Clock,
    title: "48-Hour Turnaround",
    description: "Get expert feedback faster than booking an in-person session. No waiting weeks for coach availability."
  },
  {
    icon: DollarSign,
    title: "90% More Affordable",
    description: "Traditional coaching costs £100-200 per session. PadelEQ starts at just £29 per match review."
  },
  {
    icon: Users,
    title: "Access to Elite Coaches",
    description: "Connect with former professionals and certified experts you'd never have access to locally."
  },
  {
    icon: Target,
    title: "Data-Driven Analysis",
    description: "Get specific, actionable feedback with video timestamps and detailed improvement plans."
  }
];

const comparisonData = [
  {
    feature: "Cost per session",
    traditional: "£100-200",
    padeleq: "£29",
    advantage: "padeleq"
  },
  {
    feature: "Wait time for feedback",
    traditional: "1-2 weeks",
    padeleq: "48 hours",
    advantage: "padeleq"
  },
  {
    feature: "Coach availability",
    traditional: "Limited hours",
    padeleq: "24/7 submission",
    advantage: "padeleq"
  },
  {
    feature: "Travel required",
    traditional: "Yes",
    padeleq: "No",
    advantage: "padeleq"
  },
  {
    feature: "Video analysis",
    traditional: "Rarely included",
    padeleq: "Always included",
    advantage: "padeleq"
  },
  {
    feature: "Written feedback",
    traditional: "Sometimes",
    padeleq: "Always detailed",
    advantage: "padeleq"
  }
];

const ValueProposition = ({ setShowWaitlist }: ValuePropositionProps) => {
  const scrollToVisualDemo = () => {
    const element = document.getElementById('visual-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="value-proposition" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Value Proposition */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why PadelEQ Works Better Than Traditional Coaching
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Imagine knowing exactly what's holding you back – and fixing it in your very next match. 
            That's the power of expert video analysis combined with actionable feedback.
          </p>
        </motion.div>

        {/* Why PadelEQ Works */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why PadelEQ Works
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPadelEQWorks.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-xl bg-slate-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            PadelEQ vs Traditional Coaching
          </motion.h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-100 p-4 font-semibold text-slate-900">
                <div>Feature</div>
                <div className="text-center">Traditional Coaching</div>
                <div className="text-center">PadelEQ</div>
              </div>
              
              {comparisonData.map((row, index) => (
                <motion.div 
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-slate-200 ${
                    index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center">
                    <span className="flex items-center justify-center gap-2">
                      {row.traditional}
                      {row.advantage === 'traditional' && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center gap-2">
                      {row.padeleq}
                      {row.advantage === 'padeleq' && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Emotional Hook Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Stop Guessing, Start Improving
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            You've been playing for months, maybe years, but you're still making the same mistakes. 
            With PadelEQ, you'll finally see exactly what's holding you back – and get a clear roadmap to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              onClick={() => setShowWaitlist(true)}
            >
              Get Your First Match Reviewed – £29
            </button>
            <button 
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:border-white/50 transition-colors"
              onClick={scrollToVisualDemo}
            >
              See Sample Analysis
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition; 