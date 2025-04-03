import React from 'react';
import { Dumbbell, Users, Calendar, Star } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-primary-50">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://i.imgur.com/yGdr1QH.jpeg"
            alt="Zoe Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
          <p className="text-xl md:text-2xl text-white mb-8"></p>
          <a 
            href="https://buy.stripe.com/14k6py7CsbJ96fScMM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-200 text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-primary-300 transition duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8 text-primary-700">Meet Zoe</h2>
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary-200 ring-offset-4">
              <img 
                src="https://i.imgur.com/sHvyIZv.png"
                alt="Zoe"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg text-primary-700 mb-6">
              Hey! I'm Zoe – online coach, fitness mentor, and the biggest believer in your potential.
            </p>
            <p className="text-lg text-primary-700 mb-6">
              I wasn't always living this life. In fact, I started just like many of my clients – overwhelmed, stuck in the 9-to-5 grind, and craving something more. Fitness began as my personal escape – a way to manage stress, build confidence, and reconnect with myself. But over time, that "escape" became my purpose.
            </p>
            <p className="text-lg text-primary-700">
              Fast forward to today – I've built a thriving online coaching business right here from sunny Brisbane. I work with incredible women and men across Australia (and beyond), helping them cut through the confusion, ditch the quick fixes, and finally take control of their health – sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-700">How I Can Help You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="bg-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Online Coaching</h3>
              <p className="text-primary-600">Personalised training programs designed for your goals, lifestyle, and available equipment.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="bg-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Nutrition Guidance</h3>
              <p className="text-primary-600">Sustainable nutrition coaching that fits your lifestyle and helps you reach your goals.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="bg-primary-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Community Support</h3>
              <p className="text-primary-600">Join a supportive community of like-minded individuals on their fitness journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-700">Client Transformations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.imgur.com/KYO3a3T.png" 
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-primary-700">Emma, Brisbane</h4>
                  <div className="flex text-primary-200">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-primary-600">"Working with Zoe has been life-changing. Her approach to fitness and nutrition is practical, sustainable, and gets results. I've never felt stronger or more confident!"</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.imgur.com/sT8dM9b.png" 
                  alt="Client"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-primary-700">James, Melbourne</h4>
                  <div className="flex text-primary-200">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-primary-600">"Despite being in a different city, Zoe's online coaching has been incredibly effective. Her programs are detailed, and the support is outstanding!"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}