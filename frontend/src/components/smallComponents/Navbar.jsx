import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { List, X, Sun, Moon, TreeStructure } from '@phosphor-icons/react'
import { useTheme } from '../../hooks/useTheme'
import { smoothScroll } from '../../utils/smoothScroll'

function scrollTo(e) {
  e.preventDefault()
  const id = e.currentTarget.getAttribute('href')?.slice(1)
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return
  const navHeight = 72
  const target = el.getBoundingClientRect().top + window.scrollY - navHeight
  smoothScroll(target)
}

const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const { dark, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4">
      <div
        className={`w-full max-w-5xl backdrop-blur-xl border transition-colors duration-300 rounded-2xl lg:rounded-full ${
          dark
            ? 'bg-[#0a0a1a]/80 border-white/[0.08]'
            : 'bg-white border-gray-200 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <TreeStructure
              size={26}
              weight="duotone"
              className={`transition-colors duration-200 ${
                dark ? 'text-violet-400' : 'text-violet-600'
              }`}
            />
            <span
              className={`text-lg font-semibold tracking-tight ${
                dark ? 'text-white' : 'text-gray-900'
              }`}
            >
              ProjectBuilder
            </span>
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className={`p-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
                dark
                  ? 'text-gray-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              {dark ? <Moon size={18} weight="fill" /> : <Sun size={18} weight="fill" className="text-amber-400" />}
            </button>
            <button
              onClick={() => navigate('/get-diagram')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:h-[1.5px] after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-3/5 ${
                dark ? 'text-gray-300 hover:text-white after:bg-violet-400' : 'text-gray-600 hover:text-gray-900 after:bg-violet-500'
              }`}
            >
              Acessar Projeto
            </button>
            <button
              onClick={() => navigate('/create-diagram')}
              className="px-5 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Criar Projeto
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors cursor-pointer ${
              dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`px-6 pb-5 pt-3 flex flex-col gap-2`}>
            <button
              onClick={() => {
                navigate('/get-diagram')
                setMenuOpen(false)
              }}
              className={`py-2 text-sm text-center rounded-lg transition-colors cursor-pointer ${
                dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Acessar Projeto
            </button>
            <button
              onClick={() => {
                navigate('/create-diagram')
                setMenuOpen(false)
              }}
              className="py-2.5 text-sm text-center font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-full transition-all duration-200 cursor-pointer"
            >
              Criar Projeto
            </button>
            <div className="flex items-center justify-center pt-1">
              <button
                onClick={toggleTheme}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  dark
                    ? 'text-gray-400 hover:text-white hover:bg-white/10'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
              >
                {dark ? <Moon size={16} weight="fill" /> : <Sun size={16} weight="fill" className="text-amber-400" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
