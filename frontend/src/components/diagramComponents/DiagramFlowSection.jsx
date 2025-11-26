import { useEffect, useCallback } from 'react';
import { ReactFlow, Background, Controls, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '../../assets/reactflow.css';
import idGenerator from '../../utils/idGenerator.js';
import { useDiagram } from '../../contexts/DiagramContext.jsx';
import { useDiagramActions } from '../../hooks/useDiagramActions.js';
import languageIcons from '../../icons/languageIcons.js';




const DiagramFlowSection = ({ id }) => {

    const {
        nodes,
        edges,
        setNodes,
        setEdges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        nodeTypes,
        setDiagramName,
        reactFlowRef
    } = useDiagram(); //ACESSING CONTEXT VALUES

    const { fetchDiagram } = useDiagramActions();

    const userId = id;

    const findIconComponent = (label) => {
        // Buscar nos ícones de linguagens
        for (const group of languageIcons) {
            const found = group.icons.find(i => i.label === label);
            if (found) return found.component || null;
        }

        return null;
    };


    const loadInitialDiagram = async (id) => {

        try {

            const { flowData } = await fetchDiagram(id);

            if (flowData && (flowData.nodes?.length > 0 || flowData.edges?.length > 0 || flowData.diagramName !== 'Untitled-Diagram')) {
                const nodesWithIcons = (flowData.nodes || []).map(node => ({
                    ...node,
                    data: {
                        ...node.data,
                        iconComponent: findIconComponent(node.data.label),
                    }
                }));

                setNodes(nodesWithIcons);
                setEdges(flowData.edges || []);
                setDiagramName(flowData.diagramName || 'Untitled-Diagram');
            }

        } catch (error) {
            console.error('Error loading diagram:', error);
        }
    };

    useEffect(() => {
        loadInitialDiagram(userId);
    }, []);

    // tipos de nodes customizados, podem ser adcionados mais outros

    const { screenToFlowPosition } = useReactFlow();

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []); // Evento de arrastar o node sobre o canvas do React Flow



    const onDrop = useCallback((event) => { // Evento de arrastar e dropar o node no canvas do React Flow

        event.preventDefault();


        const elementData = event.dataTransfer.getData('application/reactflow'); // pega dados dos elementos alvos do evento

        if (!elementData) return;

        const el = JSON.parse(elementData); // converte os dados do elemento de volta para objeto JS




        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });

        const iconComponent = findIconComponent(el.label);


        const newNode = {
            id: idGenerator(),
            type: el.type,
            position,
            data: {
                label: `${el.label}`,
                iconComponent: iconComponent,
                iconId: el.id,
                color: el.color
            },
        };


        setNodes((nds) => nds.concat(newNode));
    },
        [screenToFlowPosition, setNodes],
    );

    return (
        <section className='h-[90vh] w-screen relative flex-1 bg-gray-200 select-none' ref={reactFlowRef}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                onConnect={onConnect}
                onDragOver={onDragOver}
                onDrop={onDrop}
                defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}

            >
                <Background
                    
                    variant="dots"
                    gap={20}
                    size={1}
                />
                <Controls />

            </ReactFlow>
        </section>
    )
}

export default DiagramFlowSection
