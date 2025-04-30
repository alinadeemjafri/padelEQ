import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to upload my video?",
    answer: "No. Just send a private YouTube or stream link. This makes the process faster and more efficient for everyone."
  },
  {
    question: "How long does it take to get feedback?",
    answer: "You'll receive your detailed feedback within 48 hours of submitting your match video link."
  },
  {
    question: "What do I get in the feedback?",
    answer: "A written breakdown of your match including strengths, improvement areas, and specific action points to enhance your game."
  },
  {
    question: "Who are the coaches?",
    answer: "All coaches on PadelEQ are verified and experienced — many are active competitors or former professional players with coaching certifications."
  },
  {
    question: "Can I request a specific coach?",
    answer: "Currently, matches are assigned to available coaches. In the future, we plan to add an option to select specific coaches."
  },
  {
    question: "What happens if I'm not satisfied with the feedback?",
    answer: "We stand by the quality of our coaches. If you're not satisfied, please contact our support team and we'll work to resolve your concerns."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">
              Everything you need to know about PadelEQ and how it works.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-slate-500" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 pt-0 bg-white">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;