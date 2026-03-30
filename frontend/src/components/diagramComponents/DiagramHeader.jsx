import { useDiagram } from "../../contexts/DiagramContext.jsx"
import { useNavigate } from "react-router-dom"
import { List, X, ArrowLeft } from "@phosphor-icons/react"

const DiagramHeader = () => {
  const { diagramName, setIsOpen, isOpen } = useDiagram()
  const navigate = useNavigate()

  return (
    <header className="h-16 w-full bg-[#0a0a1a] flex items-center justify-between px-6 border-b border-white/[0.06] select-none shrink-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-lg text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>

      <h2 className="text-base font-semibold text-white tracking-wide truncate max-w-[40%]">
        {diagramName}
      </h2>

      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 text-sm font-medium text-white hover:bg-white/[0.06] transition-colors cursor-pointer p-2.5 rounded-lg"
      >
        <ArrowLeft size={20} weight="bold" />
        <span className="hidden md:inline">Voltar</span>
      </button>
    </header>
  )
}

export default DiagramHeader
