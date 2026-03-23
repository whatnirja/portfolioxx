import ScrollReveal from '../components/ScrollReveal'

const CAT_PORTRAIT = `
`

const skills = [
  { name: 'RESTful API Design',    pct: 90 },
  { name: 'Java / Spring Boot',    pct: 88 },
  { name: 'SQL / MongoDB / Redis', pct: 84 },
  { name: 'Python',                pct: 82 },
  { name: 'JavaScript / React',    pct: 80 },
  { name: 'Docker / DevOps',       pct: 76 },
]

const courses = [
  { code: 'COMP3095', name: 'Advanced Web Dev (Java)' },
  { code: 'COMP3078', name: 'Portfolio Development' },
  { code: 'COMP3122', name: 'Applied Data Science' },
  { code: 'COMP3134', name: 'Intro to Cybersecurity' },
  { code: 'COMP3123', name: 'Full Stack Web Dev' },
  { code: 'COMP2084', name: 'Server-Side Dev (.NET)' },
  { code: 'COMP2068', name: 'Server-Side Scripting' },
  { code: 'COMP2160', name: 'Advanced Programming' },
]

export default function About() {
  return (
    <div className="page">
      <div className="section">

        <ScrollReveal>
          <span className="sys-label">01 // Personal Data</span>
          <h1 className="term-h1 glitch cursor" style={{ marginBottom: 24 }}>SUBJECT_FILE</h1>
          <hr className="term-div" />
        </ScrollReveal>

        <div className="about-layout" style={{ marginBottom: 52 }}>
          <ScrollReveal delay={80}>
            <div>
              <ScrollReveal delay={120}>
              <div className="term-panel" style={{ marginBottom: 16 }}>
                <div className="term-panel-bar">
                  <span>// TECHNICAL_SKILLS.TXT</span>
                  <div className="dots">
                    <span className="dot" /><span className="dot" /><span className="dot" />
                  </div>
                </div>
                <div className="rp-skills">
                  <div className="rp-skill"><strong>LANGUAGES:</strong> Java, Python, JavaScript, C#, SQL, Bash</div>
                  <div className="rp-skill"><strong>BACKEND:</strong> RESTful APIs, JSON, auth, validation, error handling</div>
                  <div className="rp-skill"><strong>ENGINEERING:</strong> OOP, data structures, debugging, unit testing, SDLC</div>
                  <div className="rp-skill"><strong>DEVOPS:</strong> Git/GitHub, Linux/CLI, Docker, CI/CD concepts</div>
                  <div className="rp-skill"><strong>DATABASES:</strong> PostgreSQL, MongoDB, Redis, SQL, schema design</div>
                  <div className="rp-skill"><strong>FRAMEWORKS:</strong> Spring Boot, React, Node.js, Docker Compose</div>
                </div>
              </div>
            </ScrollReveal>

              <div className="subject-file" style={{ marginTop: 16 }}>
                <div className="sf-header">
                  <span>SUBJECT A-26</span>
                  <span style={{ opacity: 0.6 }}>GBC // ND</span>
                </div>
                {[
                  ['NAME',       'NIRJA DABHI',              true ],
                  ['INCEPT',     '2024 // GBC TORONTO',      false],
                  ['FUNCTION',   'SOFTWARE DEVELOPER',       true ],
                  ['PROGRAM',    'COMP PROGRAMMING + ANAL.', false],
                  ['GPA',        '3.83 / 4.0',               true ],
                  ['IEEE RANK',  '17TH IN CANADA',           true ],
                  ['STATUS',     'ACTIVELY SEEKING',         true ],
                  ['GRAD DATE',  'APRIL 2026',               false],
                  ['LOCATION',   'TORONTO, ON, CANADA',      false],
                ].map(([k, v, glow]) => (
                  <div className="sf-row" key={k}>
                    <span className="sf-key">{k}</span>
                    <span className={`sf-val${glow ? ' glow' : ''}`}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: bio text panels */}
          <div>
            <ScrollReveal delay={120}>
              <div className="term-panel" style={{ marginBottom: 16 }}>
                <div className="term-panel-bar">
                  <span>// BIO.TXT</span>
                  <div className="dots">
                    <span className="dot" /><span className="dot" /><span className="dot" />
                  </div>
                </div>
                <div className="term-panel-content">
                  <p className="term-p" style={{ marginBottom: 12 }}>
                    I'm <span style={{ color: 'var(--pink)' }}>Nirja Dabhi</span> — a Computer Programming
                    and Analysis student at George Brown College, graduating 2026 with a 3.83 GPA.
                    I specialize in backend systems, RESTful API development, and production-grade
                    application design.
                  </p>
                  <p className="term-p" style={{ marginBottom: 12 }}>
                    I thrive where reliability matters — fintech, automation, healthcare software —
                    places where a well-designed service contract is a promise to someone depending
                    on what you built. I'm drawn to hard debugging sessions, clean API contracts,
                    and systems that communicate clearly when things go wrong.
                  </p>
                  <p className="term-p">
                    Outside of class I competed in <span style={{ color: 'var(--pink)' }}>IEEEXtreme</span> (ranked
                    <span style={{ color: 'var(--pink)' }}> 17th in Canada</span>), tutored fellow
                    students through Java and Python challenges, and shipped real fixes to a
                    production hackathon platform at HuskyHacks.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="term-panel" style={{ marginBottom: 16 }}>
                <div className="term-panel-bar">
                  <span>// CAREER_STATEMENT.TXT</span>
                  <div className="dots">
                    <span className="dot" /><span className="dot" /><span className="dot" />
                  </div>
                </div>
                <div className="term-panel-content">
                  <p className="term-p" style={{ color: 'var(--pink-pale)', marginBottom: 10, fontSize: 12 }}>
                    "WE ARE THE FACILITATORS OF OUR OWN CREATIVE EVOLUTION."
                  </p>
                  <p className="term-p" style={{ marginBottom: 10 }}>
                    I believe software development is fundamentally an act of empathy. Every
                    well-validated endpoint, every graceful error response, every thoughtfully
                    designed service contract is a promise kept to someone who depends on what you built.
                  </p>
                  <p className="term-p">
                    My goal is to grow into a developer who builds systems that are not just functional
                    but trustworthy — systems that scale, communicate clearly when things go wrong, and
                    hold up under pressure. I see every bug fixed as a lesson, every code review as a
                    conversation.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {['Backend Systems','RESTful APIs','Java','Spring Boot','Python','JavaScript','C#','Docker','PostgreSQL','MongoDB','Redis','TestContainers'].map(t => (
                  <span key={t} className="tag bright">{t}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Credentials ── */}
        <ScrollReveal>
          <span className="sys-label" style={{ marginTop: 60, display: 'block' }}>02 // Academic Credentials</span>
          <h2 className="term-h2" style={{ marginBottom: 20 }}>EDUCATION_&amp;_AWARDS</h2>
          <hr className="term-div" />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="degree-card">
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: 'var(--pink)', marginBottom: 8 }}>// DEGREE</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--pink-pale)', marginBottom: 6, letterSpacing: 1 }}>
                Computer Programming and Analysis
              </div>
              <div style={{ fontSize: 11, color: 'var(--pink-dim)', letterSpacing: 1 }}>
                George Brown College · Toronto, Ontario<br />
                Ontario College Advanced Diploma · Sept 2024 – April 2026
              </div>
              <div style={{ display: 'flex', gap: 5, marginTop: 14, flexWrap: 'wrap' }}>
                {['Software Development','Microservices','Data Science','Cybersecurity'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="deg-gpa">3.83</div>
              <div className="deg-gpa-label">CURRENT GPA</div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={90}>
          <div className="g2" style={{ marginBottom: 32 }}>
            {[
              { label: 'ACHIEVEMENT', title: 'IEEEXtreme Programming — 17th in Canada', desc: 'Competed in the IEEE 24-hour global programming competition placing 17th nationally. Solved complex algorithmic problems spanning data structures, graph theory, and dynamic programming under strict time pressure.' },
              { label: 'ACADEMIC STANDING', title: 'Consistent High Academic Performance', desc: 'Maintained a 3.83 cumulative GPA throughout the program while balancing production-style project work, peer tutoring responsibilities, and competitive programming participation.' },
            ].map(c => (
              <div key={c.label} className="dossier">
                <div className="dossier-label"><span>{c.label}</span></div>
                <div className="dossier-body">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--pink-pale)', marginBottom: 10, letterSpacing: 1 }}>{c.title}</div>
                  <p className="term-p" style={{ fontSize: 12 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: 'var(--pink)', marginBottom: 12 }}>// RELEVANT_COURSEWORK</div>
          <div className="courses-grid">
            {courses.map(c => (
              <div key={c.code} className="course-item">
                <strong>{c.code}</strong>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Experience ── */}
        <ScrollReveal>
          <span className="sys-label" style={{ marginTop: 60, display: 'block' }}>04 // Professional Summary</span>
          <h2 className="term-h2" style={{ marginBottom: 20 }}>WORK_RECORDS</h2>
          <hr className="term-div" />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="g2" style={{ marginBottom: 32 }}>
            {[
              {
                co: 'HuskyHacks',
                role: 'Tech Developer',
                date: 'Dec 2025 – Present',
                gold: false,
                bullets: [
                  'Contributed to a production web platform using structured Git workflows — issues, feature branches, PR reviews.',
                  'Identified and documented a critical frontend–backend integration failure caused by inconsistent API error payloads.',
                  'Strengthened application reliability by improving defensive error handling for malformed server responses.',
                  'Delivered incremental, peer-reviewed updates to a shared codebase under collaborative development standards.',
                ],
                tags: ['Git Workflows','API Debugging','Error Handling','Code Review'],
              },
              {
                co: 'George Brown College',
                role: 'Peer Tutor — Computer Science',
                date: 'Sept – Dec 2025',
                gold: true,
                bullets: [
                  'Supported students with debugging across Java, Python, and web development workflows.',
                  'Explained OOP, data structures, control flow, and problem decomposition clearly.',
                  'Translated technical problems into actionable steps under time constraints.',
                  'Helped peers prepare for exams across COMP3095 and COMP3122.',
                ],
                tags: ['Java','Python','Teaching','Debugging'],
              },
            ].map(e => (
              <div key={e.co} className="dossier">
                <div className="dossier-label">
                  <span>{e.co.toUpperCase()}</span>
                  <span className="dos-id">{e.date}</span>
                </div>
                <div className="dossier-body">
                  <div style={{ color: 'var(--pink)', fontSize: 11, letterSpacing: 2, marginBottom: 12 }}>{e.role.toUpperCase()}</div>
                  <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 14 }}>
                    {e.bullets.map((b, i) => (
                      <li key={i} style={{ fontSize: 12, color: 'rgba(255,170,204,0.75)', lineHeight: 1.7, marginBottom: 5 }}>
                        <span style={{ color: 'var(--pink)', marginRight: 6 }}>{'>'}</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div style={{ fontSize: 10, letterSpacing: 3, color: 'var(--pink)', marginBottom: 16 }}>// TECHNICAL_PROFICIENCY</div>
          {skills.map((s, i) => (
            <div key={s.name} className="skill-row">
              <div className="skill-label">
                <span>{s.name.toUpperCase()}</span>
                <span>{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${s.pct}%`, transitionDelay: `${i * 0.1}s` }} />
              </div>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="dossier" style={{ marginTop: 40 }}>
            <div className="dossier-label"><span>REFERENCES</span></div>
            <div className="dossier-body">
              <p className="term-p" style={{ fontSize: 12 }}>
                Professional and academic references available upon request — including George Brown College faculty
                and contacts from HuskyHacks who can speak to technical ability and collaborative work ethic.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
