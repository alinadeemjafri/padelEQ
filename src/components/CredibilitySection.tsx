import { motion } from 'framer-motion';
import { Star, Award, Users, Clock } from 'lucide-react';

interface CredibilitySectionProps {
  setShowWaitlist: (show: boolean) => void;
}

const coaches = [
  {
    name: "Carlos Rodríguez",
    title: "Former Professional Player",
    credentials: "12 years playing padel, 8 years coaching",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    bio: "Former top 50 professional player with extensive tournament experience. Specializes in advanced strategy, mental game, and competitive preparation."
  },
  {
    name: "María González",
    title: "Elite Coach",
    credentials: "15 years playing padel, 10 years coaching",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Experienced coach with expertise in technique refinement and match analysis. Focuses on improving player fundamentals and tactical awareness."
  },
  {
    name: "David Thompson",
    title: "Performance Specialist",
    credentials: "10 years playing padel, 6 years coaching",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    bio: "Sports science graduate specializing in biomechanics and performance optimization. Helps players improve their physical game and technique."
  }
];

const testimonials = [
  {
    name: "Alex Thompson",
    level: "Intermediate Player",
    rating: 5,
    text: "PadelEQ transformed my game. The detailed feedback helped me identify weaknesses I never knew I had. My serve improved dramatically after just one review!",
    improvement: "Serve accuracy +40%"
  },
  {
    name: "Sarah Martinez",
    level: "Advanced Player",
    rating: 5,
    text: "As someone who's been playing for years, I was skeptical about online coaching. But the quality of analysis is incredible. It's like having a personal coach available 24/7.",
    improvement: "Match win rate +25%"
  }
];

const stats = [
  { number: "500+", label: "Matches Analyzed", icon: Users },
  { number: "48hr", label: "Average Turnaround", icon: Clock },
  { number: "4.9/5", label: "Customer Rating", icon: Star },
  { number: "100%", label: "Satisfaction Guarantee", icon: Award }
];

const CredibilitySection = ({ setShowWaitlist }: CredibilitySectionProps) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Coaches Section */}
        <div className="mb-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Coaches</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our verified coaches are experienced players and certified experts with years of experience in competitive padel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{coach.title}</p>
                <p className="text-sm text-slate-500 mb-3">{coach.credentials}</p>
                <p className="text-slate-600 text-sm">{coach.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Players Are Saying</h2>
            <p className="text-slate-600 text-lg">
              Real results from real players who've transformed their game with PadelEQ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.level}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Game?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of players who've already improved their game with expert analysis. 
              Get your first match reviewed for just £29.
            </p>
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              onClick={() => setShowWaitlist(true)}
            >
              Get Your First Match Reviewed – Save 20% Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection; 