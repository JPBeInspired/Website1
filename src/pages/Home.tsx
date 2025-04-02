import React from 'react';
import { Dumbbell, Users, Calendar, Star } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80"
            alt="Zoe Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Train With Zoe</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Your journey to a stronger, healthier you starts here</p>
          <a 
            href="https://buy.stripe.com/14k6py7CsbJ96fScMM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8">Meet Zoe</h2>
            <img 
              src="https://images.unsplash.com/photo-1609899537878-39d6f0d4ad04?auto=format&fit=crop&q=80"
              alt="Zoe"
              className="w-48 h-48 rounded-full object-cover mx-auto mb-8"
            />
            <p className="text-lg text-gray-600 mb-6">
              Hey! I'm Zoe – online coach, fitness mentor, and the biggest believer in your potential.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I wasn't always living this life. In fact, I started just like many of my clients – overwhelmed, stuck in the 9-to-5 grind, and craving something more. Fitness began as my personal escape – a way to manage stress, build confidence, and reconnect with myself. But over time, that "escape" became my purpose.
            </p>
            <p className="text-lg text-gray-600">
              Fast forward to today – I've built a thriving online coaching business right here from sunny Brisbane. I work with incredible women and men across Australia (and beyond), helping them cut through the confusion, ditch the quick fixes, and finally take control of their health – sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How I Can Help You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Online Coaching</h3>
              <p className="text-gray-600">Personalized training programs designed for your goals, lifestyle, and available equipment.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nutrition Guidance</h3>
              <p className="text-gray-600">Sustainable nutrition coaching that fits your lifestyle and helps you reach your goals.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">Join a supportive community of like-minded individuals on their fitness journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Client Transformations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" 
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Emma, Brisbane</h4>
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"Working with Zoe has been life-changing. Her approach to fitness and nutrition is practical, sustainable, and gets results. I've never felt stronger or more confident!"</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">James, Melbourne</h4>
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"Despite being in a different city, Zoe's online coaching has been incredibly effective. Her programs are detailed, and the support is outstanding!"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}