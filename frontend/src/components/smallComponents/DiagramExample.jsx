import { useCallback, useEffect } from 'react';
import { ReactFlow, Background, useNodesState, useEdgesState, addEdge, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '../../assets/reactflow.css';
import ExampleNode from './ExampleNode';
import { useTheme } from '../../hooks/useTheme';

const nodeTypes = {
  customNode: ExampleNode,
};

const initialNodes = [
  {
    id: 'cloud-1',
    type: 'customNode',
    position: { x: 350, y: 100 },
    data: { label: 'Cloud', icon: 'cloud', color: '#7c3aed' },
  },
  {
    id: 'database-1',
    type: 'customNode',
    position: { x: 180, y: 300 },
    data: { label: 'Database', icon: 'database', color: '#059669' },
  },
  {
    id: 'api-1',
    type: 'customNode',
    position: { x: 520, y: 460 },
    data: { label: 'API', icon: 'api', color: '#d97706' },
  },
  {
    id: 'web-1',
    type: 'customNode',
    position: { x: 180, y: 620 },
    data: { label: 'Web', icon: 'monitor', color: '#2563eb' },
  },
  {
    id: 'users-1',
    type: 'customNode',
    position: { x: 520, y: 780 },
    data: { label: 'Users', icon: 'group', color: '#c026d3' },
  },
];

const initialEdges = [
  { id: 'e1', source: 'cloud-1', target: 'database-1', animated: true },
  { id: 'e2', source: 'database-1', target: 'api-1', animated: true },
  { id: 'e3', source: 'api-1', target: 'web-1', animated: true },
  { id: 'e4', source: 'web-1', target: 'users-1', animated: true },
  { id: 'e5', source: 'cloud-1', target: 'api-1', animated: true },
];

const FitOnResize = () => {
  const { fitView } = useReactFlow();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      fitView({ padding: 0.2, duration: 200 });
    });

    const el = document.querySelector('.react-flow');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [fitView]);

  return null;
};

const DiagramExample = () => {
  const { dark } = useTheme();
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div
      className={`w-full h-80 md:h-88 lg:h-96 overflow-hidden transition-colors duration-300 ${
        dark ? 'bg-[#0a0a1a]' : 'bg-gray-50'
      }`}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0.2, minZoom: 0.4, maxZoom: 1.5 }}
        minZoom={0.3}
        maxZoom={2}
        defaultEdgeOptions={{ animated: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        nodeOrigin={[0.5, 0.5]}
      >
        <FitOnResize />
        <Background
          variant="dots"
          gap={16}
          size={1}
          color={dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'}
        />
      </ReactFlow>
    </div>
  );
};

export default DiagramExample;
