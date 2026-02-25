'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { getMockDefinition, getMockChatResponse } from '@/lib/mockTrpc';

interface DemoTooltipProps {
  word: string;
  position: { x: number; y: number };
  onClose: () => void;
}

export function DemoTooltip({ word, position, onClose }: DemoTooltipProps) {
  const [isChatMode, setIsChatMode] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [smartPosition, setSmartPosition] = useState({ left: position.x, top: position.y, transform: 'translateX(-50%)' });
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Fetch definition on mount
  useEffect(() => {
    let cancelled = false;

    getMockDefinition(word).then(result => {
      if (!cancelled) {
        setData(result);
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [word]);

  // Smart positioning to keep tooltip in viewport
  useEffect(() => {
    if (!tooltipRef.current) return;

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = position.x;
    let top = position.y;
    let transform = 'translateX(-50%)';

    // Check if tooltip would go off the top
    if (top < 20) {
      top = 20;
    }

    // Check if tooltip would go off the bottom
    if (top + tooltipRect.height > viewportHeight - 20) {
      top = viewportHeight - tooltipRect.height - 20;
    }

    // Check if tooltip would go off the left
    if (left - tooltipRect.width / 2 < 20) {
      left = tooltipRect.width / 2 + 20;
    }

    // Check if tooltip would go off the right
    if (left + tooltipRect.width / 2 > viewportWidth - 20) {
      left = viewportWidth - tooltipRect.width / 2 - 20;
    }

    setSmartPosition({ left, top, transform });
  }, [position, data]); // Recalculate when content changes

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isSending) return;

    const userMessage = chatInput;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');
    setIsSending(true);

    try {
      const response = await getMockChatResponse(userMessage, word);
      setMessages(prev => [...prev, { role: 'assistant', content: response.response }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      ref={tooltipRef}
      initial={{ opacity: 0, scale: 0.9, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{
        position: 'fixed',
        left: smartPosition.left,
        top: smartPosition.top,
        transform: smartPosition.transform,
        zIndex: 9999,
      }}
      className="bg-dark-card text-white rounded-xl shadow-2xl max-w-md overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 border-b border-dark-border flex justify-between items-center bg-gradient-to-r from-primary/10 to-secondary/10">
        <h3 className="text-accent-blue font-semibold text-lg">{word}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="p-4 max-h-96 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center gap-2 text-gray-400 italic">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-4 h-4 border-2 border-accent-blue border-t-transparent rounded-full"
            />
            Thinking...
          </div>
        ) : (
          <>
            <p className="text-gray-300 mb-4 leading-relaxed">{data?.definition}</p>

            {data?.examples && data.examples.length > 0 && (
              <div className="bg-dark-bg rounded-lg p-3 space-y-2">
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Examples</div>
                {data.examples.map((ex: string, i: number) => (
                  <div key={i} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-accent-gold">•</span>
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Chat Messages */}
            {isChatMode && messages.length > 0 && (
              <div className="mt-4 space-y-2 border-t border-dark-border pt-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-primary/20 text-white ml-4'
                        : 'bg-dark-bg text-gray-300 mr-4'
                    }`}
                  >
                    <div className="text-xs text-gray-500 mb-1">
                      {msg.role === 'user' ? 'You' : 'AI'}
                    </div>
                    <div className="text-sm">{msg.content}</div>
                  </div>
                ))}
                {isSending && (
                  <div className="text-sm text-gray-400 italic">AI is typing...</div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Chat Interface */}
      {!isChatMode && !isLoading && (
        <div className="p-4 border-t border-dark-border">
          <button
            onClick={() => setIsChatMode(true)}
            className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-secondary transition-all px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
          >
            💬 Ask a follow-up question
          </button>
        </div>
      )}

      {isChatMode && (
        <div className="p-4 border-t border-dark-border">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              autoFocus
            />
            <button
              type="submit"
              disabled={!chatInput.trim() || isSending}
              className="bg-primary hover:bg-primary-dark disabled:bg-gray-700 disabled:cursor-not-allowed px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
}
