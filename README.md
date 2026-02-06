# Northwoods Adjusting LLC - Website

Professional single-page website for Northwoods Adjusting LLC.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Replacing Placeholder Images

Replace the placeholder image URLs in `src/App.jsx`:

- **LOGO_URL**: Replace with your actual Northwoods logo
- **MAP_URL**: Replace with US coverage map image
- **COLLAGE_URL**: Replace with vehicle types collage image
- **BADGE_URL**: Replace with satisfaction guarantee badge

## Sections

- **Home**: Hero section with logo and tagline
- **About**: Company overview and vehicle types
- **Services**: Services offered and units handled
- **Coverage**: Nationwide network information
- **Process**: Timeline and appraisal package details
- **Contact**: How to submit claims and contact information

## Features

- ✅ Smooth scrolling navigation
- ✅ Active section highlighting in nav
- ✅ Fully responsive design
- ✅ Professional animations
- ✅ Matching brand colors from e-brochure

## Deployment

### Cloudflare Pages (Recommended)
1. Push to GitHub
2. Connect to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`

### Vercel
1. Push to GitHub
2. Import to Vercel
3. It auto-detects Vite settings

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Customization

All colors are defined as CSS variables in `src/App.css`:
- `--forest-dark`: #1a3a2f
- `--sunset-gold`: #f4a844
- `--cream`: #faf8f5

Edit these to adjust the color scheme.
