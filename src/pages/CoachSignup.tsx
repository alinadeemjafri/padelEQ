import React, { useState } from 'react';

const CoachSignup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Application Submitted!</h1>
        <p className="mb-4">Thank you for applying to become a coach. Our team will review your application and get in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="container py-16 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Coach Application</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        <div>
          <label htmlFor="name" className="label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="experience" className="label">Coaching Experience</label>
          <textarea
            id="experience"
            name="experience"
            className="input"
            rows={5}
            value={form.experience}
            onChange={handleChange}
            required
            placeholder="Tell us about your coaching background, certifications, and why you'd like to join."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
};

export default CoachSignup; 