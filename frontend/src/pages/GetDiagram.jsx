import { useState } from 'react'
import Navbar from '../components/smallComponents/Navbar.jsx';
import { useDiagramActions } from '../hooks/useDiagramActions.js';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../contexts/AlertContext.jsx';

const GetDiagram = () => {

    const [projectId, setProjectId] = useState('');

    const { fetchDiagram } = useDiagramActions();

    const { errorAlert, setIsLoading  } = useAlert();

    const navigate = useNavigate();

    const handleGetDiagram = async (e) => {

        e.preventDefault();
        setIsLoading(true);

        try {
            const diagram = await fetchDiagram(projectId);
            const diagramId = diagram.id;

            if (diagramId) {
                navigate(`/diagram/${diagramId}`);
            } else {
                errorAlert('Diagrama não encontrado. Verifique o ID e tente novamente.');
            }
            
        } catch (error) {
            console.error('Error fetching diagram:', error);
        } finally {
            setIsLoading(false);
        }

    };



    return (
        <>
            <main className='flex flex-col justify-center items-center min-h-screen w-full p-4 sm:p-6 md:p-8 bg-gray-900'>
                <Navbar />
                <form onSubmit={(e) => handleGetDiagram(e)} className='flex flex-col justify-center items-center max-w-full gap-8 sm:gap-12 bg-white p-8 rounded-xl shadow-lg mt-16 select-none w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] pt-15'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-700 text-center w-full mb-2 tracking-tight drop-shadow-sm border-b border-purple-300 pb-8 ">
                        Acessar Projeto
                    </h1>
                    <div className="w-full h-auto flex flex-col gap-4">
                        <label htmlFor="projectName"
                            className="text-lg text-black self-start font-semibold"
                        >ID do Projeto</label>
                        <input
                            id="projectName"
                            type="text"
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value)}
                            placeholder="Ex: abc123def456"
                            className="w-full px-4 py-3 bg-gray-300 rounded-lg focus:border-purple-500 focus:bg-gray-400 transition-colors "
                            maxLength={30}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-purple-600 to bg-purple-950 text-white font-bold p-3 px-6 rounded-xl md:text-lg lg:text-xl flex justify-center items-center gap-4 cursor-pointer hover:translate-y-[-2px] hover:scale-105 transition-transform duration-500 border-none" >
                        <span className="material-symbols-outlined"> add_circle </span> Acessar Projeto
                    </button>
                </form>
            </main>
        </>
  )
}

export default GetDiagram
