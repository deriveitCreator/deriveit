export const title="(Graph theory) The handshake lemma";
const content = [
  ['h1', 'The Handshake Lemma'],
  ['pmain', 'In a graph, an edge connects two vertices:'],
  ['figure', ['hl.png','Image from wikipedia']],

  ['pmain', 'There number of edges emanating out of a vertex is called the <b>degree</b> of the vertex. In the above example, the degree of the vertex labelled "1" is 2, while the degree of the vertex labelled "5" is 3. Adding the degree of all vertices means you are adding all the edges emanating out of the vertices. For example, let \\(d(v)\\) give the degree of vertex \\(v\\):'],

  ["displayFormula","\\[d(1) + d(5) = 2 + 3 = 5\\]"],

  ['pmain', 'Notice that there are 4 edges connecting with vertices "1" and "5". The sum of the degrees is 5 because the edge connecting "1" and "5" was counted twice. Similarly, if we add the degrees of all the vertices we get:'],
  ["displayFormula","\\[d(1) + d(2) + d(3)+d(4)+d(5)+ d(6) = 2 + 3 + 2 +3 +3 +1 = 14\\]"],
  ['pmain', 'Doing this means we are adding all the edges twice. For example, the edge connecting "6" and "4" was counted once with \\(d(4)\\) and again with \\(d(6)\\). This means the sum of all the degrees is twice the number of edges (\\(e\\)):'],
  ["displayFormula","\\[\\sum_{i} d(v_i) = 2e \\]"],
];
export default content;