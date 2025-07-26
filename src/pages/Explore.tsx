import React, { useState } from 'react';
import { Search, Filter, Flame, TrendingUp } from 'lucide-react';

const Explore: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'fashion', label: 'Fashion', icon: null },
    { id: 'tech', label: 'Tech', icon: null },
    { id: 'lifestyle', label: 'Lifestyle', icon: null },
    { id: 'home', label: 'Home & Garden', icon: null },
  ];

  const exploreItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Summer Collection',
      user: '@fashionfrenzy',
      isHot: true,
      price: '$89.99'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'Minimalist Setup',
      user: '@trendguru',
      isHot: false,
      price: '$299.99'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300&h=500&fit=crop',
      title: 'City Vibes',
      user: '@styleicon',
      isHot: true
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'Tech Essentials',
      user: '@techlifestyle',
      isHot: false,
      price: '$149.99'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Cozy Corner',
      user: '@homestyle_',
      isHot: true,
      price: '$79.99'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'Portrait Session',
      user: '@photographer',
      isHot: false
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=500&fit=crop',
      title: 'Street Style',
      user: '@urbanfashion',
      isHot: true,
      price: '$129.99'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      title: 'Nature Walk',
      user: '@naturelover',
      isHot: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Explore</h1>
        <p className="text-gray-600">Discover trending posts and find your next purchase</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search users, posts, products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-2">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {Icon && <Icon size={16} />}
              <span className="text-sm font-medium">{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {exploreItems.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.user}</p>
                  {item.price && (
                    <p className="text-white font-bold mt-1">{item.price}</p>
                  )}
                </div>
              </div>

              {/* Hot Badge */}
              {item.isHot && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full flex items-center space-x-1">
                  <Flame size={12} />
                  <span className="text-xs font-medium">Hot</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.user}</p>
              {item.price && (
                <p className="text-indigo-600 font-bold">{item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Explore;