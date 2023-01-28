import { Handle, NodeProps, Position } from 'reactflow';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Square = (_props: NodeProps) => {
  return (
    <>
      <div className={'bg-violet-500 rounded w-[200px] h-[200px]'}>
        <Handle
          id="top"
          type="source"
          position={Position.Top}
          className={'w-3 h-3 bg-blue-400/80 -top-5'}
        />
        <Handle
          id="right"
          type="source"
          position={Position.Right}
          className={'w-3 h-3 bg-blue-400/80 -right-5'}
        />
        <Handle
          id="bottom"
          type="source"
          position={Position.Bottom}
          className={'w-3 h-3 bg-blue-400/80 -bottom-5'}
        />
        <Handle
          id="left"
          type="source"
          position={Position.Left}
          className={'w-3 h-3 bg-blue-400/80 -left-5'}
        />
      </div>
    </>
  );
};
