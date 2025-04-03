import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium Coaching Package",
    price: 299.99,
    image: "https://i.imgur.com/tfUwXFV.png",
    description: "8 personalised Online Coaching sessions with nutrition guidance",
    purchaseLink: "https://buy.stripe.com/6oEeW44qg28zfQsfYZ"
  },
  {
    id: 2,
    name: "Premium Personalised Program Package",
    price: 49.99,
    image: "https://i.imgur.com/t5XVkCw.png",
    description: "8 week personalised training program package with nutrition guidance",
    purchaseLink: "https://buy.stripe.com/6oEeW44qg28zfQsfYZ",
    popular: true,
    features: [
      "Personalised 8-week program",
      "Nutrition guidance & meal plans",
      "Video exercise tutorials",
      "Progress tracking tools"
    ]
  },
  {
    id: 3,
    name: "Coaching Package",
    price: 149.99,
    image: "https://i.imgur.com/DhQYpIV.png",
    description: "1-hour consultation with a personalised 4 week program and meal-prep guidance",
    purchaseLink: "https://buy.stripe.com/6oEeW44qg28zfQsfYZ"
  },
  {
    id: 4,
    name: "4 Week Program Package",
    price: 39.99,
    image: "https://i.imgur.com/0gCY9jB.png",
    description: "4 week personalised training program",
    purchaseLink: "https://buy.stripe.com/6oEeW44qg28zfQsfYZ"
  },
  {
    id: 5,
    name: "60 Minute Consultation",
    price: 99.99,
    image: "https://i.imgur.com/CEFt6hh.png",
    description: "1:1 online consultation",
    purchaseLink: "https://buy.stripe.com/6oEeW44qg28zfQsfYZ"
  },
  {
    id: 6,
    name: "Meal Plan Guidance",
    price: 29.99,
    image: "https://i.imgur.com/X4Tm6d9.png",
    description: "15min online meal plan guidance",
    purchaseLink: "https://buy.stripe.com/6oEeW44qg28zfQsfYZ"
  }
];

export function Shop() {
  return (
    <div className="min-h-screen bg-primary-50 pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`relative bg-white rounded-lg overflow-hidden shadow-sm flex flex-col transform transition duration-300 hover:scale-102 ${
                  product.popular ? 'scale-105 shadow-xl ring-2 ring-primary-300' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-primary-200 text-primary-900 px-4 py-1 rounded-full font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`p-6 flex flex-col flex-grow ${product.popular ? 'bg-gradient-to-b from-white to-primary-50' : ''}`}>
                  <h3 className="text-xl font-semibold mb-2 text-primary-700">{product.name}</h3>
                  <p className="text-primary-600 mb-4">{product.description}</p>
                  
                  {product.features && (
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-primary-600">
                          <Check className="h-5 w-5 text-primary-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className={`text-2xl font-bold ${product.popular ? 'text-primary-900' : 'text-primary-700'}`}>
                      ${product.price}
                    </span>
                    <a 
                      href={product.purchaseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg font-semibold transition duration-300 flex items-center whitespace-nowrap ${
                        product.popular 
                          ? 'bg-primary-700 text-white hover:bg-primary-800' 
                          : 'bg-primary-200 text-primary-900 hover:bg-primary-300'
                      }`}
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