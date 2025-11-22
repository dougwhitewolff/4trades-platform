'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div 
        className="hero-content"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <h1 className="hero-headline">
          Build. Serve. <span className="hero-headline-break">Stay Independent.</span>
        </h1>
        <p className="hero-microcopy">
          We build AI automation for the people who build everything else.
        </p>
        <div className="hero-ctas">
          <Button asChild variant={"4trades-primary" as any} size="lg">
            <a href="https://vasop-client.vercel.app/signup">Start My Setup</a>
          </Button>
          <Button asChild variant={"4trades-secondary" as any} size="lg">
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>
      </div>
      <button 
        onClick={scrollToNextSection}
        className="scroll-indicator"
        aria-label="Scroll to next section"
      >
        <span>Learn more</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </button>
    </section>
  );
}

