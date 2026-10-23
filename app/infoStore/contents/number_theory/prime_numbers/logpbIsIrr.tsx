export const title="log_p(b) is irrational, where p is prime and b is a positive integer that is not a power of p";
const content = [
  ['h1', 'log<sub>p</sub>b is irrational, where p is prime and b is a positive integer that is not a power of p'],
  ['pmain','Assume \\(\\log_p(b)\\) is rational, This means there exists integers \\(m\\) and \\(n\\) such that:'],
  ['displayFormula','$$\\begin{gather} \\log_p(b) = \\frac{m}{n} \\\\ p^{m/n} = b \\\\ p^m = b^n \\end{gather}$$'],
  ['pmain','Let \\(q\\) be some prime that divides \\(b\\). Since \\(b\\) is not a power of \\(p\\), then \\(q \\ne p\\). Also, if \\(q|b\\), then \\(q|b^n\\), which means \\(q|p^m\\). A prime cannot divide another prime, so this is a contradiction. Therefore, \\(\\log_p(b)\\) is irrational.'],
];
export default content;