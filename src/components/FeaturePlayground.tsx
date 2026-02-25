'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Instant Definitions',
    description: 'Get AI explanations in under 500ms',
    demo: 'Lightning-fast responses',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: '💬',
    title: 'Conversational AI',
    description: 'Ask follow-up questions naturally',
    demo: 'Chat with context awareness',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: '📚',
    title: 'Auto History',
    description: 'Review everything you\'ve learned',
    demo: 'Never lose your insights',
    color: 'from-purple-600 to-fuchsia-600'
  },
  {
    icon: '🎯',
    title: 'Smart Context',
    description: 'Definitions adapt to the content',
    demo: 'Context-aware intelligence',
    color: 'from-fuchsia-500 to-purple-600'
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Works offline, no tracking',
    demo: 'Your data stays yours',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: '✨',
    title: 'Zero Setup',
    description: 'Install and start using instantly',
    demo: 'No sign-up required',
    color: 'from-purple-500 to-pink-600'
  }
];

export function FeaturePlayground() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="card cursor-pointer relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.03,
            rotateY: 3,
            rotateX: 3,
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveFeature(activeFeature === index ? null : index)}
          onMouseEnter={() => setHoveredFeature(index)}
          onMouseLeave={() => setHoveredFeature(null)}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Background Gradient on Hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredFeature === index ? 0.1 : 0 }}
          />

          {/* Icon */}
          <motion.div
            className="text-6xl mb-4 relative z-10"
            animate={{
              rotate: activeFeature === index ? 360 : 0,
              scale: hoveredFeature === index ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {feature.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 relative z-10 text-white">{feature.title}</h3>

          {/* Description */}
          <p className="text-gray-400 mb-4 relative z-10">{feature.description}</p>

          {/* Demo Indicator */}
          <motion.div
            className="text-primary text-sm font-medium flex items-center gap-2 relative z-10"
            animate={{
              x: hoveredFeature === index ? 5 : 0,
            }}
          >
            <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent font-semibold`}>
              {feature.demo}
            </span>
            <motion.span
              animate={{
                x: hoveredFeature === index ? 5 : 0,
                opacity: hoveredFeature === index ? 1 : 0.5,
              }}
            >
              →
            </motion.span>
          </motion.div>

          {/* Active State Indicator */}
          <AnimatePresence>
            {activeFeature === index && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full z-10"
              >
                <motion.div
                  className="absolute inset-0 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent opacity-0 group-hover:opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: hoveredFeature === index ? '100%' : '-100%' }}
            transition={{ duration: 0.6 }}
            style={{ transform: 'skewX(-20deg)' }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Export AnimatePresence for the component
import { AnimatePresence } from 'framer-motion';
