import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Dumbbell className="h-8 w-8" />
            <span className="ml-2 text-2xl font-bold">Train With Zoe</span>
          </div>
          <p className="text-gray-400">Transform your life with expert online coaching from Brisbane's leading personal trainer.</p>
          <div className="flex space-x-4 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/shop" className="hover:text-white">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Online Coaching</li>
            <li>Nutrition Plans</li>
            <li>Custom Workouts</li>
            <li>Progress Tracking</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Brisbane, QLD</li>
            <li>hello@trainwithzoe.com</li>
            <li>Available Mon-Fri</li>
            <li>9:00 AM - 5:00 PM AEST</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Train With Zoe. All rights reserved.</p>
      </div>
    </footer>
  );
}