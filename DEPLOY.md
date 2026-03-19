# Deploying vkatos.com to Vercel

## First deployment

1. Install Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Login to Vercel:
   ```
   vercel login
   ```
   Use: velan@vkatos.com

3. Deploy:
   ```
   cd ~/Desktop/vkatos_website
   vercel --prod
   ```

4. Add custom domain in Vercel dashboard:
   - Go to: Project Settings → Domains
   - Add: `vkatos.com` and `www.vkatos.com`

5. Update DNS (wherever vkatos.com is registered):
   ```
   A record:    @    → 76.76.19.61
   CNAME:       www  → cname.vercel-dns.com
   ```

## Auto-deploy on changes

6. Push website to GitHub:
   ```
   cd ~/Desktop/vkatos_website
   git init
   git add -A
   git commit -m "Initial website"
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

7. Connect to Vercel:
   - Vercel dashboard → Import Project → Import from GitHub
   - Select: vkatos_website repo
   - Every `git push` to main: site live in 30 seconds

## Updating the website

```
# Make changes locally, then:
git add -A
git commit -m "Update: [what you changed]"
git push
# → Live in ~30 seconds. No build step. No server.
```

## Dynamic features (workflow builder, signup)

These need the platform API running.

**Until VPS is ready:** form submissions route to WhatsApp via FormSubmit.co (free, no backend needed).
- Workflow builder submit → velan@vkatos.com via FormSubmit
- Signup (pre-payment) → FormSubmit fallback

**When VPS is ready:**
1. Update `vercel.json` rewrites to point to your VPS URL:
   ```json
   {
     "rewrites": [
       { "source": "/api/(.*)", "destination": "https://YOUR_VPS_IP:9100/api/$1" }
     ]
   }
   ```
2. All dynamic features activate automatically — no other changes needed.

## File structure

```
vkatos_website/
├── index.html              ← Homepage
├── pricing.html            ← Pricing page
├── demo.html               ← Demo booking
├── signup.html             ← Self-service signup
├── design-your-pipeline.html ← Pipeline builder (lead gen)
├── status.html             ← System status page
├── DEPLOY.md               ← This file
├── vercel.json             ← Vercel config
├── assets/
│   └── css/
│       └── main.css        ← Shared stylesheet
├── industries/
│   ├── education-consultancy.html
│   ├── recruitment.html
│   ├── healthcare.html
│   ├── legal.html
│   ├── real-estate.html
│   └── manufacturing.html
└── blog/
    ├── index.html          ← Blog index
    └── post-1.html         ← First post
```

## Environment variables (none needed)

This is a pure static site. No environment variables required.
All API calls are client-side and fail gracefully to FormSubmit fallbacks.

## Custom 404 page

Vercel serves `404.html` automatically. Create one if needed.

## Support

Questions: velan@vkatos.com | +91 80562 38628
