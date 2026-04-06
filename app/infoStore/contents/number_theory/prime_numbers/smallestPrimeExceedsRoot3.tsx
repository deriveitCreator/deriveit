export const title="If the smallest prime p of the positive integer n exceeds n^(1/3), then n/p must be prime or 1";
const content = [
  ['h1', 'If The Smallest Prime p Of The Positive Integer n Exceeds n<sup>1/3</sup>, then n/p Must Be Prime Or 1'],
  ['pmain', 'If \\(p \\gt \\sqrt[3]{n} \\), then:'],
  ['displayFormula','$$\\begin{gather} p \\gt \\sqrt[3]{n} \\\\ 1/p \\lt \\frac{1}{\\sqrt[3]{n}} \\\\ n/p \\lt \\frac{n}{\\sqrt[3]{n}} \\end{gather} $$'],
  ['pmain', 'Since \\(n = (\\sqrt[3]{n})(\\sqrt[3]{n})(\\sqrt[3]{n})\\):'],
  ['displayFormula','$$\\begin{gather} n/p \\lt \\frac{(\\sqrt[3]{n})(\\sqrt[3]{n})(\\sqrt[3]{n})}{\\sqrt[3]{n}} \\\\ n/p \\lt \\sqrt[3]{n}^2 \\\\ \\sqrt{n/p} \\lt \\sqrt[3]{n} \\end{gather} $$'],
  ['pmain', 'For any integer \\(x \\gt 1\\), \\(x\\) must have a smallest prime factor less than \\(\\sqrt{x}\\).'],
  ['pmain', 'Assume that \\(n/p\\) is composite. For the integer \\(n/p\\), there must be a smallest prime factor less than \\(\\sqrt{n/p}\\), call this \\(q\\). According to the above, \\(q \\lt \\sqrt[3]{n}\\).'],
  ['pmain', 'Since \\(q\\) is a factor of \\(n/p\\), then it is also a factor of \\(n\\). However, the smallest prime factor of \\(n\\) exceeds \\(\\sqrt[3]{n}\\). If \\(q \\lt \\sqrt[3]{n}\\), then we have a contradiction.'],
  ['pmain', 'This means that \\(n/p\\) cannot be composite.'],
];
export default content;