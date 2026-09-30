export const title="The net residual is zero if and only if the line crosses the mean";
const content = [
  ['h1', 'The Net Residual Is Zero If And Only If The Line Crosses The Mean'], 
  ['pmain', 'Consider a bunch of these \\(n\\) data points \\((x_i, y_i)\\) along with a poor estimate line:'], 
  ['displayimg', 'm1.png'],
  ['pmain', 'A <b>residual</b> is the difference between the observed value and the estimated value. The residual at \\(x_i\\) is \\(y_i - \\hat{y_i}\\), where \\(\\hat{y_i}\\) is the point on the estimate line at \\(x_i\\). Keep in mind, the estimate line is intentionally chosen as a bad one. Let the equation below be the equation of the estimate line:'], 
  ['displayFormula', '\\[ y = \\beta x + \\alpha \\]'], 
  ['pmain', 'where \\(\\alpha\\) is the bias and \\(\\beta\\) is the gradient. The residual (\\(e_i\\)) can be written as:'], 
  ['displayFormula', '\\[\\begin{align} e_i &= y_i - \\hat{y_i} \\\\ &= y_i - (\\beta x_i + \\alpha) \\end{align}\\]'], 
  ['pmain', 'The value of \\(e_i\\) is positive if the observed point is above the predicted line, negative if below and 0 if on it. The net residual can be written as:'], 
  ['displayFormula', '\\[\\begin{align} \\sum^n_{i=1} e_i &= \\sum^n_{i=1} \\left[ y_i - (\\beta x_i + \\alpha) \\right] \\\\ &= \\sum^n_{i=1} y_i - \\sum^n_{i=1} (\\beta x_i + \\alpha) \\end{align}\\]'], 
  ['pmain', 'If we tweak \\(\\alpha\\) and \\(\\beta\\), we can find various different lines that give us different net residual, so can we find a line that gives the net residual of 0:'], 
  ['displayFormula', '\\[\\begin{align} 0 &= \\sum^n_{i=1} y_i - \\sum^n_{i=1} (\\beta x_i + \\alpha) \\\\ \\sum^n_{i=1} y_i &= \\sum^n_{i=1} (\\beta x_i + \\alpha) \\\\ \\sum^n_{i=1} y_i &= \\beta \\sum^n_{i=1} x_i + \\sum^n_{i=1} \\alpha \\\\ \\sum^n_{i=1} y_i &= \\beta \\sum^n_{i=1} x_i + n \\alpha \\end{align}\\]'], 
  ['pmain', 'If we divide both sides by \\(n\\):'], 
  ['displayFormula', '\\[\\begin{align} \\frac{\\sum^n_{i=1} y_i}{n} &= \\frac{\\beta \\sum^n_{i=1} x_i + n \\alpha }{n} \\\\ \\frac{\\sum^n_{i=1} y_i}{n} &= \\beta \\frac{ \\sum^n_{i=1} x_i}{n} + \\frac{ n \\alpha }{n} \\\\ \\overline{y} &= \\beta \\ \\overline{x} + \\alpha \\end{align}\\]'], 
  ['pmain', 'This shows that if the net residual were to be zero, then the line would pass through the mean point: \\((\\overline{x}, \\overline{y})\\). Every step above is reversible, so the converse also holds.'], 
];
export default content;