import { useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const info = [
    { icon: FiMail,    label: 'Email',    value: 'adekoyaprecious180@gmail.com',         href: 'mailto:adekoyaprecious180@gmail.com' },
    { icon: FiMapPin,  label: 'Location', value: 'Ikota, Lagos, Nigeria',                href: null },
    { icon: FiGithub,  label: 'GitHub',   value: 'github.com/precious',                 href: 'https://github.com' },
    { icon: FiLinkedin,label: 'LinkedIn', value: 'linkedin.com/in/precious',             href: 'https://linkedin.com' },
    { icon: FiTwitter, label: 'Portfolio', value: 'adekoyapreciousabdulfataii.vercel.app', href: 'https://adekoyapreciousabdulfataii.vercel.app/' },
  ];

  const faqs = [
    {
      q: 'What is your typical project timeline?',
      a: 'Most projects range from 3 to 8 weeks depending on scope. A full e-commerce platform typically takes 6–8 weeks. Simpler corporate sites can be delivered in 2–3 weeks.',
    },
    {
      q: 'Do you offer post-launch support?',
      a: 'Yes. I offer maintenance packages for all projects — bug fixes, content updates, and feature additions. We can agree on a support tier at the start of the project.',
    },
    {
      q: 'Which payment gateways do you integrate?',
      a: 'I specialize in Paystack and Flutterwave for Nigerian and African markets. Both are fully supported in my e-commerce builds with card, bank transfer, and USSD flows.',
    },
    {
      q: 'Can you work within a fixed budget?',
      a: 'Absolutely. I offer tiered pricing packages for e-commerce and web projects. Reach out with your requirements and I\'ll put together a proposal that fits your budget.',
    },
  ];

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Contact</div>
          <h1>Let's Build Together</h1>
          <p>Have a product to ship, a site to launch, or an idea to explore? I'd love to hear about it.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">

          {/* Left: Info */}
          <div className="contact-info">
            <div className="info-header">
              <h2>Get In Touch</h2>
              <p>I typically respond within 24 hours. For urgent projects, mention it in your message.</p>
            </div>

            <div className="info-list">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="info-row">
                    <div className="info-icon"><Icon size={16} /></div>
                    <div className="info-text">
                      <span className="info-label">{item.label}</span>
                      {item.href
                        ? <a href={item.href} className="info-value link">{item.value}</a>
                        : <span className="info-value">{item.value}</span>
                      }
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="availability-badge">
              <span className="avail-dot"></span>
              Available for new projects
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <FiSend size={28} />
                <h3>Message Sent</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn-reset" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="E-commerce build, corporate site, etc." />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Tell me about your project — scope, timeline, and any specific requirements."></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  <FiSend size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="section-header">
            <span className="section-num">FAQ</span>
            <h2>Common Questions</h2>
            <div className="section-line"></div>
          </div>
          <div className="faq-grid">
            {faqs.map((item, i) => (
              <div key={i} className="faq-card">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
