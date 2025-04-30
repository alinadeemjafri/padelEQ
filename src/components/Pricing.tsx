import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-slate-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Straightforward Pricing</h2>
          <p className="text-slate-600 text-lg">
            One match. One link. One expert review. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="card shadow-md transform transition-transform hover:scale-105">
            <div className="text-center mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold">Single Match Review</h3>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-bold">£29</span>
                <span className="text-slate-500"> / match</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Full match analysis by a verified coach</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Detailed feedback on your gameplay</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>Specific improvement recommendations</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>48-hour turnaround time</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span>One-time payment, no subscription</span>
              </li>
            </ul>

            <Link to="/submit" className="btn btn-primary w-full text-center">
              Submit Your Match
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;