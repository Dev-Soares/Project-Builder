import { useNavigate } from "react-router-dom"
import { ArrowRight } from "@phosphor-icons/react"
import { useTheme } from "../../hooks/useTheme"
import { useEffect, useRef } from "react"

const CallAction = () => {
  const navigate = useNavigate()
  const { dark } = useTheme()
  const canvasRef = useRef(null)
  const darkRef = useRef(dark)

  useEffect(() => {
    darkRef.current = dark
  }, [dark])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    const gap = 24
    const dotRadius = 1.5

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time) => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      const cx = w / 2
      const cy = h / 2
      const maxDist = Math.sqrt(cx * cx + cy * cy)
      const isDark = darkRef.current

      ctx.clearRect(0, 0, w, h)

      // Wave moves outward from center
      // wavePos cycles 0 → 1 over 4 seconds
      const wavePos = (time % 4000) / 4000

      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          const dx = x - cx
          const dy = y - cy
          const dist = Math.sqrt(dx * dx + dy * dy)
          const normalizedDist = dist / maxDist

          // Radial fade mask (like the CSS mask)
          const maskX = Math.abs(dx) / (w * 0.35)
          const maskY = Math.abs(dy) / (h * 0.30)
          const ellipse = maskX * maskX + maskY * maskY
          if (ellipse > 1) continue
          const maskAlpha = Math.max(0, 1 - ellipse * 0.8)

          // Wave: a soft pulse that radiates outward
          const wavePhase = (normalizedDist - wavePos) * 6
          const wave = Math.exp(-wavePhase * wavePhase) * 0.5

          const baseAlpha = isDark ? 0.18 : 0.12
          const alpha = (baseAlpha + wave) * maskAlpha

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    animationId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{
      background: dark
        ? '#030712'
        : '#ffffff',
    }}>
      {/* Animated dot grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Violet ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: '#8b5cf6', opacity: dark ? 0.07 : 0.05 }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-28 lg:py-40 text-center">
        <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight ${
          dark ? 'text-white' : 'text-gray-900'
        }`}>
          Sua arquitetura,
          <br />
          <span className="bg-linear-to-r from-violet-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            seu canvas.
          </span>
        </h2>

        <p className={`mt-6 text-lg sm:text-xl max-w-md mx-auto leading-relaxed ${
          dark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Zero cadastro. Zero configuração.
          <br className="hidden sm:block" />
          Abra e comece a construir.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/create-diagram')}
            className="group px-8 py-4 text-base font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-full shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5"
          >
            Criar projeto
            <ArrowRight
              size={18}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
          <button
            onClick={() => navigate('/get-diagram')}
            className={`px-8 py-4 text-base font-medium rounded-full border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
              dark
                ? 'border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/5'
                : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-white/60'
            }`}
          >
            Acessar projeto existente
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallAction
