export const title="If m|n, then (a^m - b^m)|(a^n - b^n)";
const content = [
  ['h1', 'If m|n, Then (a^m - b^m)|(a^n - b^n)'],
  ['pmain', 'Let\'s first talk about the case when \\(m=1\\) and \\(n=1\\), then this case is trivial:'], 
  ['displayFormula', '$$ (a-b)|(a-b) $$'],
  ['pmain', 'Now let \\(m=1\\) and \\(n \\gt 1\\). We are going to prove by using mathematical induction that:'], 
  ['displayFormula', '$$ (a-b)|(a^n - b^n) $$'],
  ['pmain', 'We know that there exists a value of \\(k\\) (=1) for which \\((a-b)|(a^k - b^k)\\). If we use \\(k+1\\):'],
  ['displayFormula', '$$ a^{k+1} - b^{k+1} = a(a^k - b^k) + b^k (a-b) $$'],
  ['pmain', 'This means if \\((a-b)\\) divides \\(a(a^k - b^k)\\) and it divides \\(b^k (a-b)\\), then \\((a-b)|(a^{k+1} - b^{k+1})\\). This proves that \\((a-b)|(a^n - b^n)\\). Now let\'s talk about the next case where \\(m\\) and \\(n\\) are both integers more than 1. Let \\(mk=n\\), then:'],
  ['displayFormula', '$$ a^n - b^n = a^{mk} - b^{mk} = (a^m)^k - (b^m)^k $$'],
  ['pmain', 'Let \\(x = a^m\\) and \\(y = b^m\\):'],
  ['displayFormula', '$$ a^n - b^n = x^k - y^k $$'],
  ['pmain', 'Through the previous case, we know that \\(x-y\\) divides \\(x^k - y^k\\), which means:'],
  ['displayFormula', '$$ (x-y)|(a^n - b^n) $$$$ (a^m - b^m)|(a^n - b^n) $$'],
];
export default content;