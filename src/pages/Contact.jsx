import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = () => { if (form.name && form.email && form.message) setSent(true) }

  return (
    <div className="page">
      <div className="section">
        <ScrollReveal>
          <span className="sys-label">Transmission</span>
          <h1 className="term-h1 cursor" style={{ marginBottom: 24 }}>CONTACT</h1>
          <hr className="term-div" />
        </ScrollReveal>

        <div className="contact-layout">
          <ScrollReveal delay={80}>
            <div>
              {/* <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--pink)', textShadow: 'var(--glow-text-lg)', marginBottom: 16, letterSpacing: 1 }}>
                INITIATE_TRANSMISSION
              </div> */}
              <p className="term-p" style={{ marginBottom: 28 }}>
                Currently completing my Computer Programming and Analysis diploma and actively
                seeking software developer opportunities for 2026. Open to roles, projects, and
                collaborations.
              </p>

              <a className="c-item" href="mailto:nirjadabhii@gmail.com">
                <span className="c-key">EMAIL</span>
                <span>nirjadabhii@gmail.com</span>
              </a>
              <a className="c-item" href="https://www.linkedin.com/in/nirjadabhi0912/" target="_blank" rel="noreferrer">
                <span className="c-key">LINKEDIN</span>
                <span>linkedin.com/in/nirja-dabhi</span>
              </a>
              <a className="c-item" href="https://github.com/whatnirja" target="_blank" rel="noreferrer">
                <span className="c-key">GITHUB</span>
                <span>github.com/whatnirja</span>
              </a>
              <div className="c-item">
                <span className="c-key">LOCATION</span>
                <span>Toronto, ON, Canada</span>
              </div>
              <div className="c-item">
                <span className="c-key">INSTITUTION</span>
                <span>George Brown College</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="contact-form-box">
              <div className="cfb-bar">// SEND_MESSAGE.FORM</div>
              <div className="cfb-body">
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '36px 0' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--pink)', textShadow: 'var(--glow-text-lg)', marginBottom: 12 }}>
                      TRANSMITTED.
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--pink-dim)', letterSpacing: 1 }}>
                      {'> MESSAGE DELIVERED SUCCESSFULLY_'}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="form-row">
                      <label className="form-lbl">SENDER_NAME</label>
                      <input className="form-in" type="text" name="name" placeholder="your name" value={form.name} onChange={set} />
                    </div>
                    <div className="form-row">
                      <label className="form-lbl">SENDER_EMAIL</label>
                      <input className="form-in" type="email" name="email" placeholder="example@example.com" value={form.email} onChange={set} />
                    </div>
                    <div className="form-row">
                      <label className="form-lbl">SUBJECT</label>
                      <input className="form-in" type="text" name="subject" placeholder="Job opportunity / Collaboration" value={form.subject} onChange={set} />
                    </div>
                    <div className="form-row">
                      <label className="form-lbl">MESSAGE</label>
                      <textarea className="form-ta" name="message" placeholder="> Begin message transmission..." value={form.message} onChange={set} />
                    </div>
                    <button className="btn" onClick={submit} style={{ width: '100%', justifyContent: 'center' }}>
                      TRANSMIT MESSAGE
                    </button>
                  </>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
