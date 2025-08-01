import { motion } from 'framer-motion';
import { Play, Clock, Target, MessageSquare } from 'lucide-react';

interface VisualDemoProps {
  setShowWaitlist: (show: boolean) => void;
}

const sampleFeedback = {
  playerName: "Alex Thompson",
  matchDate: "March 15, 2024",
  coach: "Carlos Rodriguez",
  duration: "48 hours",
  keyInsights: [
    {
      timestamp: "2:34",
      category: "Serve Technique",
      feedback: "Your serve placement is excellent, but you're not using your legs enough. This is costing you power and consistency.",
      improvement: "Focus on bending your knees more and driving up through the ball."
    },
    {
      timestamp: "5:12",
      category: "Positioning",
      feedback: "You're often too close to the net after your serve. This makes it difficult to cover the court effectively.",
      improvement: "Take 2-3 steps back after serving to maintain better court coverage."
    },
    {
      timestamp: "8:45",
      category: "Shot Selection",
      feedback: "Great use of the glass, but you're missing opportunities to finish points at the net.",
      improvement: "When you have your opponent on the defensive, move forward to capitalize on weak returns."
    }
  ],
  overallScore: 7.5,
  strengths: ["Excellent serve placement", "Good use of glass", "Strong defensive play"],
  areasForImprovement: ["Serve power", "Net positioning", "Finishing points"]
};

const VisualDemo = ({ setShowWaitlist }: VisualDemoProps) => {
  return (
    <section id="visual-demo" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See What You'll Get
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Detailed, actionable feedback with video timestamps and specific improvement recommendations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sample Feedback Report */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Match Analysis Report</h3>
                <p className="text-slate-600">by {sampleFeedback.coach}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{sampleFeedback.overallScore}/10</div>
                <div className="text-sm text-slate-500">Overall Score</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {sampleFeedback.keyInsights.map((insight, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600">{insight.timestamp}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {insight.category}
                    </span>
                  </div>
                  <p className="text-slate-700 mb-2">{insight.feedback}</p>
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Improvement Tip</span>
                    </div>
                    <p className="text-sm text-blue-700">{insight.improvement}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Strengths</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {sampleFeedback.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Areas to Improve</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {sampleFeedback.areasForImprovement.map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Video Analysis Preview */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Video Analysis Features</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Timestamped Feedback</h4>
                    <p className="text-sm text-slate-600">Click any timestamp to jump directly to that moment in your video</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Actionable Tips</h4>
                    <p className="text-sm text-slate-600">Specific drills and exercises to improve each identified weakness</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Detailed Explanations</h4>
                    <p className="text-sm text-slate-600">In-depth analysis of technique, strategy, and decision-making</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Video Frame */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-slate-900 aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm">Sample Match Analysis</p>
                    <p className="text-xs text-slate-300">Click to see annotated feedback</p>
                  </div>
                </div>
                {/* Annotations */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 left-1/3 w-8 h-8 border-2 border-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-full bg-red-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  Serve Technique
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">
                  <strong>2:34</strong> - Notice how your knees aren't fully engaged. This is costing you power.
                </p>
              </div>
            </div>
          </motion.div>
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
            <h3 className="text-2xl font-bold mb-4">Ready for This Level of Detail?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the same comprehensive analysis for your matches. Starting at just £29 per review.
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

export default VisualDemo; 