import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const experienceOptions = [
  'Less than 1 year',
  '1-2 years',
  '3-5 years',
  '6-10 years',
  '10+ years',
  'Just starting out',
];

const WaitlistForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    note: '',
    experience: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim() || !form.experience) {
      setError('Please enter your name, email, and select your experience level.');
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'waitlist'), {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        note: form.note.trim(),
        experience: form.experience,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Thank you for joining!</h2>
        <p className="mb-4">You're now on the list for early access to PadelEQ.</p>
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="font-semibold mb-2">🎉 Special Early Access Offer:</p>
          <p className="text-sm">Get your first match reviewed for just £29 (20% off regular price)</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-lg mx-auto space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <span className="animate-pulse">⚡</span>
          <span>Limited Time Offer</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Get Your First Match Reviewed</h2>
        <p className="text-center text-slate-600 mb-4">
          Join the waitlist and get early access to professional match analysis starting at just £29.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="font-semibold text-blue-800 mb-1">Early Access Benefits:</p>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 20% discount on your first review</li>
            <li>• Priority access when we launch</li>
            <li>• Exclusive coaching insights</li>
          </ul>
        </div>
      </div>
      
      {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded p-3 text-center">{error}</div>}
      
      <div>
        <label htmlFor="name" className="label">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="input w-full text-slate-900"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="email" className="label">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="input w-full text-slate-900"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@email.com"
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="experience" className="label">How long have you been playing padel? <span className="text-red-500">*</span></label>
        <select
          id="experience"
          name="experience"
          className="input w-full text-slate-900"
          value={form.experience}
          onChange={handleChange}
          required
          disabled={loading}
        >
          <option value="" disabled>Select your experience level</option>
          {experienceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="note" className="label">What would make this service perfect for you? <span className="text-slate-400 font-normal">(Optional)</span></label>
        <textarea
          id="note"
          name="note"
          className="input w-full text-slate-900"
          rows={4}
          value={form.note}
          onChange={handleChange}
          placeholder="Share your goals, current challenges, or what you're looking for in a coaching service..."
          disabled={loading}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-4 text-lg font-semibold"
        disabled={loading}
      >
        {loading ? 'Joining...' : 'Get Early Access – Save 20%'}
      </button>
      
      <div className="text-center text-sm text-slate-500">
        <p>✓ No credit card required</p>
        <p>✓ Cancel anytime</p>
        <p>✓ 100% satisfaction guarantee</p>
      </div>
    </form>
  );
};

export default WaitlistForm; 