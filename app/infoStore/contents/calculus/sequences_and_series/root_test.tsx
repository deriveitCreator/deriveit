export const title="Proof of the root test";
const content = [
  ['h1', 'Proof Of The Root Test'],
  ['pmain', 'Consider the series \\(\\sum^{\\infty}_{n=1}a_n\\). Let \\(p\\) be defined as:'],
  ["displayFormula","\\[ p = \\lim_{n \\to \\infty} \\sqrt[n]{| a_n |} \\]"],
  ['pmain', 'If \\(p \\lt 1\\), then there exists some integer \\(N\\) such that \\(\\sqrt[n]{ | a_n |} \\lt 1\\) for all \\(n \\le N\\). Let there be an integer \\(k\\) such that \\(\\sqrt[n]{ | a_n | } \\le k \\lt 1\\). This means \\(| a_n | \\le k^n\\) Since the geometric series \\(\\sum^{\\infty}_{n=N}k^n\\) converges, then, by the comparison test,  \\(\\sum^{\\infty}_{n=N} |a_n|\\) converges as well. Thus, \\(\\sum^{\\infty}_{n=1}a_n\\) converges absolutely.'],
  ['pmain', 'If \\(p \\gt 1\\), then there exists an integer \\(N\\) such that \\(\\sqrt[n]{| a_n |} \\gt 1\\) for all \\(n \\ge N\\):'],
  ["displayFormula","\\[\\begin{gather} \\sqrt[n]{| a_n |} \\gt 1 \\\\ | a_n | \\gt 1^n \\\\ |a_n| \\gt 1 \\end{gather}\\]"],
  ['pmain', 'If \\(|a_n| \\gt 1\\) for all \\(n \\ge N\\), then \\(|a_n|\\) (and \\(a_n\\) as well) does not converge to 0.'],
];
export default content;
