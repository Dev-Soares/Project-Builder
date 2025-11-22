import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ElementList from '../../components/itemsList/ElementList.jsx';   
import SelectArchitecture from '../smallComponents/SelectArchitecture.jsx';
import { useDiagram } from '../../contexts/DiagramContext.jsx';

const ElementsSideBar = () => {

    const location = useLocation();

    const { isOpen } = useDiagram();

    const [selectedArchitecture, setSelectedArchitecture] = useState(location.state?.initialArchitecture);
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setShowContent(true), 300);
            return () => clearTimeout(timer);
        } else {
            setShowContent(false);
        }
    }, [isOpen]);

    const onDragStart = (event, el) => {
        event.dataTransfer.setData('application/reactflow', JSON.stringify(el));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className={`font-bold text-lg bg-gray-300 h-full shrink-0 flex flex-col items-center overflow-x-hidden transition-all duration-500 ease-out ${isOpen ? "w-[25%] xl:w-[20%] p-4" : "w-0"}`}>
            {showContent && isOpen && (
                <>
                    <div className='flex flex-col gap-6 mb-6 m-3 opacity-0 animate-fadeIn'>
                        <h3>Arquitetura</h3>
                        <SelectArchitecture selectedArchitecture={selectedArchitecture} setSelectedArchitecture={setSelectedArchitecture} />
                    </div>
                    <div className="flex flex-col justify-start items-start mb-8 ml-5 gap-2 opacity-0 animate-fadeIn w-full">
                        <button className=' flex justify-center items-center w-[50%] h-auto rounded-xl bg-blue-700
                            border-2 border-blue-700 text-white font-bold py-2 px-3 cursor-pointer lg:text-sm xl:text-lg gap-2
                            hover:text-blue-700 hover:bg-white transition-all hover:translate-y-[-3px] duration-600 whitespace-nowrap'>
                            <span className="material-symbols-outlined">file_export</span>Exportar</button>
                            <button className='flex justify-center items-center w-[50%] h-auto rounded-xl bg-green-700
                            border-2 border-green-700 text-white font-bold py-2 px-3 cursor-pointer lg:text-sm xl:text-lg gap-2
                            hover:text-green-700 hover:bg-white transition-all hover:translate-y-[-3px] duration-600 whitespace-nowrap'>
                            <span className="material-symbols-outlined"> upload </span>Salvar</button>
                    </div>
                    <div className='opacity-0 animate-fadeIn'>
                        <h2 className='lg:text-lg xl:text-xl m-3'>Elementos</h2>
                        <div className='flex flex-col flex-wrap gap-4 my-12 m-3'>
                            <ElementList onDragStart={onDragStart} selectedArchitecture={selectedArchitecture} />
                        </div>
                    </div>
                </>
            )}
        </aside>
    );
}

export default ElementsSideBar
