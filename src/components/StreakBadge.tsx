import React from 'react';
import { Flame, Trophy, Star } from 'lucide-react';

interface StreakBadgeProps {
  days: number;
  points: number;
  level: 'bronze' | 'silver' | 'gold' | 'diamond';
}

const StreakBadge: React.FC<StreakBadgeProps> = ({ days, points, level }) => {
  const getLevelConfig = () => {
    switch (level) {
      case 'bronze':
        return { color: 'from-amber-600 to-yellow-600', icon: Star };
      case 'silver':
        return { color: 'from-gray-400 to-gray-600', icon: Star };
      case 'gold':
        return { color: 'from-yellow-400 to-yellow-600', icon: Trophy };
      case 'diamond':
        return { color: 'from-blue-400 to-indigo-600', icon: Trophy };
      default:
        return { color: 'from-amber-600 to-yellow-600', icon: Star };
    }
  };

  const { color, icon: LevelIcon } = getLevelConfig();

  return (
    <div className={`bg-gradient-to-r ${color} rounded-xl p-4 text-white shadow-lg`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Flame size={24} />
          <span className="text-lg font-bold">{days} Day Streak</span>
        </div>
        <LevelIcon size={20} />
      </div>
      
      <div className="text-sm opacity-90">
        <p>{points.toLocaleString()} points earned</p>
        <p className="capitalize">{level} Status</p>
      </div>
    </div>
  );
};

export default StreakBadge;