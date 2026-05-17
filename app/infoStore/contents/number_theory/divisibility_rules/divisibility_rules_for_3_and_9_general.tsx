export const title="If d|(b-1), then d|(ak ... a1 a0)_b if and only if d|(ak + ... + a1 + a0)";
const content = [
  ['h1', 'If d|(b-1), Then d|(a<sub>k</sub> ... a<sub>1</sub>a<sub>0</sub>)<sub>b</sub> If And Only If d|(a<sub>k</sub> + ... + a<sub>1</sub> + a<sub>0</sub>)'],
  ['pmain', 'If \\(d|(b-1)\\), then \\(b ≡ 1 \\bmod d\\), and therefore \\(b^j ≡ 1 \\bmod d\\). This means \\(a_j b^j ≡ a_j \\bmod d\\).'],
  ['displayFormula', '$$\\begin{align} (a_k \\ldots a_1 a_0)_b = a_k b^k + \\cdots + a_1 b + a_0 \\\\ a_k b^k + \\cdots + a_1 b + a_0 ≡ a_k + \\cdots + a_1 + a_0 \\bmod d \\end{align}$$'],
  ['pmain', 'Therefore, if \\(d|(a_k + \\cdots + a_1 + a_0)\\), then \\(d|(a_k b^k + \\cdots + a_1 b + a_0)\\) and vice versa.'],
];
export default content;
