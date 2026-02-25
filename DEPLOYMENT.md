# Deployment Guide - Word Lens Website

## Prerequisites

- GitHub account
- Cloudflare account (free tier works)
- Domain name (optional, but you have wordlens.ai)

## Step-by-Step Deployment to Cloudflare Pages

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Word Lens marketing website"

# Create GitHub repo and push
# (Replace with your GitHub username/repo)
git remote add origin https://github.com/yourusername/word-lens-website.git
git branch -M main
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Visit [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Pages**
3. Click **"Create a project"**
4. Click **"Connect to Git"**
5. Authorize GitHub access
6. Select your repository: `word-lens-website`

### 3. Configure Build Settings

In the Cloudflare setup wizard:

**Build settings:**
- Framework preset: `Next.js`
- Build command: `npm run build`
- Build output directory: `out`

**Environment variables:**
- None needed for this static site

Click **"Save and Deploy"**

### 4. Wait for Deployment

- Initial build takes ~2-3 minutes
- Watch the build logs in real-time
- Once complete, you'll get a URL: `word-lens-website.pages.dev`

### 5. Test the Deployment

Visit your `*.pages.dev` URL and test:
- ✅ Homepage loads
- ✅ Interactive demo works (hold Command + click words)
- ✅ Feature cards animate on hover
- ✅ All sections display correctly
- ✅ Responsive on mobile

### 6. Connect Custom Domain (wordlens.ai)

1. In Cloudflare Pages project → **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter: `wordlens.ai`
4. Cloudflare will:
   - Automatically configure DNS records
   - Provision SSL certificate (free)
   - Enable HTTPS redirect

5. Wait 5-10 minutes for DNS propagation
6. Visit: https://wordlens.ai ✅

### 7. Optional: Add www Subdomain

1. In Custom domains, click **"Set up a custom domain"** again
2. Enter: `www.wordlens.ai`
3. Cloudflare auto-configures redirect from www → apex domain

## Automatic Deployments

Every time you push to `main` branch:
- Cloudflare automatically builds and deploys
- No manual intervention needed
- Old versions remain accessible for rollback

## Branch Previews

Push to any other branch:
- Cloudflare creates a preview URL
- Example: `feature-branch.word-lens-website.pages.dev`
- Perfect for testing before merging to main

## Rollback to Previous Version

1. Go to Cloudflare Pages → Deployments
2. Find the deployment you want to rollback to
3. Click **"Rollback to this deployment"**
4. Instant rollback (no rebuild needed)

## Performance Optimization

Cloudflare Pages automatically provides:
- ✅ Global CDN (175+ data centers)
- ✅ HTTP/3 and Brotli compression
- ✅ DDoS protection
- ✅ Automatic cache invalidation
- ✅ SSL/TLS encryption
- ✅ 99.99% uptime SLA

## Monitoring

View analytics in Cloudflare Pages:
- Page views
- Unique visitors
- Geographic distribution
- Bandwidth usage

## Troubleshooting

### Build Fails

Check build logs for errors:
- Common issue: Missing dependencies → Run `npm install` locally
- TypeScript errors → Run `npm run build` locally to debug

### Domain Not Working

- Wait 10-15 minutes for DNS propagation
- Check DNS records in Cloudflare DNS dashboard
- Ensure nameservers point to Cloudflare

### Site Loads but Demo Doesn't Work

- Open browser console for errors
- Check that JavaScript is enabled
- Test in incognito mode (clear cache)

## Cost

**Cloudflare Pages Free Tier:**
- Unlimited bandwidth
- Unlimited requests
- 500 builds per month
- 100 custom domains
- More than enough for this site!

## Next Steps After Deployment

1. ✅ Verify site at wordlens.ai
2. Update Chrome extension links to point to wordlens.ai
3. Set up analytics (Cloudflare Web Analytics - free)
4. Monitor performance and user engagement
5. Iterate based on feedback

---

**Estimated Time to Deploy:** 10-15 minutes (including domain setup)

**Support:** If you run into issues, check [Cloudflare Pages docs](https://developers.cloudflare.com/pages/) or the Cloudflare Discord.
