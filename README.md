# Lumière Studio — AI & Digital Agency Website

A premium, production-ready React website for an AI, web development, and UI/UX design agency.

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/lumiere-studio.git
cd lumiere-studio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build for Production

```bash
npm run build
```

Builds the app into the `/build` folder, optimized for production.

## ☁️ Deploy to Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

## ☁️ Deploy to Netlify (Free)

```bash
npm run build
# Then drag the /build folder to netlify.com/drop
```

Or connect your GitHub repo at [netlify.com](https://netlify.com).

## 🗂 Project Structure

```
lumiere-studio/
├── public/
│   ├── index.html
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Work.js
│   │   ├── Testimonials.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── CursorGlow.js
│   ├── styles/
│   │   └── global.css
│   ├── data/
│   │   └── content.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## ✏️ Customisation

All text content is centralised in `src/data/content.js` — edit that file to update your brand name, services, portfolio, testimonials, and contact info.

## 📄 License

MIT
