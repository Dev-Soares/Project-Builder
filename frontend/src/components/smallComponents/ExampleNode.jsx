import { Handle, Position } from '@xyflow/react';
import { Cloud, Database, Plugs, Monitor, Users } from '@phosphor-icons/react';

const iconMap = {
  cloud: Cloud,
  database: Database,
  api: Plugs,
  monitor: Monitor,
  group: Users,
};

const ExampleNode = ({ data, isConnectable }) => {
  const label = data?.label ?? 'Unnamed';
  const color = data?.color ?? '#8b5cf6';
  const IconComponent = iconMap[data?.icon] || Cloud;

  return (
    <div
      className="px-5 py-4 rounded-2xl flex flex-col items-center gap-2 min-w-36 border border-white/20 shadow-lg backdrop-blur-sm"
      style={{ backgroundColor: color }}
    >
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <IconComponent size={40} weight="duotone" className="text-white" />
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
      <span className="font-medium text-sm text-white/90">{label}</span>
    </div>
  );
};

export default ExampleNode;
