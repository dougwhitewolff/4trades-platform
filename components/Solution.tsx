'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export default function Solution() {
  const headerRef = useScrollAnimation();
  const introRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();

  return (
    <section id="products" className="solution">
      <div className="container">
        <h2 ref={headerRef} className="section-header">
          Automation that works like a trusted team member.
        </h2>
        <p ref={introRef} className="section-intro">
          4Trades.ai helps locally owned trades businesses run like the big operations without losing what makes them personal. Our AI agents handle calls, scheduling, and follow-ups so you can stay focused on the work and your customers.
        </p>

        <div className="feature-cards">
          <div ref={card1Ref} className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>After-Hours Agent</h3>
            <p>Answers every call in under three seconds, captures caller info, and emails a summary instantly. Never lose another lead.</p>
          </div>

          <div ref={card2Ref} className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4"/>
              </svg>
            </div>
            <h3>Office Manager Agent</h3>
            <p>Coordinates texts, schedules, and CRM updates while you're in the field.</p>
          </div>

          <div ref={card3Ref} className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"/>
              </svg>
            </div>
            <h3>Automation Hub</h3>
            <p>Connects your calls, CRM, and dispatch tools so everything just works.</p>
          </div>
        </div>

        <div className="section-cta">
          <Button asChild variant={"4trades-primary" as any} size="lg">
            <a href="#products">Explore Our Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

