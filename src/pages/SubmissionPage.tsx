import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Video, MessagesSquare, ThumbsUp } from 'lucide-react';
import { useUserProfile } from '../hooks/useUserProfile';
import { useMatchSubmission } from '../hooks/useMatchSubmission';
import { Timestamp } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import GuestSignupModal from '../components/GuestSignupModal';

const SubmissionPage = () => {
  const { user } = useAuth();
  const { fullName, email, loading: profileLoading } = useUserProfile();
  const { submitNewMatch, loading: submissionLoading, error: submissionError } = useMatchSubmission();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    videoLink: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);

  // Pre-fill for signed-in users
  useState(() => {
    if (user) {
      setFormState((prev) => ({
        ...prev,
        name: fullName || '',
        email: email || '',
      }));
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const now = Timestamp.now();
      if (user) {
        await submitNewMatch({
          videoUrl: formState.videoLink,
          notes: formState.notes || undefined,
          submittedAt: now,
          lastUpdated: now
        });
        setIsSubmitted(true);
      } else {
        await submitNewMatch({
          videoUrl: formState.videoLink,
          notes: formState.notes || undefined,
          submittedAt: now,
          lastUpdated: now,
          guestEmail: formState.email,
          guestName: formState.name,
        });
        setIsSubmitted(true);
        setShowGuestModal(true);
      }
    } catch (err) {
      console.error('Error submitting match:', err);
    }
  };

  if (profileLoading) {
    return (
      <div className="py-12">
        <div className="container max-w-4xl">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Match</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Fill out the form below to get professional feedback on your padel match.
          </p>
        </div>

        {!isSubmitted ? (
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            {submissionError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                {submissionError}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="label">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="input bg-slate-50"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  disabled={!!user}
                  readOnly={!!user}
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="input bg-slate-50"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  disabled={!!user}
                  readOnly={!!user}
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="videoLink" className="label">Video Link</label>
                <input 
                  type="url" 
                  id="videoLink" 
                  name="videoLink" 
                  className="input"
                  value={formState.videoLink}
                  onChange={handleChange}
                  required
                  placeholder="https://youtube.com/watch?v=..."
                />
                <p className="text-sm text-slate-500 mt-1">
                  Paste a YouTube, Vimeo, or other video streaming link. Make sure the video is accessible (unlisted is fine).
                </p>
              </div>

              <div className="mb-8">
                <label htmlFor="notes" className="label">Notes (Optional)</label>
                <textarea 
                  id="notes" 
                  name="notes" 
                  rows={4} 
                  className="input"
                  value={formState.notes}
                  onChange={handleChange}
                  placeholder="Any specific areas you'd like the coach to focus on? Any context about the match or your playing level?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={submissionLoading}
              >
                {submissionLoading ? 'Submitting...' : 'Submit Match for Review'}
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="font-semibold text-lg mb-4">What happens next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Video className="w-10 h-10 text-blue-600 mb-3" />
                  <p>Your video is sent to a verified padel coach</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MessagesSquare className="w-10 h-10 text-blue-600 mb-3" />
                  <p>The coach analyses your match and prepares feedback</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ThumbsUp className="w-10 h-10 text-blue-600 mb-3" />
                  <p>You receive personalized insights within 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Submission Successful!</h2>
            <p className="text-slate-600 text-lg mb-6">
              Thank you for submitting your match. One of our verified coaches will review your footage 
              and provide detailed feedback within 48 hours.
            </p>
            <p className="text-slate-600 mb-8">
              We've sent a confirmation email to <span className="font-medium">{formState.email}</span> with 
              further details.
            </p>
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
            {showGuestModal && <GuestSignupModal email={formState.email} onClose={() => setShowGuestModal(false)} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionPage;