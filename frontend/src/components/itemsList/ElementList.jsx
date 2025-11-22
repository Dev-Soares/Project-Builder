import { useState } from "react";
import awsIcons from "../../icons/awsIcons";
import azureIcons from "../../icons/azureIcons.js";

const ElementList = ({ onDragStart, selectedArchitecture }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const selectArchitectureIcons = (selectedArchitecture) => {
    switch (selectedArchitecture) {
      case "aws":
        return awsIcons;
      case "azure":
        return azureIcons;
      default:
        return awsIcons;
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const iconsSource = selectArchitectureIcons(selectedArchitecture);

  return (
    <>
      {iconsSource.map((group) => (
        <div key={group.category} className="mb-4">
          <div 
            className="flex items-center justify-between cursor-pointer p-2 rounded hover:bg-gray-100 transition-colors"
            onClick={() => toggleCategory(group.category)}
          >
            <h3 className='text-md font-semibold'>{group.category}</h3>
            <span className={`material-symbols-outlined transition-transform duration-300 ${expandedCategories[group.category] ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </div>
          
          <div className={`overflow-hidden transition-all duration-300 ${expandedCategories[group.category] ? 'max-h-96 mt-4' : 'max-h-0'}`}>
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
        </div>
      ))}
    </>
  );
};

export default ElementList