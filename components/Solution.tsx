'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Solution() {
  const headerRef = useScrollAnimation();
  const introRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();

  return (
    <section id="products" className="solution">
      <div className="container">
        <h2 ref={headerRef} className="section-header section-header-with-icon">
          <svg className="section-header-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          Automation that works like a <span className="text-highlight">trusted team member.</span>
        </h2>
        <p ref={introRef} className="section-intro">
        4Trades.ai helps independent trades businesses stay responsive, organized, and focused on their craft. Our AI agents handle calls, scheduling, and follow-ups the way a reliable team member would, so you can stay present with the work and the customers who count on you. 
        </p>

        <div className="feature-cards">
          <div ref={card1Ref} className="feature-card">
            <div className="feature-header">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>After-Hours Agent</h3>
            </div>
            <p>Answers every call in under three seconds, captures caller info, and emails a summary instantly, providing the responsiveness voicemail can't and the consistency live services rarely match.</p>
          </div>

          <div ref={card2Ref} className="feature-card">
            <div className="feature-header">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h3>Field Estimate Communication</h3>
            </div>
            <p>Automates first contact, appointment confirmations, reminders, and on-the-way notifications so every customer gets a clear, consistent experience without adding more work to your day.</p>
          </div>

          <div ref={card3Ref} className="feature-card">
            <div className="feature-header">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"/>
                </svg>
              </div>
              <h3>GROUNDWORK Systems Setup</h3>
            </div>
            <p>A guided review of your operations, utilization patterns, and core needs through a discovery process that leads to workflow optimizations and clearer resource knowledge, giving you a stronger foundation for smooth day-to-day work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
