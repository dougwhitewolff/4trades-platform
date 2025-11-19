'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Challenge() {
  const headerRef = useScrollAnimation();
  const textRef = useScrollAnimation();
  const visualRef = useScrollAnimation();

  return (
    <section className="challenge">
      <div className="container">
        <h2 ref={headerRef} className="section-header">
          Local trades are being bought out and it's changing how communities get service.
        </h2>
        <div className="challenge-content">
          <div ref={textRef} className="challenge-text">
            <p>Across the country, investment groups are buying up family-owned trades businesses. They rebrand them, centralize their operations, and use automation to out-scale everyone else.</p>
            <p>That might work for them but it leaves local owners competing against national chains with corporate budgets.</p>
            <p><strong>At 4Trades.ai, we believe the trades should stay local, reliable, and proudly independent.</strong></p>
            <p>So we built the tools that help you keep it that way.</p>
          </div>
          <div ref={visualRef} className="challenge-visual">
            <div className="comparison">
              <div className="comparison-item corporate">
                <h3>Corporate Roll-Up</h3>
                <ul>
                  <li>Centralized operations</li>
                  <li>Loss of local identity</li>
                  <li>Corporate automation</li>
                </ul>
              </div>
              <div className="comparison-item independent">
                <h3>Independent Business</h3>
                <ul>
                  <li>Local ownership</li>
                  <li>Community trust</li>
                  <li>Personal service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

