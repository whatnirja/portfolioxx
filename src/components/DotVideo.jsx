import { useEffect, useRef } from 'react'

export default function DotVideo({ src, width = 360, height = 240, dotGap = 7 }) {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const cols = Math.floor(width / dotGap)
    const rows = Math.floor(height / dotGap)
    const off = document.createElement('canvas')
    off.width = cols
    off.height = rows
    const offCtx = off.getContext('2d')

    let rafId

    function draw() {
      if (video.readyState >= 2) {
        offCtx.drawImage(video, 0, 0, cols, rows)
        const frame = offCtx.getImageData(0, 0, cols, rows).data

        ctx.clearRect(0, 0, width, height)
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 4
            const brightness = (frame[i] + frame[i + 1] + frame[i + 2]) / 3 / 255

            const cx = x * dotGap + dotGap / 2
            const cy = y * dotGap + dotGap / 2
            const radius = (dotGap / 2) * brightness * 0.9

            if (radius > 0.4) {
              ctx.beginPath()
              ctx.arc(cx, cy, radius, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255,157,192,${0.3 + brightness * 0.7})`
              ctx.fill()
            }
          }
        }
      }
      rafId = requestAnimationFrame(draw)
    }

    video.play().catch(() => {})
    draw()
    return () => cancelAnimationFrame(rafId)
  }, [width, height, dotGap])

  return (
    <div className="dot-video">
      <video ref={videoRef} src={src} autoPlay muted loop playsInline style={{ display: 'none' }} />
      <canvas ref={canvasRef} width={width} height={height} className="dot-canvas" />
    </div>
  )
}