import { useEffect, useCallback } from 'react'
import { ReactFlow, Background, useReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import '../../assets/reactflow.css'
import idGenerator from '../../utils/idGenerator.js'
import { useDiagram } from '../../contexts/DiagramContext.jsx'
import { useDiagramActions } from '../../hooks/useDiagramActions.js'
import languageIcons from '../../icons/languageIcons.js'

const DiagramFlowSection = ({ id }) => {
  const {
    nodes, edges, setNodes, setEdges,
    onNodesChange, onEdgesChange, onConnect,
    nodeTypes, setDiagramName, reactFlowRef
  } = useDiagram()

  const { fetchDiagram } = useDiagramActions()
  const userId = id

  const findIconComponent = (label) => {
    for (const group of languageIcons) {
      const found = group.icons.find(i => i.label === label)
      if (found) return found.component || null
    }
    return null
  }

  const loadInitialDiagram = async (id) => {
    try {
      const { flowData } = await fetchDiagram(id)
      if (flowData && (flowData.nodes?.length > 0 || flowData.edges?.length > 0 || flowData.diagramName !== 'Untitled-Diagram')) {
        const nodesWithIcons = (flowData.nodes || []).map(node => ({
          ...node,
          data: {
            ...node.data,
            iconComponent: findIconComponent(node.data.label),
          }
        }))
        setNodes(nodesWithIcons)
        setEdges(flowData.edges || [])
        setDiagramName(flowData.diagramName || 'Untitled-Diagram')
      }
    } catch (error) {
      console.error('Error loading diagram:', error)
    }
  }

  useEffect(() => {
    loadInitialDiagram(userId)
  }, [])

  const { screenToFlowPosition } = useReactFlow()
  const { selectedElement, setSelectedElement } = useDiagram()
  const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  const onDragOver = useCallback((event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback((event) => {
    event.preventDefault()
    const elementData = event.dataTransfer.getData('application/reactflow')
    if (!elementData) return
    const el = JSON.parse(elementData)
    const position = screenToFlowPosition({ x: event.clientX, y: event.clientY })
    const iconComponent = findIconComponent(el.label)
    const newNode = {
      id: idGenerator(),
      type: el.type,
      position,
      data: { label: `${el.label}`, iconComponent, iconId: el.id, color: el.color },
    }
    setNodes((nds) => nds.concat(newNode))
  }, [screenToFlowPosition, setNodes])

  const handleCanvasClick = useCallback((event) => {
    if (!isMobile || !selectedElement) return
    if (event.target.closest('.react-flow__node')) return
    const position = { x: event.clientX, y: event.clientY }
    const flowPosition = screenToFlowPosition(position)
    const iconComponent = findIconComponent(selectedElement.label)
    const newNode = {
      id: idGenerator(),
      type: selectedElement.type,
      position: flowPosition,
      data: { label: `${selectedElement.label}`, iconComponent, iconId: selectedElement.id, color: selectedElement.color },
    }
    setNodes((nds) => nds.concat(newNode))
    setSelectedElement(null)
  }, [isMobile, selectedElement, setNodes, setSelectedElement, screenToFlowPosition])

  return (
    <section
      className="h-full w-full relative select-none"
      style={{ background: '#f8f8fa' }}
      ref={reactFlowRef}
      onClick={isMobile ? handleCanvasClick : undefined}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onDrop={onDrop}
        defaultViewport={{ x: 0, y: 0, zoom: 0.75 }}
        translateExtent={[[-500, -500], [1500, 1300]]}
        extent={[[-500, -500], [1500, 1300]]}
      >
        <Background
          variant="dots"
          gap={20}
          size={1}
          color="#9ca3af"
        />
      </ReactFlow>
    </section>
  )
}

export default DiagramFlowSection
