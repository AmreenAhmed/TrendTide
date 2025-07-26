import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TrendTide</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Stay trendy, shop smart. Join the social shopping revolution with streak-based rewards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 TrendTide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;