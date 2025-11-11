# 4Trades.ai Website

Professional landing page for 4Trades.ai - automation platform for independent trades businesses.

## Overview

This website implements the complete 4Trades.ai brand specification v1.0, featuring:

- **Hero Section**: Brand mission and primary CTA
- **Challenge Section**: Corporate buyout narrative
- **Solution Section**: Feature cards for AI products
- **Proof & Performance**: Animated metrics and reliability stats
- **Testimonials**: Real builder feedback
- **How It Works**: 3-step onboarding process
- **Why It Matters**: Community impact message
- **Footer**: Navigation and contact information

## Brand Specifications

### Typography
- **Font**: Work Sans (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

### Color Palette
- **4Trades Orange**: `#FF7F11` - Primary accent, buttons, icons
- **Charcoal Black**: `#1C1C1C` - Primary background
- **Dark Gray**: `#2E2E2E` - Text on light backgrounds
- **Off-White**: `#F5F5F5` - Section backgrounds
- **Pure White**: `#FFFFFF` - Text on dark backgrounds
- **Steel Blue**: `#2A5D80` - Secondary/hover states

## Features

### Responsive Design
- Desktop (1200px+)
- Tablet (768px - 992px)
- Mobile (< 768px)

### Interactive Elements
- Smooth scroll navigation
- Animated stat counters
- Scroll-triggered fade-in animations
- Hover effects on cards and buttons
- Mobile hamburger menu

### Accessibility
- WCAG AAA contrast ratios
- Keyboard navigation support
- Semantic HTML structure
- Screen reader friendly

## Local Development

### Quick Start

1. **Using Python 3** (recommended):
   ```bash
   cd website
   python3 -m http.server 8000
   ```
   Visit: `http://localhost:8000`

2. **Using PHP**:
   ```bash
   cd website
   php -S localhost:8000
   ```
   Visit: `http://localhost:8000`

3. **Using Node.js (http-server)**:
   ```bash
   npm install -g http-server
   cd website
   http-server -p 8000
   ```
   Visit: `http://localhost:8000`

4. **Direct File Access**:
   Simply open `index.html` in your browser (some features may be limited)

## File Structure

```
website/
├── index.html              # Main landing page
├── css/
│   └── styles.css         # Complete brand stylesheet
├── js/
│   └── script.js          # Interactions and animations
├── assets/
│   └── images/            # Images and graphics (to be added)
└── README.md              # This file
```

## Deployment

### Static Hosting Options

1. **Netlify**: Drop the `website` folder or connect to Git
2. **Vercel**: Deploy directly from repository
3. **GitHub Pages**: Push to `gh-pages` branch
4. **AWS S3**: Upload as static website
5. **Cloudflare Pages**: Connect repository

### Production Checklist

- [ ] Add real jobsite images for hero background
- [ ] Add builder photos for testimonials
- [ ] Create and add favicon
- [ ] Optimize images (WebP format recommended)
- [ ] Add meta tags for social sharing (Open Graph, Twitter Cards)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure CDN for performance
- [ ] Add SSL certificate
- [ ] Test on multiple browsers and devices
- [ ] Run Lighthouse audit for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (latest)

## Future Enhancements

Optional features from the brand spec:

1. **Interactive ROI Calculator**
2. **Live Agent Demo** (Twilio integration)
3. **Blog/Resources Section**
4. **Case Studies Page**
5. **Products Detail Page**
6. **Pricing Page**
7. **About/Team Page**
8. **Onboarding Portal**

## Performance

- CSS: 17KB (minified)
- JavaScript: 8KB (minified)
- No external dependencies except Google Fonts
- Lazy-loading ready for images
- Optimized for Core Web Vitals

## License

© 2025 4Trades.ai. All rights reserved.

## Contact

For questions or support: info@4trades.ai
