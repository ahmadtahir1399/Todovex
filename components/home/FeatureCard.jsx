import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Bot, ArrowRight, Sparkles } from 'lucide-react';

const FeatureCard = ({ title, description, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="perspective-1000"
      style={{
        transform: `translateY(${index * 20}px)`,
        opacity: 0,
        animation: `slideUp 0.5s ease-out ${index * 0.1}s forwards`
      }}
    >
      <Card 
        className={`
          relative overflow-hidden
          bg-gradient-to-br from-white/80 to-white/40
          dark:from-[#282b30]/80 dark:to-[#282b30]/40
          backdrop-blur-lg border border-white/10
          group transition-all duration-500
          hover:shadow-2xl hover:shadow-[#7289da]/20
          ${isHovered ? 'scale-105' : 'scale-100'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7289da]/10 via-transparent to-[#7289da]/10 opacity-0 group-hover:opacity-100 animate-gradient" />
        
        {/* Animated border glow */}
        <div className="absolute inset-0 border-2 border-[#7289da]/20 rounded-lg opacity-0 group-hover:opacity-100 animate-pulse" />

        <CardContent className="p-8 relative">
          <div className="flex flex-col items-center text-center">
            {/* Icon container with floating animation */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#7289da]/10 rounded-full blur-xl group-hover:animate-pulse" />
              <div className="relative animate-float">
                <Bot className="h-12 w-12 text-[#7289da] transition-all duration-300 group-hover:scale-110" />
                {isHovered && (
                  <div className="absolute top-0 right-0">
                    <Sparkles className="h-4 w-4 text-[#7289da] animate-spin-slow" />
                  </div>
                )}
              </div>
            </div>

            {/* Title with gradient animation */}
            <h3 className={`
              mt-6 text-2xl font-bold
              bg-clip-text text-transparent
              bg-gradient-to-r from-[#7289da] via-[#424549] to-[#7289da]
              bg-size-200 group-hover:bg-pos-100
              transition-all duration-500
            `}>
              {title}
            </h3>

            {/* Description with fade-in animation */}
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
              {description}
            </p>

            {/* Interactive button */}
            <button
              className={`
                mt-6 flex items-center gap-2
                text-[#7289da] font-medium
                transform transition-all duration-300
                opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0
                hover:gap-3
              `}
            >
              Learn more 
              <ArrowRight className="h-4 w-4 transition-all duration-300" />
            </button>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s linear infinite;
          background-size: 200% 200%;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .bg-size-200 {
          background-size: 200% 100%;
        }

        .bg-pos-100 {
          background-position: 100% 0;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default FeatureCard;