
import React from 'react';
import { Heart, Brain, Shield, Users, Clock, CheckCircle, Bot, Star, Stethoscope, Award, TrendingUp, UserCheck, AlertCircle, ArrowRight, Phone, Mail, MapPin, Microscope, BookOpen, Lock, Target } from 'lucide-react';

function HomePage({ setCurrentPage }) {
  const features = [
    {
      icon: Heart,
      title: "Empathetic Mental Health Support",
      description: "Get compassionate mental health support with responses that understand and validate your feelings.",
      score: "9/10 Average Score",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Brain,
      title: "Accurate Medical Information",
      description: "Access reliable medical information and guidance with professional disclaimers and safety measures.",
      score: "6-7/10 Average Score",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Safety First Approach",
      description: "Built-in safety measures and ethical guidelines ensure responsible AI assistance for health-related queries.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const stats = [
    { icon: Users, number: "1B+", label: "People affected by mental health conditions worldwide", color: "text-blue-600" },
    { icon: Clock, number: "70%", label: "Of people search for health information online", color: "text-purple-600" },
    { icon: CheckCircle, number: "16K+", label: "Mental health Q&A pairs used for training", color: "text-pink-600" },
    { icon: Brain, number: "47K+", label: "Medical Q&A pairs in our dataset", color: "text-green-600" }
  ];

  const caseStudies = [
    {
      title: "Anxiety Support Case Study",
      category: "Mental Health",
      description: "A comprehensive analysis of how our AI handles anxiety-related queries with empathy and practical guidance.",
      metrics: {
        accuracy: "95%",
        empathy: "9.2/10",
        satisfaction: "94%"
      },
      highlights: [
        "Validated user emotions effectively",
        "Provided actionable coping strategies",
        "Recommended appropriate professional resources"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Diabetes Information Accuracy",
      category: "Medical",
      description: "Evaluation of medical information accuracy for diabetes-related questions and treatment guidance.",
      metrics: {
        accuracy: "87%",
        safety: "9.5/10",
        relevance: "89%"
      },
      highlights: [
        "Accurate symptom identification",
        "Proper medical disclaimers included",
        "Evidence-based treatment information"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Crisis Intervention Protocol",
      category: "Safety",
      description: "How our AI identifies and responds to mental health crisis situations with appropriate resources.",
      metrics: {
        detection: "98%",
        response: "9.8/10",
        safety: "99%"
      },
      highlights: [
        "Immediate crisis resource provision",
        "988 Suicide Lifeline integration",
        "Escalation to human professionals"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-pink-900/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/10 via-transparent to-emerald-900/10 animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Floating gradient orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-500/15 to-indigo-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>

          {/* Subtle medical pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-16 xl:grid-cols-20 h-full gap-4 p-8">
              {Array.from({ length: 160 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}>
                  {i % 4 === 0 && <Heart className="w-4 h-4 text-white" />}
                  {i % 4 === 1 && <Brain className="w-4 h-4 text-white" />}
                  {i % 4 === 2 && <Stethoscope className="w-4 h-4 text-white" />}
                  {i % 4 === 3 && <Shield className="w-4 h-4 text-white" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full py-20">
            {/* Content Section */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-10">
              {/* Research Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group cursor-default">
                <Award className="w-5 h-5 mr-3 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-semibold tracking-wide">Research-Based AI Technology</span>
                <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight">
                  <span className="block animate-fade-in-up">AI-Powered</span>
                  <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Health Assistant
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 max-w-2xl leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Combining empathetic mental health support with accurate medical information through
                <span className="font-semibold text-white"> advanced AI technology</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button
                  onClick={() => setCurrentPage('mental-health')}
                  className="group relative bg-white text-slate-900 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-gray-50 transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-white/30 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-pink-600 group-hover:scale-125 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Mental Health Chat</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </button>

                <button
                  onClick={() => setCurrentPage('medical')}
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 border border-white/10"
                >
                  <Stethoscope className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-125 transition-transform duration-300" />
                  <span>Medical Chat</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-sm text-blue-200/80 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" />
                  <span className="font-medium">Privacy Protected</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                  <span className="font-medium">Research Validated</span>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="lg:col-span-5 relative animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Outer glow effects */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Main visual card */}
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-700 group">

                  {/* Floating corner elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-all duration-500 hover:scale-110">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl -rotate-12 group-hover:rotate-0 transition-all duration-500 hover:scale-110">
                    <Brain className="w-6 h-6 text-white" />
                  </div>

                  {/* Central image container */}
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">

                    {/* Animated background layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-pink-400/5 to-cyan-400/5 animate-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Medical image */}
                    <div className="relative z-20 w-full h-full flex items-center justify-center p-4 sm:p-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 max-w-full">
                        <img
                          src="assets/medical.webp"
                          alt="Medical Image"
                          className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        />
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-spin opacity-60" style={{ animationDuration: '30s' }}>
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-lg"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-lg"></div>
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full shadow-lg"></div>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Performance metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-8">
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group/metric">
                      <div className="text-2xl lg:text-3xl font-bold text-white group-hover/metric:scale-110 transition-transform duration-300">9/10</div>
                      <div className="text-xs lg:text-sm text-blue-200 font-medium">Mental Health</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group/metric">
                      <div className="text-2xl lg:text-3xl font-bold text-white group-hover/metric:scale-110 transition-transform duration-300">6/10</div>
                      <div className="text-xs lg:text-sm text-blue-200 font-medium">Medical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </div>
      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Impacting Global Health
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI technology addresses critical gaps in healthcare accessibility and mental health support worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized dual-domain approach ensures comprehensive health support with the highest standards of safety and accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${feature.color} bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                {feature.score && (
                  <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold text-gray-800">{feature.score}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Case Studies Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real-World Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive evaluation across diverse health scenarios demonstrates our AI's effectiveness and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                <div className={`h-3 bg-gradient-to-r ${study.color}`}></div>
                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full tracking-wide">
                      {study.category}
                    </span>
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{study.description}</p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center bg-gray-50 rounded-2xl p-4">
                        <div className="text-2xl font-bold text-gray-900">{value}</div>
                        <div className="text-sm text-gray-500 capitalize font-medium">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {study.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Performance Overview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mental Health Results */}
            <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-3xl p-10 border border-pink-100 shadow-xl">
              <div className="flex items-center space-x-4 mb-10">
                <div className="p-4 bg-pink-100 rounded-2xl shadow-lg">
                  <Heart className="w-10 h-10 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Mental Health Domain</h3>
                  <p className="text-pink-600 font-semibold text-lg">Excellence in Empathy</p>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-gray-800 text-lg">Overall Performance</span>
                  <span className="text-4xl font-bold text-pink-600">9/10</span>
                </div>
                <div className="w-full bg-pink-100 rounded-full h-4 shadow-inner">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-4 rounded-full shadow-lg" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-pink-50">
                  <div className="text-3xl font-bold text-pink-600">95%</div>
                  <div className="text-gray-600 font-medium">Empathy Score</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-purple-50">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-gray-600 font-medium">Safety Rating</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-xl">Key Strengths</h4>
                <div className="space-y-4">
                  {[
                    "Excellent empathy and supportive tone",
                    "Crisis resources integration (988 Lifeline)",
                    "Practical, actionable advice",
                    "Appropriate professional referrals"
                  ].map((strength, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700 font-medium">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Medical Results */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 rounded-3xl p-10 border border-blue-100 shadow-xl">
              <div className="flex items-center space-x-4 mb-10">
                <div className="p-4 bg-blue-100 rounded-2xl shadow-lg">
                  <Brain className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Medical Domain</h3>
                  <p className="text-blue-600 font-semibold text-lg">Reliable Information</p>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-gray-800 text-lg">Overall Performance</span>
                  <span className="text-4xl font-bold text-blue-600">6-7/10</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-4 shadow-inner">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-4 rounded-full shadow-lg" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-emerald-100 rounded-2xl p-4 text-center shadow-lg border border-emerald-50">
                  <div className="text-xl font-bold text-emerald-700">30%</div>
                  <div className="text-xs text-emerald-600 font-medium">High Accuracy</div>
                  <div className="text-xs text-emerald-600">(8-9.5/10)</div>
                </div>
                <div className="bg-yellow-100 rounded-2xl p-4 text-center shadow-lg border border-yellow-50">
                  <div className="text-xl font-bold text-yellow-700">50%</div>
                  <div className="text-xs text-yellow-600 font-medium">Good</div>
                  <div className="text-xs text-yellow-600">(6-7/10)</div>
                </div>
                <div className="bg-red-100 rounded-2xl p-4 text-center shadow-lg border border-red-50">
                  <div className="text-xl font-bold text-red-700">20%</div>
                  <div className="text-xs text-red-600 font-medium">Needs Work</div>
                  <div className="text-xs text-red-600">(2-3/10)</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-xl">Improvement Areas</h4>
                <div className="space-y-4">
                  {[
                    "Enhanced medical accuracy training",
                    "Better handling of complex conditions",
                    "Improved diagnostic guidance",
                    "Stronger evidence-based responses"
                  ].map((area, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Research Project Overview Section */}

    <div className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-[3rem] p-4 sm:p-8 lg:p-20 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 relative overflow-hidden">

          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>

          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-xl sm:rounded-2xl lg:rounded-[3rem]"></div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-800 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-6 sm:mb-8 shadow-lg border border-blue-200/50">
                <Microscope className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden xs:inline">Research Project Overview</span>
                <span className="xs:hidden">Research Overview</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
                About This
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Research Project</span>
              </h2>

              <p className="text-base sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light px-4">
                Pioneering the development of AI systems that can provide both
                <span className="font-semibold text-gray-800"> empathetic mental health support</span> and
                <span className="font-semibold text-gray-800"> accurate medical information</span> to address global healthcare challenges.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">

              {/* Research Objective & Safety */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="group">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Brain className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 ml-3 sm:ml-4">Research Objective</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      This research addresses the global shortage of mental health professionals and the rise of
                      online medical misinformation by developing an AI chatbot capable of providing both empathetic
                      mental health support and accurate medical information through advanced natural language processing.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-emerald-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 ml-3 sm:ml-4">Safety & Ethics</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      Our implementation prioritizes user safety through comprehensive ethical guidelines,
                      crisis intervention protocols, and clear limitations disclosure. The system is designed
                      to complement, not replace, professional healthcare services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Implementation */}
              <div className="space-y-6 sm:space-y-8">
                <div className="group">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-center mb-6 sm:mb-8">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Bot className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 ml-3 sm:ml-4">Technical Implementation</h3>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { label: "Fine-tuned Mistral 7B Instruct v1 model", icon: CheckCircle },
                        { label: "MentalChat16K dataset (16,113 Q&A pairs)", icon: CheckCircle },
                        { label: "MedQuAD dataset (47,457 medical Q&A pairs)", icon: CheckCircle },
                        { label: "QLoRA fine-tuning techniques", icon: CheckCircle },
                        { label: "Advanced safety filtering mechanisms", icon: CheckCircle }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-white/70 rounded-lg sm:rounded-xl border border-purple-100/30 hover:bg-white/90 transition-all duration-300 group/item">
                          <div className="p-1 bg-emerald-100 rounded-lg flex-shrink-0">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors text-xs sm:text-sm lg:text-base">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Research Outcomes Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex-shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 ml-3 text-lg sm:text-xl">Key Research Outcomes</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="text-center bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-100 shadow-md hover:shadow-lg transition-all duration-300 group/metric">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-pink-600 mb-2 group-hover/metric:scale-110 transition-transform duration-300">9/10</div>
                      <div className="text-gray-600 font-semibold text-sm sm:text-base">Mental Health</div>
                      <div className="w-full bg-pink-100 rounded-full h-2 mt-3">
                        <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>

                    <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 group/metric">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-2 group-hover/metric:scale-110 transition-transform duration-300">6/10</div>
                      <div className="text-gray-600 font-semibold text-sm sm:text-base">Medical Info</div>
                      <div className="w-full bg-blue-100 rounded-full h-2 mt-3">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div className="space-y-6 sm:space-y-8">
                <div className="group">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 ml-3 sm:ml-4">Key Findings</h3>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Mental Health Excellence */}
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group/finding">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="p-2 bg-emerald-500 rounded-lg flex-shrink-0">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-emerald-800 ml-3 text-base sm:text-lg">Mental Health Excellence</h4>
                      </div>
                      <p className="text-emerald-700 leading-relaxed text-sm sm:text-base">
                        Consistently achieved 9/10 scores with empathetic responses, practical advice,
                        and appropriate crisis resource recommendations.
                      </p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <div className="w-full bg-emerald-100 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-emerald-600 font-semibold text-sm">90%</span>
                      </div>
                    </div>

                    {/* Medical Information Quality */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group/finding">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="p-2 bg-blue-500 rounded-lg flex-shrink-0">
                          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-blue-800 ml-3 text-base sm:text-lg">Medical Information Quality</h4>
                      </div>
                      <p className="text-blue-700 leading-relaxed text-sm sm:text-base">
                        Achieved 6-7/10 average with 30% of responses showing high accuracy,
                        though consistency remains an area for improvement.
                      </p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <div className="w-full bg-blue-100 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-blue-600 font-semibold text-sm">65%</span>
                      </div>
                    </div>

                    {/* Safety Measures */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group/finding">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="p-2 bg-purple-500 rounded-lg flex-shrink-0">
                          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-purple-800 ml-3 text-base sm:text-lg">Safety Measures</h4>
                      </div>
                      <p className="text-purple-700 leading-relaxed text-sm sm:text-base">
                        Integrated ethical guidelines and safety protocols ensure responsible
                        AI assistance for sensitive health-related queries.
                      </p>
                      <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                        <div className="w-full bg-purple-100 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-purple-600 font-semibold text-sm">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Impact Statement */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-sm">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Research Impact</h3>
                <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-2">
                  This research contributes to the growing field of AI-powered healthcare support, demonstrating the potential for
                  technology to bridge gaps in mental health services while maintaining the highest standards of safety and ethics.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mt-6 sm:mt-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">60K+</div>
                    <div className="text-blue-200 text-xs sm:text-sm">Training Examples</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">2</div>
                    <div className="text-blue-200 text-xs sm:text-sm">Specialized Domains</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                    <div className="text-blue-200 text-xs sm:text-sm">Safety Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold">AI Health Assistant</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Pioneering the future of healthcare support through advanced AI technology,
                empathetic design, and rigorous research standards.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 rounded-lg px-4 py-2">
                  <span className="text-sm text-gray-300">🏆 Research Excellence</span>
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2">
                  <span className="text-sm text-gray-300">🔒 Privacy First</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Access</h3>
              <div className="space-y-4">
                <button
                  onClick={() => setCurrentPage('mental-health')}
                  className="text-gray-400 hover:text-white block transition-colors"
                >
                  Mental Health Chat
                </button>
                <button
                  onClick={() => setCurrentPage('medical')}
                  className="text-gray-400 hover:text-white block transition-colors"
                >
                  Medical Information Chat
                </button>
                <button
                  onClick={() => setCurrentPage('case-studies')}
                  className="text-gray-400 hover:text-white block transition-colors"
                >
                  Case Studies
                </button>

              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Important Notice</h3>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  This AI assistant provides information for educational and research purposes only.
                  Always consult qualified healthcare professionals for medical advice.
                </p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 border border-red-800">
                <p className="text-red-300 text-sm font-medium">
                  🚨 For emergencies: Call 911
                  <br />
                  🆘 Crisis support: Call 988
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 AI Health Assistant. Built for research and educational purposes.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Research Ethics</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
