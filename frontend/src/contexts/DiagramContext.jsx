import { createContext, useContext } from "react";
import { useState, useMemo, useCallback, useRef } from 'react';
import { addEdge } from '@xyflow/react';
import { useNodesState, useEdgesState } from '@xyflow/react';
import CustomNode from '../components/diagramComponents/CustomNode';
import languageIcons from '../icons/languageIcons.js';

const DiagramContext = createContext();

export const DiagramProvider = ({ children }) => {

    const [diagramName, setDiagramName] = useState('Untitled-Diagram'); // Estado que armazena o nome do diagrama

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const getInitialIsOpen = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 768; // true para desktop, false para mobile
        }
        return true; // fallback
    };
    
    const [isOpen, setIsOpen] = useState(getInitialIsOpen());

    const reactFlowRef = useRef(null);

    const nodeTypes = {
        CustomNode: CustomNode
    }; // tipos de nodes customizados, podem ser adcionados mais outros

    const fetchIconComponent = (label) => { //Funcão para encontrar o componente do ícone com base no id

        for (const group of languageIcons) {
            const found = group.icons.find(i => i.label === label);
            if (found) return found.component || null;
        }
        return null;
    };

    const updateNodeData = useCallback((nodeId, newData) => {
        if (!nodeId || !newData) return;

        setNodes((nds) =>
             
            nds.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            ...newData,
                            iconComponent: fetchIconComponent(newData.label)
                        },
                    };
                }
                return node;
            })
        );
    }, [setNodes])  // Função para atualizar os dados de um node específico

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]); 

    const updateDiagramName = useCallback((newName) => {
        setDiagramName(newName);
    }, []);

    // Estado para fallback mobile: elemento selecionado
    const [selectedElement, setSelectedElement] = useState(null);

    const contextValue = useMemo(() => ({
        // ESTADOS (Valores que mudam a UI)
        nodes,
        edges,
        isOpen,
        diagramName,
        reactFlowRef,

        // SETTERS (Funções para modificar o estado)
        setNodes,
        setEdges,
        setIsOpen,
        setDiagramName,
        selectedElement,
        setSelectedElement,
        updateDiagramName,
        updateNodeData,

        // HANDLERS/LÓGICA (Funções de domínio que dependem do estado)
        onNodesChange,
        onEdgesChange,
        onConnect,
        nodeTypes,

    }), [
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        nodeTypes,
        setNodes,
        setEdges,
        onConnect,
        updateNodeData,
        updateDiagramName,
        isOpen,
        diagramName,
        setIsOpen,
        setDiagramName
    ]);


    return (
        <DiagramContext.Provider value={contextValue}>
            {children}
        </DiagramContext.Provider>
    );
};

 export const useDiagram = () => {
    const context = useContext(DiagramContext);

    if (!context) {
        throw new Error("useDiagram must be used within a DiagramProvider");
    }

    return context;
}

