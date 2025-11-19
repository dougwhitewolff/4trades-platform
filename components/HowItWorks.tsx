'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const headerRef = useScrollAnimation();
  const step1Ref = useScrollAnimation();
  const step2Ref = useScrollAnimation();
  const step3Ref = useScrollAnimation();

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 ref={headerRef} className="section-header">
          From setup to success in three simple steps.
        </h2>

        <div className="steps">
          <div ref={step1Ref} className="step">
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <div className="step-number">1</div>
            <h3>Start Your Setup</h3>
            <p>Enter your business details and hours takes less than ten minutes.</p>
          </div>

          <div ref={step2Ref} className="step">
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </div>
            <div className="step-number">2</div>
            <h3>Hear Your Agent</h3>
            <p>We'll show you exactly what your callers experience before you go live.</p>
          </div>

          <div ref={step3Ref} className="step">
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div className="step-number">3</div>
            <h3>Activate and Relax</h3>
            <p>Your agent starts answering calls, logging leads, and sending instant summaries.</p>
          </div>
        </div>

        <div className="section-cta">
          <Button asChild variant={"4trades-primary" as any} size="lg">
            <a href="#onboarding">Start My Setup</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

