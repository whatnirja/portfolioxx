import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const projects = [
  {
    id: 'PRJ_000', stack: 'React Native · Spring Boot · MongoDB',
    title: 'Pebble - Elderly Care App',
    desc: 'Senior care management platform enabling families to coordinate care, track medications and appointments, manage shared expenses, and send SOS emergency alerts. Role-based access for seniors, family members, and caregivers.',
    tags: ['React Native','Spring Boot','MongoDB','OCR','GPS','Role-Based Access'],
    status: '[IN PROGRESS]',
    link: '/capstone',
  },
  {
    id: 'PRJ_001', stack: 'React · Chrome Ext · Supabase · AI',
    title: 'scholarship aggregator',
    desc: 'A React web app and Chrome extension built to help Ontario students understand the real financial impact of OSAP grant cuts. Features an interactive debt calculator, Gemini AI-powered Q&A using OpenRouter embeddings, and Supabase vector search for personalized financial guidance.',
    tags: ['React','Chrome Extension','Supabase','Gemini AI','OpenRouter','TypeScript'],
    status: '[DEPLOYED]',
    github: 'https://github.com/whatnirja/youreindebt',
    live: 'https://youreindebt.vercel.app/',
  },
  {
    id: 'PRJ_002', stack: 'Swift · iOS · SQLite · Gov API',
    title: 'Storm Predictor',
    desc: 'A native iOS application using multi-source data aggregation — historical storm records, live weather feeds, and Government of Canada data — to generate a real-time Storm Risk Index for Ontario locations. Push notifications, multi-city dashboard, province-wide risk map.',
    tags: ['Swift','iOS','SQLite','REST APIs','Predictive Analytics'],
    status: '[PROTOTYPE]',
    github: 'https://github.com/whatnirja/G30-project',
  },
  {
    id: 'PRJ_003', stack: 'Java · Spring Boot · Docker · DBs',
    title: 'Student Wellness Hub',
    desc: 'Three-service Spring Boot microservices platform promoting student well-being through resources, goals, and events. Fully containerized with Docker Compose, inter-service REST communication, Redis caching, and verified with TestContainers integration tests.',
    tags: ['Java','Spring Boot','Docker','PostgreSQL','MongoDB','Redis','TestContainers'],
    status: '[PRODUCTION-READY]',
    github: 'https://gitlab.com/whatnirja/comp3095-assignment1',
  },
]

export default function Projects() {
  return (
    <div className="page">
      <div className="section">
        <ScrollReveal>
          <span className="sys-label">03 // Academic Work Experience</span>
          <h1 className="term-h1 cursor" style={{ marginBottom: 24 }}>WORK_SAMPLES</h1>
          <hr className="term-div" />
        </ScrollReveal>

        {/* IEEE */}
        <ScrollReveal delay={80}>
          <div className="ieee-card">
            <div className="ieee-num">17<sup>TH</sup></div>
            <div className="ieee-info">
              <h3>IEEEXtreme Programming Competition</h3>
              <p>
                Ranked <span style={{ color: 'var(--pink)' }}>17th in Canada</span> in the IEEE 24-hour
                global programming competition. Solved complex algorithmic problems spanning data structures,
                graph theory, dynamic programming, and combinatorics under strict time pressure — competing
                against university teams across the country.
              </p>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 14 }}>
                {['Competitive Programming','Algorithms','Data Structures','24-Hour Competition'].map(t => (
                  <span key={t} className="tag bright">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="proj-list">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 70}>
              <div className="proj-card">
                <div className="proj-card-header">
                  <span className="proj-id">{p.id} // {p.status}</span>
                  <span className="proj-stack">{p.stack}</span>
                </div>
                <div className="proj-card-body">
                  <div className="proj-title">{p.title.toUpperCase()}</div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                    {p.link ? (
                      <Link to={p.link} className="btn">
                        FULL CAPSTONE DOCS
                      </Link>
                    ) : (
                      <>
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                          >
                            LIVE DEMO
                          </a>
                        )}

                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn secondary"
                          >
                            VIEW ON GITHUB
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
