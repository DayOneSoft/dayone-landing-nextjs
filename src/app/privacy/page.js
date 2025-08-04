'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-secondary-900 mb-8">Privacy Policy</h1>
            
            <div className="text-secondary-600 space-y-6">
              <p className="text-lg">
                Last updated: December 2024
              </p>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">1. Information We Collect</h2>
                <p>
                  At DayOneSoft, we collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, and any 
                  other information you choose to provide.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about products, services, and events</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy. We may share your information with trusted third parties who assist us 
                  in operating our website and conducting our business.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">5. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. You may also opt out of certain 
                  communications from us. To exercise these rights, please contact us using the information provided below.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">6. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                  privacy policy on this page and updating the "Last updated" date.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPolicy;