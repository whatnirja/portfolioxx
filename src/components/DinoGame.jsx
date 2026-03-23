import { useEffect, useRef, useState, useCallback } from 'react'

const W = 700
const H = 160
const GROUND = 120
const DINO_W = 44
const DINO_H = 52
const DINO_X = 60

function DinoGame() {
  const canvasRef = useRef(null)
  const state = useRef({
    running: false,
    dead: false,
    started: false,
    y: GROUND - DINO_H,
    vy: 0,
    frame: 0,
    score: 0,
    speed: 4,
    obstacles: [],
    nextObs: 80,
    leg: 0,
    legTimer: 0,
  })
  const rafRef = useRef(null)
  const [display, setDisplay] = useState({ score: 0, dead: false, started: false })

  const PINK       = '#ff3385'
  const PINK_DIM   = '#991144'
  const PINK_FAINT = 'rgba(255,51,133,0.08)'
  const BG         = '#040008'
  const PALE       = 'rgba(255,170,204,0.7)'

  function drawDino(ctx, y, frame = 0) {
  const x = DINO_X
  const pixel = 3
  const s = state.current

  const runFrame1 = [
    "0000110011000000",
    "0000110011000000",
    "0000111111000000",
    "0001111111100000",
    "0011111111110000",
    "0011110111110000",
    "0011111111110000",
    "0011111111100000",
    "0001111111000000",
    "0000111111100000",
    "0001111111110000",
    "0011111111111000",
    "0011111111110000",
    "0001110011100000",
    "0001100011000000",
    "0011000011100000",
  ]

  const runFrame2 = [
    "0000110011000000",
    "0000110011000000",
    "0000111111000000",
    "0001111111100000",
    "0011111111110000",
    "0011110111110000",
    "0011111111110000",
    "0011111111100000",
    "0001111111000000",
    "0000111111100000",
    "0001111111110000",
    "0011111111111000",
    "0011111111110000",
    "0001110011100000",
    "0001100011000000",
    "0001110011000000",
  ]

  const idleFrame = [
    "0000110011000000",
    "0000110011000000",
    "0000111111000000",
    "0001111111100000",
    "0011111111110000",
    "0011110111110000",
    "0011111111110000",
    "0011111111100000",
    "0001111111000000",
    "0000111111100000",
    "0001111111110000",
    "0011111111111000",
    "0011111111110000",
    "0001110011100000",
    "0001110011100000",
    "0001110011100000",
  ]

  const sprite =
    s.running && !s.dead
      ? (frame === 0 ? runFrame1 : runFrame2)
      : idleFrame

  ctx.fillStyle = PINK
  ctx.shadowColor = PINK
  ctx.shadowBlur = 10

  for (let row = 0; row < sprite.length; row++) {
    for (let col = 0; col < sprite[row].length; col++) {
      if (sprite[row][col] === "1") {
        ctx.fillRect(x + col * pixel, y + row * pixel, pixel, pixel)
      }
    }
  }

  // eye
  ctx.fillStyle = BG
  ctx.fillRect(x + 6 * pixel, y + 5 * pixel, pixel, pixel)

  // nose
  ctx.fillRect(x + 11 * pixel, y + 7 * pixel, pixel, pixel)

  // fluffy tail
  ctx.fillStyle = PINK
  ctx.fillRect(x + 12 * pixel, y + 10 * pixel, pixel * 2, pixel * 2)

  ctx.shadowBlur = 0
}

  function drawCactus(ctx, x) {
    ctx.fillStyle = PINK
    ctx.shadowColor = PINK
    ctx.shadowBlur = 8
    ctx.fillRect(x + 8, GROUND - 42, 10, 42)
    ctx.fillRect(x,     GROUND - 32, 8, 8)
    ctx.fillRect(x,     GROUND - 42, 6, 14)
    ctx.fillRect(x + 18, GROUND - 28, 8, 8)
    ctx.fillRect(x + 20, GROUND - 38, 6, 12)
    ctx.shadowBlur = 0
  }

  function drawCloud(ctx, x, y) {
    ctx.fillStyle = PINK_DIM
    ctx.shadowBlur = 0
    ctx.fillRect(x,      y,     30, 6)
    ctx.fillRect(x + 6,  y - 4, 18, 4)
    ctx.fillRect(x + 34, y,     20, 6)
  }

  const loop = useCallback(() => {
    const s = state.current
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = BG
    ctx.fillRect(0, 0, W, H)

    ctx.strokeStyle = PINK_DIM
    ctx.lineWidth = 1
    ctx.shadowColor = PINK
    ctx.shadowBlur = 4
    ctx.beginPath()
    ctx.moveTo(0, GROUND)
    ctx.lineTo(W, GROUND)
    ctx.stroke()
    ctx.shadowBlur = 0

    ctx.fillStyle = PINK_DIM
    ctx.font = '11px "Share Tech Mono"'
    ctx.fillText(`SCORE: ${Math.floor(s.score).toString().padStart(6, '0')}`, W - 170, 22)

    if (!s.started) {
      ctx.fillStyle = PALE
      ctx.font = '11px "Share Tech Mono"'
      ctx.textAlign = 'center'
      ctx.fillText('PRESS SPACE OR TAP TO START', W / 2, H / 2 - 10)
      ctx.textAlign = 'left'
      drawDino(ctx, s.y, 0)
      rafRef.current = requestAnimationFrame(loop)
      return
    }

    s.frame++

    if (!s.dead) {
      s.vy += 0.55
      s.y  += s.vy
      if (s.y >= GROUND - DINO_H) {
        s.y  = GROUND - DINO_H
        s.vy = 0
      }

      s.score += s.speed * 0.04
      s.speed  = 4 + Math.floor(s.score / 150) * 0.6

      s.legTimer++
      if (s.legTimer > 8) { s.leg = s.leg === 0 ? 1 : 0; s.legTimer = 0 }

      s.nextObs--
      if (s.nextObs <= 0) {
        s.obstacles.push({ x: W + 10 })
        s.nextObs = 65 + Math.random() * 80
      }
      s.obstacles = s.obstacles
        .map(o => ({ x: o.x - s.speed }))
        .filter(o => o.x > -60)

      for (const o of s.obstacles) {
        if (
          DINO_X + 8  < o.x + 24 &&
          DINO_X + 36 > o.x + 2  &&
          s.y + 12    < GROUND   &&
          s.y + DINO_H > GROUND - 42
        ) {
          s.dead = true
          break
        }
      }
    }

    drawCloud(ctx, ((s.frame * 0.6)       % (W + 80)) - 40, 28)
    drawCloud(ctx, ((s.frame * 0.4 + 280) % (W + 80)) - 40, 18)

    for (const o of s.obstacles) drawCactus(ctx, o.x)

    drawDino(ctx, s.y, s.dead ? 0 : s.leg)

    if (s.dead) {
      ctx.fillStyle = PINK
      ctx.font = '13px "Share Tech Mono"'
      ctx.shadowColor = PINK
      ctx.shadowBlur = 8
      ctx.fillText('X', DINO_X + 34, s.y - 2)
      ctx.shadowBlur = 0
      ctx.fillStyle = PINK
      ctx.font = '11px "Share Tech Mono"'
      ctx.textAlign = 'center'
      ctx.shadowColor = PINK
      ctx.shadowBlur = 8
      ctx.fillText('GAME OVER', W / 2, H / 2 - 14)
      ctx.shadowBlur = 0
      ctx.fillStyle = PALE
      ctx.font = '10px "Share Tech Mono"'
      ctx.fillText('PRESS SPACE OR TAP TO RESTART', W / 2, H / 2 + 8)
      ctx.textAlign = 'left'
      setDisplay(d => ({ ...d, dead: true, score: Math.floor(s.score) }))
      rafRef.current = requestAnimationFrame(loop)
      return
    }

    setDisplay({ score: Math.floor(s.score), dead: false, started: true })
    rafRef.current = requestAnimationFrame(loop)
  }, [])

  function jump() {
    const s = state.current
    if (s.dead) {
      s.dead      = false
      s.y         = GROUND - DINO_H
      s.vy        = 0
      s.score     = 0
      s.speed     = 4
      s.obstacles = []
      s.nextObs   = 80
      s.frame     = 0
      s.running   = true
      setDisplay({ score: 0, dead: false, started: true })
      return
    }
    if (!s.started) {
      s.started = true
      s.running = true
    }
    if (s.y >= GROUND - DINO_H - 2) {
      s.vy = -11
    }
  }

  useEffect(() => {
    rafRef.current = requestAnimationFrame(loop)
    const onKey = e => { if (e.code === 'Space') { e.preventDefault(); jump() } }
    window.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('keydown', onKey)
    }
  }, [loop])

  return (
    <div style={{ border:'1px solid var(--pink-border)', background:'var(--pink-faint)', boxShadow:'var(--glow)', margin:'0'}}>
      <div style={{ borderBottom:'1px solid var(--pink-border)', padding:'6px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:10, letterSpacing:2, color:'var(--pink)', textShadow:'var(--glow-text)' }}>
        <span>// NO_CONNECTION.EXE — DINO_RUNNER</span>
        <span style={{ color:'var(--pink-dim)' }}>HI: {display.score.toString().padStart(6,'0')}</span>
      </div>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        onClick={jump}
        style={{ display:'block', width:'100%', height:'auto', cursor:'pointer', imageRendering:'pixelated' }}
      />
      <div style={{ borderTop:'1px solid var(--pink-border)', padding:'5px 16px', fontSize:9, letterSpacing:2, color:'var(--pink-dim)', textAlign:'center' }}>
        SPACE / TAP TO JUMP — AVOID THE CACTI
      </div>
    </div>
  )
}

export default DinoGame