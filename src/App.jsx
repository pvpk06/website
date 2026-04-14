import { useEffect, useState } from 'react'
import heroImage from './assets/hero-visual.svg'
import projectVisual1 from './assets/project-visual-1.svg'
import projectVisual2 from './assets/project-visual-2.svg'

const contactItems = [
  { label: 'Email', value: 'pvpk06@gmail.com', href: 'mailto:pvpk06@gmail.com' },
  { label: 'Website', value: 'pvpk.tech', href: 'https://pvpk.tech' },
  { label: 'Github', value: 'github.com/pvpk06', href: 'https://github.com/pvpk06' },
  { label: 'Location', value: 'Bangalore, India' }
]

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'Systems Engineer (Digital)',
    date: 'July 2025 – Present',
    highlights: [
      'Maintained enterprise production workflows for AVIVA UK with 99.9% availability.',
      'Delivered automated reporting dashboards that cut manual monitoring effort by ~40%.',
      'Built internal tooling for issue detection, recovery, and operational incident triage.',
      'Designed data-driven pipelines for reporting, alerting, and high-visibility observability.'
    ]
  },
  {
    company: 'Ramana Soft Consulting Services',
    role: 'Full Stack Developer (MERN Stack)',
    date: 'Mar 2024 – Mar 2025',
    highlights: [
      'Delivered large-scale internal systems with React frontends and Express backend services.',
      'Built resilient RESTful APIs and optimized SQL queries for performance and scale.',
      'Implemented production-ready data workflows and secure integration points.',
      'Owned feature delivery across development, debugging, and release deployment.'
    ]
  }
]

const projects = [
  {
    name: 'ArthaMind',
    role: 'AI Trading System',
    summary: 'End-to-end platform combining real-time market data, scoring models, and execution-ready trade signals.',
    impact: 'Enabled market signal automation and modular analytics for intelligent decision workflows.',
    tech: ['React', 'Python', 'Zerodha API', 'LLMs', 'SQL'],
    image: projectVisual1,
    details: [
      'Integrated Zerodha Kite API for real-time market data and simulated order execution.',
      'Built a stock ranking engine using RSI, EMA, MACD and scoring logic.',
      'Designed a modular multi-agent architecture for scalable decision workflows.'
    ]
  },
  {
    name: 'ElevateResume',
    role: 'AI Resume Builder',
    summary: 'Full-stack application that generates role-focused resumes with AI-based content optimization.',
    impact: 'Reduced resume creation time and produced ATS-ready content for professional users.',
    tech: ['React', 'Express.js', 'SQL', 'OpenAI', 'Node.js'],
    image: projectVisual2,
    details: [
      'Engineered React + Express application with SQL-backed resume storage.',
      'Integrated LLM-driven content generation for role-specific resume optimization.',
      'Enabled dynamic editing workflows and multi-format resume export.'
    ]
  },
  {
    name: 'OpsLens',
    role: 'Operations Insight Platform',
    summary: 'Enterprise operations dashboard with real-time metrics, alert automation, and AI-powered incident insights.',
    impact: 'Improved system visibility and cut operational response time through automated alert prioritization.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Grafana', 'Python'],
    image: projectVisual1,
    details: [
      'Built a dashboard for monitoring workflows and operational events.',
      'Implemented alerting logic with severity ranking and AI-based incident context.',
      'Created a RESTful API for ingesting metrics and serving real-time analytics.'
    ]
  },
  {
    name: 'InsightHub',
    role: 'AI Knowledge Portal',
    summary: 'A knowledge management platform that surfaces company insights with semantic search and smart summarization.',
    impact: 'Enabled faster decision-making through searchable team knowledge and AI-generated summaries.',
    tech: ['React', 'Node.js', 'MongoDB', 'LangChain', 'OpenAI'],
    image: projectVisual2,
    details: [
      'Built semantic search integration for content discovery across documents.',
      'Generated AI summaries for long-form knowledge articles and technical notes.',
      'Designed a scalable API for storing and querying project intelligence data.'
    ]
  }
]

