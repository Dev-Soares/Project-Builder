import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ElementList from '../../components/itemsList/ElementList.jsx'
import { useAlert } from '../../contexts/AlertContext.jsx'
import { useDiagram } from '../../contexts/DiagramContext.jsx'
import { useDiagramActions } from '../../hooks/useDiagramActions.js'
import { useReactFlow } from '@xyflow/react'
import TutorialButton from '../smallComponents/TutorialButton.jsx'
import ShareButton from '../smallComponents/ShareButton.jsx'
import { FloppyDisk, Copy, Check } from '@phosphor-icons/react'

const ElementsSideBar = () => {
  const { isOpen, diagramName, setDiagramName } = useDiagram()
  const { successAlert } = useAlert()
  const { id } = useParams()
  const { toObject } = useReactFlow()
  const { saveFlowData } = useDiagramActions()
  const [textIsCopied, setTextIsCopied] = useState(false)

  const copyIdToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      successAlert('ID copiado!')
      setTextIsCopied(true)
      setTimeout(() => setTextIsCopied(false), 5000)
    })
  }

  return (
    <aside
      className={`bg-[#0a0a1a] border-r border-white/[0.06] h-full shrink-0 flex flex-col overflow-x-hidden overflow-y-auto transition-all duration-300 ease-out select-none ${
        isOpen ? 'w-[300px] lg:w-[320px]' : 'w-0'
      }`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(139,92,246,0.25) transparent',
      }}
    >
      {isOpen && (
        <div className="flex flex-col p-5 pt-6 opacity-0 animate-fadeIn">
          {/* Project name */}
          <div className="mb-6" id="edit-area">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
              Projeto
            </label>
            <input
              type="text"
              value={diagramName}
              onChange={(e) => setDiagramName(e.target.value)}
              className="w-full px-4 py-3 text-sm bg-white/[0.04] text-white border border-white/[0.08] rounded-xl focus:outline-none focus:border-violet-500/50 transition-colors placeholder-gray-600"
              placeholder="Nome do projeto..."
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2.5 mb-4">
            <button
              onClick={() => saveFlowData(id, toObject, diagramName)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors cursor-pointer"
            >
              <FloppyDisk size={16} weight="bold" />
              Salvar
            </button>
            <button
              onClick={() => copyIdToClipboard(id)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-300 bg-white/[0.06] hover:bg-white/[0.10] rounded-xl transition-colors cursor-pointer"
            >
              {textIsCopied ? (
                <><Check size={16} weight="bold" className="text-green-400" /> Copiado</>
              ) : (
                <><Copy size={16} weight="bold" /> Copiar ID</>
              )}
            </button>
          </div>

          <div className="flex gap-2.5 mb-6">
            <ShareButton />
            <TutorialButton />
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/[0.06] mb-5" />

          {/* Elements */}
          <div className="flex flex-col gap-1" id="element-list">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Elementos
            </span>
            <ElementList />
          </div>
        </div>
      )}
    </aside>
  )
}

export default ElementsSideBar
