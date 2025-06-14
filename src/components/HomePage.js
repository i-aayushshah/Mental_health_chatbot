import React from 'react';
import { Heart, Brain, Shield, Users, Clock, CheckCircle, Bot, Star, Stethoscope } from 'lucide-react';

function HomePage({ setCurrentPage }) {
  const features = [
    {
      icon: Heart,
      title: "Empathetic Mental Health Support",
      description: "Get compassionate, 24/7 mental health support with responses that understand and validate your feelings.",
      score: "9/10 Average Score",
      color: "text-pink-600"
    },
    {
      icon: Brain,
      title: "Accurate Medical Information",
      description: "Access reliable medical information and guidance with professional disclaimers and safety measures.",
      score: "6-7/10 Average Score",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Safety First Approach",
      description: "Built-in safety measures and ethical guidelines ensure responsible AI assistance for health-related queries.",
      color: "text-green-600"
    }
  ];

  const stats = [
    { icon: Users, number: "1B+", label: "People affected by mental health conditions worldwide" },
    { icon: Clock, number: "70%", label: "Of people search for health information online" },
    { icon: CheckCircle, number: "16K+", label: "Mental health Q&A pairs used for training" },
    { icon: Brain, number: "47K+", label: "Medical Q&A pairs in our dataset" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Health Assistant
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Combining empathetic mental health support with accurate medical information through advanced AI technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('mental-health')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Try Mental Health Chat</span>
              </button>
              <button
                onClick={() => setCurrentPage('medical')}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center space-x-2"
              >
                <Stethoscope className="w-5 h-5" />
                <span>Try Medical Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our chatbot combines two specialized domains to provide comprehensive health support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${feature.color} bg-opacity-10`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                {feature.score && (
                  <div className="inline-flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-700">{feature.score}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research & Evaluation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our model has been rigorously tested and evaluated across both domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mental Health Results */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
                <h3 className="text-2xl font-bold text-gray-900">Mental Health Domain</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Performance</span>
                  <span className="text-sm font-bold text-pink-600">9/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Excellent empathy and supportive tone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Crisis resources integration (988 Lifeline)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Practical, actionable advice</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 italic">
                  "For anxiety queries, responses validated emotions, suggested coping strategies,
                  and recommended professional help, consistently scoring 9-10 across all criteria."
                </p>
              </div>
            </div>

            {/* Medical Results */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Medical Domain</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Performance</span>
                  <span className="text-sm font-bold text-blue-600">6-7/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-green-100 rounded-lg p-3">
                  <div className="text-lg font-bold text-green-700">30%</div>
                  <div className="text-xs text-green-600">High Accuracy</div>
                  <div className="text-xs text-green-600">(8-9.5/10)</div>
                </div>
                <div className="bg-yellow-100 rounded-lg p-3">
                  <div className="text-lg font-bold text-yellow-700">50%</div>
                  <div className="text-xs text-yellow-600">Good</div>
                  <div className="text-xs text-yellow-600">(6-7/10)</div>
                </div>
                <div className="bg-red-100 rounded-lg p-3">
                  <div className="text-lg font-bold text-red-700">20%</div>
                  <div className="text-xs text-red-600">Needs Improvement</div>
                  <div className="text-xs text-red-600">(2-3/10)</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 italic">
                  "High-scoring responses provided accurate information about conditions like migraines
                  and diabetes, while maintaining professional disclaimers."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Objective</h3>
                <p className="text-gray-600 mb-6">
                  This research aims to develop an AI chatbot that can provide both empathetic mental health support
                  and accurate medical information, addressing the global shortage of mental health professionals
                  and the rise of online medical misinformation.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Implementation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Fine-tuned Mistral 7B Instruct v1 model</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>MentalChat16K dataset (16,113 Q&A pairs)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>MedQuAD dataset (47,457 medical Q&A pairs)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>QLoRA fine-tuning techniques</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Findings</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Mental Health Excellence</h4>
                    <p className="text-green-700 text-sm">
                      Consistently achieved 9/10 scores with empathetic responses, practical advice,
                      and appropriate crisis resource recommendations.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Medical Information Quality</h4>
                    <p className="text-blue-700 text-sm">
                      Achieved 6-7/10 average with 30% of responses showing high accuracy,
                      though consistency remains an area for improvement.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Safety Measures</h4>
                    <p className="text-purple-700 text-sm">
                      Integrated ethical guidelines and safety protocols ensure responsible
                      AI assistance for sensitive health-related queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">AI Health Assistant</span>
              </div>
              <p className="text-gray-400">
                Advanced AI technology for mental health support and medical information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block">Mental Health Chat</a>
                <a href="#" className="text-gray-400 hover:text-white block">Medical Chat</a>
                <a href="#" className="text-gray-400 hover:text-white block">About Project</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Important Notice</h3>
              <p className="text-gray-400 text-sm">
                This AI assistant provides information for educational purposes only.
                Always consult healthcare professionals for medical advice.
                For emergencies, call 911.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 AI Health Assistant. Built for research and educational purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
