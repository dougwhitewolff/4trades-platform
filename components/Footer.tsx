import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image 
                src="/assets/logos/4Trades_Banner_Logo.png" 
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
              <a href="#about">About</a>
              <a href="#governance">Governance</a>
              <a href="#resources">Resources</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:info@4trades.ai">info@4trades.ai</a>
              <a href="#support">Support</a>
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

