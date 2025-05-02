import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GuestSignupModalProps {
  email: string;
  onClose: () => void;
}

const GuestSignupModal: React.FC<GuestSignupModalProps> = ({ email, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
        <button
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
        <p className="mb-6 text-slate-700 text-center">
          Want to track your analysis, get feedback history, and unlock more features? <br />
          <span className="font-semibold">Create a free account!</span>
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="btn btn-primary w-full"
            onClick={() => navigate(`/signup?email=${encodeURIComponent(email)}`)}
          >
            Create Account
          </button>
          <button
            className="btn btn-secondary w-full"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-6 text-center">
          You can continue as a guest, but you won't be able to track your submissions or receive updates.
        </p>
      </div>
    </div>
  );
};

export default GuestSignupModal; 