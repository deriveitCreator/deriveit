export const title="If p is prime and (a^2 ≡ a mod p^k), then (a ≡ 0) or (a ≡ 1)";
const content = [
  ['h1', 'If p Is Prime And (a<sup>2</sup> ≡ a mod p<sup>k</sup>), Then (a ≡ 0) Or (a ≡ 1)'],
  ['pmain', 'If \\(a^2 ≡ a mod p^k\\), then \\(p^k\\) divides their difference:'],
  ['displayFormula', '$$\\begin{gather} p^k|a^2 - a \\\\ p^k|a(a - 1) \\end{gather} $$'],
  ['pmain', 'If \\(p^k\\) divides both \\(a\\) and \\(a-1\\), then it should divide their difference:'],
  ['displayFormula', '$$\\begin{gather} a - (a-1) \\\\ 1 \\end{gather}$$'],
  ['pmain', 'This means \\(p^k|1\\), which implies \\(p=1\\), so \\(p\\) can\'t divide both. This means \\(p^k\\) divides only one of them (either \\(p^k|a\\) or \\(p^k|a-1\\)).'],
  ['pmain', 'If \\(p^k|a\\), then \\(a ≡ 0 \\bmod p^k\\). If \\(p^k|a-1\\), then \\(a ≡ 1 \\bmod p^k\\).'],
];
export default content;
