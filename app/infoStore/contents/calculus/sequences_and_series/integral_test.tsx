export const title="Integral test";
const content = [
  ['h1', 'Integral Test'],
  ['pmain', 'Consider a series \\(\\sum_{"{n=1}"}^∞ a_n\\). Let there be an integer \\(N\\) and a monotone decreasing function \\(f\\), such that \\(f\\) is defined on \\([N, ∞)\\) and \\(f(n) = a_n\\) for \\(n \\ge N\\).'],
  ['pmain', 'Suppose \\(N=2\\), and suppose \\(f\\) be monotone decreasing when \\(x \\gt 0\\), then the left Riemann sum of \\(\\int^6_2 f(x) dx\\) would be the sum of the rectangles shown below.'],
  ["displayimg","1.png"],
  ['pmain', 'The area of the recantagle between 2 and 3 is \\(f(2)*1 = a_2 *1 = a_2\\), the area of the recantagle between 3 and 4 is \\(f(3)*1 = a_3 *1 = a_3\\), and so on.'],
  ['pmain', '\\(\\sum_{"{n=2}"}^5 a_n\\) would be an overestimate of \\(\\int^6_2 f(x) dx\\). This means:'],
  ["displayFormula","\\[ \\sum_{n=2}^5 a_n \\ge \\int^6_2 f(x) dx \\]"],
  ['pmain', 'The right Riemann sum of \(\int^5_2 f(x) dx\) would be the sum of the rectangles shown below:'],
  ["displayimg","2.png"],
  ['pmain', '\\(\\sum_{"{n=3}"}^5 a_n\\) would be an underestimate of \\(\\int^5_2 f(x) dx\\). This means:'],
  ["displayFormula","\\[ \\begin{gather} \\sum_{n=3}^5 a_n \\le \\int^5_2 f(x) dx \\\\ \\sum_{n=2}^5 a_n \\le a_2 + \\int^5_2 f(x) dx \\end{gather} \\]"],
  ['pmain', 'Putting them together:'],
  ["displayFormula","\\[ \\int^6_2 f(x) dx \\le \\sum_{n=2}^5 a_n \\le a_2 + \\int^5_2 f(x) dx \\]"],
  ['pmain', 'We can generalize this:'],
  ["displayFormula","\\[ \\int^{k+1}_N f(x) dx \\le \\sum_{n=N}^k a_n \\le a_n + \\int^k_N f(x) dx \\]"],
  ['pmain', 'If we take \\(k \\to \\infty\\):'],
  ["displayFormula","\\[ \\int^\\infty_N f(x) dx \\le \\sum_{n=N}^\\infty a_n \\le a_n + \\int^\\infty_N f(x) dx \\]"],
];
export default content;