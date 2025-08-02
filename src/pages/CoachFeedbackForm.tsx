import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus, Trash2, Star, AlertCircle, CheckCircle, Video, FileText } from 'lucide-react';

interface TimestampEntry {
  id: string;
  timestamp: string;
  category: string;
  description: string;
  recommendation: string;
}

interface FeedbackForm {
  playerName: string;
  matchDate: string;
  matchDuration: string;
  playerLevel: string;
  matchType: string;
  timestamps: TimestampEntry[];
  strengths: string;
  weaknesses: string;
  overallComments: string;
  additionalInfo: string;
  videoLink: string;
}

const CoachFeedbackForm = () => {
  const [form, setForm] = useState<FeedbackForm>({
    playerName: '',
    matchDate: '',
    matchDuration: '',
    playerLevel: '',
    matchType: '',
    timestamps: [],
    strengths: '',
    weaknesses: '',
    overallComments: '',
    additionalInfo: '',
    videoLink: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Serve',
    'Return',
    'Volley',
    'Smash',
    'Positioning',
    'Strategy',
    'Footwork',
    'Communication',
    'Mental Game',
    'Other'
  ];

  const addTimestamp = () => {
    const newTimestamp: TimestampEntry = {
      id: Date.now().toString(),
      timestamp: '',
      category: '',
      description: '',
      recommendation: ''
    };
    setForm(prev => ({
      ...prev,
      timestamps: [...prev.timestamps, newTimestamp]
    }));
  };

  const removeTimestamp = (id: string) => {
    setForm(prev => ({
      ...prev,
      timestamps: prev.timestamps.filter(t => t.id !== id)
    }));
  };

  const updateTimestamp = (id: string, field: keyof TimestampEntry, value: string) => {
    setForm(prev => ({
      ...prev,
      timestamps: prev.timestamps.map(t => 
        t.id === id ? { ...t, [field]: value } : t
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle success - could redirect or show success message
    alert('Feedback submitted successfully!');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Match Analysis Feedback Form
          </h1>
          <p className="text-slate-600 text-lg">
            Provide detailed, structured feedback to help players improve their game
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200'
              }`}>
                1
              </div>
              <span className="ml-2 hidden sm:inline">Basic Info</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
            <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200'
              }`}>
                2
              </div>
              <span className="ml-2 hidden sm:inline">Timestamps</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
            <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-200'
              }`}>
                3
              </div>
              <span className="ml-2 hidden sm:inline">Summary</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Basic Match Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Player Name *
                  </label>
                  <input
                    type="text"
                    value={form.playerName}
                    onChange={(e) => setForm(prev => ({ ...prev, playerName: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Match Date *
                  </label>
                  <input
                    type="date"
                    value={form.matchDate}
                    onChange={(e) => setForm(prev => ({ ...prev, matchDate: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Match Duration *
                  </label>
                  <select
                    value={form.matchDuration}
                    onChange={(e) => setForm(prev => ({ ...prev, matchDuration: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="15-30min">15-30 minutes</option>
                    <option value="30-45min">30-45 minutes</option>
                    <option value="45-60min">45-60 minutes</option>
                    <option value="60-90min">60-90 minutes</option>
                    <option value="90min+">90+ minutes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Player Level *
                  </label>
                  <select
                    value={form.playerLevel}
                    onChange={(e) => setForm(prev => ({ ...prev, playerLevel: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Match Type *
                  </label>
                  <select
                    value={form.matchType}
                    onChange={(e) => setForm(prev => ({ ...prev, matchType: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select match type</option>
                    <option value="Friendly">Friendly Match</option>
                    <option value="Tournament">Tournament</option>
                    <option value="League">League Match</option>
                    <option value="Training">Training Session</option>
                    <option value="Competitive">Competitive Match</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!form.playerName || !form.matchDate || !form.matchDuration || !form.playerLevel || !form.matchType}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  Next: Add Timestamps
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Timestamps */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-blue-600" />
                  Key Moments Analysis
                </h2>
                <button
                  type="button"
                  onClick={addTimestamp}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Timestamp
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Instructions</h3>
                    <p className="text-blue-700 text-sm">
                      Please add at least <strong>5 timestamp examples</strong> from the match. For each moment, include:
                    </p>
                    <ul className="text-blue-700 text-sm mt-2 space-y-1">
                      <li>• <strong>Timestamp:</strong> Exact time in the video (e.g., "2:34")</li>
                      <li>• <strong>Category:</strong> What aspect of the game this moment demonstrates</li>
                      <li>• <strong>Description:</strong> What happened and why it's important</li>
                      <li>• <strong>Recommendation:</strong> How the player can improve in similar situations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {form.timestamps.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p>No timestamps added yet. Click "Add Timestamp" to get started.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {form.timestamps.map((timestamp, index) => (
                    <div key={timestamp.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-slate-900">Timestamp #{index + 1}</h3>
                        <button
                          type="button"
                          onClick={() => removeTimestamp(timestamp.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Timestamp *
                          </label>
                          <input
                            type="text"
                            value={timestamp.timestamp}
                            onChange={(e) => updateTimestamp(timestamp.id, 'timestamp', e.target.value)}
                            placeholder="e.g., 2:34"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Category *
                          </label>
                          <select
                            value={timestamp.category}
                            onChange={(e) => updateTimestamp(timestamp.id, 'category', e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="">Select category</option>
                            {categories.map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Description *
                        </label>
                        <textarea
                          value={timestamp.description}
                          onChange={(e) => updateTimestamp(timestamp.id, 'description', e.target.value)}
                          placeholder="Describe what happened at this moment and why it's important..."
                          rows={3}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Recommendation *
                        </label>
                        <textarea
                          value={timestamp.recommendation}
                          onChange={(e) => updateTimestamp(timestamp.id, 'recommendation', e.target.value)}
                          placeholder="How can the player improve in similar situations?"
                          rows={3}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={form.timestamps.length < 5}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  Next: Summary
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Summary */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-blue-600" />
                Overall Assessment
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Key Strengths *
                  </label>
                  <textarea
                    value={form.strengths}
                    onChange={(e) => setForm(prev => ({ ...prev, strengths: e.target.value }))}
                    placeholder="What are the player's main strengths? What do they do well?"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Areas for Improvement *
                  </label>
                  <textarea
                    value={form.weaknesses}
                    onChange={(e) => setForm(prev => ({ ...prev, weaknesses: e.target.value }))}
                    placeholder="What are the main areas where the player can improve?"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Overall Comments *
                  </label>
                  <textarea
                    value={form.overallComments}
                    onChange={(e) => setForm(prev => ({ ...prev, overallComments: e.target.value }))}
                    placeholder="Provide a comprehensive summary of the player's performance and overall assessment..."
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    value={form.additionalInfo}
                    onChange={(e) => setForm(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    placeholder="Any additional notes, specific drills to recommend, or other relevant information..."
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Video Feedback Link (Optional)
                  </label>
                  <div className="flex items-center">
                    <Video className="w-5 h-5 text-slate-400 mr-2" />
                    <input
                      type="url"
                      value={form.videoLink}
                      onChange={(e) => setForm(prev => ({ ...prev, videoLink: e.target.value }))}
                      placeholder="https://youtube.com/watch?v=..."
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    If you've recorded a video explanation, you can share the link here
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !form.strengths || !form.weaknesses || !form.overallComments}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CoachFeedbackForm; 