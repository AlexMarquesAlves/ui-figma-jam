import ReactFlow, {
  Background,
  ConnectionMode,
  Controls,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors';
import { Square } from './components/Square';

const NODE_TYPES = {
  square: Square,
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
  return (
    <div className={'w-screen h-screen'}>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={INITIAL_NODES}
        connectionMode={ConnectionMode.Loose}
      >
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
