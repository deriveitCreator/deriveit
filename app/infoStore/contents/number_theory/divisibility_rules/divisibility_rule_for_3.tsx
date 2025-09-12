export const title="An integer is divisble by 3 if the sum of its digits is divisible by 3";
const content = [
  ['h1', 'An Integer Is Divisible By 3 If The Sum Of Its Digits Is Divisible By 3'],
  ['pmain', 'Suppose an integer \\(n\\) has \\(k\\) digits and let \\(a_k\\) be the \\(k\\)th digit. We can represent \\(n\\) like this:'],
  ['displayFormula', '$$\\begin{align} n &= a_k (10^{k-1}) + a_{k-1} (10^{k-2}) + \\cdots + a_3 (10^2) + a_2 (10^1) +a_1 \\\\ n &= a_k (99\\ldots9) + a_{k-1} (99\\ldots9) + \\cdots + a_3 (99) + a_2 (9) + a_1 + (a_2 + a_3 + \\cdots + a_{k-1} + a_k) \\end{align}$$'],
  ['pmain', 'Since 9 is divisible by 3, then \\((99\\ldots9)\\) is also divisible by 3. So if we divide \\(n\\) by 3, then there exists an integer \\(h\\) such that:'],
  ['displayFormula', '$$\\begin{align} \\frac{n}{3} &= \\frac{a_k (99\\ldots9) + a_{k-1} (99\\ldots9) + \\cdots + a_3 (99) + a_2 (9)}{3} + \\frac{a_1 + a_2 + a_3 + \\cdots + a_{k-1} + a_k}{3} \\\\ \\frac{n}{3} &= h + \\frac{a_1 + a_2 + a_3 + \\cdots + a_{k-1} + a_k}{3} \\end{align}$$'],
  ['pmain', 'This means \\(\\frac{n}{3}\\) would be an integer if and only if \\(\\frac{a_1 + a_2 + a_3 + \\cdots + a_{k-1} + a_k}{3}\\) is an integer.'],
];
export default content;
