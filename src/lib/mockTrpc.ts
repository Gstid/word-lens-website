// Mock tRPC client for static export
// Simulates API calls client-side for demo purposes

export const mockDefinitions: Record<string, any> = {
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
  },
  transforming: {
    word: 'transforming',
    definition: 'The act of changing in form, appearance, or structure; undergoing a marked change.',
    examples: [
      'Digital tools are transforming how we work and learn.',
      'The caterpillar is transforming into a butterfly.'
    ]
  },
  interact: {
    word: 'interact',
    definition: 'To act in such a way as to have an effect on another; to communicate or engage with others.',
    examples: [
      'Children learn by interacting with their environment.',
      'The molecules interact to form new compounds.'
    ]
  },
  context: {
    word: 'context',
    definition: 'The circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood.',
    examples: [
      'You need to understand the historical context.',
      'The word has different meanings depending on context.'
    ]
  },
  generate: {
    word: 'generate',
    definition: 'To cause something to arise or come into being; to produce or create.',
    examples: [
      'Solar panels generate electricity from sunlight.',
      'The discussion generated many new ideas.'
    ]
  },
  creative: {
    word: 'creative',
    definition: 'Relating to or involving the use of imagination or original ideas to create something.',
    examples: [
      'She has a creative approach to problem-solving.',
      'Creative writing helps develop imagination.'
    ]
  },
  content: {
    word: 'content',
    definition: 'Information or material created for an audience, especially in a digital format; also, a state of peaceful happiness.',
    examples: [
      'The website features high-quality content.',
      'She felt content with her achievements.'
    ]
  },
  engage: {
    word: 'engage',
    definition: 'To occupy or attract someone\'s interest or attention; to participate or become involved in.',
    examples: [
      'The teacher uses games to engage students.',
      'They decided to engage in meaningful dialogue.'
    ]
  },
  meaningful: {
    word: 'meaningful',
    definition: 'Having meaning, purpose, or significance; communicating something that is not explicitly stated.',
    examples: [
      'We had a meaningful conversation about life.',
      'Meaningful work brings satisfaction and purpose.'
    ]
  },
  conversations: {
    word: 'conversations',
    definition: 'Informal exchanges of ideas and information between two or more people; discussions.',
    examples: [
      'They engaged in deep conversations about philosophy.',
      'AI systems can now hold natural conversations.'
    ]
  }
};

export async function getMockDefinition(word: string) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const wordLower = word.toLowerCase();
  if (mockDefinitions[wordLower]) {
    return mockDefinitions[wordLower];
  }

  return {
    word: word,
    definition: `A simulated AI-powered definition for "${word}". This demonstrates how Word Lens provides instant, context-aware explanations for any word you select.`,
    examples: [
      `Example sentence using "${word}" in context.`,
      `Another way to use "${word}" naturally.`
    ]
  };
}

export async function getMockChatResponse(message: string, word?: string) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const messageLower = message.toLowerCase();
  let response = '';

  if (messageLower.includes('example') || messageLower.includes('use')) {
    response = `Here's how you might use "${word || 'this word'}" in context: "The ${word || 'concept'} demonstrates the importance of understanding language in depth." Would you like more examples?`;
  } else if (messageLower.includes('synonym') || messageLower.includes('similar')) {
    response = `Some related words include: related, comparable, analogous, and equivalent. Each has slightly different connotations. Would you like me to explain the differences?`;
  } else if (messageLower.includes('origin') || messageLower.includes('etymology')) {
    response = `This word has fascinating linguistic roots! In the full Word Lens extension, I can trace the etymology and historical usage. Would you like to learn more?`;
  } else {
    response = `That's a great question about "${word || 'this topic'}"! In the full Word Lens extension, I provide detailed, context-aware answers powered by AI. This is just a demo to show how the conversational interface works.`;
  }

  return {
    response,
    conversationId: `demo_${Date.now()}`
  };
}
