'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactInfo = 'email: info@4trades.ai and phone: 5035501817';
    navigator.clipboard.writeText(contactInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
          <div className="footer-logo">
            <Image 
              src="/assets/logos/4Trades_Banner_Logo.webp" 
              alt="4Trades.ai Logo" 
              className="logo-image"
              width={200}
              height={50}
            />
          </div>
            <p className="footer-tagline">Powering the people who build.</p>
            <p className="footer-subtext">Built for trades. Rooted in reliability. Committed to independence.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="/about">About</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:info@4trades.ai">info@4trades.ai</a>
              <HoverCard openDelay={0} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <a 
                    href="#support" 
                    onClick={handleSupportClick}
                    className="support-link"
                  >
                    Support {copied && <span className="copied-indicator">✓ Copied</span>}
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="support-hover-card" align="start">
                  <div className="support-card-content">
                    <h4 className="support-card-title">Need Help?</h4>
                    <p className="support-card-text">
                      Use the chatbot at the bottom right of the page to learn about any info about the business or visit the <a href="/about" className="support-card-link">About page.</a>
                    </p>
                    <p className="support-card-text">
                      If you want to reach out directly, you can call us at the phone number or email us at the address below:
                    </p>
                    <div className="support-contact-info">
                      <div className="contact-item">
                        <span className="contact-label">Email:</span>
                        <span className="contact-value">info@4trades.ai</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Phone:</span>
                        <span className="contact-value">(503) 550-1817</span>
                      </div>
                    </div>
                    <p className="support-card-note">
                      {copied ? '✓ Contact info copied to clipboard!' : '(Click Support to copy contact info)'}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 4Trades.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

