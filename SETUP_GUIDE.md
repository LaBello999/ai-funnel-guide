# AI Funnel Guide – Setup & Integration Guide

## Overview

**AI Funnel Guide** is a two-language affiliate funnel website built with React, Tailwind CSS, and designed for Cloudflare Pages deployment. This guide covers the setup, configuration, and integration steps needed to go live.

## Project Structure

```
client/
  src/
    pages/          # Page components (Home, Guides, Comparisons, Tools)
    components/     # Reusable UI components (Navigation, Footer, LeadForm)
    contexts/       # React contexts (LanguageContext, ThemeContext)
    lib/            # Utilities (language.ts, tracking.ts)
    App.tsx         # Main router with localized routes
    index.css       # Design system & Tailwind config
```

## Key Features

### 1. Bilingual Routing
- **English**: `/en/`, `/en/guides`, `/en/comparisons`, `/en/tools`
- **German**: `/de/`, `/de/guides`, `/de/comparisons`, `/de/tools`
- Automatic browser language detection with localStorage persistence
- Visible language switcher in navigation

### 2. Affiliate Transparency
- Affiliate disclosure on every page
- Clear labeling of affiliate links
- Privacy policy and terms of service placeholders

### 3. Lead Funnel
- Email capture form (LeadForm component)
- GetResponse integration placeholder
- Success confirmation after submission

### 4. Analytics & Tracking
- Umami analytics (privacy-focused, already configured in HTML)
- Custom event tracking for:
  - Lead form submissions
  - Affiliate link clicks
  - Page views
  - Tool comparisons viewed

## Integration Steps

### Step 1: Domain Setup

1. **Register domain** (e.g., `aifunnelguide.io`, `aifunnelguide.de`)
2. **Update nameservers** to point to Cloudflare
3. **Add domain** to Cloudflare account
4. **Configure DNS records** in Cloudflare

### Step 2: Cloudflare Pages Deployment

1. **Connect GitHub repository** to Cloudflare Pages
2. **Set build command**: `pnpm build`
3. **Set publish directory**: `dist`
4. **Environment variables**:
   ```
   VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
   VITE_ANALYTICS_WEBSITE_ID=your-umami-website-id
   ```
5. **Deploy** and verify at `https://aifunnelguide.pages.dev`

### Step 3: GetResponse Integration

1. **Create GetResponse account** (if not already done)
2. **Create campaign** for AI Funnel Guide
3. **Get API credentials**:
   - API Key
   - Campaign ID
4. **Update LeadForm component** (`client/src/components/LeadForm.tsx`):
   ```typescript
   // Replace TODO section with:
   const response = await fetch('https://api.getresponse.com/v3/contacts', {
     method: 'POST',
     headers: {
       'X-Auth-Token': `Bearer ${import.meta.env.VITE_GETRESPONSE_API_KEY}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: formData.email,
       name: formData.name,
       campaign: { campaignId: import.meta.env.VITE_GETRESPONSE_CAMPAIGN_ID },
       tags: ['ai-funnel-guide', language],
     }),
   });
   ```
5. **Add environment variables** to Cloudflare:
   ```
   VITE_GETRESPONSE_API_KEY=your-api-key
   VITE_GETRESPONSE_CAMPAIGN_ID=your-campaign-id
   ```

### Step 4: Affiliate Link Configuration

Update affiliate links in the following files:

1. **ComparisonsPage.tsx** – Tool comparison cards
2. **ToolsPage.tsx** – Tool directory
3. **GuidesPage.tsx** – CTA buttons

Replace placeholder links with actual affiliate URLs:
- GetResponse: `https://getresponse.com?affiliate_id=YOUR_ID`
- KlickTipp: `https://klicktipp.com?affiliate_id=YOUR_ID`
- Instantly AI: `https://instantly.ai?affiliate_id=YOUR_ID`

### Step 5: Analytics Setup

1. **Set up Umami** (self-hosted or SaaS)
2. **Create website** in Umami dashboard
3. **Get website ID**
4. **Update environment variables**:
   ```
   VITE_ANALYTICS_ENDPOINT=https://your-umami-instance.com
   VITE_ANALYTICS_WEBSITE_ID=your-website-id
   ```

### Step 6: Email Sequences Setup

In GetResponse, create the following email sequences:

1. **Welcome Email** – Introduce AI Funnel Guide
2. **Guide #1** – GetResponse Setup Guide
3. **Guide #2** – Funnel Structure
4. **Comparison Email** – Tool comparison highlights
5. **Affiliate Offer** – Recommended tools with affiliate links

Tag emails by language (`en`, `de`) for proper segmentation.

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Environment Variables

Create `.env.local` for local development:

```env
VITE_ANALYTICS_ENDPOINT=http://localhost:3000
VITE_ANALYTICS_WEBSITE_ID=test-website-id
VITE_GETRESPONSE_API_KEY=your-test-api-key
VITE_GETRESPONSE_CAMPAIGN_ID=your-test-campaign-id
```

## Customization

### Add New Pages

1. Create new component in `client/src/pages/`
2. Add routes to `App.tsx` for both languages
3. Update navigation links in `Navigation.tsx`

### Update Content

All content is in component files. Search for `content = {` to find translatable strings.

### Modify Design

- Colors: Edit CSS variables in `client/src/index.css`
- Fonts: Update Google Fonts in `client/index.html`
- Layout: Modify Tailwind classes in components

## Deployment Checklist

- [ ] Domain registered and pointing to Cloudflare
- [ ] Cloudflare Pages project created and connected
- [ ] GetResponse account and campaign set up
- [ ] Affiliate links updated in all pages
- [ ] Environment variables configured in Cloudflare
- [ ] Email sequences created in GetResponse
- [ ] Analytics (Umami) configured
- [ ] Privacy policy and terms of service pages created
- [ ] Affiliate disclosure reviewed for compliance
- [ ] Testing completed on desktop and mobile
- [ ] SSL certificate active (automatic with Cloudflare)

## Monitoring & Optimization

### Track Performance

1. **Umami Dashboard** – View page views, top pages, referrers
2. **GetResponse Analytics** – Monitor email open rates, click rates
3. **Affiliate Dashboard** – Track clicks and commissions

### Optimize Conversion

1. **A/B test** email subject lines
2. **Analyze** which tools get most clicks
3. **Improve** CTA button copy and placement
4. **Segment** email list by language and behavior

## Support & Troubleshooting

### Common Issues

**LeadForm not submitting?**
- Check GetResponse API key and campaign ID
- Verify CORS settings in Cloudflare
- Check browser console for errors

**Language switcher not working?**
- Clear localStorage: `localStorage.clear()`
- Check URL structure: should be `/en/` or `/de/`

**Analytics not tracking?**
- Verify Umami endpoint and website ID
- Check browser console for script errors
- Ensure Umami instance is accessible

## Next Steps

1. **Create content** – Write detailed guides for each tool
2. **Build email sequences** – Create nurture campaigns
3. **Set up social media** – Share content on Instagram/TikTok
4. **Optimize for SEO** – Add meta tags, structured data
5. **Monitor performance** – Track conversion rates and adjust

## Support

For questions or issues, refer to:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GetResponse API Documentation](https://apidocs.getresponse.com/)
- [React Documentation](https://react.dev/)
