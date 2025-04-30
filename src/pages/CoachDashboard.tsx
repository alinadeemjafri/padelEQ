import { useState } from 'react';
import { 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  MoreVertical,
  MessageSquare,
  Eye,
  User
} from 'lucide-react';

// Mock data for demonstration
const mockMatches = [
  {
    id: 1,
    playerName: 'James Smith',
    videoLink: 'https://youtube.com/watch?v=ABC123',
    notes: 'Would like feedback on my backhand technique and positioning on the court.',
    submissionDate: '2025-05-15T14:23:00Z',
    status: 'pending' // pending, inProgress, completed
  },
  {
    id: 2,
    playerName: 'Maria Garcia',
    videoLink: 'https://youtube.com/watch?v=DEF456',
    notes: 'This was my first tournament match. Looking for general feedback and areas to improve.',
    submissionDate: '2025-05-14T10:45:00Z',
    status: 'inProgress'
  },
  {
    id: 3,
    playerName: 'David Johnson',
    videoLink: 'https://youtube.com/watch?v=GHI789',
    notes: 'Need help with my serve and volley technique.',
    submissionDate: '2025-05-13T16:30:00Z',
    status: 'completed'
  },
  {
    id: 4,
    playerName: 'Emma Wilson',
    videoLink: 'https://youtube.com/watch?v=JKL012',
    notes: 'Looking for tips on how to improve my defensive play against stronger players.',
    submissionDate: '2025-05-12T09:15:00Z',
    status: 'completed'
  }
];

const CoachDashboard = () => {
  const [matches] = useState(mockMatches);
  const [activeFeedbackId, setActiveFeedbackId] = useState<number | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock size={12} className="mr-1" /> Pending
          </span>
        );
      case 'inProgress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <AlertCircle size={12} className="mr-1" /> In Progress
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" /> Completed
          </span>
        );
      default:
        return null;
    }
  };

  const handleSubmitFeedback = () => {
    console.log('Submitting feedback for match ID:', activeFeedbackId);
    console.log('Feedback:', feedbackText);
    
    // In a real app, you would send this to your backend
    // and update the match status
    
    // Close modal and reset
    setShowFeedbackModal(false);
    setFeedbackText('');
    setActiveFeedbackId(null);
  };

  const openFeedbackModal = (matchId: number) => {
    setActiveFeedbackId(matchId);
    setShowFeedbackModal(true);
  };

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Coach Dashboard</h1>
            <p className="text-slate-600">
              Review and provide feedback on submitted matches.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="flex items-center space-x-2 bg-blue-50 rounded-lg px-4 py-2">
              <User size={20} className="text-blue-600" />
              <span className="font-medium">Coach Account</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="font-semibold text-xl">Match Submissions</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {matches.map((match) => (
                  <tr key={match.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-slate-900">
                        {match.playerName}
                      </div>
                      <div className="text-sm text-slate-500">
                        <a 
                          href={match.videoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View Match Video
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {match.notes}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {formatDate(match.submissionDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(match.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end">
                        {match.status !== 'completed' && (
                          <button 
                            className="btn btn-primary py-2"
                            onClick={() => openFeedbackModal(match.id)}
                          >
                            <MessageSquare size={16} className="mr-2" />
                            Submit Feedback
                          </button>
                        )}
                        
                        {match.status === 'completed' && (
                          <button className="text-slate-400 hover:text-slate-500">
                            <Eye size={18} />
                          </button>
                        )}
                        
                        <button className="ml-2 text-slate-400 hover:text-slate-500">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-semibold text-xl">Submit Feedback</h3>
              <button 
                onClick={() => setShowFeedbackModal(false)}
                className="text-slate-400 hover:text-slate-500"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow">
              <div className="mb-6">
                <label className="label">Player</label>
                <div className="font-medium">
                  {matches.find(m => m.id === activeFeedbackId)?.playerName}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="label">Match Notes</label>
                <div className="p-3 bg-slate-50 rounded text-slate-700 text-sm">
                  {matches.find(m => m.id === activeFeedbackId)?.notes}
                </div>
              </div>
              
              <div>
                <label htmlFor="feedback" className="label">Your Feedback</label>
                <textarea 
                  id="feedback" 
                  rows={10} 
                  className="input"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Provide detailed feedback on the player's performance, strengths, areas for improvement, and specific drills or exercises that would help them improve."
                ></textarea>
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-200 flex justify-end space-x-4">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowFeedbackModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={handleSubmitFeedback}
                disabled={!feedbackText.trim()}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachDashboard;