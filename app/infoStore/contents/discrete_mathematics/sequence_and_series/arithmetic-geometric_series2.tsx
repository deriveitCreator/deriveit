export const title="The sum of the series ir^i";
const content = [
  ['h1', 'The sum of the series ir<sup>i</sup>'], 
  ['pmain', 'Suppose we want to find the sum:'], 
  ['displayFormula', '\\[\\begin{align} S &= \\sum_{i=1}^n ir^i \\\\ S &= 1r^1 + 2r^2 +3r^3 + \\ldots + nr^n \\end{align}\\]'], 
  ['pmain', 'If we multiply both sides by \\(r\\):'], 
  ['displayFormula', '\\[rS = 1r^2 + 2r^3 +3r^4 + \\ldots + r^{n+1} \\]'], 
  ['pmain', 'Let\'s subtract the second equation from the first:'], 
  ['displayFormula', '\\[S - rS = (1r^1 + 2r^2 +3r^3 + \\ldots + r^n) - (1r^2 + 2r^3 +3r^4 + \\ldots + nr^{n+1}) \\]'], 
  ['pmain', 'We can put all the like terms together:'], 
  ['displayFormula', '\\[\\begin{align} S - rS &= r + (2r^2 - 1r^2) + (3r^3 - 2r^3) + \\ldots + (nr^n - (n-1)r^n) - nr^{n+1} \\\\ (1 - r) S &= (r + r^2 + r^3 + \\ldots + r^n) - nr^{n+1} \\end{align}\\]'], 
  ['pmain', 'The terms in the brackets form a geometric series. We can use the <a href="sum_of_a_finite_geometric_series">formula for the sum of a finite geometric</a> here:'], 
  ['displayFormula', '\\[\\begin{align} (1 - r) S &= \\frac{r(r^n - 1)}{r-1} - nr^{n+1} \\\\ (1 - r) S &= \\frac{r(1-r^n)}{1-r} - nr^{n+1} \\end{align}\\]'], 
  ['pmain', 'Rearranging:'], 
  ['displayFormula', '\\[S = \\frac{r(1-r^n)}{(1-r)^2} - \\frac{nr^{n+1}}{1-r}\\]'], 
  ['pmain', 'If the series ends at \\(n-1\\) instead of \\(n\\), then the sum would be:'], 
  ['displayFormula', '\\[S = \\frac{r(1-r^{n-1})}{(1-r)^2} - \\frac{(n-1)r^n}{1-r}\\]'], 
];
export default content;