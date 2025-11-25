import DiagramFlowSection from './DiagramFlowSection';
import '@xyflow/react/dist/style.css';
import '../../assets/reactflow.css';
import ElementsSideBar from './ElementsSideBar';
import DiagramHeader from './DiagramHeader';

import { useParams } from 'react-router-dom';





const DiagramContent = () => {

  const { id } = useParams(); // Pega o ID do diagrama a partir da URL

  return (

    <>

    

    <main className='w-full h-screen overflow-hidden select-none'>

      <DiagramHeader />
      <section className='h-[90%] w-full flex justify-between bg-gray-100 relative'>

        <ElementsSideBar /> {/* Sidebar que armazena elementos que podem ser arrastados para o diagrama */}

        <div className='flex flex-row w-full h-screen overflow-hidden'>
          <DiagramFlowSection id={id} /> {/* Seção principal do diagrama onde o React Flow é renderizado */}

          

        </div>


      </section>
    </main>
    </>
    
  )
}

export default DiagramContent
