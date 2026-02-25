'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoTooltip } from './DemoTooltip';

export function DemoEditor() {
  const [selectedText, setSelectedText] = useState('');
  const [isCommandHeld, setIsCommandHeld] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const sampleText = `Artificial intelligence (AI) is transforming how we interact with technology. Through sophisticated algorithms and neural networks, AI systems can now understand context, generate creative content, and even engage in meaningful conversations.`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        setIsCommandHeld(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.metaKey && !e.ctrlKey) {
        setIsCommandHeld(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleTextSelect = (e: React.MouseEvent) => {
    if (!isCommandHeld) return;

    const selection = window.getSelection();
    const text = selection?.toString().trim();

    if (text && text.length > 0) {
      const range = selection?.getRangeAt(0);
      const rect = range?.getBoundingClientRect();

      if (rect) {
        setSelectedText(text);
        setTooltipPosition({
          x: rect.left + rect.width / 2,
          y: rect.bottom + 10
        });
        setShowTooltip(true);
      }
    }
  };

  return (
    <div className="relative">
      {/* Command Key Indicator */}
      <AnimatePresence>
        {isCommandHeld && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-12 left-0 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
          >
            ⌘ Command held - Click on any word!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Text Editor */}
      <div
        className={`
          bg-gray-50 border-2 rounded-xl p-8 cursor-text select-text transition-all duration-300
          ${isCommandHeld ? 'border-primary shadow-lg shadow-primary/20 bg-primary/5' : 'border-gray-200'}
        `}
        onClick={handleTextSelect}
      >
        <p className="text-lg leading-relaxed text-gray-700">
          {sampleText}
        </p>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <DemoTooltip
            word={selectedText}
            position={tooltipPosition}
            onClose={() => setShowTooltip(false)}
          />
        )}
      </AnimatePresence>

      {/* Hint */}
      {!isCommandHeld && !showTooltip && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-gray-500 text-sm"
        >
          💡 Hold <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">⌘ Cmd</kbd> (or <kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">Ctrl</kbd>) and click any word to try it!
        </motion.div>
      )}
    </div>
  );
}
