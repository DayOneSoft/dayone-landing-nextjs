'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Captcha state
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' });
  const [captchaInput, setCaptchaInput] = useState('');
  
  // Generate new captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: (num1 + num2).toString() });
    setCaptchaInput('');
  };
  
  // Initialize captcha on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);
  
  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate captcha
    if (captchaInput !== captcha.answer) {
      setSubmitStatus('captcha_error');
      setIsSubmitting(false);
      generateCaptcha(); // Generate new captcha on error
      return;
    }

    try {
      const response = await fetch('https://n8n.e6am.com/webhook/1ea7cd17-24ba-46b2-8b44-c841f8e76f90', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        generateCaptcha(); // Generate new captcha after successful submission
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const solutions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "DayOne E-commerce",
      description: "A comprehensive multi-vendor marketplace platform with advanced vendor management, real-time analytics, and seamless payment processing."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "DayOne Eats",
      description: "A complete food delivery ecosystem connecting restaurants, customers, and delivery partners with real-time tracking and optimization."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      ),
      title: "DayOne Rides",
      description: "An intelligent ride-sharing platform with dynamic pricing, GPS optimization, and comprehensive safety features for drivers and passengers."
    }
  ];

  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Blazing-Fast User Experience",
      description: "Powered by Vue.js for instant-loading interfaces that keep customers engaged and boost conversion rates."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Rock-Solid & Secure Backend",
      description: "Built on Laravel, the industry standard for robust and secure applications that protect your business data."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "True Native Mobile Apps",
      description: "With Flutter, we deliver a seamless app experience on both iOS and Android from a single, efficient codebase."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Flexible Customization",
      description: "Our modern architecture allows for deeper, more stable customizations than legacy systems, adapting to your unique needs."
    }
  ];



  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-primary-50 via-white to-accent-50" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 id="hero-heading" className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary-900 leading-tight mb-6">
                Your Vision, Built on a Foundation of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600"> Modern Technology </span>
              </h1>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                We craft high-performance e-commerce, delivery, and booking systems using Vue.js, Laravel, and Flutter 
                to give your business a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="animate-slide-up" onClick={scrollToContact}>
                  Discuss Your Project
                </Button>
                <Button variant="outline" size="lg" className="animate-slide-up" onClick={() => window.location.href = '/products'}>
                  Explore Our Solutions
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl transform rotate-6 opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Software Development"
                  width={2070}
                  height={1380}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Our Solutions Section */}
        <section id="solutions" className="py-16 lg:py-24 bg-white" aria-labelledby="solutions-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="solutions-heading" className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-900 mb-4">
                Software Built for Growth
              </h2>
            <p className="text-xl text-secondary-600">
              Our upcoming product suite designed to power your business success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {solution.icon}
                </div>
                <Card.Title className="mb-3">{solution.title}</Card.Title>
                <Card.Description className="mb-6">
                  {solution.description}
                </Card.Description>
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/products'}>
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* The Modern Advantage Section */}
        <section id="features" className="py-16 lg:py-24 bg-secondary-50" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-900 mb-4">
                The Modern Advantage
              </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experience the benefits of our cutting-edge technology stack
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} hover className="text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <Card.Title className="text-center">{advantage.title}</Card.Title>
                <Card.Description className="text-center">
                  {advantage.description}
                </Card.Description>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* About Us Section */}
        <section id="about" className="py-16 lg:py-24 bg-white" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 id="about-heading" className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-900 mb-6">
                  Your &apos;Day One&apos; Technology Partner
                </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                At DayOneSoft, we believe every great business deserves a fresh start with the right technology foundation. 
                We&apos;re here from day one of your digital journey, whether you&apos;re launching a new venture or transforming an existing business.
              </p>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Our commitment goes beyond just building software – we build lasting partnerships. 
                With our modern technology stack and user-centric approach, we ensure your business 
                is equipped for sustainable growth and long-term success.
              </p>
              <Button variant="primary" size="lg" onClick={scrollToContact}>
                Start Your Journey
              </Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                width={2070}
                height={1380}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

        </div>
      </section>



        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-accent-600" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 id="cta-heading" className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to build on a better foundation?
            </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let&apos;s talk about how our technology can power your growth. The initial consultation is free, with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50" onClick={scrollToContact}>
              Schedule Your Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600" onClick={scrollToContact}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-24 bg-white" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contact-heading" className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-900 mb-4">
                Get in Touch
              </h2>
            <p className="text-xl text-secondary-600">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-secondary-700">hello@dayonesoft.com</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="https://wa.me/8801723019985" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-green-600 transition-colors duration-200 flex items-center">
                      <span>+880 1723 019985</span>
                      <svg className="w-4 h-4 ml-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="https://wa.me/8801759412381" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-green-600 transition-colors duration-200 flex items-center">
                      <span>+880 1759 412381</span>
                      <svg className="w-4 h-4 ml-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="https://wa.me/8801747413273" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-green-600 transition-colors duration-200 flex items-center">
                      <span>+880 1747 413273</span>
                      <svg className="w-4 h-4 ml-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-secondary-700">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
            <Card>
              <Card.Header>
                <Card.Title>Send us a message</Card.Title>
              </Card.Header>
              <Card.Body>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                  )}
                  {submitStatus === 'captcha_error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">Incorrect captcha answer. Please try again.</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-secondary-900"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-secondary-900"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-secondary-900"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-secondary-900"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Security Check: What is {captcha.num1} + {captcha.num2}?
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="number"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        className="w-24 px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-secondary-900"
                        placeholder="?"
                        required
                      />
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="px-3 py-2 text-sm text-primary-600 hover:text-primary-700 border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors"
                        title="Generate new question"
                      >
                        🔄
                      </button>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
