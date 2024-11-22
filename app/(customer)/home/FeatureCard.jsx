import React from 'react';
import { Card } from "@/components/ui/card";
import { Bot } from 'lucide-react';

const FeatureCard = ({ title, index = 0 }) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border-none h-48 transition-all duration-300 hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative h-full flex flex-col items-center justify-center p-6">
        <div className="relative mb-4">
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <Bot className="h-10 w-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
        </div>

        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 text-center">
          {title}
        </h3>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Card>
  );
};

export default FeatureCard;