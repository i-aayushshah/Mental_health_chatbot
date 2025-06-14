import React from 'react';
import { Stethoscope } from 'lucide-react';
import ChatbotInterface from './ChatbotInterface';

function MedicalChatbot() {
  return (
    <ChatbotInterface
      title="Medical Information Chatbot"
      description="Access reliable medical information and guidance with professional disclaimers and safety measures."
      icon={Stethoscope}
      iconColor="text-blue-600"
      accentColor="blue"
      domain="medical"
      examples={[
        "What are the symptoms of diabetes?",
        "What causes migraines?",
        "How is high blood pressure treated?",
        "What are the side effects of aspirin?"
      ]}
      features={[
        "Accurate medical information",
        "Professional disclaimers",
        "Safety and ethical compliance",
        "Clear and readable responses"
      ]}
      performance={{
        score: "6-7/10",
        precision: "0.3528",
        f1: "0.3846",
        distribution: "30% high accuracy (8-9.5/10), 50% good (6-7/10), 20% needs improvement (2-3/10)",
        strengths: [
          "Clear, professional responses with appropriate disclaimers",
          "High-scoring responses provide accurate, complete information",
          "Good coverage of common medical conditions and symptoms",
          "Maintains safety with 'consult healthcare professional' advice"
        ]
      }}
    />
  );
}

export default MedicalChatbot;
