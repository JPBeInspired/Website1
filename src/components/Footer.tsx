import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-700 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img 
              src="https://i.imgur.com/Fqh31Xe.png" 
              alt="Train with Zoe Logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-2xl font-bold">Train with Zoe</span>
          </div>
          <p className="text-primary-100">Transform your life with expert online coaching from one of Brisbane's leading personal trainers.</p>
          <div className="flex space-x-4 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-primary-100">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/shop" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-primary-100">
            <li>Online Coaching</li>
            <li>Nutrition Plans</li>
            <li>Custom Workouts</li>
            <li>Progress Tracking</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-primary-600 text-center text-primary-100">
        <p>&copy; 2025 Train with Zoe. All rights reserved.</p>
      </div>
    </footer>
  );
}