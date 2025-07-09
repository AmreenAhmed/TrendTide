import React, { useState } from 'react';
import { TrendingUp, Gift, Users } from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
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
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Brand and Features */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-16">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">TrendTide</span>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Share Trends, <span className="text-indigo-600">Earn Rewards</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Join the social platform where your shopping streaks turn into amazing rewards. Connect with trends, build streaks, and unlock exclusive benefits.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-lg text-gray-700">Discover trending products and content</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-lg text-gray-700">Earn points through shopping streaks</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-lg text-gray-700">Connect with like-minded shoppers</span>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="bg-gray-50 flex flex-col justify-center px-8 lg:px-16 py-12">
          <div className="max-w-md mx-auto w-full">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back!' : 'Join TrendTide'}
              </h2>
              <p className="text-gray-600">
                {isLogin ? 'Sign in to continue your streak' : 'Create your account to start earning'}
              </p>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Choose a username"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Enter your email"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 font-medium text-lg"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;