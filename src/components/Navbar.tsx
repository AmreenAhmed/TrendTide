import React from 'react';
import { Home, Search, Plus, Flame, User, LogOut } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, onLogout }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Search, label: 'Explore' },
    { id: 'post', icon: Plus, label: 'Post' },
    { id: 'streaks', icon: Flame, label: 'Streaks' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TrendTide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
            
            <button
              onClick={onLogout}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut size={20} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={onLogout}
              className="p-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-600'
                      : 'text-gray-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;