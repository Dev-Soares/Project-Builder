import DiagramFlowSection from './DiagramFlowSection'
import '@xyflow/react/dist/style.css'
import '../../assets/reactflow.css'
import ElementsSideBar from './ElementsSideBar'
import DiagramHeader from './DiagramHeader'
import { useParams } from 'react-router-dom'

const DiagramContent = () => {
  const { id } = useParams()

  return (
    <main className="w-full h-screen overflow-hidden select-none flex flex-col bg-[#0a0a1a]">
      <DiagramHeader />
      <section className="flex-1 flex overflow-hidden">
        <ElementsSideBar />
        <div className="flex-1 overflow-hidden">
          <DiagramFlowSection id={id} />
        </div>
      </section>
    </main>
  )
}

export default DiagramContent
