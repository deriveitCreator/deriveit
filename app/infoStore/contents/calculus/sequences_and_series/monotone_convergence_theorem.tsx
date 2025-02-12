export const title="Proof of the monotone convergence theorem";
const content = [
  ['h1', 'Proof of the monotone Convergence Theorem'],
  ['pmain', 'Suppose \\(\\{ a_n \\}\\) is a bounded increasing sequence. Let \\(L\\) be the least upper bound of the set \\(\\{a_n | n \\ge 1\\}\\). In other words, for every \\(ε \\gt 0\\), there is some integer \\(N\\) such that:'],
  ["displayFormula","\\[ a_N \\gt L - ε \\]"],
  ['pmain', 'If \\(\\{ a_n \\}\\) is increasing, then \\(a_n \\ge a_N\\) for every \\(n \\gt N\\). Thus, if \\(n \\gt N\\), we have:'],
  ["displayFormula","\\[ a_n \\gt L - ε \\]"],
  ['pmain', 'So:'],
  ["displayFormula","\\[ 0 \\le L - a_n \\lt ε \\]"],
  ['pmain', 'Since \\(a_n \\le L\\), then whenever \\(n \\gt N\\):'],
  ["displayFormula","\\[ | L - a_n | \\lt ε \\]"],
  ['pmain', 'So \\(\\lim_{n \\to \\infty} a_n = L\\) (by definition of a limit of a sequence). A similar proof (using the greatest lower bound) works if \\(\\{a_n\\}\\) is decreasing.'],
];
export default content;