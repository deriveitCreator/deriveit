export const title="If d|(b+1), then d|(ak ... a1 a0)_b if and only if d|((-1)^k ak + ... + a2 - a1 + a0)";
const content = [
  ['h1', 'If d|(b+1), Then d|(a<sub>k</sub> ... a<sub>1</sub>a<sub>0</sub>)<sub>b</sub> if and only if d|((-1)<sup>k</sup>a<sub>k</sub> + ... + a<sub>2</sub> - a<sub>1</sub> + a<sub>0</sub>)'],

  ['pmain', 'If \\(d|(b+1)\\), then \\(b ≡ -1 \\bmod d\\), and \\(b^j ≡ (-1)^j \\bmod d\\).'],
  ['displayFormula', '$$ \\begin{align} (a_k a_{k-1} \\ldots a_0)_b &≡ a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_1 b + a_0 \\bmod d \\\\ &≡ a_k (-1)^k + a_{k-1} (-1)^{k-1} + \\cdots + a_1 (-1)^1 + a_0 \\bmod d \\\\ &≡ (-1)^k a_k \\cdots + a_2 - a_1 + a_0 \\bmod d \\end{align}$$'],
];
export default content;
