import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Training Package",
    price: 299,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    description: "8 personalized training sessions with nutrition guidance"
  },
  {
    id: 2,
    name: "Resistance Band Set",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80",
    description: "Complete set of professional-grade resistance bands"
  },
  {
    id: 3,
    name: "Nutrition Consultation",
    price: 149,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80",
    description: "1-hour consultation with meal planning"
  },
  {
    id: 4,
    name: "EliteFit Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80",
    description: "32oz insulated stainless steel bottle"
  },
  {
    id: 5,
    name: "Training Mat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
    description: "High-density exercise mat with carrying strap"
  },
  {
    id: 6,
    name: "Group Class Package",
    price: 199,
    image: "https://images.unsplash.com/photo-1571931740177-b3c8af3f3678?auto=format&fit=crop&q=80",
    description: "10 group fitness classes of your choice"
  }
];

export function Shop() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
            alt="Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white text-center">Shop</h1>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <a 
                      href="https://buy.stripe.com/14k6py7CsbJ96fScMM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300 flex items-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}