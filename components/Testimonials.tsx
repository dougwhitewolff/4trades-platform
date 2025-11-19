'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const headerRef = useScrollAnimation();
  const testimonial1Ref = useScrollAnimation();
  const testimonial2Ref = useScrollAnimation();

  return (
    <section className="testimonials">
      <div className="container">
        <h2 ref={headerRef} className="section-header">
          Trusted by local trades that put craftsmanship first.
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

        <div className="section-cta">
          <Button asChild variant={"4trades-primary" as any} size="lg">
            <a href="#case-studies">See Case Studies</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

