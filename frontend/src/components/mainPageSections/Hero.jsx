import { useNavigate } from "react-router-dom"
import { ArrowRight } from "@phosphor-icons/react"
import DiagramExample from "../smallComponents/DiagramExample"
import { useTheme } from "../../hooks/useTheme"

const Hero = () => {
  const navigate = useNavigate()
  const { dark } = useTheme()

  return (
    <section
      id="Hero"
      className="relative w-full overflow-hidden transition-colors duration-300"
      style={{
        background: dark
          ? '#030712'
          : 'linear-gradient(180deg, #ffffff 0%, #f5f3ff 50%, #ede9fe 100%)',
      }}
    >
      {/* Glow behind the mockup */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] lg:w-[800px] lg:h-[500px] pointer-events-none"
        style={{
          background: dark
            ? 'radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, rgba(99,102,241,0.08) 30%, transparent 65%)'
            : 'radial-gradient(ellipse, rgba(139,92,246,0.10) 0%, rgba(99,102,241,0.04) 30%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-8 lg:pt-36 lg:pb-12">
        {/* Text - centered */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 lg:mb-12">
          <div className="relative">
            <h1 className="relative z-10 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
              <span className={dark ? 'text-white' : 'text-gray-900'}>
                Sua infraestrutura,
              </span>
              <br />
              <span className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                desenhada visualmente
              </span>
            </h1>
            {/* Glow behind gradient text */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] pointer-events-none blur-3xl opacity-30"
              style={{ background: 'linear-gradient(90deg, #8b5cf6, #6366f1)' }}
            />
          </div>

          <p className={`text-lg max-w-xl leading-relaxed ${
            dark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Monte diagramas arrastando componentes no canvas.
            Sem cadastro. Abra e comece.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => navigate('/create-diagram')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full shadow-lg shadow-violet-600/25 hover:shadow-violet-700/35 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              Começar agora
              <ArrowRight size={16} weight="bold" />
            </button>
            <button
              onClick={() => navigate('/get-diagram')}
              className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                dark
                  ? 'border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/5'
                  : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              Acessar Projeto
            </button>
          </div>
        </div>

        {/* App window mockup with perspective */}
        <div className="flex justify-center" style={{ perspective: '1200px' }}>
          <div
            className="w-full max-w-4xl"
            style={{
              transform: 'rotateX(4deg)',
              transformOrigin: 'center bottom',
            }}
          >
            {/* Window frame */}
            <div className={`rounded-xl overflow-hidden border transition-colors duration-300 ${
              dark
                ? 'border-white/[0.08] shadow-2xl shadow-violet-500/10'
                : 'border-gray-200 shadow-2xl shadow-gray-400/20'
            }`}>
              {/* Title bar */}
              <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${
                dark
                  ? 'bg-[#0c0c1d] border-white/[0.06]'
                  : 'bg-gray-50 border-gray-100'
              }`}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className={`px-3 py-0.5 rounded-md text-xs font-mono ${
                    dark ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-400'
                  }`}>
                    projectbuilder.app/diagram
                  </div>
                </div>
                <div className="w-12" />
              </div>

              {/* Diagram content */}
              <DiagramExample />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
