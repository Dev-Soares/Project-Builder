import { useState } from "react";
import languageIcons from "../../icons/languageIcons";

const ElementList = ({ onDragStart, selectedArchitecture }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const iconsSource = languageIcons;

  return (
    <>
      {iconsSource.map((group) => (
        <div key={group.category} className="mb-4">
          <div 
            className="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-gray-100 transition-colors duration-300"
            onClick={() => toggleCategory(group.category)}
          >
            <h3 className='text-sm lg:text-lg font-semibold'>{group.category}</h3>
            <span className={`material-symbols-outlined transition-transform duration-300 ${expandedCategories[group.category] ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </div>
          
          <div className={`overflow-y-auto transition-all duration-300 ${expandedCategories[group.category] ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <div className='flex flex-wrap gap-4'>
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
                      <IconComponent className="h-10 w-10" 
                      style={{ color: color }}/>
                    </div>
                    <span className=' text-sm lg:text-md xl:text-[11px] 2xl:text-sm'>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ElementList