export const title="If gcd(a, b), then gcd(a + kb, b)";
const content = [
  ['h1', 'If gcd(a, b), Then gcd(a + kb, b)'],
  ['pmain', 'Let \\((a,b)=d\\) and let \\((a+kb,b)=e\\).'], 
  ['pmain', 'If \\(d\\) divides \\(a\\) and \\(b\\), then it divides any linear combination of \\(a\\) and \\(b\\), including \\(a+kb\\).'], 
  ['displayFormula', '$$ d|a, d|b \\implies d|(a+kb) $$'],
  ['pmain', 'If \\(e\\) divides \\(a+kb\\), then:'], 
  ['displayFormula', '$$\\begin{gather} \\frac{a+kb}{e} = \\text{some integer} \\\\ \\frac{a}{e} + k\\frac{b}{e} = \\text{some integer} \\end{gather}$$'],
  ['pmain', 'Since \\(e|b\\):'], 
  ['displayFormula', '$$\\begin{gather} \\frac{a}{e} + \\text{some integer} = \\text{some integer} \\end{gather}$$'],
  ['pmain', 'This shows that \\(a/e\\) is an integer, or that \\(e|a\\).'], 
  ['pmain', 'We have shown that \\((a,b)\\) divides \\((a+kb,b)\\), and that \\((a+kb,b)\\) divides \\((a,b)\\). If \\((a,b)|(a+kb,b)\\) and \\((a+kb,b)|(a,b)\\), then \\((a,b) = (a+kb,b)\\).'], 
];
export default content;