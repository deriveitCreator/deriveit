export const title="Proof that absolute convergence implies convergence";
const content = [
  ['h1', 'Proof That Absolute Convergence Implies Convergence'],
  ['pmain', 'Suppose that \\(\\sum^{\\infty}_{n=1} |a_n|\\) converges. It is trivial that either \\(a_n=|a_n|\\) or \\(a_n = -|a_n|\\) and therefore either \\(|a_n|+a_n=2|a_n|\\) or \\(|an|+an=0\\). This means:'],
  ["displayFormula","\\[ 0 ≤ |a_n| + a_n ≤ 2 |a_n|\\]"],
  ['pmain', 'If \\(\\sum^{\\infty}_{n=1} |a_n|\\) converges, then so does \\(2\\sum^{\\infty}_{n=1} |a_n|\\), which would also mean that \\(\\sum^{\\infty}_{n=1} |a_n| + a_n\\) also converges. By using the algebraic properties for convergent series:'],
  ["displayFormula","\\[ \\sum^{\\infty}_{n=1} a_n = \\sum^{\\infty}_{n=1} |a_n| + a_n - \\sum^{\\infty}_{n=1} |a_n|\\]"],
  ['pmain', 'If both \\(\\sum^{\\infty}_{n=1} |a_n| + a_n\\) and \\(\\sum^{\\infty}_{n=1} |a_n|\\) converge, then so does \\(\\sum^{\\infty}_{n=1} a_n\\).'],
];
export default content;