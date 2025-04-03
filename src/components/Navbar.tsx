import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="fixed w-full top-4 z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 rounded-full shadow-lg flex justify-between items-center px-8 py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="https://i.imgur.com/Fqh31Xe.png" 
            alt="Train with Zoe Logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-2xl font-bold text-primary-900">Train with Zoe</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-primary-900 hover:text-primary-700 font-medium transition duration-300">Home</Link>
          <Link to="/about" className="text-primary-900 hover:text-primary-700 font-medium transition duration-300">About</Link>
          <Link to="/shop" className="text-primary-900 hover:text-primary-700 font-medium transition duration-300">Services</Link>
          <Link to="/contact" className="text-primary-900 hover:text-primary-700 font-medium transition duration-300">Contact</Link>
        </div>
      </nav>
    </div>
  );
}