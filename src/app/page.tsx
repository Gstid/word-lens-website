import { DemoEditor } from '@/components/LiveDemo/DemoEditor';
import { FeaturePlayground } from '@/components/FeaturePlayground';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Understand Any Word
            <br />
            <span className="gradient-text">Instantly with AI</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get context-aware definitions for any word on the web.
            <br />
            Just select text, hold Command, and click.
          </p>

          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <a
              href="https://chrome.google.com/webstore"
              className="btn-primary inline-block"
            >
              Add to Chrome - Free
            </a>
            <a href="#demo" className="btn-secondary inline-block">
              See It In Action
            </a>
          </div>

          <p className="text-sm text-gray-400">
            ✓ Free forever · ✓ No sign-up required · ✓ Works offline
          </p>
        </div>

        {/* Live Demo */}
        <div id="demo" className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">
            Try It Now - Interactive Demo
          </h2>
          <DemoEditor />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-dark-purple py-20 border-y border-dark-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Why Choose Word Lens?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Powered by AI, designed for everyone. From students to researchers,
            Word Lens makes understanding easier.
          </p>
          <FeaturePlayground />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg purple-glow">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Select Text</h3>
              <p className="text-gray-400">
                Highlight any word on any website you're browsing
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg purple-glow">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Hold Command & Click</h3>
              <p className="text-gray-400">
                Press ⌘ (or Ctrl) and click the selected word
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg purple-glow">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Get Instant Answers</h3>
              <p className="text-gray-400">
                AI-powered definitions appear instantly in a tooltip
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 border-y border-dark-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Loved by Learners Everywhere
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Word Lens has transformed how I read academic papers. No more context switching!",
                author: "Sarah Chen",
                role: "PhD Candidate"
              },
              {
                quote: "The AI explanations are incredibly accurate and helpful. It's like having a tutor.",
                author: "Michael Torres",
                role: "High School Teacher"
              },
              {
                quote: "I use it every day for work. Fast, accurate, and completely free. Amazing!",
                author: "Jessica Park",
                role: "Technical Writer"
              }
            ].map((testimonial, i) => (
              <div key={i} className="card">
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who are expanding their vocabulary with Word Lens.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Add to Chrome - It's Free
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Compatible with Chrome, Edge, Brave, and other Chromium browsers
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-dark-border text-white py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Word Lens</h3>
              <p className="text-gray-400">AI-powered definitions, instantly.</p>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors">
                Terms of Service
              </a>
              <a href="https://github.com/yourusername/word-lens" className="text-gray-400 hover:text-accent-purple transition-colors">
                GitHub
              </a>
            </div>
          </div>

          <div className="border-t border-dark-border mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2026 Word Lens. Made with ❤️ for learners everywhere.
          </div>
        </div>
      </footer>
    </main>
  );
}
