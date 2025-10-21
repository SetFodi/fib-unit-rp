# FIB Website

Modern website for the Federal Investigation Bureau in GTA 5 RP server.

## Quick Start

```bash
# Install dependencies
npm install

# Add your logo
# Place fib.jpg in the public folder

# Start development server
npm run dev
```

Open http://localhost:3000

## Pages

- **/** - Home page with animated logo and mission
- **/about** - About FIB, values, history
- **/recruitment** - Career opportunities
- **/testing** - Contact form with 3 categories

## Email Setup (Optional)

To enable contact form emails, create `.env.local` in the root folder:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_TO_EMAIL=fib.testing@example.com
```

**For Gmail:**
1. Enable 2-factor authentication
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use the app password in SMTP_PASS

The form works without this setup (won't actually send emails though).

## Customize

**Colors:** Edit `tailwind.config.js`  
**Content:** Edit files in `app/` folder  
**Logo:** Replace `public/fib.jpg`

## Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to https://vercel.com

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

---

For issues or questions, use the Testing page contact form.
