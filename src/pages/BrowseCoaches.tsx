import React from 'react';
import { Link } from 'react-router-dom';

const mockCoaches = [
  { id: 1, name: 'Alex Thompson', specialty: 'Advanced Technique', avatar: 'https://via.placeholder.com/80' },
  { id: 2, name: 'Maria Garcia', specialty: 'Strategy & Footwork', avatar: 'https://via.placeholder.com/80' },
  { id: 3, name: 'David Johnson', specialty: 'Serve & Return', avatar: 'https://via.placeholder.com/80' },
  { id: 4, name: 'Emma Wilson', specialty: 'Defensive Play', avatar: 'https://via.placeholder.com/80' }
];

const BrowseCoaches = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Browse Our Coaches</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Explore our network of certified padel coaches and find the perfect match for your training needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockCoaches.map(coach => (
          <div key={coach.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <img
              src={coach.avatar}
              alt={coach.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-1">{coach.name}</h2>
              <p className="text-slate-600 mb-4">{coach.specialty}</p>
              <Link
                to="/coach"
                className="mt-auto btn btn-primary w-full"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BrowseCoaches; 