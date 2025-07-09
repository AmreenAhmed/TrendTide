import React, { useState } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';
import PostCard from '../components/PostCard';
import { trendingPosts, categories } from '../data/mockData';

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = trendingPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.user.username.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Explore</h1>
        <p className="text-gray-600">Discover trending products and latest posts from the community</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search posts, users, or products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-semibold text-gray-900">Trending Now</h2>
        </div>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">🔥 Hot Products This Week</h3>
              <p className="text-sm text-gray-600">Check out what everyone's shopping for</p>
            </div>
            <div className="flex -space-x-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="transform transition-all duration-200 hover:scale-105">
            <PostCard post={post} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Load More */}
      {filteredPosts.length > 0 && (
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;