import { NodeResizer } from '@reactflow/node-resizer';
import { Handle, NodeProps, Position } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';

export const Square = (_props: NodeProps) => {
  return (
    <>
      <div
        className={
          'bg-violet-500 rounded h-full w-full min-w-[200px] min-h-[200px]'
        }
      >
        <NodeResizer
          minWidth={200}
          minHeight={200}
          isVisible={_props.selected}
          lineClassName={'border-blue-400'}
          handleClassName={'h-3 w-3 bg-white border-2 rounded border-blue-400'}
        />

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
