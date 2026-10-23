export const title="If d|b, (ak ... a1 a0)_b is divisible by d^j if and only if (a{j-1} ... a1 a0 )_b is divisible by d^j";
const content = [
  ['h1', 'If d|b, (a<sub>k</sub> ... a<sub>1</sub>a<sub>0</sub>)<sub>b</sub> Is Divisible By d<sup>j</sup> If And Only If (a<sub>j-1</sub> ... a<sub>1</sub>a<sub>0</sub>)<sub>b</sub> Is Divisible By d<sup>j</sup>'],
  ['pmain', 'If \\(d|b\\), then \\(d^j | b^j\\), so:'],
  ['displayFormula', '$$ b^j ≡ 0 \\bmod d^j \\implies a_j b^j ≡ 0 \\bmod d^j $$'],
  ['pmain', 'If \\(d^j | b^j\\), then \\(d^j | b^h\\) where \\(h \\gt j\\):'],
  ['displayFormula', '$$ b^h ≡ 0 \\bmod d^j \\implies a_h b^h ≡ 0 \\bmod d^j $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_j b^j ≡ 0 \\bmod d^j $$'],
  ['pmain', 'If \\(d^j | (a_{j-1} \\ldots a_1 a_0)_b\\), then:'],
  ['displayFormula', '$$\\begin{align} (a_{j-1} b^{j-1} + \\cdots + a_1 b + a_0 &≡ 0 &&\\bmod d^j) \\quad \\wedge \\\\ (a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_j b^j &≡ 0 &&\\bmod d^j) \\implies \\\\ a_k b^k + \\cdots + a_1 b + a_0 &≡ 0 &&\\bmod d^j \\end{align}$$'],
  ['pmain', 'This means if \\(d|b\\) and \\(d^j | (a_{j-1} \\ldots a_1 a_0)_b\\), then \\(d^j | (a_k \\ldots a_1 a_0)_b\\).'],
  ['pmain', 'Conversely, suppose \\(d|b\\) and \\(d^j | (a_k \\ldots a_1 a_0)_b\\). If \\(d|b\\), then \\(d^j | b^j\\), which means:'],
  ['displayFormula', '$$ a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_j b^j ≡ 0 \\bmod d^j $$'],
  ['pmain', 'If \\(d^j | (a_k \\ldots a_1 a_0)_b\\):'],
  ['displayFormula', '$$\\begin{align} (a_k b^k + \\cdots + a_1 b + a_0 &≡ 0 &&\\bmod d^j) \\quad \\wedge \\\\ (a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_j b^j &≡ 0 &&\\bmod d^j) \\implies \\\\ a_k b^k + \\cdots + a_1 b + a_0 - (a_k b^k + a_{k-1} b^{k-1} + \\cdots + a_j b^j) &≡ 0-0 && \\bmod d^j \\\\ \\therefore a_{j-1} b^{j-1} + \\cdots + a_1 b + a_0 &≡ 0 &&\\bmod d^j \\end{align}$$'],
  ['pmain', 'This means if \\(d|b\\) and \\(d^j | (a_k \\ldots a_1 a_0)_b\\), then \\(d^j | (a_{j-1} \\ldots a_1 a_0)_b\\), and that completes the proof.'],
  ['pmain', 'Since \\(2|10\\), then an integer is divisible by \\(2^j\\) if the last \\(j\\) digits are divisible by \\(2^j\\). Similarly, an integer is divisible by \\(5^j\\) if the last \\(j\\) digits are divisible by \\(5^j\\)'],
];
export default content;
