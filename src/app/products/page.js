'use client';

import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

const UpcomingProducts = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const developmentPillars = [
    {
      icon: '⚡',
      title: 'Modern Technology',
      description: 'We leverage the power of Vue.js, Laravel, and Flutter to create fast, responsive, and seamless experiences across web and mobile.'
    },
    {
      icon: '🔧',
      title: 'Clean, Maintainable Code',
      description: 'Our commitment to clean code and best practices means your solution is stable, easy to customize, and built to last.'
    },
    {
      icon: '🛡️',
      title: 'Industry-Standard Solutions',
      description: 'We don\'t reinvent the wheel; we perfect it. Our products are built on proven industry standards for maximum reliability and security.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Partnership & Support',
      description: 'Your success is our success. We provide dedicated support to ensure you get the most out of your DayOneSoft solution.'
    }
  ];

  const products = {
    ecommerce: {
      name: 'DayOne E-commerce',
      icon: '🛒',
      description: 'A comprehensive multi-vendor e-commerce platform designed to power your online marketplace.',
      features: [
        'Multi-vendor support with advanced seller management',
        'Advanced product management and inventory tracking',
        'Secure payment gateway integration with multiple providers',
        'Real-time analytics and reporting dashboard'
      ]
    },
    food: {
      name: 'DayOne Eats',
      icon: '🍽️',
      description: 'A complete food delivery ecosystem connecting restaurants, customers, and delivery partners.',
      features: [
        'Real-time order tracking and notifications',
        'Restaurant management dashboard with menu controls',
        'Driver and delivery logistics optimization',
        'Customer loyalty programs and promotions'
      ]
    },
    rides: {
      name: 'DayOne Rides',
      icon: '🚗',
      description: 'An intelligent ride-sharing platform that connects drivers and passengers seamlessly.',
      features: [
        'Dynamic pricing based on demand and location',
        'GPS-based ride matching and route optimization',
        'Driver and rider profiles with ratings system',
        'Safety features and emergency assistance'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Engineering the Next Generation of Business Solutions
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              At DayOneSoft, we are meticulously crafting a suite of powerful, scalable, and secure platforms designed to launch, run, and grow your business. Discover the foundation of your future success.
            </p>
          </div>
        </section>

        {/* Development Pillars Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Built on a Foundation of Excellence
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Our development philosophy is rooted in four core pillars that ensure every solution we build exceeds expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentPillars.map((pillar, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-secondary-50 hover:bg-primary-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{pillar.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Solutions Showcase */}
        <section className="py-20 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                A Solution for Every Ambition
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Explore our upcoming product suite, each designed to transform how businesses operate in their respective industries.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {Object.entries(products).map(([key, product]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <span className="mr-2">{product.icon}</span>
                  {product.name}
                </button>
              ))}
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">{products[activeTab].icon}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
                    {products[activeTab].name}
                  </h3>
                  <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    Coming Soon
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                {products[activeTab].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SaaS & Microservices Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Our Development Roadmap
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Starting Strong, Scaling Smart
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">Phase 1: Monolithic Foundation</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      We start by building robust, monolithic versions of each product. This approach allows us to deliver fully-functional solutions quickly while establishing a solid foundation for your business needs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">Phase 2: SaaS Evolution</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      Our roadmap includes evolving these solutions into powerful, multi-tenant SaaS platforms with microservices architecture. This future-proof approach ensures your investment grows with emerging technologies and scaling demands.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary-50 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-secondary-900 mb-6 text-center">Development Phases</h4>
                
                <div className="space-y-8">
                  {/* Phase 1 */}
                  <div>
                    <h5 className="text-sm font-medium text-secondary-700 mb-3">Phase 1: Monolithic Launch</h5>
                    <div className="bg-blue-100 border-2 border-blue-200 rounded-lg p-4">
                      <div className="bg-blue-200 rounded p-2 text-center text-sm text-blue-800">
                        Complete, Ready-to-Deploy Solution
                      </div>
                    </div>
                    <p className="text-xs text-secondary-500 mt-2">Fast deployment, proven architecture, immediate value</p>
                  </div>
                  
                  {/* Phase 2 */}
                  <div>
                    <h5 className="text-sm font-medium text-secondary-700 mb-3">Phase 2: SaaS & Microservices</h5>
                    <div className="bg-green-100 border-2 border-green-200 rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-green-200 rounded p-2 text-center text-xs text-green-800">Auth</div>
                        <div className="bg-green-200 rounded p-2 text-center text-xs text-green-800">Payment</div>
                        <div className="bg-green-200 rounded p-2 text-center text-xs text-green-800">Orders</div>
                        <div className="bg-green-200 rounded p-2 text-center text-xs text-green-800">Users</div>
                        <div className="bg-green-200 rounded p-2 text-center text-xs text-green-800">Analytics</div>
                        <div className="bg-green-200 rounded p-2 text-center text-xs text-green-800">API</div>
                      </div>
                    </div>
                    <p className="text-xs text-secondary-500 mt-2">Multi-tenant SaaS with independent, scalable services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be the First to Know
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Our new product suite is launching soon. Schedule a consultation to discuss your project needs and learn how DayOneSoft can be your technology partner from day one.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-primary-600 hover:bg-primary-50 shadow-lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UpcomingProducts;