export const title="Proof of the comparison test";
const content = [
  ['h1', 'Proof Of The Comparison Test'],
  ['pmain', 'Suppose there exists an integer \\(N\\) such that \\(0≤ a_n ≤ b_n\\) for all \\(n≥N\\), and suppose that \\(\\sum^∞_{n=1} b_n\\) converges. Let\'s define \\(s_n\\), \\(t_n\\) and \\(t\\):'],
  ["displayFormula","\\[ s_n = \\sum^n_{i=1} a_i \\qquad t_n = \\sum^n_{i=1} b_i \\qquad t = \\sum^\\infty_{i=1} b_i \\]"],
  ['pmain', 'Since both series have positive terms, then the sequences \\(\\{s_n\\}\\) and \\(\\{t_n \\}\\) are increasing. Also \\(t_n \\to t\\), so \\(t_n \\le t\\) for all \\(n\\).'],
  ['pmain', 'Since \\(a_i \\le b_i\\), we have \\(s_n \\le t_n\\). Thus \\(s_n \\le t \\) for all \\(n\\). This means \\(\\{s_n\\}\\) is increasing and bounded above, and therefore converges by the monotone convergence theorem. Thus \\(\\sum^∞_{n=1} a_n\\) converges.'],
  ['pmain', 'Suppose there exists an integer \\(N\\) such that \\(a_n \\ge b_n \\ge 0\\) for all \\(n≥N\\), and suppose that \\(\\sum^∞_{n=1} b_n\\) diverges. This means \\(t_n \\to \\infty\\) as \\(n \\to \\infty\\). If \\(a_i \\ge b_i\\), then \\(s_n \\ge t_n\\). Thus \\(s_n \\to \\infty \\) as \\(n \\to \\infty\\). Therefore \\(\\sum^∞_{n=1} a_n\\) diverges.'],
];
export default content;

