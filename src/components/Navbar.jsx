import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/',         label: 'HOME'     },
  { to: '/about',    label: 'ABOUT'    },
  { to: '/resume',   label: 'RESUME'   },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/contact',  label: 'CONTACT'  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="brand-sys">NIRJA DABHI</div>
        </div>

        <div className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-right">
          <div className="nav-status">
            <div className="status-dot" />
            <span>ONLINE</span>
          </div>
          <span>PORT: 3022</span>
        </div>

        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
