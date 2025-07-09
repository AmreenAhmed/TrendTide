import React from 'react';
import { Flame, Gift, Trophy } from 'lucide-react';

interface StreakBarProps {
  currentStreak: number;
  totalPoints: number;
  nextReward: number;
  className?: string;
}

const StreakBar: React.FC<StreakBarProps> = ({ 
  currentStreak, 
  totalPoints, 
  nextReward, 
  className = '' 
}) => {
  const progress = (totalPoints % nextReward) / nextReward * 100;

  return (
    <div className={`bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{currentStreak} Day Streak</h3>
            <p className="text-sm text-gray-600">{totalPoints} points earned</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-amber-600">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">{nextReward - (totalPoints % nextReward)} to next reward</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500">Progress to next reward</span>
          <span className="text-xs text-gray-500">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Streak Milestones */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <Trophy className="w-3 h-3" />
          <span>Best: 15 days</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>🔥 Keep shopping to maintain your streak!</span>
        </div>
      </div>
    </div>
  );
};

export default StreakBar;