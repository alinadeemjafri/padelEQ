import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CheckCircle, Star, TrendingUp, Award, User } from 'lucide-react';

const mockSubmissions = [
  { id: 1, date: '2025-05-15', status: 'Pending', feedback: '' },
  { id: 2, date: '2025-05-14', status: 'Completed', feedback: 'Great backhand technique; work on footwork.' },
  { id: 3, date: '2025-05-13', status: 'In Progress', feedback: '' }
];

const mockAchievements = [
  { icon: <CheckCircle className="text-green-500 w-6 h-6" />, label: 'First Submission' },
  { icon: <Star className="text-yellow-400 w-6 h-6" />, label: '3 Matches Reviewed!' },
];

const latestFeedback = mockSubmissions.find(s => s.feedback)?.feedback || 'No feedback yet. Submit a match to get started!';

const PlayerDashboard = () => {
  const { user } = useAuth();
  const playerName = user?.email ? user.email.split('@')[0] : 'Player';
  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome back, {playerName}!</h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-6">
            Unlock your full padel potential. Get expert video feedback, track your progress, and earn achievements as you level up your game.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/submit" className="btn btn-primary text-lg px-8 py-3 shadow-lg">Submit a Match</Link>
            <Link to="/browse-coaches" className="btn btn-secondary text-lg px-8 py-3">Find a Coach</Link>
          </div>
        </div>

        {/* Progress & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <TrendingUp className="w-8 h-8 text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold mb-1">Your Progress</h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">{mockSubmissions.length}</div>
            <div className="text-slate-500 mb-2">Total Submissions</div>
            <div className="text-slate-400 text-sm">Last: {mockSubmissions[0]?.date || '-'}</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Award className="w-8 h-8 text-purple-500 mb-2" />
            <h3 className="text-xl font-semibold mb-1">Your Level</h3>
            <div className="text-2xl font-bold text-purple-600 mb-1">Intermediate</div>
            <div className="text-slate-500">Keep submitting matches to level up!</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-3">Achievements</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {mockAchievements.map((ach, i) => (
                <div key={i} className="flex flex-col items-center">
                  {ach.icon}
                  <span className="text-xs mt-1 text-slate-600">{ach.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Match History */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-2xl">Your Match History</h2>
            <span className="text-slate-500 text-sm mt-2 sm:mt-0">All your past submissions in one place</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Submission Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Feedback</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {mockSubmissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{sub.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {sub.status === 'Pending' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>
                      )}
                      {sub.status === 'In Progress' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">In Progress</span>
                      )}
                      {sub.status === 'Completed' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{sub.feedback || '-' }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to="/submit" className="text-blue-600 hover:underline">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard; 