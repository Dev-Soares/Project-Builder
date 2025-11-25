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
    const iconColor = data?.color || '#ffffff'; // Usar a cor definida nos dados

    

  return (
    <div className='relative p-4 rounded-xl shadow-lg flex flex-col items-center gap-3 min-w-44 bg-gray-600 border-2 border-gray-600 hover:border-blue-600 transition-all duration-300 hover:shadow-xl'>
        <Handle 
          type="target" 
          position={Position.Top} 
          isConnectable={isConnectable}
          className="w-3! h-3! bg-blue-500! border-2! border-white!"
        />
        
        <button
          className='absolute -top-2 -right-2 bg-red-500 text-white flex justify-center items-center rounded-full h-8 w-8 hover:bg-white hover:text-red-600 transition-colors cursor-pointer duration-500 z-10 shadow-md'
          onClick={(e) => handleDelete(e, id)}
          title="Deletar"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
        
        <div className='h-12 w-12 flex items-center justify-center mt-2 bg-gray-600 rounded-lg'>
            {IconComponent && (
              <IconComponent 
                className="h-16 w-16"
                style={{ color: iconColor }}
              />
            )}
        </div>
        
        <Handle 
          type="source" 
          position={Position.Bottom} 
          isConnectable={isConnectable}
          className="w-3! h-3! bg-blue-500! border-2! border-white!"
        />
        
        <div className="font-semibold text-center text-sm lg:text-lg text-white px-2 leading-tight">
          {label}
        </div>
    </div>
  )
}

export default CustomNode
