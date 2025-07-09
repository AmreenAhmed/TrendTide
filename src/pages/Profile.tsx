import React, { useState } from 'react';
import { Edit2, Settings, Grid, BookOpen, Tag, User } from 'lucide-react';
import StreakBar from '../components/StreakBar';
import { currentUser, mockPosts } from '../data/mockData';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isEditing, setIsEditing] = useState(false);

  const userPosts = mockPosts.filter(post => post.user.username === currentUser.username);

  const tabs = [
    { id: 'posts', label: 'Posts', icon: Grid },
    { id: 'saved', label: 'Saved', icon: BookOpen },
    { id: 'tagged', label: 'Tagged', icon: Tag }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
              <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
            {currentUser.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">@{currentUser.username}</h1>
                <p className="text-gray-600 mt-1">{currentUser.bio}</p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">{currentUser.posts}</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{currentUser.followers.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{currentUser.following.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Streak Information */}
      <StreakBar
        currentStreak={currentUser.streak}
        totalPoints={currentUser.totalPoints}
        nextReward={500}
        className="mb-6"
      />

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg">
        <div className="border-b border-gray-200">
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center px-4 py-3 font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <div
                    key={post.id}
                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Grid className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                  <p className="text-gray-600">Share your first post to get started!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No saved posts</h3>
              <p className="text-gray-600">Save posts you love to view them later!</p>
            </div>
          )}

          {activeTab === 'tagged' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Tag className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No tagged posts</h3>
              <p className="text-gray-600">Posts you're tagged in will appear here!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;