'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useStatCounter } from '@/hooks/useStatCounter';
import { Button } from '@/components/ui/button';

export default function Proof() {
  const headerRef = useScrollAnimation();
  const introRef = useScrollAnimation();
  
  const uptime = useStatCounter(99.9, 1);
  const cost = useStatCounter(25);
  const retention = useStatCounter(90);

  return (
    <section className="proof">
      <div className="container">
        <h2 ref={headerRef} className="section-header">
          Reliability you can measure.
        </h2>
        <p ref={introRef} className="section-intro">
          Our commitment to builders is simple: reliability before speed, proof before promises.
        </p>

        <div className="stats">
          <div className="stat" ref={uptime.ref}>
            <div className="stat-value">
              <span className="stat-number">{uptime.value}</span>
              <span className="stat-suffix">%</span>
            </div>
            <div className="stat-label">uptime</div>
          </div>
          
          <div className="stat" ref={cost.ref}>
            <div className="stat-value">
              <span className="stat-number">{cost.value}</span>
              <span className="stat-suffix">%</span>
            </div>
            <div className="stat-label">lower cost</div>
          </div>
          
          <div className="stat" ref={retention.ref}>
            <div className="stat-value">
              <span className="stat-number">{retention.value}</span>
              <span className="stat-suffix">%+</span>
            </div>
            <div className="stat-label">retention</div>
          </div>
        </div>

        <p className="proof-text">
          Every 4Trades.ai customer receives transparent reliability reports and ROI summaries. Because trust is earned with evidence, not slogans.
        </p>

        <div className="section-cta">
          <Button asChild variant={"4trades-secondary-light" as any} size="lg">
            <a href="#standards">See Reliability Standards</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

