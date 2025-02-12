export const title="Proof of the ratio test";
const content = [
  ['h1', 'Proof Of The Ratio Test'],
  ['pmain', 'Let \\(\\sum^{\\infty}_{n=1}a_n\\) be a series with nonzero terms. Let \\(p\\) be defined as:'],
  ["displayFormula","\\[ p = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|\\]"],
  ['pmain', 'If \\(p \\gt 1\\), then the ratio \\(\\left| \\frac{a_{n+1}}{a_n} \\right|\\) will eventually be greater than 1; that is, there exists an integer \\(N\\) such that:'],
  ["displayFormula","\\[ \\left| \\frac{a_{n+1}}{a_n} \\right| \\gt 1 \\text{ whenever } n \\ge N\\]"],
  ['pmain', 'This means \\(|a_{n+1}| \\gt |a_n|\\) whenever \\(n \\ge N\\), so the series \\(\\sum a_n\\) definitely doesn\'t converge after \\(n \\ge N\\).'],
  ['pmain', 'If \\(p \\lt 1\\), then choose a number \\(r\\) such that \\(p \\lt r \\lt 1\\):'],
  ["displayFormula","\\[\\begin{gather} \\left| \\frac{a_{n+1}}{a_n} \\right| \\lt r \\text{ whenever } n \\ge N \\\\ | a_{n+1} | \\lt |a_n| r \\text{ whenever } n \\ge N \\end{gather}\\]"],
  ['pmain', 'This means:'],
  ["displayFormula","\\[\\begin{align} & \\ && \\ &&| a_{N+1} | &&\\lt |a_N| r \\\\ &| a_{N+2} | &&\\lt &&| a_{N+1} |r &&\\lt |a_N| r^2 \\\\ |a_{N+3}| \\lt &| a_{N+2} |r &&\\lt &&| a_{N+1} |r^3 &&\\lt |a_N| r^3 \\end{align}\\]"],
  ['pmain', 'In general:'],
  ["displayFormula","\\[|a_{N+k}| \\lt |a_N| r^k \\text{ for all } k \\le 1\\]"],
  ['pmain', 'Consider the geometric series below:'],
  ["displayFormula","\\[ \\sum^{\\infty}_{k=1} |a_N| r^k = |a_N| r + |a_N| r^2 + |a_N| r^3 + \\cdots \\]"],
  ['pmain', 'This is a convergent series since \\(0 \\lt r \\lt 1\\). Now consider the series:'],
  ["displayFormula","\\[ \\sum^{\\infty}_{k=1} |a_{N+k}| = |a_{N+1}| + |a_{N+2}| + |a_{N+3}| + \\cdots \\]"],
  ['pmain', 'Since \\(|a_{N+k}| \\lt |a_N| r^k\\) and \\(\\sum^{\\infty}_{k=1} |a_N| r^k\\) is convergent, then, by the comparison test, \\(\\sum^{\\infty}_{k=1} |a_{N+k}|\\) is also convergent.'],
];
export default content;
