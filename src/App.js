import React, { useState, useEffect } from 'react';
import { Send, Bot, User, Brain, Heart, AlertTriangle, Loader2, Home, MessageCircle, Stethoscope, Menu, X, Star, Users, Shield, Clock, CheckCircle, ArrowRight, Github, Mail, Phone } from 'lucide-react';
import HomePage from './components/HomePage';
import MentalHealthChatbot from './components/MentalHealthChatbot';
import MedicalChatbot from './components/MedicalChatbot';

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const navigationItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'mental-health', name: 'Mental Health Chat', icon: Heart },
    { id: 'medical', name: 'Medical Chat', icon: Stethoscope }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'mental-health':
        return <MentalHealthChatbot />;
      case 'medical':
        return <MedicalChatbot />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40" style={{ fontFamily: 'Georgia' }}>
      {/* Navigation Header */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center group">
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-3 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-xl p-2 -m-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                    AI Health Assistant
                  </span>
                  <span className="hidden sm:block text-xs text-gray-500 font-medium tracking-wide">
                    Your Trusted Health Companion
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`group relative flex items-center space-x-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`p-1 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-white/20'
                      : 'group-hover:bg-blue-100/50'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide">{item.name}</span>

                  {/* Active indicator */}
                  {currentPage === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${
                      isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${
                      isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50 backdrop-blur-sm">
              <div className="px-4 py-6 space-y-3">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full group flex items-center space-x-4 px-5 py-4 rounded-2xl text-left font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-white/70 hover:shadow-md'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`p-2 rounded-xl transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-white/20'
                        : 'group-hover:bg-blue-100/70'
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-base font-semibold tracking-wide">{item.name}</span>

                    {/* Arrow indicator for active item */}
                    {currentPage === item.id && (
                      <div className="ml-auto">
                        <ArrowRight className="w-4 h-4 text-white/80" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="relative">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
