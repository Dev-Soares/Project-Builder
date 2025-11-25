import React, { useState } from 'react'

const CategoryDrop = ({ group, onDragStart }) => {

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div key={group.category} className="mb-4">
          <button onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            <h3 className='text-md font-semibold mb-6 flex justify-center items-center gap-1 select-none'>{group.category} <span className="material-symbols-outlined">arrow_drop_down</span></h3>
          </button>
          
          <div className='grid grid-cols-2 gap-4'>
            {group.icons.map(({ component: IconComponent, id, label, color }, idx) => {

              const data = {
                id,
                label,
                type: "CustomNode",
                color: color,
              }

             

              if (!IconComponent) {
                console.warn(`Missing icon component for id=${id} label=${label} category=${group.category}`);
                return (
                  <div key={id ?? idx} className='flex items-center p-2 rounded bg-red-50 text-sm'>
                    <div className='h-6 w-6 bg-gray-200 mr-2' />
                    <span>{label}</span>
                  </div>
                );
              }

              return (
                <div
                  key={id}
                  className='flex items-center cursor-grab select-none p-2 rounded transition-all duration-800 hover:translate-y-[-1px] w-fit hover:bg-gray-100'
                  draggable
                  onDragStart={(e) => onDragStart(e, data)}
                  title={label}
                >
                  <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 mr-2">
                    <IconComponent className="h-8 w-8 text-gray-500" />
                  </div>

                  <span className=' lg:text-[10px] xl:text-[11px] 2xl:text-sm'>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default CategoryDrop
