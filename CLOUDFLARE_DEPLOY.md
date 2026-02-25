# Cloudflare Pages Deployment - Step by Step

Your code is now on GitHub: https://github.com/Gstid/word-lens-website

## 🚀 Deploy to Cloudflare Pages

### Step 1: Go to Cloudflare Dashboard

Visit: https://dash.cloudflare.com/

Log in with your Cloudflare account (create one if needed - it's free!)

### Step 2: Navigate to Pages

1. In the left sidebar, click **"Workers & Pages"**
2. Click the **"Create application"** button
3. Select the **"Pages"** tab
4. Click **"Connect to Git"**

### Step 3: Connect to GitHub

1. Click **"Connect GitHub"**
2. Authorize Cloudflare to access your GitHub account
3. Select **"Only select repositories"**
4. Choose: **word-lens-website**
5. Click **"Install & Authorize"**

### Step 4: Configure Build Settings

You'll see a setup page. Configure it exactly like this:

**Project name:** `word-lens-website`
(or choose a different name - this will be your subdomain)

**Production branch:** `main`

**Build settings:**
- Framework preset: **Next.js**
- Build command: `npm run build`
- Build output directory: `out`

**Root directory:** (leave empty)

**Environment variables:** (none needed)

### Step 5: Deploy!

1. Click **"Save and Deploy"**
2. Watch the build process (takes ~2-3 minutes)
3. You'll see logs streaming in real-time

### Step 6: Get Your Live URL

Once deployment succeeds, you'll get a URL like:
```
https://word-lens-website.pages.dev
```

Or whatever project name you chose.

## 🌐 Add Custom Domain (wordlens.ai)

After the first deployment succeeds:

### Step 1: Add Custom Domain

1. In your Cloudflare Pages project, go to **"Custom domains"** tab
2. Click **"Set up a custom domain"**
3. Enter: `wordlens.ai`
4. Click **"Continue"**

### Step 2: Cloudflare Configures Everything

Cloudflare will automatically:
- ✅ Create DNS records (if domain is in Cloudflare)
- ✅ Provision SSL certificate (free)
- ✅ Enable HTTPS redirect
- ✅ Set up CDN

### Step 3: Wait for DNS Propagation

- Usually takes **5-10 minutes**
- Sometimes up to 24 hours (rare)

### Step 4: Visit Your Site!

```
https://wordlens.ai
```

## 🔄 Automatic Deployments

From now on, every time you push to the `main` branch:
- Cloudflare automatically rebuilds
- Deploys the new version
- No manual intervention needed!

## 📊 What You Get

- ✅ Global CDN (175+ cities)
- ✅ Automatic HTTPS
- ✅ Unlimited bandwidth (free tier)
- ✅ Unlimited requests (free tier)
- ✅ 500 builds/month (free tier)
- ✅ Preview deployments for branches
- ✅ Rollback to any previous version
- ✅ Web Analytics (optional)

## 🐛 Troubleshooting

### Build Fails

Check the build logs in Cloudflare Dashboard. Common issues:

1. **"npm not found"** - Should not happen, but check build command
2. **"TypeScript errors"** - Run `npm run build` locally first
3. **"Out directory not found"** - Check build output directory is set to `out`

### Custom Domain Not Working

1. Check DNS records in Cloudflare DNS dashboard
2. Ensure nameservers point to Cloudflare
3. Wait 15-30 minutes for propagation
4. Try accessing via Pages subdomain first

### Site Shows 404

1. Check that build completed successfully
2. Ensure `out` directory was created
3. Verify `index.html` exists in build output

## 📱 Preview Your Site

Before custom domain is ready, use:
```
https://word-lens-website.pages.dev
```

## 🎯 Next Steps

1. ✅ Deploy to Cloudflare Pages
2. ✅ Add wordlens.ai custom domain
3. ✅ Test the live site
4. ✅ Share with users!

---

**Current Status:**
- ✅ Code pushed to GitHub
- ⏳ Waiting for Cloudflare deployment
- ⏳ Waiting for custom domain setup

**Estimated Time:** 10-15 minutes total
