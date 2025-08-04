'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-secondary-900 mb-8">Terms of Service</h1>
            
            <div className="text-secondary-600 space-y-6">
              <p className="text-lg">
                Last updated: December 2024
              </p>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using DayOneSoft's services, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">2. Description of Service</h2>
                <p>
                  DayOneSoft provides software development services, including but not limited to web applications, 
                  mobile applications, and custom software solutions. We reserve the right to modify or discontinue 
                  any aspect of our services at any time.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">3. User Responsibilities</h2>
                <p>
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Respecting intellectual property rights</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">4. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by DayOneSoft and are protected 
                  by international copyright, trademark, and other intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works without our express written permission.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">5. Payment Terms</h2>
                <p>
                  Payment terms will be specified in individual project agreements. All fees are non-refundable unless 
                  otherwise stated. Late payments may result in suspension of services and additional charges.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">6. Limitation of Liability</h2>
                <p>
                  DayOneSoft shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                  resulting from your use of our services. Our total liability shall not exceed the amount paid by you 
                  for the specific service giving rise to the claim.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">7. Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice, for any 
                  reason whatsoever, including breach of these terms. Upon termination, your right to use the services 
                  will cease immediately.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Bangladesh, without 
                  regard to its conflict of law provisions.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes 
                  by posting the new terms on this page and updating the "Last updated" date.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;