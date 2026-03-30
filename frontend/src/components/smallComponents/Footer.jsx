import { FaGithub, FaLinkedin } from "react-icons/fa"
import { TreeStructure } from "@phosphor-icons/react"
import { useTheme } from "../../hooks/useTheme"

const Footer = () => {
  const { dark } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="w-full transition-colors duration-300"
      style={{
        background: dark
          ? '#030712'
          : '#ffffff',
        borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <TreeStructure
              size={22}
              weight="duotone"
              className={dark ? 'text-violet-400' : 'text-violet-600'}
            />
            <span className={`text-lg font-semibold tracking-tight ${
              dark ? 'text-white' : 'text-gray-900'
            }`}>
              ProjectBuilder
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Dev-Soares"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                dark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
              }`}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bernardo-soares-150096364/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${
                dark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background: dark
              ? 'rgba(255,255,255,0.06)'
              : 'rgba(0,0,0,0.06)',
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${
            dark ? 'text-gray-500' : 'text-gray-400'
          }`}>
            © {currentYear} ProjectBuilder
          </p>
          <a
            href="mailto:bernardo.soares30@outlook.com"
            className={`text-sm transition-colors duration-200 ${
              dark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            bernardo.soares30@outlook.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
