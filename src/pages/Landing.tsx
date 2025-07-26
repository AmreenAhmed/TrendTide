import React, { useState } from 'react';
import { Flame, ShoppingBag, Users, Trophy } from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-3xl font-bold text-gray-900">TrendTide</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Stay Trendy. <br />
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Shop Smart.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Join the social shopping revolution. Share your style, discover trends, 
                and earn rewards with every purchase streak.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Social Feed</h3>
                  <p className="text-sm text-gray-600">Share and discover trending content</p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ShoppingBag className="text-amber-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Smart Shopping</h3>
                  <p className="text-sm text-gray-600">Shop directly from posts</p>
                </div>

                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Flame className="text-red-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Streak Rewards</h3>
                  <p className="text-sm text-gray-600">Earn points for shopping streaks</p>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="max-w-md mx-auto w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {isLoginMode ? 'Welcome Back' : 'Join TrendTide'}
                  </h2>
                  <p className="text-gray-600">
                    {isLoginMode ? 'Sign in to your account' : 'Create your account'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLoginMode && (
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        placeholder="@yourusername"
                        required={!isLoginMode}
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    {isLoginMode ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setIsLoginMode(!isLoginMode)}
                    className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
                  >
                    {isLoginMode ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-xs text-gray-500">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">2M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">50M+</div>
              <div className="text-gray-600">Posts Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">$100M+</div>
              <div className="text-gray-600">Shopping Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-gray-600">Streaks Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;