import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ElementList from '../../components/itemsList/ElementList.jsx';   
import { useAlert } from '../../contexts/AlertContext.jsx';
import { useDiagram } from '../../contexts/DiagramContext.jsx';
import { useDiagramActions } from '../../hooks/useDiagramActions.js';
import { useReactFlow } from '@xyflow/react';

const ElementsSideBar = () => {

    const { isOpen, diagramName, setDiagramName } = useDiagram();

    const { successAlert } = useAlert();

    const { id } = useParams();

    const { toObject, addNodes, screenToFlowPosition } = useReactFlow();

    const { saveFlowData } = useDiagramActions();

    const [textIsCopied, setTextIsCopied] = useState(false);
    // Estado para drag touch
    const [touchDragElement, setTouchDragElement] = useState(null);
    // Ref para evitar múltiplos listeners
    const touchDragElementRef = useRef(null);
    

    const onDragStart = (event, el) => {
        event.dataTransfer.setData('application/reactflow', JSON.stringify(el));
        event.dataTransfer.effectAllowed = 'move';
    };

    const copyIdToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            successAlert('ID do diagrama copiado para a área de transferência!');
            setTextIsCopied(true);
            setTimeout(() => setTextIsCopied(false), 8000);
        });
    };

    const onTouchStartElement = (event, el) => {
        setTouchDragElement(el);
        touchDragElementRef.current = el;
    };

    const clearTouchDrag = () => {
        setTouchDragElement(null);
        touchDragElementRef.current = null;
    };

    useEffect(() => {
        const handleTouchEnd = (event) => {
            const el = touchDragElementRef.current;
            if (!el) return;
            const touch = event.changedTouches?.[0];
            if (!touch) return;
            
            const position = screenToFlowPosition({
                x: touch.clientX,
                y: touch.clientY,
            });
            addNodes({
                id: `${el.id}-${Date.now()}`,
                type: el.type,
                position,
                data: { label: el.label, color: el.color },
            });
            clearTouchDrag();
        };
        if (touchDragElement) {
            window.addEventListener('touchend', handleTouchEnd, { passive: false });
        }
        return () => {
            window.removeEventListener('touchend', handleTouchEnd, { passive: false });
        };
    }, [touchDragElement, screenToFlowPosition, addNodes]);

    return (
        <aside className={`font-bold text-lg bg-gray-900 sidebar-scroll h-full shrink-0 flex flex-col items-center overflow-x-hidden overflow-y-visible transition-all duration-500 select-none ease-out ${isOpen ? "w-[50%] md:w-[35%] lg:w-[30%] xl:w-[20%] p-4" : "w-0"} pt-12`}>
            {isOpen && (
                <>
                    <div className="flex flex-col justify-start items-start mb-6 ml-5 gap-2 opacity-0 animate-fadeIn w-full relative">
                        <h2 className='text-lg xl:text-xl ml-9 md:ml-3 text-white mb-4 self-start'>Projeto</h2>
                        <input 
                            type="text"
                            value={diagramName}
                            onChange={(e) => setDiagramName(e.target.value)}
                            className="w-[85%] px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:bg-gray-600 transition-colors text-md lg:text-lg font-normal placeholder-gray-400"
                            placeholder="Digite o nome do diagrama..."
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start mb-8 ml-5 gap-2 opacity-0 animate-fadeIn w-full relative z-40">
                            <button onClick={() => saveFlowData(id, toObject, diagramName)} className='flex justify-center items-center w-[90%] md:w-[70%] h-auto rounded-xl bg-green-600
                            border-2 border-green-600 text-white font-bold py-2 px-3 cursor-pointer text-sm xl:text-lg gap-2
                            hover:text-green-600 hover:bg-gray-800 hover:border-green-500 transition-all hover:translate-y-[-3px] duration-600 whitespace-nowrap'>
                            <span className="material-symbols-outlined"> upload </span>Salvar</button>
                            <button onClick={() => copyIdToClipboard(id)} className={`flex justify-center items-center w-[90%] md:w-[70%] h-auto rounded-xl bg-blue-600
                            border-2 border-blue-600 text-white font-bold py-2 px-3 cursor-pointer text-sm xl:text-lg gap-2
                            hover:text-blue-600 hover:bg-gray-800 hover:border-blue-500 transition-all hover:translate-y-[-3px] duration-600 whitespace-nowrap
                            ${textIsCopied ? 'text-white!' : ''}
                            `}>
                            {textIsCopied ? (<>
                                    <span className="material-symbols-outlined"> check_circle </span> 
                                    <span>ID copiado!</span>
                                    </>) : (
                                    <>
                                    <span className="material-symbols-outlined"> content_copy </span> 
                                    <span>Copiar ID</span>
                                    </>)}</button>
                            
                    </div>
                    
                    <div className='opacity-0 animate-fadeIn relative z-30'>
                        <h2 className='lg:text-lg xl:text-xl ml-9 md:ml-3 text-white self-start'>Elementos</h2>
                        <div className='flex flex-col flex-wrap gap-4 my-12 m-3 ml-2'>
                            <ElementList 
                                onDragStart={onDragStart} 
                                onTouchElement={undefined} // não usa mais
                                onTouchStartElement={onTouchStartElement}
                            />
                        </div>
                    </div>
                </>
            )}
        </aside>
    );
}

export default ElementsSideBar
