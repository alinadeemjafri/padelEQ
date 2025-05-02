import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const WaitlistForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    note: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please enter your name and email.');
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'waitlist'), {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        note: form.note.trim(),
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
      <div className="bg-green-50 border border-green-200 text-green-800 rounded p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Thank you for joining the waitlist!</h2>
        <p>We'll keep you updated. Stay tuned for something awesome!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-lg mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center mb-2">Join the Waitlist</h2>
      <p className="text-center text-slate-600 mb-4">Be the first to know when we launch and help shape the future of padel coaching.</p>
      {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded p-3 text-center">{error}</div>}
      <div>
        <label htmlFor="name" className="label">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="input w-full"
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
          className="input w-full"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@email.com"
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="note" className="label">Describe your ideal experience with a service like this. What would make it perfect for you? <span className="text-slate-400 font-normal">(Optional)</span></label>
        <textarea
          id="note"
          name="note"
          className="input w-full"
          rows={4}
          value={form.note}
          onChange={handleChange}
          placeholder="Share your ideas, needs, or pain points..."
          disabled={loading}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading ? 'Joining...' : 'Join the Waitlist'}
      </button>
    </form>
  );
};

export default WaitlistForm; 