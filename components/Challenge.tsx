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
          Local trades are being <span className="text-highlight">bought out</span> and it's changing how communities get service.
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
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    Centralized operations
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                    Loss of local identity
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                    </svg>
                    Corporate automation
                  </li>
                </ul>
              </div>
              <div className="comparison-item independent">
                <h3>Independent Business</h3>
                <ul>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    Local ownership
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    Community trust
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    Personal service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
