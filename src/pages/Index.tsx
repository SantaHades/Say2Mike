
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeatureSection from '@/components/FeatureSection';
import ChatInterface from '@/components/ChatInterface';
import MicButton from '@/components/MicButton';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ShoppingBag, Utensils, MessageCircle } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    // Add overscroll behavior for bounce effect on iOS
    document.body.style.overscrollBehaviorY = 'contain';
    document.documentElement.style.overscrollBehaviorY = 'contain';
    
    return () => {
      document.body.style.overscrollBehaviorY = 'auto';
      document.documentElement.style.overscrollBehaviorY = 'auto';
    };
  }, []);

  return (
    <div className="scroll-bounce">
      <NavBar />
      
      <Hero />
      
      <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
              Our Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Break Language Barriers While Traveling
            </h2>
            <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
              TravelVoicely helps you communicate effectively no matter where you are,
              making your travel experience smoother and more enjoyable.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover-lift group transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Chat</h3>
                <p className="text-gray-600 mb-4">
                  Speak in your language and be understood in theirs. Perfect for conversations with locals.
                </p>
                <a href="#realtime-chat" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover-lift group transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Store Assistant</h3>
                <p className="text-gray-600 mb-4">
                  Ask for what you need in stores without language barriers. Make shopping easier.
                </p>
                <a href="#store-assist" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover-lift group transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Utensils className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Food Ordering</h3>
                <p className="text-gray-600 mb-4">
                  Order food in your language at any restaurant. No more pointing at menus.
                </p>
                <a href="#order-food" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <FeatureSection
        id="realtime-chat"
        title="Real-time Multilingual Chat"
        subtitle="Feature 1"
        description="Speak naturally in your language and have your words instantly translated and displayed. Perfect for travelers exploring new countries and communicating with locals. Support for over 40 languages with accurate, context-aware translations."
        imagePosition="right"
        bgColor="bg-white"
      >
        <ChatInterface />
      </FeatureSection>
      
      <FeatureSection
        id="store-assist"
        title="Store Shopping Assistant"
        subtitle="Feature 2"
        description="Need to ask for a specific item or get help in a store? Just speak into your phone and let TravelVoicely translate your request. Store staff will understand exactly what you need, making shopping in foreign countries simple and stress-free."
        imagePosition="left"
        bgColor="bg-blue-50"
      >
        <div className="relative w-full max-w-sm mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">Store Assistant</h4>
                <p className="text-sm text-gray-500">Translate your requests to store staff</p>
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">Your request:</div>
              <div className="font-medium">I'm looking for a charger for my iPhone</div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-xl mb-6">
              <div className="text-sm text-blue-600 mb-1">Translated to Japanese:</div>
              <div className="font-medium">iPhoneの充電器を探しています</div>
            </div>
            
            <div className="flex justify-center">
              <MicButton />
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
        </div>
      </FeatureSection>
      
      <FeatureSection
        id="order-food"
        title="Restaurant Ordering Made Easy"
        subtitle="Feature 3"
        description="Order meals in restaurants without any language barriers. Speak your order in your native language, and TravelVoicely will translate it for the staff. Enjoy local cuisine without the frustration of miscommunication."
        imagePosition="right"
        bgColor="bg-white"
      >
        <div className="relative w-full max-w-sm mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Utensils className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-800">Food Ordering</h4>
                <p className="text-sm text-gray-500">Order food in your language</p>
              </div>
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl"></div>
              <div className="relative p-4 z-10">
                <div className="text-amber-800 font-medium mb-3">Menu</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-sm">
                    <div className="font-medium">Pasta Carbonara</div>
                    <div className="text-xs text-gray-500">$12.99</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg shadow-sm text-sm">
                    <div className="font-medium">Margherita Pizza</div>
                    <div className="text-xs text-gray-500">$14.99</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg shadow-sm text-sm">
                    <div className="font-medium">Caesar Salad</div>
                    <div className="text-xs text-gray-500">$8.99</div>
                  </div>
                  <div className="p-2 bg-white rounded-lg shadow-sm text-sm">
                    <div className="font-medium">Tiramisu</div>
                    <div className="text-xs text-gray-500">$6.99</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-xl mb-6">
              <div className="text-sm text-blue-600 mb-1">Your order (translated):</div>
              <div className="font-medium">
                "I'd like to order the Margherita Pizza and a Caesar Salad, please."
              </div>
            </div>
            
            <div className="flex justify-center">
              <MicButton />
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
        </div>
      </FeatureSection>
      
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Travel Without Language Barriers?
            </h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              Start using TravelVoicely today and make your next trip smoother, 
              more enjoyable, and free from communication challenges.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors hover-lift">
              Download Now
            </button>
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
