import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  DollarSign,
  Check,
  X,
  Phone,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export default function Pricing() {
  return (
    <>
      <Navigation />
      <main className="pricing-page">
        {/* Hero Section */}
        <section className="pricing-hero">
          <div className="container">
            <div className="pricing-hero-content">
              <h1 className="pricing-hero-title">Simple, Transparent Pricing</h1>
              <p className="pricing-hero-subtitle">
                Pay only for what you use. No hidden fees. No surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="pricing-plans-section">
          <div className="container">
            <div className="pricing-cards-grid">
              
              {/* Base Plan */}
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <div className="plan-icon">
                    <Phone size={32} />
                  </div>
                  <h3 className="plan-name">Base Plan</h3>
                  <div className="plan-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">100</span>
                    <span className="price-period">/month</span>
                  </div>
                  <p className="plan-description">Perfect for businesses getting started with after-hours automation</p>
                </div>
                
                <div className="pricing-card-content">
                  <div className="plan-features">
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Up to 50 billable calls per month</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>AI-powered call handling</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>After-hours coverage</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Call transcripts & summaries</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Custom business hours setup</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Basic analytics dashboard</span>
                    </div>
                  </div>
                  
                  <div className="plan-overage">
                    <AlertCircle size={18} />
                    <span>$3 per call beyond 50 calls</span>
                  </div>

                  <button className="plan-cta-button">Get Started</button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="pricing-card pricing-card-featured">
                <div className="featured-badge">Most Popular</div>
                <div className="pricing-card-header">
                  <div className="plan-icon">
                    <Zap size={32} />
                  </div>
                  <h3 className="plan-name">Pro Plan</h3>
                  <div className="plan-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">150</span>
                    <span className="price-period">/month</span>
                  </div>
                  <p className="plan-description">For growing businesses with higher call volumes</p>
                </div>
                
                <div className="pricing-card-content">
                  <div className="plan-features">
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Up to 100 billable calls per month</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>AI-powered call handling</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>After-hours coverage</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Call transcripts & summaries</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Custom business hours setup</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Advanced analytics & insights</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Priority support</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={20} className="feature-icon" />
                      <span>Custom integrations</span>
                    </div>
                  </div>
                  
                  <div className="plan-overage">
                    <AlertCircle size={18} />
                    <span>$3 per call beyond 100 calls</span>
                  </div>

                  <button className="plan-cta-button plan-cta-featured">Get Started</button>
                  <p className="plan-note">Coming Soon</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Billable Calls Section */}
        <section className="billable-calls-section">
          <div className="container">
            <div className="billable-content-block">
              <div className="billable-header">
                <DollarSign size={48} className="billable-icon" />
                <h2>What Counts as a Billable Call?</h2>
              </div>
              
              <p className="billable-intro">
                We believe in fair, transparent billing. You only pay for legitimate calls that provide value to your business.
              </p>

              <div className="billable-grid">
                {/* Billable Calls */}
                <div className="billable-card billable-yes">
                  <div className="billable-card-header">
                    <Check size={32} className="billable-card-icon" />
                    <h3>Billable Calls</h3>
                  </div>
                  <p className="billable-card-description">
                    A call is billable when all of the following conditions are met:
                  </p>
                  <ul className="billable-list">
                    <li>
                      <Clock size={20} />
                      <div>
                        <strong>Duration ≥ 30 seconds</strong>
                        <p>Ensures the call was a genuine interaction</p>
                      </div>
                    </li>
                    <li>
                      <Shield size={20} />
                      <div>
                        <strong>During After-Hours Window</strong>
                        <p>Occurs within your defined after-hours schedule</p>
                      </div>
                    </li>
                    <li>
                      <CheckCircle2 size={20} />
                      <div>
                        <strong>Successfully Connected</strong>
                        <p>AI agent successfully handled the call</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Non-Billable Calls */}
                <div className="billable-card billable-no">
                  <div className="billable-card-header">
                    <X size={32} className="billable-card-icon" />
                    <h3>Non-Billable Calls</h3>
                  </div>
                  <p className="billable-card-description">
                    You won't be charged for calls that meet any of these criteria:
                  </p>
                  <ul className="billable-list">
                    <li>
                      <Clock size={20} />
                      <div>
                        <strong>Duration &lt; 30 seconds</strong>
                        <p>Hangups, misdials, or wrong numbers</p>
                      </div>
                    </li>
                    <li>
                      <TrendingUp size={20} />
                      <div>
                        <strong>During Business Hours</strong>
                        <p>Accidental forwards during your operating hours</p>
                      </div>
                    </li>
                    <li>
                      <AlertCircle size={20} />
                      <div>
                        <strong>System/Technical Failure</strong>
                        <p>Any technical issues on our end</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="billable-guarantee">
                <Shield size={28} />
                <div>
                  <h4>Our Guarantee</h4>
                  <p>
                    We filter out spam, misdials, and technical issues automatically. 
                    You only pay for real, valuable interactions with your customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="pricing-value-section">
          <div className="container">
            <div className="pricing-value-header">
              <h2>Why Our Pricing Makes Sense</h2>
            </div>
            
            <div className="value-cards-grid">
              <div className="value-card">
                <div className="value-card-icon">
                  <DollarSign size={28} />
                </div>
                <h4>No Hidden Fees</h4>
                <p>What you see is what you pay. No setup fees, no cancellation fees, no surprises.</p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">
                  <TrendingUp size={28} />
                </div>
                <h4>Scales With You</h4>
                <p>Start small and grow. Our pricing grows with your business without requiring plan changes.</p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">
                  <Shield size={28} />
                </div>
                <h4>Fair & Transparent</h4>
                <p>We filter out junk calls automatically. You only pay for legitimate customer interactions.</p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">
                  <Clock size={28} />
                </div>
                <h4>Save Time & Money</h4>
                <p>Compared to hiring staff or missing calls, our pricing delivers exceptional ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pricing-cta-section">
          <div className="container">
            <div className="pricing-cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Join trade businesses who never miss an after-hours call again.</p>
              <a href="https://vasop-client.vercel.app/signup" className="pricing-cta-button-large">
                Start My Setup
              </a>
              <p className="pricing-cta-note">No credit card required to get started</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

