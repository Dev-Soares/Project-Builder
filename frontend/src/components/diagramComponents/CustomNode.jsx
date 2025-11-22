import { Handle, Position, useReactFlow } from '@xyflow/react';

const CustomNode = ({id, data, isConnectable}) => {

    const { deleteElements } = useReactFlow();

    const handleDelete = (e, id) => {
      e.preventDefault()
      e.stopPropagation()
        deleteElements({
            nodes: [{ id: id }]
        });
        
    }
    const IconComponent = data?.iconComponent;
    const label = data?.label ?? 'Unnamed';
    const color = data?.color ?? '#FFFFFF';

    

  return (
    <div className='p-4  rounded-xl shadow-md flex flex-col items-center gap-2 min-w-40 border-2 border-gray-200'
        style={{ backgroundColor: color  }}>
        <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
        <button
        className='absolute top-0 right-0 self-end bg-red-600 text-white flex justify-center items-center rounded-full h-6 w-6 hover:text-red-600 border-2 border-red-600 hover:bg-white transition-colors duration-800 p-3 cursor-pointer'
        onClick={(e) => handleDelete(e, id)}
        title="Deletar"
        style={{ zIndex: 10 }}
      ><span className="material-symbols-outlined">close</span></button>
        <div className='h-18 w-18 flex items-center justify-center'>
            {IconComponent && <IconComponent className="h-18 w-18 text-gray-500" />}
        </div>
        
        <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
        <div className={`font-semibold text-center text-md ${color !== '#FFFFFF' ? 'text-white' : 'text-black'}`}>{label}</div>
    </div>
  )
}

export default CustomNode
