export const title="(Incomplete) The binomial series is equal to it's Maclaurin series";
const content = [
  ['h1', '(Incomplete) The Binomial Series Is Equal To It\'s Maclaurin Series'],
  ['pmain', 'Let \\(f(x)=(1+x)^r\\) where \\(r\\) is any real number. The Maclaurin series of \\(f(x)\\) is:'],
  ["displayFormula","\\[ 1 + rx + \\frac{r(r-1)}{2!} x^2 + \\frac{r(r-1)(r-2)}{3!} x^3 + \\cdots+ \\frac{r(r-1) \\cdots (r-(n-1))}{n!}x^n + \\cdots \\]"],
  ['pmain', 'Let\'s use the ratio test to see if this series converges:'],
  ["displayFormula","\\[\\begin{align} \\lim_{n \\to \\infty} \\frac{|a_{n+1}|}{|a_n|} &= \\lim_{n \\to \\infty} \\left| \\frac{r(r-1) \\cdots (r-n) x^{n+1}}{(n+1)!} * \\frac{n!}{r(r-1) \\cdots (r-(n-1)) x^n} \\right| \\\\ &= \\lim_{n \\to \\infty} \\left| \\frac{r-n}{n+1} \\right| |x| \\end{align}\\]"],
  ['pmain', 'Since \\( \\left[ \\lim_{n \\to \\infty} \\left| \\frac{r-n}{n+1} \\right| = 1 \\right] \\):'],
  ["displayFormula","\\[ \\lim_{n \\to \\infty} \\frac{|a_{n+1}|}{|a_n|} = |x| \\]"],
  ['pmain', 'Which means the Maclaurin series converges if \\(|x| < 1\\) and diverges if \\(|x| > 1\\). There exists some \\(c\\) between 0 and \\(x\\), such that:'],
  ["displayFormula","\\[ R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} x^{n+1} \\]"],
  ['pmain', 'Let\'s try to find \\(f^{(n+1)}(c)\\):'],
  ["displayFormula","\\[\\begin{align} f^{(n+1)}(x) &= r(r-1)(r-2)(r-3) \\cdots (r-n)(1+x)^{r-(n+1)} \\\\ f^{(n+1)}(c) &= r(r-1)(r-2)(r-3) \\cdots (r-n)(1+c)^{r-(n+1)} \\end{align}\\]"],
  ['pmain', 'This means:'],
  ["displayFormula","\\[ R_n(x) = \\frac{r(r-1)(r-2)(r-3) \\cdots (r-n)(1+c)^{r-(n+1)}}{(n+1)!} x^{n+1} \\]"],
  ['pmain', 'We can rewrite this as:'],
  ["displayFormula","\\[ R_n(x) = \\left( \\frac{r}{n+1} \\right) \\left( \\frac{(r-1)(r-2)(r-3) \\cdots (r-n)}{(1)(2)(3)\\cdots(n)} \\right) \\left( \\frac{(1+c)^r}{(1+c)^{(n+1)}}\\right) \\left( x^{n+1} \\right) \\]"],
  ['pmain', 'If we take the modulus of both sides:'],
  ["displayFormula","\\[ | R_n(x) | =\\left| \\frac{r}{n+1} \\right| \\left| \\frac{(1-r)(2-r)(3-r) \\cdots (n-r)}{(1)(2)(3)\\cdots(n)} \\right| \\ \\frac{| (1+c)^r |}{|1+c|^{(n+1)}} \\ \\left| x^{n+1} \\right| \\]"],
];
export default content;

/*
  ['pmain', 'Let \\(M\\) be an integer such that \\(M \\ge f^{(n+1)}(c)\\), this means:'],
  ["displayFormula","\\[ R_n(x) \\le \\frac{M}{(n+1)!} x^{n+1} \\]"],
  ['pmain', 'If we take \\(n\\) to infinity, then \\(x^{n+1}\\) would go to 0, as \\(|x|<1\\), and \\(\\frac{M}{(n+1)!}\\) would also go to 0, as the denominator would keep getting larger. This means:'],
  ["displayFormula","\\[ \\lim_{n \\to \\infty} R_n(x) =0 \\]"],


  ['pmain', 'Since \\(c\\) may be positive or negative and \\(|c| \\le |x|\\):'],
  ["displayFormula","\\[\\begin{gather} 1 - |x| \\le  1 - |c|\\le |1+c| \\le 1 + |c| \\le 1 + |x| \\\\ 1-|x| \\le |1+c| \\end{gather}\\]"],
  ['pmain', 'Raising them to the power of \\(-1\\) reverses the inequality:'],
  ["displayFormula","\\[\\begin{gather} \\frac{1}{1-|x|} \\ge \\frac{1}{|1+c|} \\end{gather}\\]"],
  ['pmain', 'Raising them to the power of the positive integer \\(n+1\\):'],
  ["displayFormula","\\[\\begin{gather} \\frac{1}{(1-|x|)^{n+1}} \\ge \\frac{1}{|1+c|^{n+1}} \\end{gather}\\]"],
  ['pmain', 'This means:'],
  ["displayFormula","\\[ | R_n(x) | \\le \\left| \\frac{r}{n+1} \\right| \\left| \\frac{(1-r)(2-r)(3-r) \\cdots (n-r)}{(1)(2)(3)\\cdots(n)} \\right| \\ \\frac{| (1+c)^r |}{(1-|x|)^{(n+1)}} \\ \\left| x^{n+1} \\right| \\]"],
  ['pmain', 'Or:'],
  ["displayFormula","\\[ | R_n(x) | \\le \\left| \\frac{r}{n+1} \\right| \\left| \\frac{(1-r)(2-r)(3-r) \\cdots (n-r)}{(1)(2)(3)\\cdots(n)} \\right| \\ | (1+c)^r | \\ \\left( \\frac{|x|}{1-|x|}\\right)^{n+1}\\]"],
  ['pmain', 'Since \\(|x| < 1\\), then as \\(n\\) goes to infinity \\(|x|^{n+1}\\) and \\(\\):'], 
  */