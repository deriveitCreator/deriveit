export const title="If c is an odd integer, then (c^2 ≡ 1 mod 4) and (c^2 ≡ 1 mod 8)";
const content = [
  ['h1', 'If c Is An Odd Integer, Then (c^2 ≡ 1 mod 4) And (c^2 ≡ 1 mod 8)'],
  ['pmain', 'If c is an odd integer, then:'],
  ['displayFormula', '$$c = 2k + 1 $$'],
  ['pmain', 'where \\(k\\) is an integer. This means:'],
  ['displayFormula', '$$c^2 = 4k^2 + 4k + 1 = 4(k^2 + k) + 1$$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '$$c^2 -1 = 4(k^2 + k) $$'],
  ['pmain', 'Since \\(k^2+k\\) is an integer, then \\(c^2 ≡ 1 \\bmod 4\\). Also, \\(k^2+k\\) can be written as \\((k)(k+1)\\). Since either \\(k\\) or \\(k+1\\) is even, then \\((k) (k + 1) = 2q\\). In other words:'],
  ['displayFormula', '$$\\begin{align} c^2 -1 &= 4(k^2 + k) \\\\ &= 8q \\end{align} $$'],
  ['pmain', 'Therefore \\(c^2 ≡ 1 \\bmod 8\\).'],
];
export default content;