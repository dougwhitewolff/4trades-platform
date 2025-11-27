'use client';

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
  CheckCircle2,
  MessageSquare,
  Briefcase,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [ahaDetailsOpen, setAhaDetailsOpen] = useState(false);
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <Phone size={40} style={{ color: 'var(--orange-primary)' }} />
              <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--charcoal-black)', margin: 0 }}>After Hours Automation</h2>
            </div>
            <div className="pricing-cards-grid">
              
              {/* Base Plan */}
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <div className="plan-icon">
                    <Phone size={26} />
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
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Up to 50 billable calls per month</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>AI-powered call handling</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>After-hours coverage</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Call transcripts & summaries</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Custom business hours setup</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Basic analytics dashboard</span>
                    </div>
                  </div>
                  
                  <div className="plan-overage">
                    <AlertCircle size={18} />
                    <span>$3 per call beyond 50 calls</span>
                  </div>

                  <a href="https://onboardingaha.4trades.ai/signup" className="plan-cta-button" style={{display: 'block', textDecoration: 'none', textAlign: 'center'}}>Start My Setup</a>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="pricing-card pricing-card-featured">
                <div className="featured-badge">Most Popular</div>
                <div className="pricing-card-header">
                  <div className="plan-icon">
                    <Zap size={26} />
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
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Up to 100 billable calls per month</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>AI-powered call handling</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>After-hours coverage</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Call transcripts & summaries</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Custom business hours setup</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Advanced analytics & insights</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>Priority support</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>CRM integrations</span>
                    </div>
                  </div>
                  
                  <div className="plan-overage">
                    <AlertCircle size={18} />
                    <span>$3 per call beyond 100 calls</span>
                  </div>

                  <a href="https://onboardingaha.4trades.ai/signup" className="plan-cta-button plan-cta-featured" style={{display: 'block', textDecoration: 'none', textAlign: 'center'}}>Start My Setup</a>
                </div>
              </div>

            </div>

            {/* FECA Section */}
            <div style={{ marginTop: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <MessageSquare size={40} style={{ color: 'var(--orange-primary)' }} />
                <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--charcoal-black)', margin: 0 }}>Field Estimate Communication Automation</h2>
              </div>
              
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="pricing-card">
                  <div className="pricing-card-header">
                    <div className="plan-icon">
                      <MessageSquare size={26} />
                    </div>
                    <h3 className="plan-name">FECA</h3>
                    <div className="plan-price">
                      <span className="price-currency">$</span>
                      <span className="price-amount">75</span>
                      <span className="price-period">/month</span>
                    </div>
                    <p className="plan-description">Automate the four customer touchpoints that matter most in the estimate workflow</p>
                  </div>
                  
                  <div className="pricing-card-content">
                    <div className="plan-features">
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <div style={{ flex: 1 }}>
                          <span>Automations included:</span>
                          <div className="feature-sub-items">
                            <div className="feature-sub-item">
                              <span>First-contact follow-up</span>
                            </div>
                            <div className="feature-sub-item">
                              <span>Appointment confirmations</span>
                            </div>
                            <div className="feature-sub-item">
                              <span>Day-before reminders</span>
                            </div>
                            <div className="feature-sub-item">
                              <span>"On my way" ETA messages</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>CRM status–triggered automations</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>SMS and/or email delivery</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>Delivery logs for reliability tracking</span>
                      </div>
                    </div>

                    <a href="https://outlook.office.com/bookwithme/user/e2ed1e4e7bb54691ac49fade11982ef0@transformationmath.com/meetingtype/SGTMMjpTQkSbx5Ej5et8Rw2?anonymous&ismsaljsauthenabled&ep=mlink" className="plan-cta-button" style={{display: 'block', textDecoration: 'none', textAlign: 'center'}}>Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* GROUNDWORK Section */}
            <div style={{ marginTop: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <Briefcase size={40} style={{ color: 'var(--orange-primary)' }} />
                <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--charcoal-black)', margin: 0 }}>GROUNDWORK Consulting Package</h2>
              </div>
              
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="pricing-card">
                  <div className="pricing-card-header">
                    <div className="plan-icon">
                      <Briefcase size={26} />
                    </div>
                    <h3 className="plan-name">GROUNDWORK</h3>
                    <div className="plan-price">
                      <span className="price-currency">$</span>
                      <span className="price-amount">2,500</span>
                    </div>
                    <p className="plan-description" style={{ marginTop: '8px' }}>Free 15-minute exploratory call, then $2,500 - A structured two-week engagement that maps your operations, aligns your workflows, and sets up your highest-impact systems</p>
                  </div>
                  
                  <div className="pricing-card-content">
                    <div className="plan-features">
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>Review of your operations, utilization patterns, and core needs</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>One hour discovery session with owner and/or key team members</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>Workflow mapping for lead intake, scheduling, estimating, and follow-up</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>FECA automations</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>Tool alignment (Salesforce, Bolster, DocuSign, Calendly, etc.)</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>Clear written plan with recommendations for next-step automations</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircle2 size={16} className="feature-icon" />
                        <span>Two-hour training session for your team</span>
                      </div>
                    </div>
                    
                    <div className="plan-overage">
                      <AlertCircle size={18} />
                      <span>Note: FECA setup is included in GROUNDWORK. Ongoing FECA automation requires a $75/month subscription.</span>
                    </div>

                    <a href="https://outlook.office.com/bookwithme/user/e2ed1e4e7bb54691ac49fade11982ef0@transformationmath.com/meetingtype/UF9TPtgrmEK2TxfTiJ9oiw2?anonymous&ismsaljsauthenabled&ep=mlink" className="plan-cta-button" style={{display: 'block', textDecoration: 'none', textAlign: 'center'}}>Learn More</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Collapsible AHA Details Section */}
        <section style={{ padding: '40px 0', backgroundColor: 'var(--off-white)' }}>
          <div className="container">
            <button
              onClick={() => setAhaDetailsOpen(!ahaDetailsOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px 32px',
                backgroundColor: 'var(--pure-white)',
                border: '2px solid var(--orange-primary)',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--charcoal-black)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--orange-primary)';
                e.currentTarget.style.color = 'var(--pure-white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--pure-white)';
                e.currentTarget.style.color = 'var(--charcoal-black)';
              }}
            >
              <span>See AHA Pricing Details</span>
              {ahaDetailsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          </div>
        </section>

        {ahaDetailsOpen && (
          <>
        {/* Billable Calls Section */}
        <section className="billable-calls-section">
          <div className="container">
            <div className="billable-content-block">
              <div className="billable-header">
                <DollarSign size={48} className="billable-icon" />
                <h2>What Counts as a Billable Call?</h2>
              </div>
              
              <p className="billable-intro">
              We keep billing simple and fair. You only pay for real customer conversations. We filter out spam, wrong numbers, accidental forwards, and any system issues so you’re never charged for noise. 
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
                        <p>Shows the caller stayed long enough for it to be a real conversation</p>
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
                        <p>Your agent answered and handled the call normally</p>
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
                        <strong>Call didn’t complete properly</strong>
                        <p>If the call can’t be completed for any reason, it’s not billable</p>
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
                  You are never charged for spam, wrong numbers, short hangups, or calls that don’t complete. Only real customer conversations count toward your plan.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          </>
        )}

        {/* Value Proposition Section */}
        <section className="pricing-value-section">
          <div className="container">
            <div className="pricing-value-header">
              <h2>Honest Pricing for Independent Trades</h2>
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
                <p>Grow at your own pace. Your pricing adjusts with your call volume, not with plan changes or pressure to upgrade.</p>
              </div>

              <div className="value-card">
                <div className="value-card-icon">
                  <Shield size={28} />
                </div>
                <h4>Beats the Alternatives</h4>
                <p>Most customers don't leave voicemails. Call centers answer, but they don't know your business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pricing-cta-section">
          <div className="container">
            <div className="pricing-cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Protect your evenings while keeping your business responsive.</p>
              <a href="https://onboardingaha.4trades.ai/signup" className="pricing-cta-button-large">
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

