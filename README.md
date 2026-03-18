# Studio - Creative Portfolio Website

A modern, fully-functional portfolio website showcasing design and development work with a unique teal and cream aesthetic.

## ✨ Features

- **Home Page**: Hero section with featured work showcase and statistics
- **Projects Page**: Comprehensive portfolio grid with project details
- **Services Page**: Service offerings, process workflow, and pricing tiers
- **Contact Page**: Contact form with FAQ section and business information
- **Responsive Design**: Mobile-first, fully responsive on all devices
- **Modern Aesthetics**: Teal and cream color scheme with smooth animations
- **Smooth Navigation**: React Router for seamless page transitions

## 🎨 Design System

### Color Palette
- **Teal Dark**: `#0d5f5f` - Primary headings and accents
- **Teal Main**: `#0f7f7f` - Buttons and interactive elements
- **Teal Light**: `#4da6a6` - Hover states and accents
- **Cream**: `#fef9f3` - Background and light elements
- **Sand**: `#f5ede4` - Secondary background
- **Accent**: `#d4754f` - Highlight color

### Typography
- Font Family: Inter, System fonts
- Headings: Bold (700 weight) with tight line height
- Body: Regular weight with optimal line height for readability

## 📁 Project Structure

```
portfolio-fresh/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Footer.jsx & Footer.css
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx & Home.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Services.jsx & Services.css
│   │   └── Contact.jsx & Contact.css
│   ├── App.jsx & App.css
│   ├── index.css (global styles)
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Extract the project**
   ```bash
   unzip portfolio-fresh.zip
   cd portfolio-fresh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🔧 Customization

### Update Content
- **Site Name**: Edit branding in `Navbar.jsx` and `Footer.jsx`
- **Projects**: Update project data in `Projects.jsx`
- **Services**: Modify services in `Services.jsx`
- **Contact Info**: Update details in `Contact.jsx`

### Customize Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --teal-dark: #0d5f5f;
  --teal-main: #0f7f7f;
  /* ... other colors ... */
}
```

### Add Images
Place images in `src/assets/` and import them:
```jsx
import myImage from '../assets/image.jpg';
<img src={myImage} alt="description" />
```

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Run `npm run build`
2. Drag and drop the `dist/` folder to Netlify

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select `main` branch and `/root` folder

## 🎯 Pages Overview

### Home
- Hero section with call-to-action
- About section with team statistics
- Featured project showcase
- Contact CTA

### Projects
- Full portfolio grid
- Project categories and descriptions
- Technology stack display
- Hover effects and animations

### Services
- Service cards with icons
- Process workflow breakdown
- Transparent pricing tiers
- Service details

### Contact
- Contact form with validation
- Business information cards
- FAQ section
- Social media links

## 🛠️ Tech Stack

- **Frontend**: React 19.2
- **Routing**: React Router DOM 7.13
- **Build Tool**: Vite 7.2
- **Icons**: React Icons 5.5
- **Styling**: CSS3 with CSS Variables
- **Linting**: ESLint

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

All designs are optimized for each breakpoint.

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is available for personal and commercial use.

## 🤝 Support

For questions or issues, please create an issue in your repository or contact the development team.

---

**Built with ❤️ for creative professionals**
