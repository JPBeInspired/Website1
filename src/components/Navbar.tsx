import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-6 py-4 bg-gray-900">
      <Link to="/" className="flex items-center">
        <Dumbbell className="h-8 w-8 text-white" />
        <span className="ml-2 text-2xl font-bold text-white">EliteFit</span>
      </Link>
      <div className="hidden md:flex space-x-8 text-white">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}