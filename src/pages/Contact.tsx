import React from 'react';

export function Contact() {
  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white text-center">Get in Touch</h1>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-primary-700">Send me a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent h-32"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary-200 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary-300 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}