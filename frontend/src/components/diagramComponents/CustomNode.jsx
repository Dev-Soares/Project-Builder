import { Handle, Position, useReactFlow } from '@xyflow/react'
import { X } from '@phosphor-icons/react'

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
    const iconColor = data?.color || '#ffffff';



  return (
    <div className='relative p-3 rounded-xl shadow flex flex-col items-center gap-4 min-w-40 bg-gray-200 border border-gray-300 hover:border-purple-600 transition-colors duration-150 hover:shadow-lg py-5'>
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          className="w-4 h-4 border-none bg-purple-700"
        />

        <button
          className='absolute -top-2 -right-2 bg-red-500 text-white flex justify-center items-center rounded-full h-7 w-7 hover:bg-white hover:text-red-600 transition-colors cursor-pointer duration-150 z-10 shadow'
          onClick={(e) => handleDelete(e, id)}
          title="Deletar"
        >
          <X size={14} weight="bold" />
        </button>

        <div className='h-16 w-16 flex items-center justify-center mt-2 rounded-lg'>
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
          className="w-4 h-4 border-none bg-purple-700"
        />

        <div className="font-semibold text-center text-md lg:text-lg px-2 leading-tight">
          {label}
        </div>
    </div>
  )
}

export default CustomNode
