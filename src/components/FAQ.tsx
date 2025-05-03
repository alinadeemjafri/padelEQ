import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does PadelEQ's video analysis work?",
    answer: "Simply share a private YouTube link or stream URL of your match. Our expert coaches will analyze your gameplay, focusing on technique, strategy, and decision-making. You'll receive comprehensive feedback within 48 hours, including specific improvement recommendations and actionable tips.",
    category: "process"
  },
  {
    question: "What specific aspects of my game will be analyzed?",
    answer: "Our coaches analyze multiple aspects of your gameplay, including footwork, positioning, shot selection, strategy, and decision-making. They provide detailed feedback on your strengths and areas for improvement, with specific examples from your match and practical recommendations for enhancement.",
    category: "analysis"
  },
  {
    question: "Who are the coaches providing the analysis?",
    answer: "All PadelEQ coaches are verified professionals with extensive experience. Many are active competitors or former professional players with recognized coaching certifications. They bring years of practical experience and technical expertise to every analysis.",
    category: "coaches"
  },
  {
    question: "What format is the feedback provided in?",
    answer: "You'll receive a comprehensive written report with video timestamps, highlighting key moments and specific examples. The feedback includes a detailed breakdown of your performance, prioritized improvement areas, and actionable recommendations.",
    category: "feedback"
  },
  {
    question: "How long does it take to receive my analysis?",
    answer: "Standard analysis is delivered within 48 hours. You'll receive detailed, personalized feedback regardless of turnaround time.",
    category: "timing"
  },
  {
    question: "Can I get analysis for multiple matches?",
    answer: "Yes! You can submit as many matches as you like. This allows for tracking progress over time and identifying patterns in your gameplay.",
    category: "matches"
  },
  {
    question: "What if I'm not satisfied with the feedback?",
    answer: "We stand behind the quality of our analysis with a satisfaction guarantee. If you're not completely satisfied with your feedback, contact our support team within 7 days of receiving your analysis, and we'll work with you to address your concerns or provide a complimentary review.",
    category: "support"
  },
  {
    question: "Do you offer ongoing coaching or just one-time analysis?",
    answer: "While our core service is match analysis, we're also developing additional coaching services, including ongoing mentorship and group training programs.",
    category: "services"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="section bg-white py-20"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Everything you need to know about PadelEQ and how it works.
            </p>
          </div>

          <div 
            className="space-y-4"
            itemScope 
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-lg overflow-hidden"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span 
                    className="font-medium"
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp 
                        size={20} 
                        className="text-slate-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDown 
                        size={20} 
                        className="text-slate-500"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div 
                        id={`faq-answer-${index}`}
                        className="p-4 pt-0 bg-white"
                        itemScope 
                        itemType="https://schema.org/Answer"
                      >
                        <p 
                          className="text-slate-600"
                          itemProp="text"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Still have questions?
            </p>
            <a 
              href="mailto:support@padeleq.com" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              aria-label="Contact our support team"
            >
              Contact Support
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;