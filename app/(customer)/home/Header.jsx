"use client"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export const Header = () => {
  return (
    <header className="py-24 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#7289da]/20 via-[#7289da]/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8 relative">
          Transform Your Tasks with{' '}
          <span className="relative inline-block">
            <span className="text-[#7289da] relative z-10">
              AI-Powered Intelligence
            </span>
            <motion.div
              className="absolute -inset-2 bg-[#7289da]/20 blur-xl -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Experience the future of task management with intelligent suggestions,
          priority detection, and natural language understanding.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center gap-6"
        >
          <Button className="bg-[#7289da] hover:bg-[#7159da] text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7289da]/20">
            Get Started
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg font-medium rounded-xl border-2 transition-all duration-300 hover:scale-105">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </header>
  )
}