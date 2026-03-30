import { useState } from 'react'
import Navbar from '../components/smallComponents/Navbar.jsx'
import { useDiagramActions } from '../hooks/useDiagramActions.js'
import { useNavigate } from 'react-router-dom'
import { useAlert } from '../contexts/AlertContext.jsx'
import { ArrowRight } from '@phosphor-icons/react'
import { useTheme } from '../hooks/useTheme'

const GetDiagram = () => {
  const [projectId, setProjectId] = useState('')
  const [focused, setFocused] = useState(false)
  const { fetchDiagram } = useDiagramActions()
  const { errorAlert, setIsLoading } = useAlert()
  const navigate = useNavigate()
  const { dark } = useTheme()

  const handleGetDiagram = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const diagram = await fetchDiagram(projectId)
      const diagramId = diagram.id

      if (diagramId) {
        navigate(`/diagram/${diagramId}`)
      } else {
        errorAlert('Diagrama não encontrado. Verifique o ID e tente novamente.')
      }
    } catch (error) {
      console.error('Error fetching diagram:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 overflow-hidden transition-colors duration-300"
      style={{ background: dark ? '#030712' : '#ffffff' }}
    >
      <Navbar />

      {/* Large ambient glow behind input */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: dark ? 1 : 0.6,
        }}
      />

      <div className="relative w-full max-w-xl text-center">
        {/* Heading */}
        <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-14 ${
          dark ? 'text-white' : 'text-gray-900'
        }`}>
          Retome seu{' '}
          <span className="bg-linear-to-r from-violet-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            projeto
          </span>
        </h1>

        {/* Command-line style input */}
        <form onSubmit={handleGetDiagram}>
          <div
            className="relative flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200"
            style={{
              background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
              border: `1px solid ${focused ? 'rgba(139,92,246,0.4)' : dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
              boxShadow: focused
                ? '0 0 0 4px rgba(139,92,246,0.08), 0 8px 32px rgba(139,92,246,0.10)'
                : dark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.04)',
            }}
          >
            {/* Prompt prefix */}
            <span className={`text-sm font-mono font-bold select-none shrink-0 ${
              focused ? 'text-violet-400' : dark ? 'text-gray-600' : 'text-gray-300'
            }`}>
              &gt;_
            </span>

            <input
              type="text"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="cole o id do projeto aqui"
              maxLength={30}
              required
              autoComplete="off"
              className={`flex-1 bg-transparent text-base font-mono tracking-wide outline-none ${
                dark
                  ? 'text-white placeholder-gray-600'
                  : 'text-gray-900 placeholder-gray-300'
              }`}
            />

            <button
              type="submit"
              className="shrink-0 p-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg shadow-violet-600/25"
            >
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>

          {/* Keyboard hint */}
          <div className={`mt-5 flex items-center justify-center gap-2 text-xs ${
            dark ? 'text-gray-600' : 'text-gray-300'
          }`}>
            <kbd
              className="px-1.5 py-0.5 rounded font-mono text-[11px]"
              style={{
                background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              }}
            >
              Enter
            </kbd>
            <span>para acessar</span>
          </div>
        </form>

        {/* Alt action */}
        <div className={`mt-14 text-sm ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
          Não tem um projeto?{' '}
          <button
            onClick={() => navigate('/create-diagram')}
            className="text-violet-500 hover:text-violet-400 font-medium transition-colors cursor-pointer"
          >
            Criar agora
          </button>
        </div>
      </div>
    </main>
  )
}

export default GetDiagram
