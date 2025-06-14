import React from 'react';
import { Heart } from 'lucide-react';
import ChatbotInterface from './ChatbotInterface';

function MentalHealthChatbot() {
  return (
    <ChatbotInterface
      title="Mental Health Support Chatbot"
      description="Get empathetic, 24/7 mental health support with responses that understand and validate your feelings."
      icon={Heart}
      iconColor="text-pink-600"
      accentColor="pink"
      domain="mental_health"
      examples={[
        "I'm feeling anxious and can't sleep",
        "I'm struggling with depression lately",
        "How can I manage stress at work?",
        "I feel overwhelmed and need support"
      ]}
      features={[
        "Empathetic and supportive responses",
        "Crisis resource recommendations",
        "Practical coping strategies",
        "Professional help encouragement"
      ]}
      performance={{
        score: "9/10",
        empathy: "0.8669",
        strengths: [
          "Excellent empathy with supportive phrases like 'I hear you' and 'your feelings are valid'",
          "Clear, professional, and highly relevant responses",
          "Includes crisis resources (e.g., 988 Lifeline) for safety",
          "Practical, actionable advice for mindfulness and therapy"
        ]
      }}
    />
  );
}

export default MentalHealthChatbot;
