export const title="The sum to infinity of the series ir^i where r ∈ (1,-1)";
const content = [
  ['h1', 'The sum to infinity of the series ir<sup>i</sup> where r ∈ (1,-1)'], 
  ['pmain', 'Consider the series below where \\(r\\) is in the interval \\((1,-1)\\):'], 
  ['displayFormula', '\\[S = \\sum_{i=1}^n ir^i \\]'], 
  ['pmain', 'The sum of this series is:'],
  ['displayFormula', '\\[S = \\frac{r(1-r^n)}{(1-r)^2} - \\frac{n}{1-r} r^{n+1}\\]'], 
  ['pmain', 'Now let \\(n\\) go to infinity:'],
  ['displayFormula', '\\[\\begin{align} S &= \\lim_{n \\to \\infty} \\frac{r(1-r^n)}{(1-r)^2} - \\frac{n}{1-r} r^{n+1} \\\\ S &= \\lim_{n \\to \\infty} \\frac{r(1-r^n)}{(1-r)^2} - \\lim_{n \\to \\infty} \\frac{n}{1-r} r^{n+1} \\end{align}\\]'], 
  ['pmain', 'This means that when \\(n\\) goes to infinity, \\(r^n\\) will go to 0. Therefore:'],
  ['displayFormula', '\\[\\begin{align} S &= \\frac{r(1-0)}{(1-r)^2} - \\lim_{n \\to \\infty} \\frac{n}{1-r} r^{n+1} \\\\ &= \\frac{r}{(1-r)^2} - \\lim_{n \\to \\infty} \\frac{n}{1-r} r^{n+1} \\end{align}\\]'], 
  ['pmain', 'What about the second term?'],
  ['displayFormula', '\\[\\begin{gather} \\lim_{n \\to \\infty} \\frac{n}{1-r} r^{n+1} \\\\ \\lim_{n \\to \\infty} \\frac{r}{1-r} nr^n = \\frac{r}{1-r} \\lim_{n \\to \\infty} nr^n \\end{gather}\\]'], 
  ['pmain', 'When \\(n\\) goes to infinity, \\(nr^n\\) gives us an indeterminate form \\(\\infty * 0\\), but we can change this to \\(\\infty/\\infty\\) form:'],
  ['displayFormula', '\\[ \\lim_{n \\to \\infty} nr^n = \\lim_{n \\to \\infty} \\frac{n}{r^{-n}}\\]'], 
  ['pmain', 'We can use L\'Hôpital\'s rule here:'],
  ['displayFormula', '\\[\\lim_{n \\to \\infty} \\frac{n}{r^{-n}} = \\lim_{n \\to \\infty} \\frac{\\frac{d}{dn} n}{ \\frac{d}{dn} \\frac{1}{r^n} } = \\lim_{n \\to \\infty} \\frac{1}{ \\frac{-r^n\\ln(r)}{r^{2n}} } = \\lim_{n \\to \\infty} \\frac{r^{2n}}{-r^n\\ln(r)} = \\lim_{n \\to \\infty} \\frac{r^n}{-\\ln(r)} =0\\]'], 
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{align} S &= \\frac{r}{(1-r)^2} - \\lim_{n \\to \\infty} \\frac{r}{1-r} nr^n \\\\ S &= \\frac{r}{(1-r)^2} - 0= \\frac{r}{(1-r)^2}\\end{align}\\]'], 
];
export default content;