# SIYAZEN — Digital Growth Partner Website

A modern digital marketing agency website built with React.js, inspired by Emovur.

## 🚀 Deploy to Vercel (Step-by-Step)

### Method 1: Vercel CLI (Recommended)

```bash
# 1. Install dependencies
npm install

# 2. Install Vercel CLI globally
npm install -g vercel

# 3. Login to Vercel
vercel login

# 4. Deploy!
vercel --prod
```

### Method 2: GitHub + Vercel (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SIYAZEN website"
   git remote add origin https://github.com/YOUR_USERNAME/siyazen.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your `siyazen` GitHub repository
   - Framework: **Create React App** (auto-detected)
   - Click **Deploy** ✅

3. Your site will be live at: `https://siyazen.vercel.app`

---

## 🛠 Local Development

```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

---

## 🎨 Features

- ✅ Sticky responsive navbar with dropdown menus
- ✅ Hero section with animated stats
- ✅ Auto-scrolling brand marquee
- ✅ Services section with infinite image strips (CSS marquee)
- ✅ Interactive products/command center with tab switching
- ✅ Project case studies with hover effects
- ✅ Testimonials with auto-carousel
- ✅ Accordion FAQ
- ✅ Contact form
- ✅ Full responsive footer
- ✅ Smooth scroll & CSS animations
- ✅ Dark mode design with accent yellow (#e8ff47)

## Tech Stack
- React 18
- Pure CSS animations (no external animation libs)
- Google Fonts (Syne + DM Sans)
- Vercel for deployment
