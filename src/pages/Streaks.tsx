import React from 'react';
import { Flame, Trophy, Gift, Star, ShoppingBag, TrendingUp } from 'lucide-react';
import StreakBadge from '../components/StreakBadge';

const Streaks: React.FC = () => {
  const rewards = [
    { id: 1, title: '10% Off Next Purchase', points: 100, available: true },
    { id: 2, title: 'Free Shipping', points: 150, available: true },
    { id: 3, title: 'Exclusive Product Access', points: 300, available: false },
    { id: 4, title: '$25 Store Credit', points: 500, available: false },
  ];

  const streakHistory = [
    { day: 'Today', purchases: 1, points: 50 },
    { day: 'Yesterday', purchases: 2, points: 100 },
    { day: '2 days ago', purchases: 1, points: 50 },
    { day: '3 days ago', purchases: 3, points: 150 },
    { day: '4 days ago', purchases: 1, points: 50 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Streaks</h1>
        <p className="text-gray-600">Keep shopping to maintain your streak and earn rewards!</p>
      </div>

      {/* Current Streak */}
      <div className="mb-8">
        <StreakBadge days={23} points={4680} level="gold" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="text-indigo-600" size={24} />
            </div>
            <span className="text-2xl font-bold text-indigo-600">47</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Total Purchases</h3>
          <p className="text-gray-600 text-sm">This month</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Star className="text-amber-600" size={24} />
            </div>
            <span className="text-2xl font-bold text-amber-600">4,680</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Total Points</h3>
          <p className="text-gray-600 text-sm">Available to redeem</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <span className="text-2xl font-bold text-green-600">23</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Longest Streak</h3>
          <p className="text-gray-600 text-sm">Personal record</p>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center space-x-2 mb-6">
          <Gift className="text-indigo-600" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Available Rewards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={`border-2 rounded-xl p-4 transition-all duration-200 ${
                reward.available
                  ? 'border-indigo-200 hover:border-indigo-400 cursor-pointer'
                  : 'border-gray-200 opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  reward.available
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {reward.points} pts
                </span>
              </div>
              
              {reward.available ? (
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  Redeem Now
                </button>
              ) : (
                <div className="w-full bg-gray-100 text-gray-500 py-2 px-4 rounded-lg text-center">
                  Not enough points
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Streak History */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Flame className="text-red-500" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Streak History</h2>
        </div>

        <div className="space-y-4">
          {streakHistory.map((entry, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div>
                <div className="font-medium text-gray-900">{entry.day}</div>
                <div className="text-sm text-gray-600">{entry.purchases} purchase{entry.purchases > 1 ? 's' : ''}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-indigo-600">+{entry.points} pts</div>
                <div className="text-xs text-gray-500">earned</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
            View Full History
          </button>
        </div>
      </div>

      {/* Progress to Next Level */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white mt-8">
        <h2 className="text-xl font-bold mb-4">Progress to Diamond Status</h2>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>4,680 / 10,000 points</span>
            <span>47%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div className="bg-white h-3 rounded-full" style={{ width: '47%' }}></div>
          </div>
        </div>
        <p className="text-sm opacity-90">
          Keep shopping to reach Diamond status and unlock exclusive benefits!
        </p>
      </div>
    </div>
  );
};

export default Streaks;