import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does PadelEQ's video analysis work?",
    answer: "Simply share a private YouTube link or stream URL of your match. Our expert coaches will analyze your gameplay, focusing on technique, strategy, and decision-making. You'll receive comprehensive feedback within 48 hours, including specific improvement recommendations and actionable tips. The analysis includes video timestamps so you can easily reference specific moments in your match.",
    category: "process"
  },
  {
    question: "What specific aspects of my game will be analyzed?",
    answer: "Our coaches analyze multiple aspects of your gameplay, including footwork, positioning, shot selection, strategy, and decision-making. They provide detailed feedback on your strengths and areas for improvement, with specific examples from your match and practical recommendations for enhancement. We also look at your mental game, court awareness, and tactical understanding.",
    category: "analysis"
  },
  {
    question: "Who are the coaches providing the analysis?",
    answer: "All PadelEQ coaches are verified professionals with extensive experience. Many are active competitors or former professional players with recognized coaching certifications. They bring years of practical experience and technical expertise to every analysis. Each coach has been carefully vetted and trained in our analysis methodology to ensure consistent, high-quality feedback.",
    category: "coaches"
  },
  {
    question: "What format is the feedback provided in?",
    answer: "You'll receive a comprehensive written report with video timestamps, highlighting key moments and specific examples. The feedback includes a detailed breakdown of your performance, prioritized improvement areas, and actionable recommendations. Each report also includes a summary of your strengths, specific drills to work on, and a personalized improvement plan.",
    category: "feedback"
  },
  {
    question: "How long does it take to receive my analysis?",
    answer: "Standard analysis is delivered within 48 hours. You'll receive detailed, personalized feedback regardless of turnaround time. For urgent requests, we offer expedited analysis within 24 hours for an additional fee. We prioritize quality over speed, ensuring you get the most valuable insights possible.",
    category: "timing"
  },
  {
    question: "Can I get analysis for multiple matches?",
    answer: "Yes! You can submit as many matches as you like. This allows for tracking progress over time and identifying patterns in your gameplay. Many players submit matches monthly to track their improvement and get ongoing guidance. We also offer package deals for multiple match reviews at a discounted rate.",
    category: "matches"
  },
  {
    question: "What if I'm not satisfied with the feedback?",
    answer: "We stand behind the quality of our analysis with a satisfaction guarantee. If you're not completely satisfied with your feedback, contact our support team within 7 days of receiving your analysis, and we'll work with you to address your concerns or provide a complimentary review. We want you to feel confident that you're getting real value from our service.",
    category: "support"
  },
  {
    question: "Do you offer ongoing coaching or just one-time analysis?",
    answer: "While our core service is match analysis, we're also developing additional coaching services, including ongoing mentorship and group training programs. For now, we focus on providing the highest quality match analysis possible, but we're always looking to expand our offerings based on player needs.",
    category: "services"
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your analysis within 7 days of receiving it, we'll either provide a complimentary re-analysis or give you a full refund. No questions asked. We're confident in the quality of our service and want you to feel the same way.",
    category: "refund"
  },
  {
    question: "How do you protect my privacy and match footage?",
    answer: "Your privacy is our top priority. All match footage is kept strictly confidential and is only accessible to the coach assigned to your analysis. We never share your videos publicly or use them for marketing without explicit permission. Videos are automatically deleted from our servers 30 days after analysis completion. You can also request immediate deletion at any time.",
    category: "privacy"
  },
  {
    question: "Can I choose the same coach for multiple reviews?",
    answer: "Yes! You can request the same coach for consistency and to build a relationship. Many players prefer working with the same coach as they get to know your game better over time. Simply mention your preferred coach in the notes when submitting your match, and we'll do our best to accommodate your request.",
    category: "coach-selection"
  },
  {
    question: "What video quality do you need for analysis?",
    answer: "We can work with most video qualities, but HD (720p or higher) is recommended for the best analysis. The video should be clear enough to see your movements, shot technique, and court positioning. We can analyze videos from phones, cameras, or any recording device as long as the key elements are visible.",
    category: "technical"
  },
  {
    question: "How do I submit my match video?",
    answer: "Simply upload your match to YouTube as an unlisted video and share the link with us. Alternatively, you can use any video sharing platform that provides a direct link. We'll send you detailed instructions when you place your order. The process is designed to be simple and secure.",
    category: "submission"
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
        <div className="max-w-4xl mx-auto">
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
                          className="text-slate-600 leading-relaxed"
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