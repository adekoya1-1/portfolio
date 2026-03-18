# Precious — Full-Stack Developer Portfolio

Personal portfolio site built with React + Vite.

## Stack
- React 19, React Router 7, Vite 7
- CSS3 with custom properties (dark theme)
- react-icons, devicons CDN for tech logos

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

The `vercel.json` handles SPA routing automatically.

## Deploying to Netlify

1. Push to GitHub
2. New site from Git → select repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

The `public/_redirects` file handles SPA routing on Netlify.

## Adding Live Project URLs

In `src/pages/WebDevelopment.jsx`, update the `liveUrl` field for each project:

```js
{ liveUrl: 'https://your-project.vercel.app' }
```

## Resume

Place your resume PDF at `public/resume.pdf` — it's already included.
