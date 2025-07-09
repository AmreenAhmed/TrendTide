import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent mb-4">
              TrendTide
            </h3>
            <p className="text-gray-600 mb-4">
              Stay trendy. Shop smart. Connect with friends and discover the latest trends while earning rewards through our unique shopping streak system.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 TrendTide. All rights reserved. Built with ❤️ for the modern shopper.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;