# APEX LABS Landing Page

Professional landing page for APEX LABS research peptide business. Built with Next.js, deployed on Vercel.

## Features

- **Hero Section** — Brand positioning and research focus
- **Featured Peptides** — Showcase 4 key products with research areas
- **Newsletter Signup** — Capture emails for weekly digest
- **Discord CTA** — Prominent call-to-action with permanent invite link
- **Mobile Responsive** — Works on all devices
- **Compliance** — "For research purposes only" disclaimer prominent throughout

## Tech Stack

- **Framework:** Next.js (React)
- **Styling:** CSS Modules
- **Hosting:** Vercel
- **Email:** Gmail SMTP (integrated via backend)

## Setup

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Deploy to Vercel

1. Push code to GitHub
2. Connect GitHub repo to Vercel (vercel.com)
3. Vercel auto-deploys on every push
4. No manual deployment needed

### Email Capture Integration

Currently placeholder. To activate:

1. Connect Google Sheets API (once service account is set up)
2. Update `/api/subscribe.js` to write subscriber emails to Google Sheet
3. Add Gmail SMTP integration to send confirmation emails

### Customization

- **Discord Invite:** Update `kYY3p822j3` in `/pages/index.js` if invite changes
- **Featured Peptides:** Edit grid in `/pages/index.js`
- **Colors:** Modify `--primary-color` and gradients in `/styles/home.module.css`
- **Copy:** Edit all text in `/pages/index.js`

## Next Steps

- [ ] Connect Google Sheets for subscriber logging
- [ ] Enable email confirmation via Gmail
- [ ] Add Google Analytics tracking
- [ ] Create newsletter template system
- [ ] Set up automated newsletter sends

## Compliance

All content includes "For research purposes only" disclaimer. No medical claims anywhere on site.
