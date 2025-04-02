import React from 'react';
import { Award, Heart, Target } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80"
            alt="Gym Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white text-center">About EliteFit</h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-12">
            At EliteFit, we believe that everyone deserves to live their healthiest, strongest life. Our mission is to provide personalized fitness solutions that empower individuals to achieve their goals and maintain lasting results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional trainers with years of experience and proven results.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600">Programs tailored to your unique needs and fitness goals.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful transformations and satisfied clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" 
                alt="Sarah Wilson"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">Sarah Wilson</h3>
              <p className="text-gray-600 mb-2">Head Trainer</p>
              <p className="text-sm text-gray-500">Certified Personal Trainer with 10+ years of experience</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" 
                alt="John Davis"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">John Davis</h3>
              <p className="text-gray-600 mb-2">Nutrition Specialist</p>
              <p className="text-sm text-gray-500">Registered Dietitian & Sports Nutritionist</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80" 
                alt="Mark Thompson"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">Mark Thompson</h3>
              <p className="text-gray-600 mb-2">Strength Coach</p>
              <p className="text-sm text-gray-500">Specialized in Strength & Conditioning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}