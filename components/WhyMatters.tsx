'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export default function WhyMatters() {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <section className="why-matters">
      <div className="container">
        <h2 ref={headerRef} className="section-header">
          When local builders thrive, communities do too.
        </h2>
        <div ref={contentRef} className="why-content">
          <p>
            Every small trades business that stays independent keeps money, mentorship, and craftsmanship in the community. Our mission is to make sure technology strengthens not replaces that independence.
          </p>
          <p>
            4Trades.ai helps the people who build our homes, fix our systems, and keep our neighborhoods running. Because when you succeed, local life stays strong.
          </p>
        </div>
        <div className="section-cta">
          <Button asChild variant={"4trades-primary" as any} size="lg">
            <a href="#onboarding">Keep Your Business Local</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

