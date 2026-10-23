export const title="(Graph theory) Euler's formula for planar graphs";
const content = [
  ['h1', 'Euler\'s Formula For Planar Graphs'],

  ['pmain', '<b>Euler\'s Formula</b> states that for any connected planar graph with \\(v\\) vertices, \\(e\\) edges, and \\(f\\) faces, we have:'],
  ["displayFormula","\\[ v - e + f = 2 \\]"],

  ['pmain', 'We can manually check that this is true for small planar graphs:'],
  ['displayimg', 'ef1.jpeg'],

  ['pmain', 'Consider the planar graph below, which satisfies the Euler\'s formula:'],
  ['displayimg', 'ef2.jpeg'],

  ['pmain', 'When we add an edge to this graph, we can either connect two vertices that already exist, or we can create a new vertex and connect it with a vertex that already exist:'],
  ['displayimg', 'ef3.jpeg'],

  ['pmain', 'When connect two already existing vertices. The number of vertices stays the same, the number of edges increase by 1 and the number of faces increase by 1. This means:'],
  ["displayFormula","\\[\\begin{align} v_{\\text{new}} - e_{\\text{new}} + f_{\\text{new}} &= v_{\\text{old}} - (e_{\\text{old}}+1) + (f_{\\text{old}}+1) \\\\ &= v_{\\text{old}} - e_{\\text{old}} + f_{\\text{old}} \\\\ &= 2 \\end{align} \\]"],

  ['pmain', 'When we make a new vertex and connect it with an already existing vertex, then the number of vertices increase by 1, the number of edges increase by 1, and the number of faces remain the same:'],
  ["displayFormula","\\[\\begin{align} v_{\\text{new}} - e_{\\text{new}} + f_{\\text{new}} &= (v_{\\text{old}}+1) - (e_{\\text{old}}+1) + f_{\\text{old}} \\\\ &= v_{\\text{old}} - e_{\\text{old}} + f_{\\text{old}} \\\\ &= 2 \\end{align} \\]"],

  ['pmain', 'Using just these two methods, we can build any planar graphs from a very simple planar graph, and according to the argument above, the Euler\'s formula will hold everytime we add an edge.'],
];
export default content;