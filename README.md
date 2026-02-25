# Word Lens Marketing Website

Interactive marketing website for Word Lens - AI-powered definitions Chrome extension.

Built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npx serve@latest out
```

Visit `http://localhost:3000` to see the site.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles + design system
│
├── components/
│   ├── LiveDemo/
│   │   ├── DemoEditor.tsx  # Interactive text selection demo
│   │   └── DemoTooltip.tsx # AI tooltip with chat interface
│   └── FeaturePlayground.tsx # Animated feature cards
│
└── lib/
    ├── trpc.tsx            # tRPC provider (unused in static export)
    └── mockTrpc.ts         # Client-side mock API for demos
```

## 🎨 Design System

Brand colors configured in `src/app/globals.css`:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Accent Blue: `#60a5fa`
- Accent Gold: `#fbbf24`

Use utility classes:
- `.btn-primary` - Gradient button
- `.btn-secondary` - Outline button
- `.card` - Card container
- `.gradient-text` - Gradient text effect

## 🌐 Deploy to Cloudflare Pages

### Option 1: Cloudflare Dashboard (Recommended)

1. Push code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project"
4. Connect to GitHub and select this repository
5. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
6. Click "Save and Deploy"
7. Wait 2-3 minutes for deployment
8. Your site will be live at `*.pages.dev`

### Option 2: Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
npm run build

# Deploy
npx wrangler pages deploy out --project-name=word-lens-website
```

### Custom Domain Setup

1. In Cloudflare Pages → Custom domains
2. Click "Set up a custom domain"
3. Enter `wordlens.ai`
4. Cloudflare automatically configures DNS
5. Wait 5-10 minutes for SSL certificate
6. Visit https://wordlens.ai ✅

## 🛠️ Development

### Adding New Components

Create components in `src/components/`:

```tsx
'use client'; // For client components with interactivity

import { motion } from 'framer-motion';

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card"
    >
      Content here
    </motion.div>
  );
}
```

### Updating Mock Demo Data

Edit `src/lib/mockTrpc.ts` to add more demo definitions:

```typescript
export const mockDefinitions: Record<string, any> = {
  yourword: {
    word: 'yourword',
    definition: 'Definition here...',
    examples: ['Example 1', 'Example 2']
  }
};
```

## 📦 Tech Stack

- **Next.js 16.1.6** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling (CSS-based config)
- **Framer Motion** - Animations
- **React 19** - UI library

## 🎯 Features

- ✅ Interactive text selection demo
- ✅ AI-powered tooltip with chat interface
- ✅ Animated feature cards
- ✅ Responsive design
- ✅ Optimized for Cloudflare Pages
- ✅ Static export (no backend needed)
- ✅ Fast page loads (<2 seconds)

## 📝 License

MIT

## 🔗 Links

- [Word Lens Extension](https://github.com/yourusername/word-lens)
- [Chrome Web Store](https://chrome.google.com/webstore)
