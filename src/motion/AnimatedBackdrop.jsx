import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import styles from './AnimatedBackdrop.module.scss'

const GAP = 28
const RADIUS = 130
const PUSH = 42
const EASE = 0.16
const DOT_R = 1.15

function readColor() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--dot-grid')
    .trim()
  return raw || 'rgba(196, 165, 116, 0.28)'
}

function makeDots(w, h, gap) {
  const cols = Math.ceil(w / gap) + 1
  const rows = Math.ceil(h / gap) + 1
  const ox = (w - (cols - 1) * gap) / 2
  const oy = (h - (rows - 1) * gap) / 2
  const dots = new Array(cols * rows)
  let i = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = ox + c * gap
      const y = oy + r * gap
      dots[i++] = { x, y, ox: x, oy: y }
    }
  }
  return dots
}

export default function AnimatedBackdrop() {
  const reduce = useReducedMotion()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return undefined

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const interactive = !reduce && finePointer.matches

    let running = true
    let raf = 0
    let dots = []
    let color = readColor()
    let w = 0
    let h = 0
    const mouse = { x: -9999, y: -9999, active: false }

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = color
      ctx.beginPath()
      for (const d of dots) {
        ctx.moveTo(d.ox + DOT_R, d.oy)
        ctx.arc(d.ox, d.oy, DOT_R, 0, Math.PI * 2)
      }
      ctx.fill()
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const gap = w < 700 ? 32 : GAP
      dots = makeDots(w, h, gap)
      if (!interactive) drawStatic()
    }

    const tick = () => {
      if (!running) return

      const r2 = RADIUS * RADIUS

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = color
      ctx.beginPath()

      for (const d of dots) {
        let tx = d.ox
        let ty = d.oy

        if (mouse.active) {
          const dx = d.ox - mouse.x
          const dy = d.oy - mouse.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < r2 && dist2 > 0.01) {
            const dist = Math.sqrt(dist2)
            const force = (1 - dist / RADIUS) ** 2 * PUSH
            tx += (dx / dist) * force
            ty += (dy / dist) * force
          }
        }

        d.x += (tx - d.x) * EASE
        d.y += (ty - d.y) * EASE

        ctx.moveTo(d.x + DOT_R, d.y)
        ctx.arc(d.x, d.y, DOT_R, 0, Math.PI * 2)
      }

      ctx.fill()
      raf = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    const onLeave = () => {
      mouse.active = false
    }

    resize()
    color = readColor()

    window.addEventListener('resize', resize)

    const themeObserver = new MutationObserver(() => {
      color = readColor()
      if (!interactive) drawStatic()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    if (interactive) {
      window.addEventListener('mousemove', onMove, { passive: true })
      document.documentElement.addEventListener('mouseleave', onLeave)
      raf = requestAnimationFrame(tick)
    } else {
      drawStatic()
    }

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      themeObserver.disconnect()
    }
  }, [reduce])

  return (
    <div className={styles.backdrop} aria-hidden="true">
      <span className={styles.orb} data-orb="1" />
      <span className={styles.orb} data-orb="2" />
      <span className={styles.orb} data-orb="3" />
      <canvas ref={canvasRef} className={styles.dots} />
    </div>
  )
}