const skills = {
  'Programming': ['Python', 'JavaScript', 'SQL', 'C++'],
  'Frontend': ['React', 'Responsive UI', 'Component Design', 'TypeScript'],
  'Backend': ['FastAPI', 'Express.js', 'REST APIs', 'Node.js'],
  'AI / ML': ['TensorFlow', 'Keras', 'LangChain', 'LLM APIs', 'OpenAI']
}

const deliveryItems = [
  {
    title: 'Product-ready platforms',
    detail: 'Ship polished web applications with an emphasis on UX, reliability, and production readiness.'
  },
  {
    title: 'Reliable backend systems',
    detail: 'Build robust APIs, workflow automation, and data infrastructure for scalable teams.'
  },
  {
    title: 'AI-driven automation',
    detail: 'Implement ML and LLM-driven features that reduce manual effort and enhance decision workflows.'
  }
]

const techStack = [
  'React',
  'FastAPI',
  'Express.js',
  'SQL',
  'Python',
  'JavaScript',
  'TensorFlow',
  'Keras',
  'LangChain',
  'OpenAI',
  'Node.js',
  'Docker',
  'Git'
]

const achievements = [
  'GATE 2024 – AIR 15,643 in CS',
  'Runner-up, TCS AI Friday Hackathon',
  '200+ solved problems on LeetCode'
]

const timelineItems = [
  {
    date: '2025',
    title: 'Systems Engineer at TCS',
    detail: 'Built reliable production monitoring workflows and enterprise reporting dashboards for AVIVA UK.'
  },
  {
    date: '2024',
    title: 'Full Stack Developer at RamanaSoft',
    detail: 'Delivered React and Express applications with SQL-backed workflows and strong performance improvements.'
  },
  {
    date: '2024',
    title: 'AI & Data Science Internship',
    detail: 'Developed ML pipelines, feature engineering workflows and model evaluation systems using scikit-learn.'
  },
  {
    date: '2024',
    title: 'TCS AI Friday Hackathon',
    detail: 'Runner-up with an AI-driven solution built in a competitive, time-constrained environment.'
  }
]

const testimonials = [
  {
    quote: 'Arjun helped us deliver a production-grade AI platform with strong reliability and fast iteration cycles.',
    author: 'Head of Engineering, AVIVA UK',
    role: 'Digital Operations'
  },
  {
    quote: 'His delivery focus and backend automation helped us reduce operational toil and ship faster.',
    author: 'Product Manager, RamanaSoft',
    role: 'Enterprise Services'
  }
]

const clients = ['AVIVA UK', 'TCS', 'RamanaSoft', 'OpenAI Prototype']

