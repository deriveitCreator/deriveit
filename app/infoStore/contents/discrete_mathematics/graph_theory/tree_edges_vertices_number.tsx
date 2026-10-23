export const title="(Graph theory) number of edges of a tree is one less than the number of vertices";
const content = [
  ['h1', 'The Number Of Edges Of A Tree Is One Less Than The Number Of Vertices'],
  ['pmain', 'A tree is a connected graph containing no cycles. Let \\(T\\) be a tree with \\(v\\) vertices and \\(e\\) edges. We need to prove that:'],
  ["displayFormula","\\[ e = v - 1 \\]"],

  ['pmain', 'We can manually check that, for a tree, the following are true:'],
  ["displayFormula","\\[\\begin{gather} v=1 \\rightarrow e=0 \\\\ v=2 \\rightarrow e=1 \\\\ v=3 \\rightarrow e=2 \\end{gather}\\]"],
  ['pmain', 'If the above is not true, then there should exist a tree with some number of vertices that is not one more than the number of edges. Out of all the counterexamples, let\'s call the one with the smallest number of vertices \\(T_1\\). Assume that this tree has more than 2 vertices. Let the number of vertices of \\(T_1\\) be \\(v_1\\).'],
  ['pmain', 'Since \\(T_1\\) is a tree, it should have atleast one "leaf vertex", or a vertex with degree one. Let \\(T_2\\) be the tree resulting from removing a leaf vertex from \\(T_1\\). Let \\(v_2\\) be the number of vertices of \\(T_2\\):'],
  ["displayFormula","\\[ v_2 = v_1 - 1 \\]"],

  ['pmain', 'Since \\(T_1\\) is the smallest tree for which the stated proposition isn\'t true, then this means the proposition is true for \\(T_2\\). This means if \\(v_2 = v_1 - 1\\), then \\(e_2 = v_1 - 2\\) (where \\(e_2\\) is the number of edges of \\(T_2\\)). However, \\(T_1\\) has only one more edge than \\(T_2\\):'],
  ["displayFormula","\\[\\begin{align} \\text{number of edges of } T_1 &= e_2 + 1 = (v_1 - 2) + 1 \\\\ &= v_1 - 1 \\end{align}\\]"],
  ['pmain', 'This means there is a contradition, because \\(T_1\\) satisfies the proposition.'],
];
export default content;