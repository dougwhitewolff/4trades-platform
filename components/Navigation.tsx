'use client';

import Image from 'next/image';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Navigation() {
  const { isOpen, toggle, close } = useMobileMenu();

  // Add navbar scroll effect
  useEffect(() => {
    const navbar = document.querySelector('.nav-bar') as HTMLElement;
    if (!navbar) return;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <Image 
            src="/assets/logos/4Trades_Banner_Logo.webp" 
            alt="4Trades.ai Logo" 
            className="logo-image"
            width={200}
            height={40}
            priority
          />
        </a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="/" onClick={close}>Home</a>
          <a href="/#products" onClick={close}>Products</a>
          <a href="/#pricing" onClick={close}>Pricing</a>
          <a href="/about" onClick={close}>About</a>
          <Button asChild variant={"4trades-primary" as any} size="default" className="nav-cta" onClick={close}>
            <a href="https://vasop-client.vercel.app/signup" target="_blank" rel="noopener noreferrer">Start My Setup</a>
          </Button>
        </div>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span style={{
            transform: isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none'
          }} />
          <span style={{
            opacity: isOpen ? 0 : 1
          }} />
          <span style={{
            transform: isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'none'
          }} />
        </button>
      </div>
    </nav>
  );
}

