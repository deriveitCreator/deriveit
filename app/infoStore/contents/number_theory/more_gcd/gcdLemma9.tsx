export const title="If gcd(a, b) = 1, then gcd(a^2 + b^2, a+b) is ≤ 2";
const content = [
  ['h1', 'If gcd(a, b) = 1, Then gcd(a<sup>2</sup> + b<sup>2</sup>, a+b) Is Either 1 Or 2'],
  ['pmain', 'According to <a href="./gcdLemma1">this lemma</a>:'], 
  ['displayFormula', '$$ (x, y) = (x + ky, y) \\quad \\text{where } k \\in \\mathbb{Z} $$'],
  ['pmain', 'Let \\(x=a^2 + b^2\\), \\(y=a+b\\) and \\(k=b-a\\):'], 
  ['displayFormula', '$$\\begin{align} (a^2 + b^2, a+b) &= (a^2 + b^2 + (b-a)(a+b), a+b) \\\\ &= (2b^2, a+b) \\end{align} $$'],
  ['pmain', 'According to the same lemma:'], 
  ['displayFormula', '$$\\begin{gather} (a, b) = (a + b, b) \\\\ \\therefore (a + b, b) = 1 \\end{gather}$$'],
  ['pmain', 'According to the <a href="./gcdLemma12">this lemma</a>:'], 
  ['displayFormula', '$$ (a + b, b) = 1 \\implies (a + b, b^2) = 1 $$'],
  ['pmain', 'If \\(b^2\\) and \\(a+b\\) don\'t share any common factors, then:'], 
  ['displayFormula', '$$ (a + b, 2b^2) = (a + b, 2) $$'],
  ['pmain', 'If \\(a+b\\) is divisible by 2, then \\((a + b, 2)=2\\), otherwise it\'s 1.'], 
];
export default content;