export const title="Proof of the limit comparison test";
const content = [
  ['h1', 'Proof Of The Limit Comparison Test'],
  ['pmain', 'Suppose that \\(\\sum a_n\\) and \\(\\sum b_n\\) are series with positive terms, and suppose:'],
  ["displayFormula","\\[ \\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c \\]"],
  ['pmain', 'where \\(c\\) is a finite positive number. Let there be integers \\(m\\) and \\(M\\) such that \\(m \\lt c \\lt M\\). Since \\(a_n / b_n\\) is close to \\(c\\) for large \\(n\\), there is an integer \\(N\\) such that when \\(n \\gt N\\):'],
  ["displayFormula","\\[ m \\lt \\frac{a_n}{b_n} \\lt M \\]"],
  ['pmain', 'So:'],
  ["displayFormula","\\[ mb_n \\lt a_n \\lt Mb_n \\]"],
  ['pmain', 'If \\(\\sum b_n\\) converges, then so does \\(\\sum Mb_n\\). This means by the comparison test, \\(\\sum a_n\\) also converges. If \\(\\sum b_n\\) diverges, then so does \\(\\sum mb_n\\). This means by the comparison test, \\(\\sum a_n\\) also diverges.'],
];
export default content;