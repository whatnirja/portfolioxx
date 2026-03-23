import { Link } from 'react-router-dom'
import DinoGame from '../components/DinoGame'
export default function Home() {
  return (
    <div className="home">
      <div className="home-topbar">
        <span>TORONTO, ONTARIO // <span>STATUS: ACTIVE</span></span>
        <span>MEM: 3.83 GPA // RANK: 17TH CA</span>
      </div>

      {/* Main grid */}
      <div className="home-grid">
        {/* Left */}
        <div className="home-left">
          <div>
            <div style={{ fontSize: 11, letterSpacing: 3, color: 'var(--pink-dim)', marginBottom: 16 }}>
              {'> ECHO NIRJA_DABHI'}
            </div>
            <h1 className="home-title glitch">
              NIRJA<br />
              <span className="dim">DABHI</span>
            </h1>
            <div className="home-descriptor" style={{ marginTop: 20 }}>
              FUNCTION  <span>SOFTWARE DEVELOPER</span><br />
              LOCATION  <span>TORONTO, ON, CA</span><br />
              VERSION   <span>CLASS OF 2026</span><br />
              STATUS    <span style={{ color: 'var(--pink)', textShadow: 'var(--glow-text)' }}>ACTIVELY SEEKING</span>
            </div>
          </div>

          <div>
            <div className="home-stats">
              <div className="h-stat">
                <div className="h-stat-val">3.83</div>
                <div className="h-stat-label">GPA</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-val">16<sup style={{fontSize:'0.45em'}}>TH</sup></div>
                <div className="h-stat-label">CA IEEE</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-val">5+</div>
                <div className="h-stat-label">Projects</div>
              </div>
              <div className="h-stat">
                <div className="h-stat-val">'26</div>
                <div className="h-stat-label">Grad</div>
              </div>
            </div>

            <div style={{ marginTop: 24, marginBottom: 24, display:   'flex', gap: 12 }}>
              <a 
                href="/files/Nirja Dabhi, 2026 - Resume.pdf"
                download="nirja-dabhi-2026-resume.pdf"
                className="btn"
              >
                Resume
              </a>

              <a 
                href="/files/Nirja Dabhi, 2026 - Cover Letter.pdf"
                download="nirja-dabhi-2026-cover-letter.pdf"
                className="btn"
              >
                Cover Letter
              </a>
            </div>

            <DinoGame />
            
          </div>
          


        </div>

        <div className="home-right">
          <div className="term-panel">
            <div className="term-panel-bar">
              <span>// ABOUT_ME.TXT</span>
              <div className="dots">
                <span className="dot" /><span className="dot" /><span className="dot" />
              </div>
            </div>
            <div className="term-panel-content">
              <p style={{ fontSize:12, color:'rgba(255,170,204,0.82)', lineHeight:1.8, marginBottom:16, fontFamily:'var(--font-mono)' }}>
                Computer Programming &amp; Analysis student at George Brown
                College (2026), specializing in backend systems and RESTful
                API development. I build things that hold up under pressure —
                fintech, automation, healthcare software.
              </p>
              <p style={{ fontSize:12, color:'rgba(255,170,204,0.82)', lineHeight:1.8, marginBottom:20, fontFamily:'var(--font-mono)' }}>
                Ranked <span style={{ color:'var(--pink)', textShadow:'var(--glow-text)' }}>17th in Canada</span> in
                IEEEXtreme Programming. Former peer tutor, current tech
                developer at HuskyHacks. Java · Spring Boot · Docker · Python · JS.
              </p>
              <Link to="/about" className="btn" style={{ fontSize:11 }}>
                view more
              </Link>
            </div>
          </div>

          <div className="dossier" style={{ padding: 0 }}>
            <div className="dossier-label">
              <span>SYSTEM_INFO</span>
              <span className="dos-id">ID: ND-2026-GBC</span>
            </div>
            <div className="dossier-body">
              {[
                ['STACK',    'Java · Python · JS · C#'],
                ['BACKEND',  'Spring Boot · REST APIs'],
                ['DEVOPS',   'Docker · Git · Linux'],
                ['DB',       'PostgreSQL · MongoDB · Redis'],
              ].map(([k, v]) => (
                <div className="dossier-row" key={k}>
                  <span className="dossier-key">{k}</span>
                  <span className="dossier-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
