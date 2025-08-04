'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-secondary-900 mb-8">Cookie Policy</h1>
            
            <div className="text-secondary-600 space-y-6">
              <p className="text-lg">
                Last updated: December 2024
              </p>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">2. How We Use Cookies</h2>
                <p>
                  DayOneSoft uses cookies to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your browsing experience</li>
                  <li>Analyze website traffic and performance</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Essential Cookies</h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable basic functions like 
                      page navigation and access to secure areas of the website.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Analytics Cookies</h3>
                    <p>
                      These cookies help us understand how visitors interact with our website by collecting and reporting 
                      information anonymously. This helps us improve our website&apos;s performance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Functional Cookies</h3>
                    <p>
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences 
                      and providing personalized content.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-2">Marketing Cookies</h3>
                    <p>
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements 
                      for individual users.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">4. Third-Party Cookies</h2>
                <p>
                  We may use third-party services such as Google Analytics, social media plugins, and advertising networks 
                  that may place cookies on your device. These third parties have their own privacy policies and cookie policies.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">5. Managing Cookies</h2>
                <p>
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Delete existing cookies from your browser</li>
                  <li>Block cookies from specific websites</li>
                  <li>Use browser extensions that manage cookies</li>
                </ul>
                <p className="mt-4">
                  Please note that disabling cookies may affect the functionality of our website and your user experience.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">6. Cookie Retention</h2>
                <p>
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                  <li><strong>Analytics cookies:</strong> Typically retained for 2 years</li>
                  <li><strong>Marketing cookies:</strong> Retention periods vary by provider</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">7. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. 
                  We will notify you of any significant changes by posting the updated policy on our website.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-4">
                  <p><strong>Email:</strong> hello@dayonesoft.com</p>
                  <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                  <p><strong>Phone:</strong> +880 1723 019985</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;