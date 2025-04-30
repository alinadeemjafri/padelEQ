import { ShieldCheck, Clock, TrendingUp, Repeat } from 'lucide-react';

const benefits = [
  {
    icon: <Clock size={24} className="text-blue-600" />,
    title: "No Scheduling Hassle",
    description: "Get feedback without booking courts or coordinating calendars."
  },
  {
    icon: <TrendingUp size={24} className="text-blue-600" />,
    title: "Focus On What Matters",
    description: "Get professional insights on the specific areas that will improve your game fastest."
  },
  {
    icon: <ShieldCheck size={24} className="text-blue-600" />,
    title: "Top-Tier Coaching",
    description: "Access verified coaches with proven track records and experience."
  },
  {
    icon: <Repeat size={24} className="text-blue-600" />,
    title: "Track Progress Over Time",
    description: "Submit multiple matches to see how your game develops with expert guidance."
  }
];

const PlayersSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Improve Without Booking Courts or Coaches</h2>
            <p className="text-slate-600 text-lg mb-8">
              Get the insights you need to level up — without rescheduling your week or finding court time. 
              Our coaches help you identify what you're doing well and what needs focus — with advice tailored 
              to your playing style.
            </p>
            <p className="text-xl font-medium text-blue-600 mb-8">
              Starting at just £29 per match — get elite-level guidance at a fraction of the usual cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;