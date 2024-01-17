export const title="If a1|b,  a2|b and gcd(a1, a2) = 1, then a1a2|b";
const content = [
  ['h1', 'If a<sub>1</sub>|b,  a<sub>2</sub>|b And gcd(a<sub>1</sub>, a<sub>2</sub>) = 1, Then a<sub>1</sub>a<sub>2</sub>|b'],
  ['pmain', 'Since \\(a_1|b\\) and \\(a_2|b\\):'],
  ['displayFormula', '$$ b = a_1u $$$$ b = a_2v $$'],
  ['pmain', 'Since \\(a_1\\) and \\(a_2\\) are coprime:'],
  ['displayFormula', '$$ a_1r + a_2s = 1 $$'],
  ['pmain', 'We can multiply this by \\(b\\):'],
  ['displayFormula', '$$ (b)a_1r + (b)a_2s = b $$$$ (a_2v)a_1r + (a_1u)a_2s = b $$'],
  ['pmain', 'Which means:'],
  ['displayFormula', '$$ a_2a_1 (vr + us) = b $$'],
  ['pmain', 'Then \\(a_2a_1|b\\). We can generalize this and say if \\(a_1|b, a_2|b, \\ldots, a_k|b\\) and all \\(a_i\\) are pairwise relatively prime, then \\(a_1a_2 \\ldots a_k|b\\).'],
];
export default content;
