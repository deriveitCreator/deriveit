export const title="(Graph theory) The number of vertices with odd degrees must be even";
const content = [
  ['h1', 'The Number Of Vertices With Odd Degrees Must Be Even'],
  ['pmain', 'The sum of the degrees of all the vertices is twice the number of edges (\\(e\\)):'],
  ["displayFormula","\\[\\sum_{i} d(v_i) = 2e \\]"],
  ['pmain', 'Suppose there was a vertex with a degree of 3. Then the total sum would be an odd number, since:'],
  ["displayFormula","\\[\\begin{gather} \\text{odd } + \\text{even } = \\text{odd} \\\\ \\text{even } + \\text{even } = \\text{even} \\\\ \\text{odd } + \\text{odd } = \\text{odd} \\end{gather} \\]"],
  ['pmain', 'But since \\(2e\\) is an even number, there is a contradiction. However, if there was another vertex with some odd degree, like let\'s say 5, then the total sum would be even again.'],
  ['pmain', 'Similarly, if there are odd number of vertices with odd degrees, then the total sum would be odd, which would lead to a contradiction. This the number of vertices with odd degrees has to be even.'],
];
export default content;