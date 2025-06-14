import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, AlertTriangle, Loader2, CheckCircle, Settings, Wifi, WifiOff, X, AlertCircle } from 'lucide-react';

// Toast Component
function Toast({ toast, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onClose]);

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className={`${getToastStyles()} border rounded-lg p-4 shadow-lg backdrop-blur-sm animate-in slide-in-from-right-full duration-300`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="font-semibold text-sm mb-1">{toast.title}</h4>
          )}
          <p className="text-sm leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={() => onClose(toast.id)}
          className="flex-shrink-0 ml-2 p-1 rounded-md hover:bg-black/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Toast Container Component
function ToastContainer({ toasts, onClose }) {
  return (
    <div className="fixed top-24 sm:top-24 right-2 sm:right-4 z-[999999] space-y-2 sm:space-y-3 w-[calc(100vw-1rem)] sm:w-96 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast toast={toast} onClose={onClose} />
        </div>
      ))}
    </div>
  );
}
function ChatbotInterface({ title, description, icon: Icon, iconColor, accentColor, domain, examples, features, performance }) {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [toasts, setToasts] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Toast management functions
  const addToast = (toast) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const testConnection = async () => {
    if (!apiEndpoint.trim()) {
      addToast({
        type: 'warning',
        title: 'Missing Endpoint',
        message: 'Please enter your API endpoint URL to connect.',
        duration: 4000
      });
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

        addToast({
          type: 'success',
          title: 'Connection Successful',
          message: `Successfully connected to ${title.toLowerCase()}!`,
          duration: 3000
        });
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Connection error:', error);
      addToast({
        type: 'error',
        title: 'Connection Failed',
        message: `Failed to connect: ${error.message}. Please check your endpoint URL.`,
        duration: 6000
      });
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

      addToast({
        type: 'error',
        title: 'Message Failed',
        message: `Error sending message: ${error.message}`,
        duration: 5000
      });
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
    } else if (!isConnected) {
      addToast({
        type: 'warning',
        title: 'Not Connected',
        message: 'Please connect to your chatbot first before trying examples.',
        duration: 4000
      });
    }
  };

  const getButtonColors = () => {
    if (accentColor === 'pink') {
      return {
        primary: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
        secondary: 'bg-pink-50 hover:bg-pink-100 text-pink-700',
        border: 'border-pink-200',
        text: 'text-pink-600',
        ring: 'focus:ring-pink-500',
        progress: 'bg-pink-500'
      };
    }
    return {
      primary: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600',
      secondary: 'bg-blue-50 hover:bg-blue-100 text-blue-700',
      border: 'border-blue-200',
      text: 'text-blue-600',
      ring: 'focus:ring-blue-500',
      progress: 'bg-blue-500'
    };
  };

  const colors = getButtonColors();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* Toast Container */}
      <ToastContainer toasts={toasts} onClose={removeToast} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className={`p-4 ${colors.primary} rounded-2xl shadow-lg ring-8 ring-white/50`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/*  Chat Interface */}
          <div className="xl:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
              {/*  Connection Setup */}
              {!isConnected && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200/50 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Settings className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800">Connect to your chatbot</h3>
                      <p className="text-sm text-amber-600">Enter your API endpoint to get started</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={apiEndpoint}
                      onChange={(e) => setApiEndpoint(e.target.value)}
                      placeholder="Enter your API endpoint (e.g., https://your-endpoint.ngrok-free.app)"
                      className="flex-1 px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/70 placeholder-gray-500"
                    />
                    <button
                      onClick={testConnection}
                      disabled={isLoading}
                      className={`px-6 py-3 ${colors.primary} text-white rounded-xl font-medium shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[120px]`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <Wifi className="w-4 h-4" />
                          <span>Connect</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/*  Connection Status */}
              {isConnected && (
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-b border-emerald-200/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                      </div>
                      <div>
                        <span className="text-emerald-800 font-semibold">Connected</span>
                        <p className="text-xs text-emerald-600">Chatbot is ready to assist you</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsConnected(false);
                        setMessages([]);
                        addToast({
                          type: 'info',
                          title: 'Disconnected',
                          message: 'You have been disconnected from the chatbot.',
                          duration: 3000
                        });
                      }}
                      className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-800 text-sm font-medium transition-colors"
                    >
                      <WifiOff className="w-4 h-4" />
                      <span>Change</span>
                    </button>
                  </div>
                </div>
              )}

              {/*  Chat Messages */}
              <div className="h-[500px] lg:h-[600px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50/50 to-white/50">
                {messages.length === 0 && isConnected && (
                  <div className="text-center py-12 lg:py-16">
                    <div className={`inline-flex p-6 ${colors.primary} rounded-2xl mb-6 shadow-lg`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Hello! I'm your {domain.replace('_', ' ')} assistant
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Try asking one of these example questions to get started:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                      {examples.slice(0, 4).map((example, index) => (
                        <button
                          key={index}
                          onClick={() => handleExampleClick(example)}
                          className={`text-left p-4 ${colors.secondary} rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${colors.border} border`}
                          disabled={!isConnected || isLoading}
                        >
                          <span className="text-gray-400">"</span>
                          {example}
                          <span className="text-gray-400">"</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div key={index} className={`flex mb-6 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] lg:max-w-[75%] ${
                      message.role === 'user'
                        ? `${colors.primary} text-white ml-auto rounded-2xl rounded-br-md`
                        : message.role === 'system'
                        ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200 rounded-2xl'
                        : message.isError
                        ? 'bg-gradient-to-r from-red-100 to-rose-100 text-red-800 border border-red-200 rounded-2xl'
                        : 'bg-white border border-gray-200 shadow-lg rounded-2xl rounded-bl-md'
                    } p-4 lg:p-5`}>
                      {/*  Message Header */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className={`p-1.5 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-white/20'
                            : message.role === 'system'
                            ? 'bg-emerald-200'
                            : message.isError
                            ? 'bg-red-200'
                            : 'bg-gray-100'
                        }`}>
                          {message.role === 'user' ? (
                            <User className="w-3.5 h-3.5" />
                          ) : message.role === 'system' ? (
                            <CheckCircle className="w-3.5 h-3.5" />
                          ) : (
                            <Bot className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <span className="text-xs font-medium opacity-75">{message.timestamp}</span>
                      </div>

                      {/*  Message Content */}
                      <div className="whitespace-pre-wrap leading-relaxed text-sm lg:text-base">
                        {message.content}
                      </div>

                      {/*  Bot Message Metadata */}
                      {message.role === 'bot' && message.domain && (
                        <div className="mt-4 pt-3 border-t border-gray-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-600">
                          <div className="flex items-center space-x-3">
                            <span className={`flex items-center space-x-1.5 ${colors.text} font-medium`}>
                              <Icon className="w-3.5 h-3.5" />
                              <span className="capitalize">{message.domain.replace('_', ' ')}</span>
                            </span>
                            <span className="text-gray-400">•</span>
                            <div className="flex items-center space-x-1">
                              <span>Confidence:</span>
                              <span className="font-semibold">{(message.confidence * 100).toFixed(1)}%</span>
                            </div>
                          </div>
                          {message.safety_applied && (
                            <span className="text-orange-600 flex items-center space-x-1 font-medium">
                              <AlertTriangle className="w-3 h-3" />
                              <span>Safety applied</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/*  Loading Indicator */}
                {isLoading && (
                  <div className="flex justify-start mb-6">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md p-5 flex items-center space-x-4 shadow-lg">
                      <div className={`p-2 ${colors.secondary} rounded-lg`}>
                        <Loader2 className={`w-5 h-5 animate-spin ${colors.text}`} />
                      </div>
                      <div>
                        <span className="text-gray-800 font-medium">Thinking...</span>
                        <p className="text-xs text-gray-500">Processing your request</p>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/*  Input Form */}
              <div className="p-6 bg-white/90 backdrop-blur-sm border-t border-gray-200/50">
                <div className="flex flex-col sm:flex-row gap-3">
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
                    className={`flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 ${colors.ring} focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed bg-white/70 placeholder-gray-500`}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!isConnected || isLoading || !query.trim()}
                    className={`px-6 py-3 ${colors.primary} text-white rounded-xl font-medium shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 min-w-[100px]`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </button>
                </div>

                {/* Enhanced Disclaimer */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200/50">
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    🔒 This AI assistant provides information for educational purposes only.
                    Always consult healthcare professionals for medical advice. For emergencies, call 911.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  Sidebar */}
          <div className="space-y-6">
            {/*  Example Questions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center space-x-2 mb-5">
                <div className={`p-2 ${colors.secondary} rounded-lg`}>
                  <Bot className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Example Questions</h3>
              </div>
              <div className="space-y-3">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(example)}
                    disabled={!isConnected || isLoading}
                    className={`w-full text-left p-4 ${colors.secondary} rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${colors.border} border`}
                  >
                    <span className="text-gray-400 text-xs">"</span>
                    {example}
                    <span className="text-gray-400 text-xs">"</span>
                  </button>
                ))}
              </div>
            </div>

            {/*  Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center space-x-2 mb-5">
                <div className={`p-2 ${colors.secondary} rounded-lg`}>
                  <CheckCircle className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Key Features</h3>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50/50 transition-colors">
                    <div className={`p-1 ${colors.secondary} rounded-md mt-0.5`}>
                      <CheckCircle className={`w-3 h-3 ${colors.text}`} />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/*  Performance */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
              <div className="flex items-center space-x-2 mb-5">
                <div className={`p-2 ${colors.secondary} rounded-lg`}>
                  <AlertTriangle className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Performance Metrics</h3>
              </div>
              <div className="space-y-5">
                <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-700">Overall Score</span>
                    <span className={`text-lg font-bold ${colors.text}`}>{performance.score}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${colors.progress} h-3 rounded-full transition-all duration-500 ease-out`}
                      style={{
                        width: accentColor === 'pink' ? '90%' : '65%',
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm">
                  {performance.empathy && (
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Empathy Score:</span>
                      <span className="font-bold text-gray-900">{performance.empathy}</span>
                    </div>
                  )}

                  {performance.precision && (
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Precision:</span>
                      <span className="font-bold text-gray-900">{performance.precision}</span>
                    </div>
                  )}

                  {performance.f1 && (
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">F1 Score:</span>
                      <span className="font-bold text-gray-900">{performance.f1}</span>
                    </div>
                  )}
                </div>

                {performance.distribution && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">Score Distribution:</span>
                    <p className="mt-2 text-xs text-gray-600 leading-relaxed">{performance.distribution}</p>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Strengths:</h4>
                  <ul className="space-y-2">
                    {performance.strengths.slice(0, 3).map((strength, index) => (
                      <li key={index} className="text-xs text-gray-700 flex items-start space-x-2 p-2 bg-green-50 rounded-lg">
                        <span className="text-green-600 mt-1 font-bold">•</span>
                        <span className="leading-relaxed">{strength}</span>
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
