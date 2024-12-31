export const title="An integer is divisible by 2 if its last digit is divisible by 2";
const content = [
  ['h1', 'An Integer Is Divisible By 2 If Its Last Digit Is Divisible By 2'],
  ['pmain', 'Suppose an integer \\(n\\) has \\(k\\) digits and let \\(a_k\\) be the \\(k\\)th digit. We can represent \\(n\\) like this:'],
  ['displayFormula', '$$n = a_k 10^{k-1} + a_{k-1} 10^{k-2} + \\ldots + a_3 10^2 + a_2 10^1 +a_1 $$'],
  ['pmain', 'Since 10 is divisible by 2, then \\((a_k 10^{k-1} + \\ldots + a_2 10^1)\\) is also divisible by 2. So if we divide \\(n\\) by 2, then there exists an integer \\(h\\) such that:'],
  ['displayFormula', '$$\\begin{align} \\frac{n}{2} &= \\frac{a_k 10^{k-1} + a_{k-1} 10^{k-2} + \\ldots + a_2 10^1}{2} + \\frac{a_1}{2} \\\\ \\frac{n}{2} &= h + \\frac{a_1}{2} \\end{align}$$'],
  ['pmain', 'This means \\(\\frac{n}{2}\\) would be an integer if and only if \\(\\frac{a_1}{2}\\) is an integer.'],
];
export default content;
