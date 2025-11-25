import { ReactFlowProvider } from "@xyflow/react"
import DiagramContent from "../components/diagramComponents/DiagramContent"

const DiagramArea = () => {
  return (
    <ReactFlowProvider>
      <DiagramContent />
    </ReactFlowProvider>
  )
}

export default DiagramArea
