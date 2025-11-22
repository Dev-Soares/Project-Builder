import { useDiagram } from "../../contexts/DiagramContext.jsx";
import { useNavigate } from "react-router-dom";

const DiagramHeader = () => {

    const { diagramName, setIsOpen, isOpen } = useDiagram();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }


    return (
        <header className='h-[10%] w-full bg-gray-300 flex items-center justify-between p-6 px-12 nav-diagram-border'>
            <button onClick={ () => setIsOpen(!isOpen)} >
                <span className='material-symbols-outlined cursor-pointer text-4xl!'>{isOpen ? 'close' : 'menu'}</span>
            </button>
            <div className="flex flex-row gap-4 items-center">
                <h1 className='text-lg xl:text-2xl font-bold'>{diagramName}</h1>
               <button onClick={ () => setIsOpen(true)}
               className='material-symbols-outlined cursor-pointer'>edit</button>
            </div>
            <button className="flex flex-row items-center text-red-700 cursor-pointer font-bold text-sm xl:text-lg" onClick={handleGoBack}>
                <span className='material-symbols-outlined '>arrow_back_ios</span> <p>Voltar</p>
            </button>
            
        </header>
    )
}

export default DiagramHeader
