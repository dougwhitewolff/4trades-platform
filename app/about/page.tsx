import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Building2, 
  Target, 
  Lightbulb, 
  Users, 
  Heart, 
  TrendingUp,
  Sparkles,
  CheckCircle,
  Shield,
  Zap,
  Eye,
  Award
} from 'lucide-react';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">About 4Trades.ai</h1>
              <p className="about-hero-subtitle">
                Building the Future of Trades Work, One Intelligent System at a Time.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-block">
              <div className="about-icon-header">
                <Building2 size={48} className="about-section-icon" />
                <h2>Our Story</h2>
              </div>
              <div className="about-text-content">
                <p className="about-opening-question">
                  4Trades.ai was born from a simple but powerful question:
                </p>
                <p className="about-question-highlight">
                  "What would happen if trade businesses no longer had to carry the weight of endless admin, communication gaps, and operational bottlenecks?"
                </p>
                <p>
                  We grew up around tradespeople. We saw the late-night quoting, the constant phone calls, the missed opportunities, the stress that steals time from family and growth. We saw talented people forced into repetitive, manual, low-value tasks.
                </p>
                <p>And we knew technology could change that.</p>
                <p>
                  So we set out with a clear mission — to build intelligent systems that lighten the load and allow trade businesses to operate with clarity, confidence, and calm.
                </p>
                <p>
                  Today, 4Trades.ai is a specialized AI automation company built exclusively for the trades. We design tools that think, communicate, and work intelligently — so your team can focus on what truly matters: doing great work and growing your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Purpose Section */}
        <section className="about-section about-section-alt">
          <div className="container">
            <div className="about-content-block">
              <div className="about-icon-header">
                <Target size={48} className="about-section-icon" />
                <h2>Our Purpose</h2>
              </div>
              <div className="about-text-content">
                <p>
                  At 4Trades.ai, we believe every trade business deserves the same operational power, efficiency, and intelligence that big companies get — without the complexity or cost.
                </p>
                <div className="about-purpose-statement">
                  <p>Our purpose is simple:</p>
                  <h3 className="about-purpose-tagline">
                    Make work easier. Make businesses stronger. Make life better.
                  </h3>
                </div>
                <p>
                  We help tradespeople reclaim their time, improve communication, deliver a better customer experience, and unlock new levels of efficiency through AI-driven systems designed specifically for the unique realities of the trades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-block">
              <div className="about-icon-header">
                <Lightbulb size={48} className="about-section-icon" />
                <h2>What We Do</h2>
              </div>
              <div className="about-text-content">
                <p className="about-intro-text">
                  We build intelligent automation systems that integrate deeply into your everyday workflow.
                </p>
                <p className="about-subheading">Our solutions include:</p>
                
                <div className="about-solutions-grid">
                  <div className="about-solution-card">
                    <div className="solution-card-icon">
                      <Zap size={28} />
                    </div>
                    <h4>After-Hours Agent</h4>
                    <p>AI that automatically handles calls, messages, and estimate requests when your team is unavailable.</p>
                  </div>

                  <div className="about-solution-card">
                    <div className="solution-card-icon">
                      <Users size={28} />
                    </div>
                    <h4>Field Estimate Communication Automation</h4>
                    <p>A system that communicates with homeowners throughout the estimating process — reducing back-and-forth and speeding up conversions.</p>
                  </div>

                  <div className="about-solution-card">
                    <div className="solution-card-icon">
                      <CheckCircle size={28} />
                    </div>
                    <h4>Pipeline Task Creation Automation</h4>
                    <p>Automatic creation, assignment, and updating of tasks inside your operational workflow tools (like ServiceTitan).</p>
                  </div>

                  <div className="about-solution-card">
                    <div className="solution-card-icon">
                      <Sparkles size={28} />
                    </div>
                    <h4>Chat With The Business</h4>
                    <p>A smart messaging interface that lets customers interact with your business naturally and instantly.</p>
                  </div>

                  <div className="about-solution-card">
                    <div className="solution-card-icon">
                      <TrendingUp size={28} />
                    </div>
                    <h4>Custom Automations & Integrations</h4>
                    <p>Tailor-made systems built around your processes, platforms, and goals.</p>
                  </div>
                </div>

                <p className="about-closing-text">
                  Our products combine AI, workflow design, systems thinking, and deep trade-industry expertise to create automations that feel natural, reliable, and easy to use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="about-section about-section-alt">
          <div className="container">
            <div className="about-content-block">
              <div className="about-icon-header">
                <Heart size={48} className="about-section-icon" />
                <h2>Our Philosophy</h2>
              </div>
              <div className="about-text-content">
                <p className="about-intro-text">
                  We believe the trades are the backbone of society — and they deserve world-class tools.
                </p>
                <p className="about-subheading">Our work is guided by five core principles:</p>
                
                <div className="about-principles">
                  <div className="about-principle-item">
                    <div className="principle-number">1</div>
                    <div className="principle-content">
                      <h4>Trade-First Design</h4>
                      <p>We don't build generic AI. We build AI that understands the realities of field work, dispatching, estimates, scheduling, customers, and team operations.</p>
                    </div>
                  </div>

                  <div className="about-principle-item">
                    <div className="principle-number">2</div>
                    <div className="principle-content">
                      <h4>Humans at the Center</h4>
                      <p>AI should elevate people — not replace them. Our systems reduce busywork so your team can do higher-value, more meaningful work.</p>
                    </div>
                  </div>

                  <div className="about-principle-item">
                    <div className="principle-number">3</div>
                    <div className="principle-content">
                      <h4>Radical Clarity</h4>
                      <p>No jargon. No complexity. Just simple, powerful solutions that work immediately.</p>
                    </div>
                  </div>

                  <div className="about-principle-item">
                    <div className="principle-number">4</div>
                    <div className="principle-content">
                      <h4>Long-Term Partnership</h4>
                      <p>We don't just deliver software — we help redesign processes so businesses grow sustainably.</p>
                    </div>
                  </div>

                  <div className="about-principle-item">
                    <div className="principle-number">5</div>
                    <div className="principle-content">
                      <h4>Continuous Improvement</h4>
                      <p>AI evolves fast. We update, refine, and expand our automations constantly to keep you ahead.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-block">
              <div className="about-icon-header">
                <Eye size={48} className="about-section-icon" />
                <h2>Our Vision</h2>
              </div>
              <div className="about-text-content">
                <p className="about-vision-statement">
                  To transform the trades industry into one of the most technologically empowered sectors in the world.
                </p>
                <p className="about-subheading">A future where:</p>
                
                <div className="about-vision-list">
                  <div className="vision-item">
                    <CheckCircle size={20} className="vision-icon" />
                    <p>Communication is instant and automated</p>
                  </div>
                  <div className="vision-item">
                    <CheckCircle size={20} className="vision-icon" />
                    <p>Estimates and follow-ups run themselves</p>
                  </div>
                  <div className="vision-item">
                    <CheckCircle size={20} className="vision-icon" />
                    <p>Teams operate with total clarity</p>
                  </div>
                  <div className="vision-item">
                    <CheckCircle size={20} className="vision-icon" />
                    <p>Businesses grow without adding operational stress</p>
                  </div>
                  <div className="vision-item">
                    <CheckCircle size={20} className="vision-icon" />
                    <p>Owners get back their time, energy, and peace</p>
                  </div>
                </div>

                <p className="about-closing-text">
                  We're building products that redefine what's possible for trade businesses — not just today, but for the next decade and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-section about-section-alt">
          <div className="container">
            <div className="about-content-block">
              <div className="about-icon-header">
                <Award size={48} className="about-section-icon" />
                <h2>Why Trade Businesses Choose Us</h2>
              </div>
              <div className="about-text-content">
                <div className="about-features-grid">
                  <div className="about-feature-card">
                    <h4>Deep Industry Understanding</h4>
                    <p>We design solutions specifically for the trades — not generic AI tools retrofitted for them.</p>
                  </div>

                  <div className="about-feature-card">
                    <h4>Proven Operations Framework</h4>
                    <p>Our systems are grounded in real trade workflows, real bottlenecks, and real business needs.</p>
                  </div>

                  <div className="about-feature-card">
                    <h4>White-Glove Onboarding and Support</h4>
                    <p>We walk with you from setup to optimization — ensuring everything runs exactly as it should.</p>
                  </div>

                  <div className="about-feature-card">
                    <h4>Future-Proof Technology</h4>
                    <p>Our platform evolves continuously, so your business stays ahead of competitors.</p>
                  </div>
                </div>

                <div className="about-results-section">
                  <p className="about-subheading">Results That Matter</p>
                  <div className="about-results-list">
                    <div className="result-item">Higher conversion rates.</div>
                    <div className="result-item">Faster response times.</div>
                    <div className="result-item">Lower operational load.</div>
                    <div className="result-item">Happier customers.</div>
                    <div className="result-item">More time for your team.</div>
                  </div>
                  <p className="about-emphasis">This is what we optimize for.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Heart Section */}
        <section className="about-section about-heart-section">
          <div className="container">
            <div className="about-content-block">
              <div className="about-icon-header">
                <Heart size={48} className="about-section-icon heart-icon-pulse" />
                <h2>The Heart Behind 4Trades.ai</h2>
              </div>
              <div className="about-text-content about-heart-content">
                <p>
                  We're builders, system designers, and problem-solvers who care deeply about the trades. We see the potential in businesses that keep our world standing — and we're here to help them operate smarter, work easier, and scale with confidence.
                </p>
                <p>
                  At the end of the day, it's not just about AI. It's about people — the work they do, the lives they want, and the future they're building.
                </p>
                <p className="about-closing-statement">
                  And we're honored to build that future with you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

