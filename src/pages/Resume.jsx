import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Resume() {
  const [tab, setTab] = useState('resume')
  return (
    <div className="page">
      <div className="section">
        <ScrollReveal>
          <span className="sys-label">01 // Personal Data</span>
          <h1 className="term-h1 cursor" style={{ marginBottom: 24 }}>RESUME_DATA</h1>
          <hr className="term-div" />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="rtabs">
            <button className={`rtab${tab === 'resume' ? ' active' : ''}`} onClick={() => setTab('resume')}>RESUME.TXT</button>
            <button className={`rtab${tab === 'cover'  ? ' active' : ''}`} onClick={() => setTab('cover')}>COVER_LETTER.TXT</button>
          </div>
        </ScrollReveal>

        {tab === 'resume' && (
          <ScrollReveal delay={100}>
            <div className="resume-doc">
              <div className="rp-head">
                <div className="rp-name glitch">NIRJA DABHI</div>
                <div className="rp-contact">
                  <span>Toronto, ON</span>
                  <a href="mailto:nirjaarun.dabhi@georgebrown.ca">nirjaarun.dabhi@georgebrown.ca</a>
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/whatnirja" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>

              <div className="rp-sec">
                <div className="rp-sec-label">PROFESSIONAL_SUMMARY</div>
                <p>Software Engineering student specializing in backend systems and production-style application development. Experienced in building and improving RESTful APIs, debugging complex integration failures, and strengthening system reliability through structured validation and resilient error handling. Interested in fintech, automation, and scalable systems.</p>
              </div>

              <div className="rp-sec">
                <div className="rp-sec-label">HIGHLIGHTS</div>
                <ul>
                  <li>Strong programming foundation in Java, Python, JavaScript, SQL, and C# with solid OOP and data structures knowledge.</li>
                  <li>Hands-on experience building REST APIs, debugging backend integration issues, and improving system reliability.</li>
                  <li>Familiar with SDLC, version control, and collaborative workflows using Git/GitHub — issues, branches, PRs, reviews.</li>
                  <li>Strong debugging skills in production-like environments — API failures, unexpected responses, edge cases.</li>
                  <li>Exposure to unit testing, validation, and secure coding fundamentals.</li>
                </ul>
              </div>

              <div className="rp-sec">
                <div className="rp-sec-label">TECHNICAL_SKILLS</div>
                <div className="rp-skills">
                  <div className="rp-skill"><strong>LANGUAGES:</strong> Java, Python, JavaScript, C#, SQL, Bash</div>
                  <div className="rp-skill"><strong>BACKEND:</strong> RESTful APIs, JSON, auth, validation, error handling</div>
                  <div className="rp-skill"><strong>ENGINEERING:</strong> OOP, data structures, debugging, unit testing, SDLC</div>
                  <div className="rp-skill"><strong>DEVOPS:</strong> Git/GitHub, Linux/CLI, Docker, CI/CD concepts</div>
                  <div className="rp-skill"><strong>DATABASES:</strong> PostgreSQL, MongoDB, Redis, SQL, schema design</div>
                  <div className="rp-skill"><strong>FRAMEWORKS:</strong> Spring Boot, React, Node.js, Docker Compose</div>
                </div>
              </div>

              <div className="rp-sec">
                <div className="rp-sec-label">SELECTED_PROJECTS</div>
                <div className="rp-job">
                  <div className="rp-job-row">
                    <span className="rp-job-title">Student Wellness Hub — Microservices Platform</span>
                    <span className="rp-job-date">Fall 2025</span>
                  </div>
                  <div className="rp-job-co">Java / Spring Boot · Docker · PostgreSQL · MongoDB · Redis</div>
                  <ul>
                    <li>Designed RESTful backend services with structured API contracts and persistent data storage.</li>
                    <li>Built production-style service interactions across three microservices with secure communication.</li>
                    <li>Orchestrated full environment with Docker Compose; verified with TestContainers integration tests.</li>
                  </ul>
                </div>
              </div>

              <div className="rp-sec">
                <div className="rp-sec-label">PROFESSIONAL_EXPERIENCE</div>
                <div className="rp-job">
                  <div className="rp-job-row">
                    <span className="rp-job-title">Tech Developer</span>
                    <span className="rp-job-date">Dec 2025 – Present</span>
                  </div>
                  <div className="rp-job-co">HuskyHacks</div>
                  <ul>
                    <li>Contributed to a production web platform using structured Git workflows — feature branches, PR reviews.</li>
                    <li>Identified a critical frontend–backend integration failure caused by inconsistent API error payloads.</li>
                    <li>Strengthened reliability by improving defensive error handling for malformed server responses.</li>
                  </ul>
                </div>
                <div className="rp-job">
                  <div className="rp-job-row">
                    <span className="rp-job-title">Peer Tutor</span>
                    <span className="rp-job-date">Sept – Dec 2025</span>
                  </div>
                  <div className="rp-job-co">George Brown College</div>
                  <ul>
                    <li>Supported students with debugging across Java, Python, and web development.</li>
                    <li>Explained OOP, data structures, and problem decomposition in a clear, structured way.</li>
                  </ul>
                </div>
              </div>

              <div className="rp-sec">
                <div className="rp-sec-label">EDUCATION</div>
                <div className="rp-job">
                  <div className="rp-job-row">
                    <span className="rp-job-title">Computer Programming and Analysis</span>
                    <span className="rp-job-date">2024 – 2026</span>
                  </div>
                  <div className="rp-job-co">George Brown College — Toronto, Canada</div>
                  <p>Ontario College Advanced Diploma · Current GPA: <span style={{ color: 'var(--pink)' }}>3.83</span></p>
                </div>
              </div>

              <div style={{ padding: '12px 16px', border: '1px solid rgba(255,51,133,0.2)', fontSize: 11, color: 'var(--pink-dim)', letterSpacing: 1 }}>
                {'> REFERENCES AVAILABLE UPON REQUEST_'}
              </div>
            </div>
          </ScrollReveal>
        )}

        {tab === 'cover' && (
          <ScrollReveal delay={100}>
            <div className="resume-doc">
              <div className="rp-head">
                <div className="rp-name">COVER_LETTER</div>
                <div className="rp-contact">
                  <span style={{ color: 'var(--pink)' }}>FUNCTION: SOFTWARE_DEVELOPER // GENERAL_APPLICATION</span>
                </div>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,170,204,0.8)', lineHeight: 1.9 }}>
                <p style={{ marginBottom: 16, color: 'var(--pink-dim)' }}>[March 2026]</p>
                <p style={{ marginBottom: 20 }}>
                  <span style={{ color: 'var(--pink-pale)' }}>Nirja Dabhi</span><br />
                  Toronto, ON — nirjaarun.dabhi@georgebrown.ca
                </p>
                <p style={{ marginBottom: 20 }}>{'> Dear Hiring Manager,'}</p>
                <p style={{ marginBottom: 14 }}>
                  I am writing to express my interest in a Software Developer position at your organization.
                  As a Computer Programming and Analysis student at George Brown College with a 3.83 GPA and
                  hands-on experience building production-style backend systems, I am eager to contribute to
                  a team building reliable, scalable software.
                </p>
                <p style={{ marginBottom: 14 }}>
                  My project experience includes building the Student Wellness Hub — a three-service Spring Boot
                  platform orchestrated with Docker Compose, integrating PostgreSQL, MongoDB, and Redis — as well
                  as contributing to a production hackathon platform where I identified and resolved a critical
                  frontend–backend integration failure affecting API error payload consistency.
                </p>
                <p style={{ marginBottom: 14 }}>
                  I bring a debugging-first mindset, structured Git workflows, and a genuine interest in fintech,
                  automation, and scalable systems. I also ranked 17th in Canada in the IEEEXtreme Programming
                  Competition, reflecting my ability to perform under pressure and solve complex algorithmic
                  problems efficiently.
                </p>
                <p style={{ marginBottom: 14 }}>
                  I would welcome the opportunity to discuss how my skills align with your team's needs.
                  Thank you for your time and consideration.
                </p>
                <p style={{ marginBottom: 4, color: 'var(--pink-dim)' }}>{'> SINCERELY,'}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--pink)', textShadow: 'var(--glow-text)' }}>
                  NIRJA DABHI
                </p>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  )
}
