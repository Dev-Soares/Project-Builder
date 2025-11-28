import { useNavigate } from "react-router-dom"
import { useAlert } from "../contexts/AlertContext.jsx"
import { useDiagramActions } from "../hooks/useDiagramActions.js"
import Navbar from "../components/smallComponents/Navbar.jsx"
import Footer from "../components/smallComponents/Footer.jsx"
import { useState } from "react"

const CreateDiagram = () => {

    
    const navigate = useNavigate()
    const { createNewDiagram } = useDiagramActions()
    const {setIsLoading } = useAlert()

    const [diagramName, setDiagramName] = useState('')

    const handleCreateDiagram = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        

        try {
            const diagram = await createNewDiagram(diagramName);
            if (diagram?.data?.id) {
                navigate(`/diagram/${diagram.data.id}`);
            } else {
                throw new Error('diagram generation failed');
            }
        } catch (error) {
            console.error('Error creating diagram:', error);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <>
            <main className='flex flex-col justify-center items-center min-h-screen w-full p-4 sm:p-6 md:p-8 bg-gray-900'>
                <Navbar />
                <form onSubmit={handleCreateDiagram} className='flex flex-col justify-center items-center max-w-full gap-8 sm:gap-12 bg-white p-8 rounded-xl shadow-lg mt-16 select-none w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] pt-15'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-700 text-center w-full mb-2 tracking-tight drop-shadow-sm border-b border-purple-300 pb-8 ">
                        Criar Projeto
                    </h1>
                    <div className="w-full h-auto flex flex-col gap-4">
                        <label htmlFor="diagramName"
                            className="text-lg text-black self-start font-semibold"
                        >Nome do Diagrama</label>
                        <input
                            id="diagramName"
                            type="text"
                            value={diagramName}
                            onChange={(e) => setDiagramName(e.target.value)}
                            placeholder="Ex: Arquitetura do Sistema, Fluxo de Login..."
                            className="w-full px-4 py-3 bg-gray-300 rounded-lg focus:border-purple-500 focus:bg-gray-400 transition-colors "
                            maxLength={30}
                            required
                        />
                        <p className=" text-yellow-600 text-sm lg:text-lg flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-yellow-500 lg:text-4xl!">info</span>
                            Ele será salvo no ID de Sessão
                        </p>
                    </div>
                    <div className="w-auto justify-center items-center flex flex-col gap-4">
                        <button type="submit" className="bg-gradient-to-br from-purple-600 to bg-purple-950 text-white font-bold p-3 px-6 rounded-xl md:text-lg lg:text-xl flex justify-center items-center gap-4 cursor-pointer hover:translate-y-[-2px] hover:scale-105 transition-transform duration-500 border-none" >
                        <span className="material-symbols-outlined"> add_circle </span> Criar Projeto
                    </button>
                        <button>
                        Já possui um projeto? <span onClick={() => navigate('/get-diagram')} className="text-purple-600 font-bold cursor-pointer hover:underline">Acesse aqui</span>
                    </button>
                    </div>
                    
                    
                </form>
            </main>
            <Footer />
        </>
    )
}

export default CreateDiagram
