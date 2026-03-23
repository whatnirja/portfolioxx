import { useState, useEffect } from 'react'

const LINES = [
  { text: '> NIRJA_DABHI.SYS  VER 2026.1  GBC TORONTO', delay: 0 },
  { text: '> COPYRIGHT (C) 2026 NIRJA DABHI. ALL RIGHTS RESERVED.', delay: 300 },
  { text: '', delay: 500 },
  { text: '> INITIALIZING SYSTEM......................', delay: 700 },
  { text: '> LOADING REACT v18.2.0...................<span class="ok">[OK]</span>', delay: 1000 },
  { text: '> LOADING REACT_ROUTER v6.22.0............<span class="ok">[OK]</span>', delay: 1250 },
  { text: '> SCANNING ACADEMIC_RECORDS...............<span class="ok">[FOUND]</span>', delay: 1500 },
  { text: '> LOADING PROJECT_DATA....................<span class="ok">[OK]</span>', delay: 1750 },
  { text: '> VERIFYING CREDENTIALS...................<span class="ok">[GPA: 3.83]</span>', delay: 2000 },
  { text: '> CHECKING COMPETITIVE_RANK...............<span class="ok">[16TH IN CA]</span>', delay: 2250 },
  { text: '> COMPILING PORTFOLIO_MODULES.............<span class="ok">[DONE]</span>', delay: 2500 },
  { text: '', delay: 2750 },
  { text: '> ALL MODULES LOADED SUCCESSFULLY.', delay: 2900 },
  { text: '> BOOT SEQUENCE COMPLETE.', delay: 3100 },
]

export default function BootScreen({ onDone }) {
  const [shown, setShown] = useState([])
  const [ready, setReady] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setShown(s => [...s, i])
      }, line.delay)
    })
    setTimeout(() => setReady(true), 3400)
  }, [])

  function proceed() {
    setFading(true)
    setTimeout(onDone, 650)
  }

  useEffect(() => {
    if (!ready) return
    const handler = () => proceed()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [ready])

  return (
    <div className={`boot-screen${fading ? ' fade-out' : ''}`} onClick={ready ? proceed : undefined}>
      <div className="boot-header">
        <span>NIRJA_DABHI.SYS // PORTFOLIO v2026.1</span>
        <span>GBC TORONTO // COMP3078</span>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        {LINES.map((line, i) => (
          <div
            key={i}
            className={`boot-line${shown.includes(i) ? ' show' : ''}`}
            dangerouslySetInnerHTML={{ __html: line.text || '&nbsp;' }}
          />
        ))}
      </div>

      {ready && (
        <div className="boot-prompt" onClick={proceed}>
          PRESS ANY KEY TO CONTINUE
        </div>
      )}
    </div>
  )
}
