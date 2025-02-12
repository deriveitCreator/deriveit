export const title="Derivative of a power series has the same radius of convergence";
const content = [
  ['h1', 'Derivative Of A Power Series Has The Same Radius Of Convergence'],
  ['pmain', 'Consider the two series:'],
  ["displayFormula","\\[\\sum^\\infty_{n=0} a_n(x-a)^n \\qquad \\sum^\\infty_{n=1} (n)a_n(x-a)^{n-1} \\]"],
  ['pmain', 'Let \\(x-a=z\\):'],
  ["displayFormula","\\[\\sum^\\infty_{n=0} a_n z^n \\qquad \\sum^\\infty_{n=1} (n)a_n z^{n-1} \\]"],
  ['pmain', 'Assume that \\(\\sum^\\infty_{n=0} a_n z^n\\) has a radius of convergence \\(R\\). For any \\(z\\) you choose, you can also think of a positive integer \\(p\\) such that \\(|z| < p < R\\). Since \\(|z| < p\\):'],
  ["displayFormula","\\[0 < \\frac{|z|}{p} < 1\\]"],
  ['pmain', 'We can rewrite \\(|n a_n z^{n-1}|\\) as:'],
  ["displayFormula","\\[\\begin{align} |n a_n z^{n-1}| &= \\left| \\frac{n a_n z^{n-1}p^n}{p^n} \\right| = \\left| \\frac{n a_n (z)^{n-1}p^n}{p^{n-1}p} \\right| \\\\ &= \\left| \\frac{n a_n p^n}{p} \\right| \\left( \\frac{|z|}{p} \\right)^{n-1} = \\frac{n}{p} \\left( \\frac{|z|}{p} \\right)^{n-1} |a_n p^n| \\end{align}\\]"],
  ['pmain', 'Let \\(r = \\frac{|z|}{p}\\):'],
  ["displayFormula","\\[|n a_n z^{n-1}| = \\frac{n r^{n-1}}{p} |a_n p^n| \\]"],
  ['pmain', 'The ratio test shows that the series \\(\\sum n r^{n-1}\\) converges:'],
  ["displayFormula","\\[\\lim_{n \\to \\infty} \\frac{(n+1) r^{n}}{n r^{n-1}} = \\lim_{n \\to \\infty} \\left( 1+ \\frac{1}{n} \\right) r < 1 \\]"],
  ['pmain', 'Let \\(M\\) be an upper bound of sequence \\(\\{ n r^{n-1} \\}\\):'],
  ["displayFormula","\\[\\begin{align} \\frac{n r^{n-1}}{p} |a_n p^n| &\\le \\frac{M}{p} |a_n p^n| \\\\ |n a_n z^{n-1}| &\\le \\frac{M}{p} |a_n p^n| \\end{align}\\]"],
  ['pmain', 'Earlier we assumed that \\(\\sum^\\infty_{n=0} a_n z^n\\) has a radius of convergence \\(R\\). If \\(\\sum^\\infty_{n=0} a_n z^n\\) converges when \\(z = b\\), then \\(\\sum^\\infty_{n=0} a_n z^n\\) converges absolutely for all \\(|z| \\lt b\\), this was explored <a href="convergence_of_a_power_series">here</a>. This means \\(\\sum^\\infty_{n=0} | a_n z^n |\\) converges for all \\(-R < z < R\\).'],
  ['pmain', 'Since \\(p < R\\), then \\(\\sum^\\infty_{n=0} |a_n p^n|\\) converges. By the inequality above and the comparison test, we can claim \\(\\sum^\\infty_{n=0} |n a_n z^{n-1}|\\) is also convergent, and thus so is \\(\\sum^\\infty_{n=0} n a_n z^{n-1}\\).'],
  ['pmain', 'If \\(|z| > R\\), then \\(\\sum^\\infty_{n=0} a_n z^n\\) diverges. Therefore, \\(\\left[ \\frac{1}{z}\\sum^\\infty_{n=0} a_n z^n \\right]\\) diverges.'],
  ["displayFormula","\\[\\begin{align} (n) a_n z^{n-1} &\\ge a_n z^{n-1} \\\\ n a_n z^{n-1} &\\ge \\frac{1}{z} a_n z^n \\end{align}\\]"],
  ['pmain', 'By the comparison test, if \\(\\left[ \\sum^\\infty_{n=0} \\frac{1}{z} a_n z^n \\right]\\) diverges then \\(\\sum^\\infty_{n=1} n a_n z^{n-1} \\) diverges as well.'],
];
export default content;

