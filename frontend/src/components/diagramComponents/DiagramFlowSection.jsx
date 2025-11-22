import { useEffect, useCallback, useRef } from 'react';
import { ReactFlow, Background, Controls, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '../../assets/reactflow.css';
import idGenerator from '../../utils/idGenerator.js';
import { useDiagram } from '../../contexts/DiagramContext.jsx';
import { useDiagramActions } from '../../hooks/useDiagramActions.js';
import awsIcons from '../../icons/awsIcons.js';
import azureIcons from '../../icons/azureIcons.js';


const DiagramFlowSection = ({ id }) => {

    const {
        nodes,
        edges,
        setNodes,
        setEdges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        setIsEditingNode,
        setIsOpen,
        setSelectedNode,
        nodeTypes,
        setDiagramName
    } = useDiagram(); //ACESSING CONTEXT VALUES

    const { postFlowData, fetchDiagram } = useDiagramActions()

    const userId = id;

    const findIconComponent = (label) => { 

        for (const group of awsIcons) {
            const found = group.icons.find(i => i.label === label);
            if (found) return found.component || null;
        }
        for (const group of azureIcons) {
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

    const reactFlowWrapper = useRef(null);

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

    const onNodeClick = useCallback((e, node) => {

        setIsOpen(true);
        setIsEditingNode(true);
        setSelectedNode(node);

    }, [setIsEditingNode, setSelectedNode]);

    

    

    return (
        <section className='h-[90vh] w-screen relative flex-1' ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                onConnect={onConnect}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onNodeClick={onNodeClick}
                defaultViewport={{x:0, y:0, zoom:0.5}}

            >

                <Background />
                <Controls />

            </ReactFlow>
            <div className="flex justify-center items-center ">
                <button onClick={postFlowData} className='absolute bottom-6 right-6 z-50 bg-linear-to-br from-blue-600 to-blue-950 text-white  p-3 rounded-4xl flex justify-center items-center gap-2 px-4 cursor-pointer text-xl font-bold'>
                    <span className="material-symbols-outlined"> code </span>Exportar Diagrama</button>
            </div>
        </section>
    )
}

export default DiagramFlowSection
