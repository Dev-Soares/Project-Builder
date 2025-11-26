import { useDiagram } from "../../contexts/DiagramContext.jsx";
import { useNavigate } from "react-router-dom";

const DiagramHeader = () => {

    const { diagramName, setIsOpen, isOpen } = useDiagram();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <header className='h-[10%] w-full bg-gray-900 flex items-center justify-between p-6 px-12 nav-diagram-border select-none'>
            <button onClick={ () => setIsOpen(!isOpen)} >
                <span className='material-symbols-outlined cursor-pointer text-4xl! text-white hover:text-gray-300 transition-colors'>{isOpen ? 'close' : 'menu'}</span>
            </button>
            <div className="flex flex-row gap-2 items-center">
                <h2 className='text-lg xl:text-2xl font-bold p-2 focus:outline-none text-white transition-colors' 
                >{diagramName}</h2>
            </div>
            <div className="block md:hidden">
                {/* div placeholder to keep the space between the left and right buttons */}
            </div>
            <button className="hidden md:flex flex-row items-center text-red-400 cursor-pointer font-bold text-sm xl:text-lg hover:text-red-300 transition-colors" onClick={handleGoBack}>
                <span className='material-symbols-outlined'>arrow_back_ios</span> <p>Voltar</p>
            </button>
        </header>
    )
}

export default DiagramHeader
