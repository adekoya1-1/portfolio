// Tech logos using devicons PNG CDN — no background, no inline SVG
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const logos = {
  React:       { src: `${CDN}/react/react-original.svg`,               label: 'React'        },
  NodeJS:      { src: `${CDN}/nodejs/nodejs-original.svg`,             label: 'Node.js'      },
  Express:     { src: `${CDN}/express/express-original.svg`,           label: 'Express'      },
  MongoDB:     { src: `${CDN}/mongodb/mongodb-original.svg`,           label: 'MongoDB'      },
  MariaDB:     { src: `${CDN}/mariadb/mariadb-original.svg`,           label: 'MariaDB'      },
  Vite:        { src: `${CDN}/vitejs/vitejs-original.svg`,             label: 'Vite'         },
  Tailwind:    { src: `${CDN}/tailwindcss/tailwindcss-original.svg`,   label: 'Tailwind CSS' },
  Vercel:      { src: `${CDN}/vercel/vercel-original.svg`,             label: 'Vercel'       },
  Cloudinary:  { src: `${CDN}/cloudinary/cloudinary-original.svg`,     label: 'Cloudinary'   },
  Git:         { src: `${CDN}/git/git-original.svg`,                   label: 'Git'          },
  GitHub:      { src: `${CDN}/github/github-original.svg`,             label: 'GitHub'       },
  JavaScript:  { src: `${CDN}/javascript/javascript-original.svg`,     label: 'JavaScript'   },
  HTML:        { src: `${CDN}/html5/html5-original.svg`,               label: 'HTML5'        },
  CSS:         { src: `${CDN}/css3/css3-original.svg`,                 label: 'CSS3'         },
  MySQL:       { src: `${CDN}/mysql/mysql-original.svg`,               label: 'MySQL'        },
  // Custom logos for services without devicons entries
  Paystack:    { src: 'https://avatars.githubusercontent.com/u/14174490?s=200&v=4', label: 'Paystack'     },
  Flutterwave: { src: 'https://avatars.githubusercontent.com/u/35386909?s=200&v=4', label: 'Flutterwave'  },
  Render:      { src: 'https://avatars.githubusercontent.com/u/36424661?s=200&v=4', label: 'Render'       },
  JWT:         { src: 'https://jwt.io/img/pic_logo.svg',               label: 'JWT Auth'     },
};

export default function TechLogo({ name, size = 40, showLabel = false }) {
  const tech = logos[name];
  if (!tech) return (
    <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
      {name}
    </span>
  );

  return (
    <div className="tech-logo-wrap" title={tech.label} style={{ '--logo-size': `${size}px` }}>
      <img
        src={tech.src}
        alt={tech.label}
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'contain', display: 'block' }}
        loading="lazy"
      />
      {showLabel && <span className="tech-logo-name">{tech.label}</span>}
    </div>
  );
}
