import ScrollReveal from '../components/ScrollReveal'

export default function Capstone() {
  return (
    <div className="page">
      <div className="section">

        <ScrollReveal>
          <div className="cap-intro">
            <span className="sys-label">03 // Capstone Project</span>
            <h1>PEBBLE</h1>
            <p>
              A senior care management platform enabling families to coordinate care, track medications
              and appointments, manage shared expenses, and send SOS emergency alerts — role-based,
              accessible, and built for real families.
            </p>
            <div style={{ display: 'flex', gap: 6, marginTop: 20, flexWrap: 'wrap' }}>
              {['React Native','Spring Boot','MongoDB','COMP4901','Ver 0.3'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 1 — Summary */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 1</span>
            <h2 className="cap-sec-h">PROJECT_SUMMARY</h2>
            <hr className="term-div" />
            <div className="term-panel">
              <div className="term-panel-bar"><span>// OVERVIEW.TXT</span></div>
              <div className="term-panel-content">
                <p className="term-p" style={{ marginBottom: 12 }}>
                  Pebble is designed to help families manage and coordinate the care of senior
                  relatives by addressing key challenges: distance, lack of centralized health records,
                  financial transparency, and real-time communication.
                </p>
                <p className="term-p">
                  Unlike fragmented solutions using separate calendars, messaging apps, or spreadsheets,
                  Pebble consolidates care group creation, medication tracking, appointment management,
                  expense reporting, emergency SOS alerts, and accessibility utilities (OCR, GPS, voice-to-text)
                  into one cohesive mobile experience with role-based access.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2 — Vision */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 2</span>
            <h2 className="cap-sec-h">PROJECT_VISION</h2>
            <hr className="term-div" />
            <div className="g2" style={{ marginBottom: 16 }}>
              <div className="dossier">
                <div className="dossier-label"><span>BUSINESS_OPPORTUNITY</span></div>
                <div className="dossier-body">
                  <p className="term-p" style={{ fontSize: 12 }}>
                    Fills a gap by helping families stay connected despite distance. Offers a simple,
                    connected way to track appointments, medications, and tasks — ensuring seniors receive
                    consistent support while families share responsibilities more effectively.
                  </p>
                </div>
              </div>
              <div className="dossier">
                <div className="dossier-label"><span>PROBLEM_STATEMENT</span></div>
                <div className="dossier-body">
                  <p className="term-p" style={{ fontSize: 12 }}>
                    Inconsistent senior care affects seniors who feel neglected and families who struggle
                    to coordinate. Impact: deteriorating senior health, missed appointments, increased
                    caregiver burnout, unequal financial contributions within families.
                  </p>
                </div>
              </div>
            </div>

            <div className="term-panel">
              <div className="term-panel-bar"><span>// PRODUCT_POSITION.TXT</span></div>
              <div className="term-panel-content">
                <table className="term-table">
                  <tbody>
                    {[
                      ['FOR',        'Seniors, their families, and caregivers'],
                      ['WHO',        'Need an easy way to stay connected and manage responsibilities'],
                      ['THE APP',    'Is a senior care management mobile application'],
                      ['THAT',       'Tracks appointments, medications, tasks, expenses, and reminders'],
                      ['UNLIKE',     'Separate, unlinked tools like calendars or spreadsheets'],
                      ['GIVES',      'A single platform that reduces family stress and keeps seniors supported'],
                    ].map(([k, v]) => (
                      <tr key={k}><td style={{ whiteSpace:'nowrap', width:'140px' }}>{k}</td><td>{v}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 — Requirements */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 3</span>
            <h2 className="cap-sec-h">STAKEHOLDER_REQUIREMENTS</h2>
            <hr className="term-div" />
            <div className="g4" style={{ marginBottom: 20 }}>
              {[
                { name: 'Dev Team',    role: 'Build, test, develop prototype' },
                { name: 'Faculty',     role: 'Academic oversight and evaluation' },
                { name: 'Families',    role: 'End users — coordinate care' },
                { name: 'Caregivers',  role: 'Manage tasks and reminders' },
              ].map(s => (
                <div key={s.name} className="dossier">
                  <div className="dossier-label" style={{ fontSize: 10 }}><span>{s.name.toUpperCase()}</span></div>
                  <div className="dossier-body" style={{ padding: '12px 14px' }}>
                    <p style={{ fontSize: 11, color: 'rgba(255,170,204,0.7)' }}>{s.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <table className="term-table" style={{ border: '1px solid var(--pink-border)', background: 'var(--pink-faint)' }}>
              <thead>
                <tr><th>ID</th><th>Requirement</th><th>Stakeholder</th></tr>
              </thead>
              <tbody>
                {[
                  ['S1','Secure user management — families create and manage profiles','Families, Elderly, Caregivers'],
                  ['S2','Care group creation and management to coordinate responsibilities','Families'],
                  ['S3','Scheduling and tracking of appointments, tasks, caregiving activities','Families, Elderly'],
                  ['S4','Tracking of medication and health vitals for seniors','Families, Elderly'],
                  ['S5','Timely reminders and alerts for caregiving tasks','Families, Elderly'],
                  ['S6','Financial contribution tracking, expense logging, and reporting','Families'],
                  ['S7','Calendar syncing and emergency SOS alert features','Families, Elderly'],
                  ['S8','Accessibility utilities — OCR, GPS, voice-to-text','Elderly'],
                  ['S9','Optional senior engagement features — brain games, animations','Elderly'],
                ].map(([id, req, stake]) => (
                  <tr key={id}><td>{id}</td><td style={{ color: 'rgba(255,170,204,0.8)' }}>{req}</td><td style={{ color: 'var(--pink-dim)', fontSize: 11 }}>{stake}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* 4 — Project Plan */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 4</span>
            <h2 className="cap-sec-h">PROJECT_PLAN</h2>
            <hr className="term-div" />
            <div className="term-panel">
              <div className="term-panel-bar"><span>// TIMELINE.LOG</span></div>
              <div className="term-panel-content">
                <div className="tl">
                  {[
                    { phase: 'Phase 1 — June 2025',     title: 'Vision, Scope & Team Formation', desc: 'Define project vision, stakeholder requirements, and technical stack. Initial draft of project vision document reviewed and approved.' },
                    { phase: 'Phase 2 — July–Aug 2025',  title: 'UX Design, Wireframes & Architecture', desc: 'Design user flows, create wireframes for core screens. Define API contracts and SWOT analysis.' },
                    { phase: 'Phase 3 — Sept–Nov 2025',  title: 'Core Feature Implementation', desc: 'User management, care groups, appointment tracking, medication monitoring. REST API backend with Spring Boot.' },
                    { phase: 'Phase 4 — Jan–Feb 2026',   title: 'Feature Completion & Testing', desc: 'SOS alerts, financial tracking, accessibility utilities. Integration testing and UAT.' },
                    { phase: 'Phase 5 — April 2026',     title: 'Final Demo & Submission', desc: 'Complete documentation, final presentation, live prototype demonstration to faculty and stakeholders.' },
                  ].map(t => (
                    <div key={t.phase} className="tl-item">
                      <div className="tl-phase">{t.phase}</div>
                      <div className="tl-title">{t.title}</div>
                      <div className="tl-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 5 — Analysis */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 5</span>
            <h2 className="cap-sec-h">REQUIREMENTS_ANALYSIS</h2>
            <hr className="term-div" />

            <table className="term-table" style={{ border: '1px solid var(--pink-border)', background: 'var(--pink-faint)', marginBottom: 20 }}>
              <thead><tr><th>ID</th><th>System Feature</th><th>Req.</th></tr></thead>
              <tbody>
                {[
                  ['F1','User Management — sign up, log in, manage profiles','S1'],
                  ['F2','Care Group Management — create, join, leave, manage','S2'],
                  ['F3','Appointment & Task Tracking — schedule, update, monitor','S3'],
                  ['F4','Medication & Health Vitals — record, track, monitor','S4'],
                  ['F5','Reminders — automated and manual notifications','S5'],
                  ['F6','Expenses & Financial Reporting — track, split, report','S6'],
                  ['F7','Calendar & Communication — sync, SOS alerts','S7'],
                  ['F8','Accessibility — OCR, GPS, voice-to-text','S8'],
                  ['F9','Optional Utilities — brain games, animations','S9'],
                ].map(([id, feat, req]) => (
                  <tr key={id}><td>{id}</td><td style={{ color:'rgba(255,170,204,0.8)' }}>{feat}</td><td>{req}</td></tr>
                ))}
              </tbody>
            </table>

            <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--pink)', marginBottom: 12 }}>// SWOT_ANALYSIS</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { cls: '', label: 'STRENGTHS', items: ['Synchronized platform for all caregiving tools','Designed for all technical levels','Instant notifications connecting care group'] },
                { cls: '', label: 'WEAKNESSES', items: ['Onboarding time for new users','Frequent data entry may feel overwhelming','Complex security for sensitive health data'] },
                { cls: '', label: 'OPPORTUNITIES', items: ['Growing senior population demand','Rising interest in proactive health management','Phase 2 healthcare provider integration'] },
                { cls: '', label: 'THREATS', items: ['Competitive caregiving app market','Evolving healthcare regulations','Varying senior technical proficiency'] },
              ].map(s => (
                <div key={s.label} className="swot-cell">
                  <h5>{s.label}</h5>
                  <ul>{s.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 6 — Wireframes */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 6</span>
            <h2 className="cap-sec-h">WIREFRAMES</h2>
            <hr className="term-div" />
            <div className="wf-grid">
              {[
                { title: 'Onboarding & Login',   desc: 'Role selection, MFA flow, profile setup' },
                { title: 'Care Group Dashboard', desc: 'Active care groups, member list, activity feed' },
                { title: 'Appointment Tracker',  desc: 'Calendar view, task filters by category' },
                { title: 'Medication Monitor',   desc: 'Dosage schedule, check-off, missed alerts' },
                { title: 'Financial Reports',    desc: 'Expense log, contribution tracker, PDF export' },
                { title: 'SOS Alert Screen',     desc: 'One-tap emergency alert with GPS push' },
              ].map(w => (
                <div key={w.title} className="wf-card">
                  <div className="wf-screen">[MOCK]</div>
                  <div className="wf-title">{w.title.toUpperCase()}</div>
                  <div className="wf-desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 7 — Status */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 7</span>
            <h2 className="cap-sec-h">STATUS_REPORT</h2>
            <hr className="term-div" />
            <div className="g2">
              {[
                { label: 'COMPLETED', items: ['Project Vision Doc (v0.3) approved','Stakeholder requirements defined','Tech stack selected','SWOT analysis and competitor research done','Wireframes designed for 6 core screens','Use case documentation prepared'] },
                { label: 'IN_PROGRESS', items: ['Core feature implementation (Care Groups, Appointments)','REST API backend with Spring Boot','React Native mobile UI development','Medication tracking and reminder system','Financial contribution tracker','Integration testing'] },
              ].map(s => (
                <div key={s.label} className="dossier">
                  <div className="dossier-label"><span>{s.label}</span></div>
                  <div className="dossier-body">
                    <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                      {s.items.map((item, i) => (
                        <li key={i} style={{ fontSize: 12, color: 'rgba(255,170,204,0.75)', marginBottom: 6, lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--pink)', marginRight: 6 }}>{'>'}</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 8 — Implementation */}
        <ScrollReveal>
          <div className="cap-sec">
            <span className="sys-label">Section 8</span>
            <h2 className="cap-sec-h">SYSTEM_IMPLEMENTATION</h2>
            <hr className="term-div" />
            <div className="impl-g" style={{ marginBottom: 20 }}>
              {[
                { layer:'Frontend',       tech:'React Native — iOS & Android' },
                { layer:'Backend',        tech:'Spring Boot — RESTful services' },
                { layer:'Database',       tech:'MongoDB 8.2.x — document store' },
                { layer:'Auth',           tech:'JWT with MFA — role-based access' },
                { layer:'Testing',        tech:'Postman v11 — endpoint validation' },
                { layer:'Notifications',  tech:'Push — SOS & reminders' },
                { layer:'Accessibility',  tech:'OCR · Voice-to-Text · GPS' },
                { layer:'Security',       tech:'TLS encryption — HIPAA-aware' },
                { layer:'Version Ctrl',   tech:'Git/GitHub — branches, PRs' },
              ].map(i => (
                <div key={i.layer} className="impl-c">
                  <strong>{i.layer.toUpperCase()}</strong>
                  <span>{i.tech}</span>
                </div>
              ))}
            </div>
            <div className="g2">
              {[
                { label: 'CONSTRAINTS', items: ['Dev time may limit Phase 1 advanced features','Healthcare regs + privacy law compliance required','Hospital/insurance integration deferred to Phase 2','AI health predictions deferred to Phase 2'] },
                { label: 'ASSUMPTIONS', items: ['Users have compatible devices and internet','Users willing to enter care data consistently','Caregivers motivated to engage with reminders','Seniors have basic tech familiarity or onboarding support'] },
              ].map(b => (
                <div key={b.label} className="dossier">
                  <div className="dossier-label"><span>{b.label}</span></div>
                  <div className="dossier-body">
                    <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                      {b.items.map((item, i) => (
                        <li key={i} style={{ fontSize: 12, color: 'rgba(255,170,204,0.75)', marginBottom: 5, lineHeight: 1.6 }}>
                          <span style={{ color: 'var(--pink)', marginRight: 6 }}>{'>'}</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  )
}
