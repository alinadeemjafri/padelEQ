import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The feedback was spot on. I saw immediate improvement in my defensive positioning. Now I know exactly what to work on in practice.",
    author: "Faizan K.",
    role: "Intermediate Player",
    rating: 5
  },
  {
    content: "As someone playing competitively, the detailed analysis of my backhand technique was invaluable. Worth every penny.",
    author: "Sarah L.",
    role: "Tournament Player",
    rating: 5
  },
  {
    content: "This platform is perfect. I can help players while managing my own training schedule. The flexibility is exactly what I needed.",
    author: "Carlos M.",
    role: "Professional Coach",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">What Players & Coaches Are Saying</h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it — hear from our community of players and coaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-slate-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;