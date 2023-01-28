import { Handle, NodeProps, Position } from 'reactflow';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Square = (_props: NodeProps) => {
  return (
    <>
      <div className={'bg-violet-500 rounded w-[200px] h-[200px]'}>
        <Handle id="top" type="source" position={Position.Top} />
        <Handle id="right" type="source" position={Position.Right} />
        <Handle id="bottom" type="source" position={Position.Bottom} />
        <Handle id="left" type="source" position={Position.Left} />
      </div>
    </>
  );
};
