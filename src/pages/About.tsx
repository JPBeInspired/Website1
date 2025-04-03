import React from 'react';
import { Award, Heart, Target } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="https://i.imgur.com/2HzBNlE.png"
            alt="Gym Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white text-center">About Train with Zoe</h1>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-700">My Mission</h2>
          <p className="text-lg text-primary-600 mb-12">
            At Train with Zoe, I believe that everyone deserves to live their healthiest, strongest life. My mission is to provide personalised fitness solutions that empower individuals to achieve their goals and maintain lasting results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-semibold mb-2 text-primary-700">Expert Guidance</h3>
              <p className="text-primary-600">Professional training with years of experience and proven results.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-semibold mb-2 text-primary-700">Personalised Care</h3>
              <p className="text-primary-600">Programs tailored to your unique needs and fitness goals.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="font-semibold mb-2 text-primary-700">Proven Results</h3>
              <p className="text-primary-600">Track record of successful transformations and satisfied clients.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}