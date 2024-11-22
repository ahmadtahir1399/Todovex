"use client"
import { motion } from 'framer-motion'
import FeatureCard  from './FeatureCard'

export const Features = () => {
  const features = [
    {
      title: "Smart Prioritization",
      description: "Let AI intelligently organize your tasks based on deadlines, importance, and your working patterns for maximum productivity."
    },
    {
      title: "Natural Language Input",
      description: "Simply type or speak naturally. Our advanced AI understands context and automatically structures your tasks accordingly."
    },
    {
      title: "Intelligent Reminders",
      description: "Context-aware notifications that learn from your habits and adapt to your schedule for perfect timing."
    }
  ]

  return (
    <div className="relative py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7289da]/5 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the next generation of task management
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}