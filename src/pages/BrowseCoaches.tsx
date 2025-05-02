import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Award, ThumbsUp } from 'lucide-react';

const mockCoaches = [
  {
    id: 1,
    name: 'Alex Thompson',
    specialty: 'Advanced Technique & Strategy',
    location: 'London, UK',
    rating: 4.9,
    reviews: 127,
    experience: '8+ years',
    price: '£60/hour',
    availability: 'Available this week',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    certifications: ['WPT Certified', 'Level 3 Coach']
  },
  {
    id: 2,
    name: 'Maria Garcia',
    specialty: 'Strategy & Footwork',
    location: 'Madrid, Spain',
    rating: 5.0,
    reviews: 89,
    experience: '12+ years',
    price: '€70/hour',
    availability: 'Next week',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    certifications: ['FIP Certified', 'Former Pro Player']
  },
  {
    id: 3,
    name: 'David Johnson',
    specialty: 'Serve & Return Specialist',
    location: 'Dubai, UAE',
    rating: 4.8,
    reviews: 156,
    experience: '6+ years',
    price: '$80/hour',
    availability: 'Available today',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    certifications: ['PPT Certified']
  },
  {
    id: 4,
    name: 'Emma Wilson',
    specialty: 'Defensive Play Expert',
    location: 'Stockholm, Sweden',
    rating: 4.9,
    reviews: 94,
    experience: '7+ years',
    price: '€65/hour',
    availability: 'This weekend',
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    certifications: ['SPF Certified', 'Mental Game Coach']
  }
];

const BrowseCoaches = () => (
  <div className="py-12 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Coach</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Connect with world-class padel coaches for personalized video analysis and feedback.
          All our coaches are certified and carefully vetted.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {mockCoaches.map(coach => (
          <div key={coach.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex items-start gap-6">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{coach.name}</h2>
                    <p className="text-blue-600 font-medium">{coach.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-slate-900">{coach.price}</div>
                    <div className="text-sm text-green-600">{coach.availability}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {coach.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400" />
                    <span>{coach.rating}</span>
                    <span className="text-slate-400">({coach.reviews} reviews)</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {coach.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                    >
                      <Award size={12} className="mr-1" />
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-600">
                    <ThumbsUp size={16} className="mr-1" />
                    {coach.experience} experience
                  </div>
                  <Link
                    to="/submit"
                    className="btn btn-primary"
                  >
                    Book Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BrowseCoaches; 