import { useRef, useState, useEffect } from "react"
import { CursorIcon, LightningIcon, FlowArrowIcon, FingerprintSimpleIcon } from "@phosphor-icons/react"
import { useTheme } from "../../hooks/useTheme"

const steps = [
  {
    icon: CursorIcon,
    title: 'Arraste e monte',
    description: 'Componentes prontos no canvas. Drag & drop, sem formulários.',
    accent: { dark: 'text-violet-400', light: 'text-violet-600', bg: 'violet' },
  },
  {
    icon: LightningIcon,
    title: 'Sem cadastro',
    description: 'Abra e comece. Zero fricção, zero espera.',
    accent: { dark: 'text-amber-400', light: 'text-amber-500', bg: 'amber' },
  },
  {
    icon: FlowArrowIcon,
    title: 'Esquematize seu projeto',
    description: 'Conecte componentes e visualize a arquitetura do seu sistema.',
    accent: { dark: 'text-sky-400', light: 'text-sky-500', bg: 'sky' },
  },
  {
    icon: FingerprintSimpleIcon,
    title: 'Salve com um ID',
    description: 'Cada diagrama gera um código único. Compartilhe ou volte depois.',
    accent: { dark: 'text-emerald-400', light: 'text-emerald-500', bg: 'emerald' },
  },
]

const accentColors = {
  violet: { dot: '#8b5cf6', glow: 'rgba(139,92,246,0.3)' },
  amber:  { dot: '#f59e0b', glow: 'rgba(245,158,11,0.3)' },
  sky:    { dot: '#0ea5e9', glow: 'rgba(14,165,233,0.3)' },
  emerald:{ dot: '#10b981', glow: 'rgba(16,185,129,0.3)' },
}

const Details = () => {
  const { dark } = useTheme()
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const start = rect.top - viewportHeight * 0.7
      const end = rect.bottom - viewportHeight * 0.3
      const raw = (0 - start) / (end - start)
      setProgress(Math.max(0, Math.min(1, raw)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Wide sinuous path — big horizontal swings
  const pathD = 'M 50,20 C 95,60 95,100 50,140 C 5,180 5,220 50,260 C 95,300 95,340 50,380'

  return (
    <section
      ref={sectionRef}
      id="details"
      className={`w-full transition-colors duration-300 ${
        dark ? 'bg-[#030712]' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            Como funciona
          </h2>
        </div>

        {/* Timeline with curved path */}
        <div className="relative">
          {/* Mobile: wavy SVG line behind dots */}
          <svg
            className="absolute left-[19px] -translate-x-1/2 top-5 bottom-5 w-12 lg:hidden pointer-events-none"
            style={{ height: 'calc(100% - 40px)' }}
            viewBox="0 0 40 400"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 20,0 C 38,50 2,100 20,150 C 38,200 2,250 20,300 C 38,350 20,400 20,400"
              stroke={dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'}
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 20,0 C 38,50 2,100 20,150 C 38,200 2,250 20,300 C 38,350 20,400 20,400"
              stroke="url(#mobilePathGrad)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: 800,
                strokeDashoffset: 800 - (800 * progress),
                transition: 'stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
            <defs>
              <linearGradient id="mobilePathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="33%" stopColor="#f59e0b" />
                <stop offset="66%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Desktop: SVG curved line */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[360px] pointer-events-none hidden lg:block"
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d={pathD}
              stroke={dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}
              strokeWidth="2"
              fill="none"
            />
            <path
              d={pathD}
              stroke="url(#pathGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: 1000,
                strokeDashoffset: 1000 - (1000 * progress),
                transition: 'stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
            <defs>
              <linearGradient id="pathGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="33%" stopColor="#f59e0b" />
                <stop offset="66%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="relative flex flex-col gap-20 lg:gap-32">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isRight = i % 2 !== 0
              const colors = accentColors[step.accent.bg]
              const threshold = (i / (steps.length + 1)) * 0.8
              const isActive = progress > threshold

              return (
                <div
                  key={step.title}
                  className={`flex items-start gap-5 lg:gap-0 transition-all duration-700 ${
                    isActive
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  } ${isRight ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`flex-1 lg:max-w-[38%] ${
                    isRight ? 'lg:text-left lg:pl-20' : 'lg:text-right lg:pr-20'
                  }`}>
                    <h3 className={`text-xl lg:text-2xl font-semibold mb-2 ${
                      dark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${
                      dark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot - lg */}
                  <div className="hidden lg:flex items-center justify-center lg:w-[24%]">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? colors.dot : (dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'),
                        boxShadow: isActive ? `0 0 20px ${colors.glow}` : 'none',
                      }}
                    >
                      <Icon size={20} weight="duotone" className="text-white" />
                    </div>
                  </div>

                  {/* Mobile dot */}
                  <div className="lg:hidden shrink-0 order-first">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? colors.dot : (dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'),
                        boxShadow: isActive ? `0 0 16px ${colors.glow}` : 'none',
                      }}
                    >
                      <Icon size={18} weight="duotone" className="text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block flex-1 lg:max-w-[38%]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
