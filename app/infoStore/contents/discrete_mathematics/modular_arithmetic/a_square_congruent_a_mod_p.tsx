export const title="If p is prime and (a^2 ≡ a mod p), then (a ≡ 0) or (a ≡ 1)";
const content = [
  ['h1', 'If p Is Prime And (a<sup>2</sup> ≡ a mod p), Then (a ≡ 0) Or (a ≡ 1)'],
  ['pmain', 'Let consider the reduced residue set:'],
  ['displayFormula', '$$ \\{ 1, 2, 3, 4, \\ldots, p-1 \\} $$'],
  ['pmain', 'If \\((a, p) = 1\\), then this is also a reduced residue set:'],
  ['displayFormula', '$$ \\{ a, 2a, 3a, 4a, \\ldots, (p-1)a \\} $$'],
  ['pmain', 'If \\((a^2 ≡ a \\bmod p)\\), then \\(a^2\\) can only be congruent to \\(a\\) in the set above and no other integer:'],
  ['displayFormula', '$$ \\begin{align} a^2 &\\not \\equiv 2a &&\\bmod p \\\\ a^2 &\\not \\equiv 3a &&\\bmod p \\\\ a^2 &\\not \\equiv (p-1)a &&\\bmod p\\end{align}$$'],
  ['pmain', 'Since \\((a,p) = 1\\):'],
  ['displayFormula', '$$ \\begin{align} a &\\not \\equiv 2 &&\\bmod p \\\\ a &\\not \\equiv 3 &&\\bmod p \\\\ a &\\not \\equiv (p-1) &&\\bmod p\\end{align}$$'],
  ['pmain', 'This can only mean that \\((a ≡ 0 \\bmod p)\\) or \\((a ≡ 1 \\bmod p)\\).'],
];
export default content;
