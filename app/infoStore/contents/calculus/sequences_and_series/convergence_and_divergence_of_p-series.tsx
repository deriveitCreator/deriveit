export const title="Convergence and Divergence of p-series";
const content = [
  ['h1', 'Convergence And Divergence Of P-Series'],
  ['pmain', 'Let \\(a_n = \\frac{1}{n^p}\\) and let \\(f(x) = \\frac{1}{x^p} \\). This means \\(f(n) = a_n\\) for all integers \\(n \\ge 1\\).'],
  ['pmain', 'If \\(p \\le 0\\), then \\(\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) diverges as \\(a_{n+1} \\ge a_n\\).'],
  ['pmain', 'If \\(p \\gt 0\\), then \\(f(x)\\) is a monotone decreasing function after \\(x=1\\). This means that according to the integral test either both \\(\\int^\\infty_{x=1} \\frac{1}{x^p} dx\\) and \\(\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) converge or both diverge.'],
  ["displayFormula","\\[ \\int^\\infty_{x=1} x^{-p} dx = \\left[ \\frac{x^{1-p}}{1-p} \\right]^\\infty_1 = \\frac{1}{1-p} \\left[ x^{1-p} \\right]^\\infty_1 \\]"],
  ['pmain', 'If \\(0 \\lt p \\lt 1\\), then \\(q = 1-p\\) is a positive number:'],
  ["displayFormula","\\[ \\int^\\infty_{x=1} x^{-p} dx = \\frac{1}{1-p}  (\\infty^q - 1^q) = \\infty \\]"],
  ['pmain', 'Therefore, \\(\\int^\\infty_{x=1} \\frac{1}{x^p} dx\\) diverges when \\(p \\lt 1\\), which means \\(\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) also diverges when \\(p \\lt 1\\). If \\(p=1\\), then \\(\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) would be a harmonic series, which diverges. So far, we concluded that \\(\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) for all cases where \\(p \\le 1\\). If \\(p \\gt 1\\), then \\(x^{1-p}\\) would go towards 0 as \\(x\\) goes to infinity:'],
  ["displayFormula","\\[ \\int^\\infty_{x=1} x^{-p} dx = \\left[ \\frac{x^{1-p}}{1-p} \\right]^\\infty_1 = \\frac{1}{1-p} \\left[ x^{1-p} \\right]^\\infty_1 = \\frac{1}{1-p}\\]"],
  ['pmain', 'Since \\(\\int^\\infty_{x=1} \\frac{1}{x^p} dx\\) converges to \\(\\frac{1}{1-p}\\) if \\(p \\gt 1\\), \\(\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) also converges.'],
];
export default content;