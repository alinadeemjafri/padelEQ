import { CalendarClock, PiggyBank, Sparkles, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: <CalendarClock size={24} className="text-blue-600" />,
    title: "Flexible Schedule",
    description: "Work when it suits you. No fixed hours, no location constraints. Pure flexibility."
  },
  {
    icon: <PiggyBank size={24} className="text-blue-600" />,
    title: "Earn £50-100/hour",
    description: "Turn your expertise into substantial earnings. Most reviews take 30-45 minutes."
  },
  {
    icon: <Sparkles size={24} className="text-blue-600" />,
    title: "Global Reach",
    description: "Coach players worldwide. Build your reputation beyond local courts."
  },
  {
    icon: <UserCheck size={24} className="text-blue-600" />,
    title: "Simple Process",
    description: "Watch matches, share insights, get paid. No complex tools or training needed."
  }
];

const CoachesSection = () => {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card hover:shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-blue-100 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-6">Turn Your Expertise Into Income</h2>
            <p className="text-slate-600 text-lg mb-8">
              Join PadelEQ's network of elite coaches. Earn consistently by sharing your knowledge with motivated players worldwide. 
              No scheduling headaches, no travel time — just pure coaching.
            </p>
            <div className="space-y-4">
              <Link to="/coach" className="btn btn-primary w-full sm:w-auto">
                Start Coaching Today
              </Link>
              <p className="text-sm text-slate-500">
                Average earnings: £1,000-2,000/month for active coaches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;