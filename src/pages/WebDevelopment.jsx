import { useState } from 'react';
import { FiExternalLink, FiX, FiMaximize2, FiGlobe } from 'react-icons/fi';
import TechLogo from '../components/TechLogos';
import './WebDevelopment.css';

export default function WebDevelopment() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullPreview, setFullPreview] = useState(null);

  const projects = [
    {
      id: 'ecommerce',
      num: '01',
      title: 'TSEDAQAH Clothing',
      category: 'E-Commerce',
      year: '2026',
      liveUrl: 'https://www.tsedaqah.com/',
      shortDesc: 'Full-stack e-commerce platform for a premium female office-wear brand in Nigeria.',
      fullDesc: 'A comprehensive e-commerce solution built from scratch. Features include a custom storefront with product catalog, admin dashboard for inventory management, Paystack payment integration, customer accounts and order history, discount codes, delivery logic, email/SMS notifications, abandoned cart recovery, and sales analytics.',
      tech: ['React', 'NodeJS', 'MongoDB', 'Paystack', 'Cloudinary', 'Vercel', 'Render'],
      viewLink: 'https://github.com',
    },
    {
      id: 'corporate',
      num: '02',
      title: 'Tetrangles Projects Ltd.',
      category: 'Corporate Site',
      year: '2025',
      liveUrl: null,
      shortDesc: 'Multi-page corporate website for a Nigerian construction and real estate company.',
      fullDesc: 'A fully branded multi-page website for Tetrangles Projects Limited. Includes a company overview, full project portfolio gallery, team profiles, and contact pages. Built with React/Vite and delivered as a production-ready package with responsive design across all device sizes.',
      tech: ['React', 'Vite', 'JWT'],
      viewLink: 'https://github.com',
    },
    {
      id: 'webapps',
      num: '03',
      title: 'Inkwell — Reading & Writing Platform',
      category: 'Web App',
      year: '2024',
      liveUrl: null,
      shortDesc: 'Wattpad-inspired platform for publishing and reading stories online.',
      fullDesc: 'A full-stack reading and writing community platform. Features user authentication, rich text story creation and publishing, a story discovery feed, reader profiles, follow system, and reading history. Built on the MERN stack with a RESTful API backend.',
      tech: ['React', 'NodeJS', 'MongoDB', 'Express', 'JWT'],
      viewLink: 'https://github.com',
    },
    {
      id: 'portfolio',
      num: '04',
      title: 'Dev Portfolio — Dark',
      category: 'Portfolio',
      year: '2024',
      liveUrl: null,
      shortDesc: 'Personal portfolio for web development work with dropdown navigation and project modals.',
      fullDesc: 'A dark-themed portfolio site built in React/Vite showcasing software development work. Features dropdown navigation, project detail modals, and a fully responsive layout.',
      tech: ['React', 'Vite'],
      viewLink: 'https://github.com',
    },
  ];

  return (
    <div className="webdev-page">
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Web Development</div>
          <h1>Selected Projects</h1>
          <p>Full-stack solutions built for production — from e-commerce platforms to corporate sites and web applications.</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card" id={project.id}>

              {/* Preview Area */}
              <div
                className={`project-preview ${project.liveUrl ? 'has-live' : 'no-live'}`}
                onClick={() => project.liveUrl && setFullPreview(project)}
              >
                {project.liveUrl ? (
                  <>
                    <div className="preview-frame-wrap">
                      <iframe
                        src={project.liveUrl}
                        title={project.title}
                        scrolling="no"
                        className="preview-iframe"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                    <div className="preview-overlay">
                      <FiMaximize2 size={20} />
                      <span>Expand Preview</span>
                    </div>
                  </>
                ) : (
                  <div className="preview-placeholder">
                    <div className="placeholder-icon"><FiGlobe size={28} /></div>
                    <span className="placeholder-label">Live URL coming soon</span>
                    <span className="placeholder-sub">Add your deployed URL to activate</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="project-body">
                <div className="project-top">
                  <span className="project-num">{project.num}</span>
                  <span className="project-cat">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>
                <div className="project-tech-logos">
                  {project.tech.map((t) => (
                    <TechLogo key={t} name={t} size={24} />
                  ))}
                </div>
                <div className="project-actions">
                  <button className="btn-details" onClick={() => setSelectedProject(project)}>
                    View Details
                  </button>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-sm">
                      <FiGlobe size={13} /> Live Site
                    </a>
                  )}
                  <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="btn-ghost-sm">
                    <FiExternalLink size={13} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Preview Modal — live iframe */}
      {fullPreview && (
        <div className="modal-overlay" onClick={() => setFullPreview(null)}>
          <div className="full-preview-box" onClick={(e) => e.stopPropagation()}>
            <div className="full-preview-bar">
              <div className="full-preview-bar-left">
                <span className="full-preview-title">{fullPreview.title}</span>
                <a
                  href={fullPreview.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="full-preview-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={13} /> {fullPreview.liveUrl}
                </a>
              </div>
              <button className="modal-close" onClick={() => setFullPreview(null)}>
                <FiX size={18} />
              </button>
            </div>
            <div className="full-preview-frame">
              <iframe
                src={fullPreview.liveUrl}
                title={fullPreview.title}
                className="full-preview-iframe"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FiX size={18} />
            </button>
            <div className="modal-cat">{selectedProject.category} — {selectedProject.year}</div>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-desc">{selectedProject.fullDesc}</p>
            <div className="modal-tech">
              {selectedProject.tech.map((t) => (
                <div key={t} className="modal-tech-item">
                  <TechLogo name={t} size={28} />
                </div>
              ))}
            </div>
            <div className="modal-footer">
              {selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-sm">
                  <FiGlobe size={14} /> Visit Live Site
                </a>
              )}
              <a href={selectedProject.viewLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FiExternalLink size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
