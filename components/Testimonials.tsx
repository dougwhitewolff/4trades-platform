'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const headerRef = useScrollAnimation();
  const testimonial1Ref = useScrollAnimation();
  const testimonial2Ref = useScrollAnimation();

  return (
    <section className="testimonials">
      <div className="container">
        <h2 ref={headerRef} className="section-header section-header-with-icon">
          <svg className="section-header-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          Trusted by local trades that put <span className="text-highlight">craftsmanship first.</span>
        </h2>

        <div className="testimonial-grid">
          <div ref={testimonial1Ref} className="testimonial">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              We never miss after-hours calls anymore and it paid for itself in the first month.
            </p>
            <div className="testimonial-author">
              <strong>Nick H.</strong>
              <span>Superior Fence</span>
            </div>
          </div>

          <div ref={testimonial2Ref} className="testimonial">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              I used to check my phone every ten minutes after dinner. Now I can actually relax, and still wake up to new leads.
            </p>
            <div className="testimonial-author">
              <strong>Local HVAC Owner</strong>
              <span>Portland, OR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
