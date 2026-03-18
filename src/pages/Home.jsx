import { Link } from 'react-router-dom';
import { FiArrowRight, FiLayout, FiServer, FiShoppingCart, FiFileText, FiDownload } from 'react-icons/fi';
import TechLogo from '../components/TechLogos';
import './Home.css';

const stackItems = [
  { name: 'React',       label: 'React'        },
  { name: 'NodeJS',      label: 'Node.js'      },
  { name: 'Express',     label: 'Express'      },
  { name: 'JavaScript',  label: 'JavaScript'   },
  { name: 'MongoDB',     label: 'MongoDB'      },
  { name: 'MariaDB',     label: 'MariaDB'      },
  { name: 'MySQL',       label: 'MySQL'        },
  { name: 'Vite',        label: 'Vite'         },
  { name: 'Tailwind',    label: 'Tailwind CSS' },
  { name: 'HTML',        label: 'HTML5'        },
  { name: 'CSS',         label: 'CSS3'         },
  { name: 'Paystack',    label: 'Paystack'     },
  { name: 'Flutterwave', label: 'Flutterwave'  },
  { name: 'Vercel',      label: 'Vercel'       },
  { name: 'Render',      label: 'Render'       },
  { name: 'Cloudinary',  label: 'Cloudinary'   },
  { name: 'Git',         label: 'Git'          },
  { name: 'GitHub',      label: 'GitHub'       },
];

export default function Home() {
  const services = [
    {
      id: 1,
      icon: FiShoppingCart,
      title: 'E-Commerce Platforms',
      description: 'Custom storefronts with Paystack/Flutterwave integration, admin dashboards, inventory tracking, discount codes, abandoned cart recovery, and analytics.',
    },
    {
      id: 2,
      icon: FiLayout,
      title: 'Corporate & Brand Sites',
      description: 'Multi-page websites for businesses — full branding, portfolio galleries, team pages, and responsive design. Delivered production-ready.',
    },
    {
      id: 3,
      icon: FiServer,
      title: 'Full-Stack Web Apps',
      description: 'End-to-end web applications with React frontends, Node.js APIs, database design (MongoDB / MariaDB), auth systems, and cloud deployment.',
    },
  ];

  const stats = [
    { number: '10+',  label: 'Projects Shipped'  },
    { number: '2+',   label: 'Years Experience'   },
    { number: '100%', label: 'Production Ready'   },
    { number: '∞',    label: 'Git Commits'        },
  ];

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-grid-bg"></div>
          <div className="hero-content">
            <div className="hero-eyebrow">Based in Lagos, Nigeria</div>
            <h1 className="hero-title">
              Precious<br />
              <span className="title-muted">Full-Stack</span><br />
              <span className="title-accent">Developer</span>
            </h1>
            <p className="hero-desc">
              I build complete web products — from pixel-perfect React frontends to robust Node.js backends.
              Specializing in e-commerce platforms and production-grade deployments for Nigerian brands.
            </p>
            <div className="hero-ctas">
              <Link to="/web-development" className="cta-primary">
                View My Work <FiArrowRight size={16} />
              </Link>
              <Link to="/contact" className="cta-ghost">
                Let's Talk
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-resume"
              >
                <FiFileText size={15} /> Resume
              </a>
            </div>
          </div>
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="hero-stat-num">{s.number}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="expertise">
        <div className="section-container">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>What I Build</h2>
            <div className="section-line"></div>
          </div>
          <div className="expertise-grid">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="expertise-card">
                  <div className="expertise-icon"><Icon size={28} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="stack-strip">
        <div className="section-container">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Tech Stack</h2>
            <div className="section-line"></div>
          </div>
          <div className="stack-logos-grid">
            {stackItems.map((item) => (
              <div key={item.name} className="stack-logo-card">
                <TechLogo name={item.name} size={48} showLabel={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="section-container">
          <h2>Ready to build something <span className="title-accent">worth shipping?</span></h2>
          <p>I'm available for freelance projects, e-commerce builds, and long-term collaborations.</p>
          <div className="home-cta-btns">
            <Link to="/contact" className="cta-primary">
              Get in Touch <FiArrowRight size={16} />
            </Link>
            <a
              href="/resume.pdf"
              download="Adekoya_Precious_Resume.pdf"
              className="cta-ghost"
            >
              <FiDownload size={15} /> Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
