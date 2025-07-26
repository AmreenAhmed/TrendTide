import React from 'react';
import { Edit, Settings, ExternalLink, Flame, Trophy } from 'lucide-react';
import StreakBadge from '../components/StreakBadge';

const Profile: React.FC = () => {
  const userPosts = [
    'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">@fashionfrenzy</h1>
                <p className="text-gray-600">Sarah Johnson</p>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  <Edit size={16} />
                  <span>Edit Profile</span>
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Settings size={16} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">127</div>
                <div className="text-gray-600 text-sm">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15.2K</div>
                <div className="text-gray-600 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">892</div>
                <div className="text-gray-600 text-sm">Following</div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-gray-700">
              <p className="mb-2">Fashion enthusiast & lifestyle creator ✨</p>
              <p className="mb-2">Sharing daily outfits & beauty tips</p>
              <div className="flex items-center justify-center md:justify-start space-x-1 text-indigo-600">
                <ExternalLink size={16} />
                <span>linktr.ee/fashionfrenzy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Streak Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <StreakBadge days={23} points={4680} level="gold" />
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Trophy size={24} />
                <span className="text-lg font-bold">Achievements</span>
              </div>
            </div>
            <div className="text-sm opacity-90">
              <p>🥇 Fashion Trendsetter</p>
              <p>🔥 Shopping Streak Master</p>
              <p>👑 Community Leader</p>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {userPosts.map((post, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={post}
                alt={`Post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;