function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 380" className="hero-visual" aria-hidden="true">
      <defs>
        <linearGradient id="heroGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="panelGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <rect x="24" y="28" width="360" height="230" rx="34" fill="rgba(9, 13, 31, 0.18)" stroke="rgba(124, 58, 237, 0.24)" strokeWidth="2" />
      <circle cx="370" cy="90" r="44" fill="rgba(59, 130, 246, 0.06)" stroke="rgba(56, 189, 248, 0.24)" strokeWidth="2" />
      <path d="M52 70h260" stroke="url(#heroGlow)" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
      <path d="M52 106h220" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
      <path d="M52 142h300" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      <rect x="58" y="178" width="100" height="12" rx="6" fill="#0ea5e9" />
      <rect x="58" y="204" width="150" height="12" rx="6" fill="#22d3ee" opacity="0.9" />
      <path d="M68 248c24-20 56-24 84-10s46 38 58 64" fill="none" stroke="url(#panelGlow)" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      <circle cx="432" cy="254" r="22" fill="rgba(17, 24, 39, 0.28)" stroke="#22d3ee" strokeWidth="3" />
      <circle cx="392" cy="314" r="12" fill="rgba(15, 23, 42, 0.28)" stroke="#22d3ee" strokeWidth="2" />
      <path d="M32 320c44-14 84-42 124-40" fill="none" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
      <path d="M158 324c22-10 44-20 76-16" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('experience')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const updateActive = () => {
      const offset = window.scrollY + 180
      let current = 'experience'
      sections.forEach((section) => {
        if (offset >= section.offsetTop) {
          current = section.id
        }
      })
      setActiveSection(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('Please fill in every field before sending your message.')
      return
    }

    const subject = encodeURIComponent(`Hiring inquiry from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\nEmail: ${formData.email}`)
    window.location.href = `mailto:pvpk06@gmail.com?subject=${subject}&body=${body}`
  }

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFormStatus('')
  }

  return (
    <div className="page">
      <nav className="site-nav">
        <div className="site-nav-row">
          <div className="brand-pill">
            <span className="brand-mark">A</span>
            <div>
              <div className="nav-brand">Arjun's</div>
            </div>
          </div>
          <div className="nav-links desktop-only">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={activeSection === sectionId ? 'active' : ''}
                  aria-current={activeSection === sectionId ? 'page' : undefined}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
          <button
            type="button"
            className={`nav-toggle ${navOpen ? 'open' : ''}`}
            onClick={() => setNavOpen((open) => !open)}
            aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <aside className={`mobile-sidebar ${navOpen ? 'active' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="nav-brand">Arjun</div>
          <button
            type="button"
            className="mobile-close"
            onClick={() => setNavOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <div className="mobile-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setNavOpen(false)}>{item.label}</a>
          ))}
        </div>
      </aside>
      <div className={`backdrop ${navOpen ? 'active' : ''}`} onClick={() => setNavOpen(false)} />

      <header className="hero">
        <div className="hero-copy">
          {/* <span className="eyebrow">Hello, I’m Arjun.</span> */}
          <h1>Experienced Full Stack Developer & AI Systems Engineer.</h1>
          <p>
            I architect and ship polished full stack products, scalable backend systems, and AI-driven automation for enterprise teams.
          </p>
          <div className="hero-badges">
            <span>Frontend Architecture</span>
            <span>Backend Infrastructure</span>
            <span>AI & Orchestration</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Let’s Talk</a>
          </div>
          <div className="hero-summary-grid">
            <div className="hero-summary-card">
              <p className="summary-number">2+</p>
              <p>Years delivering full-stack enterprise and AI systems.</p>
            </div>
            <div className="hero-summary-card">
              <p className="summary-number">4</p>
              <p>Major product initiatives with web, data, and AI integrations.</p>
            </div>
            <div className="hero-summary-card">
              <p className="summary-number">200+</p>
              <p>LeetCode problems solved for stronger systems and algorithm design.</p>
            </div>
          </div>
          <div className="hero-grid">
            {contactItems.map((item) => (
              <div key={item.label} className="hero-stat">
                <p className="stat-label">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="stat-value">{item.value}</a>
                ) : (
                  <span className="stat-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-art-frame">
            <div className="hero-frame-image-wrap">
              <img className="hero-frame-image" src={heroImage} alt="AI dashboard preview" />
            </div>
            <HeroIllustration />
          </div>
        </div>
      </header>

      <main>
        <section className="section intro">
          <div className="section-header">
            <p className="section-eyebrow">Summary</p>
            <h2>Smart systems, strong delivery, and clean execution.</h2>
          </div>
          <p>
            AI Systems Engineer with around 2 years of experience building scalable full-stack applications and intelligent real-time systems. I architect end-to-end solutions that connect data, automation, and user experiences while keeping reliability and performance first.
          </p>
          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-icon">🧩</span>
              <h3>End-to-end Product Delivery</h3>
              <p>Translate product requirements into performant React frontends, production APIs, and deployment-ready systems.</p>
            </article>
            <article className="feature-card">
              <span className="feature-icon">🛠️</span>
              <h3>Scalable Backend Architecture</h3>
              <p>Design reliable service layers, data workflows, and automation that operate across enterprise environments.</p>
            </article>
            <article className="feature-card">
              <span className="feature-icon">🤖</span>
              <h3>AI-enabled Automation</h3>
              <p>Build intelligent workflows that leverage ML, LLMs, and data-driven decision rules for effective automation.</p>
            </article>
          </div>
        </section>

        <section className="section deliver-section">
          <div className="section-header">
            <p className="section-eyebrow">What I deliver</p>
            <h2>Solutions built for product velocity and operational scale.</h2>
          </div>
          <div className="delivery-grid">
            {deliveryItems.map((item) => (
              <article key={item.title} className="delivery-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section client-section">
          <div className="section-header">
            <p className="section-eyebrow">Trusted by</p>
            <h2>Enterprise teams and fast-moving product partners.</h2>
          </div>
          <div className="clients-row">
            {clients.map((client) => (
              <span key={client} className="client-pill">{client}</span>
            ))}
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="section-header">
            <p className="section-eyebrow">Testimonials</p>
            <h2>Feedback from product and engineering leaders.</h2>
          </div>
          <div className="cards-grid testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.author} className="card testimonial-card">
                <p className="testimonial-quote">“{item.quote}”</p>
                <p className="testimonial-author">{item.author}</p>
                <p className="testimonial-role">{item.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-header">
            <p className="section-eyebrow">Experience</p>
            <h2>Trusted by enterprise systems and product teams.</h2>
          </div>
          <div className="cards-grid">
            {experience.map((item) => (
              <article key={item.company} className="card">
                <div className="card-head">
                  <div>
                    <p className="card-job">{item.role}</p>
                    <p className="card-company">{item.company}</p>
                  </div>
                  <span className="card-date">{item.date}</span>
                </div>
                <ul className="card-list">
                  {item.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section">
          <div className="section-header">
            <p className="section-eyebrow">Career timeline</p>
            <h2>Milestones that shape my work and momentum.</h2>
          </div>
          <div className="timeline">
            {timelineItems.map((item) => (
              <div key={item.title} className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <div className="timeline-card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section dark-section" id="projects">
          <div className="section-header">
            <p className="section-eyebrow">Projects</p>
            <h2>Selected product initiatives & AI platforms.</h2>
          </div>
          <div className="cards-grid">
            {projects.map((project) => (
              <article key={project.name} className="card card-alt project-card">
                <div className="project-card-top">
                  <div>
                    <h3>{project.name}</h3>
                    <p className="card-job">{project.role}</p>
                  </div>
                  <span className="project-impact">{project.impact}</span>
                </div>
                <div className="project-card-media">
                  <img src={project.image} alt={`${project.name} preview`} />
                </div>
                <p>{project.summary}</p>
                <div className="project-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="stack-pill">{tech}</span>
                  ))}
                </div>
                <ul className="card-list">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark-section" id="tech">
          <div className="section-header">
            <p className="section-eyebrow">Technology stack</p>
            <h2>Core tools I use to build products and AI systems.</h2>
          </div>
          <div className="stack-grid">
            {techStack.map((tool) => (
              <span key={tool} className="stack-pill">{tool}</span>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-header">
            <p className="section-eyebrow">Skills</p>
            <h2>Full stack capabilities for web, AI, and systems engineering.</h2>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="skill-block">
                <h3>{category}</h3>
                <div className="skill-list">
                  {list.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section dark-section" id="highlights">
          <div className="section-header">
            <p className="section-eyebrow">Highlights</p>
            <h2>Career milestones and proven outcomes.</h2>
          </div>
          <div className="badge-grid">
            {achievements.map((achievement) => (
              <article key={achievement} className="badge-card">
                <p>{achievement}</p>
              </article>
            ))}
          </div>
          <div className="education-card">
            <h3>Education</h3>
            <p>SRGEC Engineering College — B.Tech in Computer Science and Engineering</p>
            <p className="muted">CGPA: 7.9/10</p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-header">
            <p className="section-eyebrow">Contact</p>
            <h2>Ready to collaborate on smart systems.</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <p>
                Let’s connect for roles in AI systems, automation, and full-stack product development. I deliver polished solutions with reliable operations and modern user experiences.
              </p>
              <ul className="contact-list">
                <li><strong>Email:</strong> <a href="mailto:pvpk06@gmail.com">pvpk06@gmail.com</a></li>
                <li><strong>Location:</strong> Bangalore, India</li>
              </ul>
              <p className="muted">I typically respond within 24 hours for serious collaboration inquiries.</p>
            </div>
            <div className="contact-card">
              <h3>Send a message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="form-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFieldChange}
                    placeholder="Tell me about your project or role"
                    rows="5"
                    required
                  />
                </label>
                <button type="submit" className="button button-primary">Send message</button>
                {formStatus && <p className="form-status">{formStatus}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed to showcase a polished, professional profile for Arjun.</p>
        <p className="muted">Reach out by email for serious inquiries and product opportunities.</p>
      </footer>
    </div>
  )
}
