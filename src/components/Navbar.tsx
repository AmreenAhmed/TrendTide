import React from 'react';
import { Home, Search, Plus, Flame, User, LogOut } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, onLogout }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'post', label: 'Post', icon: Plus },
    { id: 'streaks', label: 'Streaks', icon: Flame },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
                TrendTide
              </h1>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-100 text-indigo-600 border-b-2 border-indigo-500'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-1" />
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={onLogout}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ml-4"
              >
                <LogOut className="w-5 h-5 mr-1" />
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              {navItems.slice(0, 3).map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex flex-col items-center py-2 px-1 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;