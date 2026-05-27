import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import styles from './CursorTrail.module.scss'

const TRAIL_MS = 720
const SPAWN_GAP_MS = 14
const MAX_POINTS = 28

function readAccentRgb() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent')
    .trim()
  if (!raw) return '196, 165, 116'
  if (raw.startsWith('#')) {
    const hex = raw.slice(1)
    const full =
      hex.length === 3
        ? hex
            .split('')
            .map((c) => c + c)
            .join('')
        : hex
    const n = parseInt(full, 16)
    return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
  }
  return '196, 165, 116'
}

export default function CursorTrail() {
  const reduce = useReducedMotion()
  const hoverRef = useRef(false)
  const canvasRef = useRef(null)
  const pointsRef = useRef([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const lastSpawnRef = useRef(0)
  const rafRef = useRef(0)
  const accentRef = useRef('196, 165, 116')
  const visibleRef = useRef(false)

  useEffect(() => {
    if (reduce) return undefined

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!finePointer.matches) return undefined

    document.documentElement.classList.add('custom-cursor')

    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let running = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    accentRef.current = readAccentRgb()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      visibleRef.current = true
      hoverRef.current = Boolean(
        e.target.closest(
          'a, button, [role="tab"], input, textarea, select, label, summary'
        )
      )

      const now = performance.now()
      if (now - lastSpawnRef.current > SPAWN_GAP_MS) {
        lastSpawnRef.current = now
        pointsRef.current.push({ x: e.clientX, y: e.clientY, t: now })
        if (pointsRef.current.length > MAX_POINTS) {
          pointsRef.current.shift()
        }
      }
    }

    const onLeave = () => {
      visibleRef.current = false
    }

    const onEnter = () => {
      visibleRef.current = true
    }

    const tick = (now) => {
      if (!running) return

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      const cursor = document.getElementById('cursor-cross')
      if (cursor) {
        const v = visibleRef.current ? 1 : 0
        const hover = hoverRef.current
        cursor.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%) scale(${v})`
        cursor.style.opacity = String(v)
        cursor.classList.toggle(styles.hover, hover && v === 1)
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      const rgb = accentRef.current
      const alive = []

      for (const p of pointsRef.current) {
        const age = (now - p.t) / TRAIL_MS
        if (age >= 1) continue
        alive.push(p)

        const fade = 1 - age
        const perspective = 1 - age * 0.72
        const radius = 4 + perspective * 6
        const alpha = fade * 0.32

        ctx.save()
        ctx.globalCompositeOperation = 'lighter'
        ctx.shadowBlur = 14 * fade
        ctx.shadowColor = `rgba(${rgb}, ${alpha})`
        ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.8})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * perspective, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      pointsRef.current = alive
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    const themeObserver = new MutationObserver(() => {
      accentRef.current = readAccentRgb()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      running = false
      cancelAnimationFrame(rafRef.current)
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      themeObserver.disconnect()
    }
  }, [reduce])

  if (reduce) return null

  return (
    <>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div id="cursor-cross" className={styles.cross} aria-hidden="true">
        <span />
        <span />
      </div>
    </>
  )
}
