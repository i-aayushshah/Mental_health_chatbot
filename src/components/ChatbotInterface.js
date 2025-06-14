import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, AlertTriangle, Loader2, CheckCircle } from 'lucide-react';

function ChatbotInterface({ title, description, icon: Icon, iconColor, accentColor, domain, examples, features, performance }) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState('https://1a8c-35-240-255-120.ngrok-free.app'); // Your working endpoint
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Test connection to the API endpoint using fetch
  const testConnection = async () => {
    if (!apiEndpoint.trim()) {
      alert('Please enter your API endpoint URL');
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${apiEndpoint}/api/status`, {
        method: 'GET',
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Connection test successful:', data);
        setIsConnected(true);
        setMessages([{
          role: 'system',
          content: `✅ Connected to ${title.toLowerCase()} successfully! Status: ${data.status}. You can now start asking questions.`,
          timestamp: new Date().toLocaleTimeString(),
        }]);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Connection error:', error);
      alert(`Failed to connect: ${error.message}. Please check your endpoint URL.`);
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!query.trim() || !isConnected) return;

    const userMessage = {
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(`${apiEndpoint}/api/chat`, {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query.trim(),
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data || !data.response) {
        throw new Error('Invalid response from server');
      }

      const botMessage = {
        role: 'bot',
        content: data.response,
        domain: data.domain,
        confidence: data.confidence,
        safety_applied: data.safety_applied,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        role: 'bot',
        content: `Sorry, I encountered an error: ${error.message}. Please try again or check your connection.`,
        timestamp: new Date().toLocaleTimeString(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleExampleClick = (example) => {
    if (isConnected && !isLoading) {
      setQuery(example);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className={`p-3 bg-gradient-to-r from-${accentColor}-500 to-${accentColor}-600 rounded-xl`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Connection Setup */}
              {!isConnected && (
                <div className="bg-yellow-50 border-b border-yellow-200 p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Connect to your chatbot</span>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={apiEndpoint}
                      onChange={(e) => setApiEndpoint(e.target.value)}
                      placeholder="Enter your API endpoint (e.g., https://your-endpoint.ngrok-free.app)"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={testConnection}
                      disabled={isLoading}
                      className={`px-4 py-2 bg-${accentColor}-600 text-white rounded-lg hover:bg-${accentColor}-700 disabled:opacity-50 flex items-center space-x-2`}
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                      <span>Connect</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Connection Status */}
              {isConnected && (
                <div className="bg-green-50 border-b border-green-200 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-800 font-medium">Connected to chatbot</span>
                    <button
                      onClick={() => {
                        setIsConnected(false);
                        setMessages([]);
                      }}
                      className="ml-auto text-green-600 hover:text-green-800 text-sm underline"
                    >
                      Change endpoint
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.length === 0 && isConnected && (
                  <div className="text-center text-gray-500 py-8">
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${iconColor}`} />
                    <p className="text-lg font-medium mb-2">Hello! I'm your {domain.replace('_', ' ')} assistant</p>
                    <p className="text-sm mb-4">Try asking one of these example questions:</p>
                    <div className="grid grid-cols-1 gap-2 max-w-md mx-auto">
                      {examples.slice(0, 2).map((example, index) => (
                        <button
                          key={index}
                          onClick={() => handleExampleClick(example)}
                          className={`text-left p-2 bg-${accentColor}-50 hover:bg-${accentColor}-100 rounded-lg text-sm text-${accentColor}-700 transition-colors`}
                          disabled={!isConnected || isLoading}
                        >
                          "{example}"
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-xl p-4 ${
                      message.role === 'user'
                        ? `bg-${accentColor}-600 text-white ml-auto`
                        : message.role === 'system'
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : message.isError
                        ? 'bg-red-100 text-red-800 border border-red-200'
                        : 'bg-white border border-gray-200 shadow-sm'
                    }`}>
                      {/* Message Header */}
                      <div className="flex items-center space-x-2 mb-2">
                        {message.role === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : message.role === 'system' ? (
                          <AlertTriangle className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                        <span className="text-xs opacity-75">{message.timestamp}</span>
                      </div>

                      {/* Message Content */}
                      <div className="whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </div>

                      {/* Bot Message Metadata */}
                      {message.role === 'bot' && message.domain && (
                        <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
                          <div className="flex items-center space-x-2">
                            <span className={`flex items-center space-x-1 ${iconColor}`}>
                              <Icon className="w-4 h-4" />
                              <span className="capitalize">{message.domain.replace('_', ' ')}</span>
                            </span>
                            <span>•</span>
                            <span>Confidence: {(message.confidence * 100).toFixed(1)}%</span>
                          </div>
                          {message.safety_applied && (
                            <span className="text-orange-600 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3" />
                              <span>Safety measures applied</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-3">
                      <Loader2 className={`w-5 h-5 animate-spin text-${accentColor}-600`} />
                      <span className="text-gray-600">Thinking...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <div className="p-6 bg-white border-t border-gray-200">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      isConnected
                        ? `Ask me about ${domain.replace('_', ' ')} questions...`
                        : 'Please connect to your chatbot first'
                    }
                    disabled={!isConnected || isLoading}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!isConnected || isLoading || !query.trim()}
                    className={`px-6 py-3 bg-${accentColor}-600 text-white rounded-lg hover:bg-${accentColor}-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center space-x-2`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 mt-3 text-center">
                  🔒 This AI assistant provides information for educational purposes only.
                  Always consult healthcare professionals for medical advice.
                  For emergencies, call 911.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Example Questions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Questions</h3>
              <div className="space-y-2">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(example)}
                    disabled={!isConnected || isLoading}
                    className={`w-full text-left p-3 bg-${accentColor}-50 hover:bg-${accentColor}-100 rounded-lg text-sm text-${accentColor}-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    "{example}"
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className={`w-4 h-4 ${iconColor} mt-0.5 flex-shrink-0`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Score</span>
                    <span className={`text-sm font-bold ${iconColor}`}>{performance.score}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-${accentColor}-600 h-2 rounded-full`}
                      style={{
                        width: accentColor === 'pink' ? '90%' : '65%',
                      }}
                    ></div>
                  </div>
                </div>

                {performance.empathy && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Empathy Score:</span> {performance.empathy}
                  </div>
                )}

                {performance.precision && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Precision:</span> {performance.precision}
                  </div>
                )}

                {performance.f1 && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">F1 Score:</span> {performance.f1}
                  </div>
                )}

                {performance.distribution && (
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Score Distribution:</span>
                    <p className="mt-1">{performance.distribution}</p>
                  </div>
                )}

                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Strengths:</h4>
                  <ul className="space-y-1">
                    {performance.strengths.slice(0, 3).map((strength, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start space-x-1">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotInterface;
