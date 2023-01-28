/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors';
import { DefaultEdge } from './components/Edges/DefaultEdge';
import { Square } from './components/Nodes/Square';
import * as Toolbar from '@radix-ui/react-toolbar';

const NODE_TYPES = {
  square: Square,
};

const EDGE_TYPES = {
  default: DefaultEdge,
};

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400,
    },
    data: {},
  },
  // eslint-disable-next-line prettier/prettier
]satisfies Node[];

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, _setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges((edges) => addEdge(connection, edges));
    },
    [setEdges],
  );

  return (
    <div className={'w-screen h-screen'}>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>

      <Toolbar.Root
        className={
          'fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'
        }
      >
        <Toolbar.Button
          className={
            'w-32 h-32 bg-violet-500 mt-6 rounded transition-all duration-300 hover:-translate-y-2'
          }
        />
      </Toolbar.Root>
    </div>
  );
}

export default App;
