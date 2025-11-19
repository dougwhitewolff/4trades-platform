'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-headline">
          Build. Serve.<br />Stay Independent.
        </h1>
        <p className="hero-microcopy">
          We build AI automation<br />
          for the people who build everything else.
        </p>
        <div className="hero-ctas">
          <Button asChild variant={"4trades-primary" as any} size="lg">
            <a href="#onboarding">Start My Setup</a>
          </Button>
          <Button asChild variant={"4trades-secondary" as any} size="lg">
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Learn more</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}

