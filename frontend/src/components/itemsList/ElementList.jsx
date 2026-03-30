import { useState } from "react"
import languageIcons from "../../icons/languageIcons"
import { useDiagram } from '../../contexts/DiagramContext.jsx'
import { CaretDown } from '@phosphor-icons/react'

const ElementList = () => {
  const onDragStart = (event, el) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(el))
    event.dataTransfer.effectAllowed = 'move'
  }

  const [expandedCategories, setExpandedCategories] = useState(() =>
    Object.fromEntries(languageIcons.map(group => [group.category, true]))
  )

  const { setSelectedElement, selectedElement } = useDiagram()
  const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }))
  }

  const handleElementClick = (data) => {
    if (isMobile) setSelectedElement(data)
  }

  return (
    <>
      {languageIcons.map((group) => (
        <div key={group.category} id={group.category} className="mb-3">
          <button
            className="flex items-center justify-between w-full cursor-pointer py-2.5 px-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            onClick={() => toggleCategory(group.category)}
          >
            <span className="text-sm font-semibold text-white">{group.category}</span>
            <CaretDown
              size={16}
              weight="bold"
              className={`text-gray-500 transition-transform duration-200 ${expandedCategories[group.category] ? 'rotate-180' : ''}`}
            />
          </button>
          <div className={`overflow-hidden transition-all duration-200 ${expandedCategories[group.category] ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
            <div className="flex flex-wrap gap-2">
              {group.icons.map(({ component: IconComponent, id, label, color }, idx) => {
                const data = { id, label, type: "CustomNode", color }
                if (!IconComponent) return null

                return (
                  <div
                    key={id}
                    className={`flex items-center gap-2.5 cursor-grab select-none px-3 py-2 rounded-lg transition-all duration-150 hover:bg-white/[0.06] ${
                      isMobile && selectedElement?.id === id ? 'ring-1 ring-violet-500/50 bg-white/[0.06]' : ''
                    }`}
                    draggable={!isMobile}
                    onDragStart={(e) => !isMobile && onDragStart(e, data)}
                    onClick={() => handleElementClick(data)}
                    title={label}
                  >
                    <div className="h-9 w-9 flex items-center justify-center shrink-0">
                      <IconComponent className="h-9 w-9" style={{ color }} />
                    </div>
                    <span className="text-sm text-gray-300 select-none">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ElementList
