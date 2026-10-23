export const title="Remainder estimate for the integral test";
const content = [
  ['h1', 'Remainder Estimate For The Integral Test'],
  ['pmain', 'Suppose \\(\\sum_{n=1}^∞ a_n\\) is a convergent series with positive terms. Let \\(S_N\\) be the \\(N\\)th partial sum of \\(\\sum_{n=1}^∞ a_n\\), and let \\(R_N\\) be defined as:'],
  ["displayFormula","\\[ R_N = \\sum_{n=N}^∞ a_n - S_N = \\sum_{n=N+1}^∞ a_n\\]"],
  ['pmain', 'This means:'],
  ["displayFormula","\\[ \\int^\\infty_{N+1} f(x) dx \\le R_N \\le a_{N+1} + \\int^\\infty_{N+1} f(x) dx \\]"],
  ['pmain', 'Since \\(\\int^\\infty_N f(x) dx \\ge a_{N+1} + \\int^\\infty_{N+1} f(x) dx \\):'],
  ["displayFormula","\\[ \\int^\\infty_{N+1} f(x) dx \\le R_N \\le \\int^\\infty_N f(x) dx \\]"],
  ['pmain', 'The <b>remainder estimate</b>.'],
];
export default content;

