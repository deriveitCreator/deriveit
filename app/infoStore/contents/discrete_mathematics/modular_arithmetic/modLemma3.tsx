export const title="If (a ≡ b mod m and n|m), then a ≡ b mod nm";
const content = [
  ['h1', 'If (a ≡ b mod m and n|m), then a ≡ b mod nm'],
  ['pmain', 'If \\(a ≡ b mod m\\), then there is an integer \\(k\\) such that:'],
  ['displayFormula', '$$ mk = b - a $$'],
  ['pmain', 'If \\(n|m\\), then there is an integer \\(q\\) such that:'],
  ['displayFormula', '$$ qn = m $$'],
  ['pmain', 'substituting \\(m\\):'],
  ['displayFormula', '$$\\begin{aligned} (qn)k &= b - a \\\\ n(qk) &= b - a \\implies a ≡ b mod n \\end{aligned}$$'],
];
export default content;