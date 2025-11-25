import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ElementList from '../../components/itemsList/ElementList.jsx';   
import SelectArchitecture from '../smallComponents/SelectArchitecture.jsx';
import { useDiagram } from '../../contexts/DiagramContext.jsx';
import { useDiagramActions } from '../../hooks/useDiagramActions.js';
import { useReactFlow } from '@xyflow/react';

const ElementsSideBar = () => {
    const location = useLocation();

    const { isOpen, diagramName } = useDiagram();

    const { id } = useParams();

    const { toObject } = useReactFlow();

    const { saveFlowData } = useDiagramActions();

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
        <aside className={`font-bold text-lg bg-gray-300 h-full shrink-0 flex flex-col items-center overflow-x-hidden overflow-y-visible transition-all duration-500 select-none ease-out ${isOpen ? "w-[50%] md:w-[35%] lg:w-[30%] xl:w-[20%] p-4" : "w-0"} pt-12`}>
            {showContent && isOpen && (
                <>
                    <div className="flex flex-col justify-start items-start mb-8 ml-5 gap-2 opacity-0 animate-fadeIn w-full relative z-40">
                            <button onClick={() => saveFlowData(id, toObject, diagramName)} className='flex justify-center items-center w-[70%] h-auto rounded-xl bg-green-700
                            border-2 border-green-700 text-white font-bold py-2 px-3 cursor-pointer text-sm xl:text-lg gap-2
                            hover:text-green-700 hover:bg-white transition-all hover:translate-y-[-3px] duration-600 whitespace-nowrap'>
                            <span className="material-symbols-outlined"> upload </span>Salvar</button>
                    </div>
                    <div className='opacity-0 animate-fadeIn relative z-30'>
                        <h2 className='lg:text-lg xl:text-xl ml-9 md:ml-3 '>Elementos</h2>
                        <div className='flex flex-col flex-wrap gap-4 my-12 m-3 ml-2'>
                            <ElementList onDragStart={onDragStart} selectedArchitecture={selectedArchitecture} />
                        </div>
                    </div>
                </>
            )}
        </aside>
    );
}

export default ElementsSideBar
