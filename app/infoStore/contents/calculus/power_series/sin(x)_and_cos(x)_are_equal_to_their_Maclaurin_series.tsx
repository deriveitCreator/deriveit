export const title="sin(x) and cos(x) are equal to their Maclaurin series";
const content = [
  ['h1', 'sin(x) And cos(x) Are Equal To Their Maclaurin Series'],
  ['pmain', 'The Maclaurin series of \\(f(x) = \\sin(x)\\) is:'],
  ["displayFormula","\\[ \\sum^\\infty_{n=0} (-1)^n \\frac{x^{2n+1}}{(2n+1)!} \\]"],
  ['pmain', 'Let \\(R_n(x)\\) ne the \\(n\\)th remainder. According to the Lagrange form of the Taylor remainder, there exists an integer \\(c\\) such that:'],
  ["displayFormula","\\[ R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} x^{n+1} \\]"],
  ['pmain', 'Let \\(n\\) go to infinity:'],
  ["displayFormula","\\[ \\lim_{n \\to \\infty} R_n(x) = \\lim_{n \\to \\infty} \\frac{f^{(n+1)}(c)}{(n+1)!} x^{n+1} \\]"],
  ['pmain', 'Since \\(f(x) = \\sin(x)\\), then all derivatives of \\(f(x)\\) would be one of: \\(\\sin(x)\\), \\(-\\sin(x)\\), \\(\\cos(x)\\) or \\(-\\cos(x)\\). This means \\(f^{(n+1)}(c)\\) will always be between 0 and 1 (inclusive). Also, as \\(n\\) goes to infinity, \\((n+1)!\\) will eventually grow faster than \\(x^{n+1}\\). Which means:'],
  ["displayFormula","\\[\\begin{align} \\lim_{n \\to \\infty} R_n(x) &= \\lim_{n \\to \\infty} \\frac{f^{(n+1)}(c)}{(n+1)!} x^{n+1} \\\\ &= 0 \\end{align}\\]"],
  ['pmain', 'This shows that as \\(n\\) increases, the Maclaurin series of \\(\\sin(x)\\) will approach \\(\\sin(x)\\). A similar argument can be made for \\(\\cos(x)\\), since the Maclaurin series for \\(\\cos(x)\\) is:'],
  ["displayFormula","\\[ \\sum^\\infty_{n=0} (-1)^n \\frac{x^{2n}}{(2n)!} \\]"],
];
export default content;