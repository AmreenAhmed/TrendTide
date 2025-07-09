import React from 'react';
import PostCard from '../components/PostCard';
import StreakBar from '../components/StreakBar';
import { mockPosts, currentUser } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, @{currentUser.username}!
        </h1>
        <p className="text-gray-600">
          Discover the latest trends and keep your shopping streak alive 🔥
        </p>
      </div>

      {/* Streak Bar */}
      <StreakBar
        currentStreak={currentUser.streak}
        totalPoints={currentUser.totalPoints}
        nextReward={500}
        className="mb-6"
      />

      {/* Stories Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Trending Stories</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <span className="text-white font-semibold text-xs">
                {index === 0 ? 'Your Story' : `Story ${index + 1}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Feed</h2>
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center py-8">
        <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default Home;