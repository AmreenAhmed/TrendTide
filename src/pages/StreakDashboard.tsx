import React from 'react';
import { Flame, Trophy, Gift, Star, Calendar, Award, TrendingUp } from 'lucide-react';
import StreakBar from '../components/StreakBar';
import { currentUser } from '../data/mockData';

const StreakDashboard: React.FC = () => {
  const rewardsHistory = [
    { id: 1, type: 'discount', value: '20% off', date: '2024-01-15', claimed: true },
    { id: 2, type: 'points', value: '500 points', date: '2024-01-10', claimed: true },
    { id: 3, type: 'badge', value: 'Shopping Pro', date: '2024-01-05', claimed: false },
    { id: 4, type: 'discount', value: '15% off', date: '2024-01-01', claimed: true },
  ];

  const availableRewards = [
    { id: 1, name: '25% Off Premium Brands', cost: 1000, type: 'discount' },
    { id: 2, name: 'Free Shipping for a Month', cost: 750, type: 'shipping' },
    { id: 3, name: 'Exclusive Access to Sales', cost: 500, type: 'access' },
    { id: 4, name: 'Double Points Weekend', cost: 1500, type: 'points' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Shopping Streaks</h1>
        <p className="text-gray-600">Track your streak, earn points, and unlock exclusive rewards</p>
      </div>

      {/* Main Streak Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Current Streak */}
        <div className="lg:col-span-2">
          <StreakBar
            currentStreak={currentUser.streak}
            totalPoints={currentUser.totalPoints}
            nextReward={500}
          />
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-600">Best Streak</span>
              </div>
              <span className="font-semibold text-gray-900">15 days</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">Total Rewards</span>
              </div>
              <span className="font-semibold text-gray-900">8</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">This Month</span>
              </div>
              <span className="font-semibold text-gray-900">3 purchases</span>
            </div>
          </div>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Streak Calendar</h3>
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 31 }).map((_, index) => {
            const day = index + 1;
            const isActive = day <= 12; // Mock active days
            const isToday = day === 12;
            return (
              <div
                key={day}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                  isToday
                    ? 'bg-indigo-500 text-white ring-2 ring-indigo-200'
                    : isActive
                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-600 mt-4">
          🔥 12 consecutive days • Keep shopping to maintain your streak!
        </p>
      </div>

      {/* Available Rewards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Available Rewards</h3>
            <Gift className="w-5 h-5 text-amber-500" />
          </div>
          <div className="space-y-4">
            {availableRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{reward.name}</h4>
                  <p className="text-sm text-gray-600">{reward.cost} points required</p>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentUser.totalPoints >= reward.cost
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={currentUser.totalPoints < reward.cost}
                >
                  {currentUser.totalPoints >= reward.cost ? 'Redeem' : 'Locked'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards History */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Rewards History</h3>
            <Award className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-4">
            {rewardsHistory.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{reward.value}</h4>
                  <p className="text-sm text-gray-600">{reward.date}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  reward.claimed
                    ? 'bg-green-100 text-green-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {reward.claimed ? 'Claimed' : 'Available'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Streak Tips */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Streak Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Shop regularly</h4>
              <p className="text-sm text-gray-600">Make at least one purchase every 24 hours to maintain your streak</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Use streak protection</h4>
              <p className="text-sm text-gray-600">Available after 7 days - protects you from losing your streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakDashboard;