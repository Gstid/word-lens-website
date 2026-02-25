import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const demoRouter = router({
  // Simulate fetching a definition
  getDefinition: publicProcedure
    .input(z.object({ word: z.string() }))
    .query(async ({ input }) => {
      // Simulate AI response delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Generate contextual definitions based on the word
      const definitions: Record<string, any> = {
        artificial: {
          word: 'artificial',
          definition: 'Made or produced by human beings rather than occurring naturally, especially as a copy of something natural.',
          examples: [
            'The artificial flowers looked surprisingly realistic.',
            'Artificial intelligence is transforming modern technology.'
          ]
        },
        intelligence: {
          word: 'intelligence',
          definition: 'The ability to acquire and apply knowledge and skills; the capacity for logic, understanding, self-awareness, learning, emotional knowledge, reasoning, planning, creativity, and problem-solving.',
          examples: [
            'She showed great intelligence in solving the complex puzzle.',
            'Emotional intelligence is just as important as cognitive ability.'
          ]
        },
        algorithms: {
          word: 'algorithms',
          definition: 'A step-by-step procedure or formula for solving a problem or completing a task, especially in computing and mathematics.',
          examples: [
            'Search engines use complex algorithms to rank results.',
            'The sorting algorithm efficiently organized the data.'
          ]
        },
        neural: {
          word: 'neural',
          definition: 'Relating to a nerve or the nervous system; in computing, refers to artificial systems inspired by biological neural networks.',
          examples: [
            'Neural pathways in the brain process sensory information.',
            'Neural networks power modern AI applications.'
          ]
        },
        technology: {
          word: 'technology',
          definition: 'The application of scientific knowledge for practical purposes, especially in industry; machinery and equipment developed from scientific knowledge.',
          examples: [
            'Modern technology has revolutionized communication.',
            'Green technology aims to reduce environmental impact.'
          ]
        },
        sophisticated: {
          word: 'sophisticated',
          definition: 'Having a refined knowledge of the ways of the world; complex, advanced, or developed to a high degree of complexity.',
          examples: [
            'The smartphone contains sophisticated electronics.',
            'She had a sophisticated understanding of art history.'
          ]
        }
      };

      // Return specific definition if available, otherwise generic
      const wordLower = input.word.toLowerCase();
      if (definitions[wordLower]) {
        return definitions[wordLower];
      }

      return {
        word: input.word,
        definition: `A simulated AI-powered definition for "${input.word}". This demonstrates how Word Lens provides instant, context-aware explanations for any word you select.`,
        examples: [
          `Example sentence using "${input.word}" in context.`,
          `Another way to use "${input.word}" naturally.`
        ]
      };
    }),

  // Simulate chat conversation
  sendMessage: publicProcedure
    .input(z.object({
      message: z.string(),
      conversationId: z.string(),
      word: z.string().optional()
    }))
    .mutation(async ({ input }) => {
      await new Promise(resolve => setTimeout(resolve, 300));

      // Generate contextual responses
      const message = input.message.toLowerCase();
      let response = '';

      if (message.includes('example') || message.includes('use')) {
        response = `Here's how you might use "${input.word || 'this word'}" in context: "The ${input.word || 'concept'} demonstrates the importance of understanding language in depth." Would you like more examples?`;
      } else if (message.includes('synonym') || message.includes('similar')) {
        response = `Some related words include: related, comparable, analogous, and equivalent. Each has slightly different connotations. Would you like me to explain the differences?`;
      } else if (message.includes('origin') || message.includes('etymology')) {
        response = `This word has fascinating linguistic roots! In the full Word Lens extension, I can trace the etymology and historical usage. Would you like to learn more?`;
      } else {
        response = `That's a great question about "${input.word || 'this topic'}"! In the full Word Lens extension, I provide detailed, context-aware answers powered by AI. This is just a demo to show how the conversational interface works.`;
      }

      return {
        response,
        conversationId: input.conversationId
      };
    })
});
