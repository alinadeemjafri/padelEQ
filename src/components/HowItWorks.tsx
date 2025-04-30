import { Video, FileSearch, FileText } from 'lucide-react';

const steps = [
  {
    icon: <Video size={40} className="text-blue-600" />,
    title: "Share Your Match",
    description: "Upload your match to YouTube (unlisted) or drop a stream link. Add notes if you want specific focus areas."
  },
  {
    icon: <FileSearch size={40} className="text-blue-600" />,
    title: "A Coach Reviews It",
    description: "One of our verified padel coaches analyses your gameplay — footwork, positioning, shot selection and more."
  },
  {
    icon: <FileText size={40} className="text-blue-600" />,
    title: "You Get Personalised Feedback",
    description: "A full report with practical tips, priorities, and strengths — delivered within 48 hours."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-slate-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">How PadelEQ Works</h2>
          <p className="text-slate-600 text-lg">
            Our streamlined process gets you professional feedback with minimal hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="card hover:shadow-md group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                {step.icon}
              </div>
              <div className="flex items-start mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold text-sm mr-3">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;