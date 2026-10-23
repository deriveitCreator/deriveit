export const title="cov(X, Y) = E[XY] - E[X]E[Y]";
const content = [
  ['h1', 'cov(X, Y) = E[XY] - E[X]E[Y]'], 
  ['pmain', 'The formula for \\(\\operatorname{cov}\\) is:'], 
  ['displayFormula', '\\[ \\operatorname{cov}(X, Y) = E[(X - E[X])(Y - E[Y])] \\]'], 
  ['pmain', 'Expanding:'], 
  ['displayFormula', '\\[ \\operatorname{cov}(X, Y) = E[(XY - XE[Y] -YE[X] + E[X]E[Y])] \\]'], 
  ['pmain', 'Using <a href="linearity_of_expectation">linearity of expectation</a> property:'], 
  ['displayFormula', '\\begin{align} \\operatorname{cov}(X, Y) &= E[XY] - E[XE[Y]] - E[YE[X]] + E[E[X]E[Y]] \\\\ &= E[XY] - E[Y]E[X] - E[X]E[Y] + E[X]E[Y] \\\\ &= E[XY] - E[X]E[Y] \\end{align}'], 
];
export default content;
