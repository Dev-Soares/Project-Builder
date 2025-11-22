import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useAlert } from "../contexts/AlertContext"
import { useDiagramActions } from "../hooks/useDiagramActions.js"
import NotAvailablePage from "./NotAvailablePage.jsx"


const ArchitecturePage = () => {

    const navigate = useNavigate()

    const { createToken } = useAuth()

    const { createNewDiagram } = useDiagramActions()

    const { errorAlert } = useAlert()

    

    const handleSelectArchitecture = async (architecture) => {

        try {
            const diagram = await createNewDiagram();
            const newToken = await createToken(diagram.data.id);

            if (newToken) {
                navigate(`/diagram/${diagram.data.id}`, {
                    state: { initialArchitecture: architecture }
                });
            } else {
                throw new Error('Token generation failed');
            }
        } catch (error) {
            console.error('Error generating access link:', error);
            errorAlert('Erro ao gerar o link de acesso. Tente novamente.');
        }   
    }



    return (
        <>

        <main className='lg:flex justify-center items-center min-h-screen w-full p-8 hidden '>
            <div className='flex flex-col justify-center items-center lg:max-w-[70%] gap-16'>
                <h1 className="lg:text-4xl font-bold text-center">Passo 1: Escolha a arquitetura para seu MVP</h1>
                <div className="flex flex-row justify-between items-center gap-8">
                    <button onClick={() => handleSelectArchitecture('aws')}
                        className={`  w-80 h-90 border-gray-300 border-3 hover:border-orange-600 hover:bg-orange-100 hover:scale-105 transition-all duration-1300 ease-out p-16 flex justify-center items-center flex-col gap-4 xl:gap-10 rounded-xl cursor-pointer `}>
                        <img src="aws-icon.webp" alt="" />
                        <h2 className={`font-bold text-3xl text-center`}>AWS </h2>
                    </button>
                    <button onClick={() => handleSelectArchitecture('azure')}
                        className={`  w-80 h-90 border-gray-300 border-3 hover:border-blue-600 hover:bg-blue-100 hover:scale-105 transition-all duration-1300 ease-out p-16 flex justify-center items-center flex-col gap-4 xl:gap-10 rounded-xl cursor-pointer`}>
                        <img src="azure-icon.png" alt="" />
                        <h2 className={`font-bold text-3xl text-center`}>Azure </h2>
                    </button>
                </div>

            </div>
        </main>
        </>

        
    )
}

export default ArchitecturePage
