# Image Assets for 4Trades.ai Website

## Required Images

### Logo Files

**Main Logo:**
- **File name**: `4Trades_Banner_Logo.png` (or .svg for best quality)
- **Location**: This directory (`website/assets/images/`)
- **Usage**: Navigation bar and footer
- **Recommended specs**:
  - Format: PNG with transparent background or SVG
  - Height: ~80-120px (will be scaled to 40px)
  - Width: Auto (maintains aspect ratio)
  - Color: Should work well on dark backgrounds (navbar/footer are dark)

**Supported formats**: PNG, SVG, JPG, WebP

### Optional Images (Future Enhancement)

1. **Hero Background** (`hero-background.jpg`)
   - Jobsite at dusk photo
   - Contractor locking up with phone notification
   - Recommended: 1920x1080px or larger
   - JPG or WebP format

2. **Testimonial Photos**
   - `testimonial-nick-h.jpg`
   - `testimonial-hvac-owner.jpg`
   - Recommended: 400x400px square
   - JPG format

3. **Challenge Section Visual**
   - Blueprint or construction textures
   - Comparison graphics

## Current Status

The website is configured to load `4Trades_Banner_Logo.png`.

If you have the logo in a different format:
- SVG: Rename to `4Trades_Banner_Logo.svg` and update HTML
- JPG: Rename to `4Trades_Banner_Logo.jpg` and update HTML

To update the image path, edit:
- `website/index.html` (line 21 and line 277)
