export const title="The range of correlation coefficient";
const content = [
  ['h1', 'The Range Of Correlation Coefficient'], 
  ['pmain', 'Consider the following variance:'], 
  ['displayFormula', '\\[ \\operatorname{Var}\\left[ \\frac{X}{\\sigma_X} ± \\frac{Y}{\\sigma_Y} \\right] \\]'], 
  ['pmain', 'Using <a href="../expected_value_and_variance_basics/variance_of_the_linear_combination_of_two_random_variables">this property</a>:'],
  ['displayFormula', '\\begin{align} \\operatorname{Var}\\left[ \\frac{X}{\\sigma_X} ± \\frac{Y}{\\sigma_Y} \\right] &= \\frac{1}{\\sigma_X^2} \\operatorname{Var}[X] + \\frac{1}{\\sigma_Y^2}\\operatorname{Var}[Y] ± \\frac{2}{\\sigma_X^2 \\sigma_Y^2}\\operatorname{cov}(X,Y) \\\\ &= \\frac{1}{\\sigma_X^2} \\sigma_X^2 + \\frac{1}{\\sigma_Y^2} \\sigma_Y^2 ± \\frac{2}{\\sigma_X^2 \\sigma_Y^2}\\operatorname{cov}(X,Y) \\\\ &= 2 ± \\frac{2}{\\sigma_X^2 \\sigma_Y^2}\\operatorname{cov}(X,Y) \\end{align}'], 
  ['pmain', 'Since variance is always \\(\\ge 0\\):'], 
  ['displayFormula', '\\begin{gather} \\operatorname{Var}\\left[ \\frac{X}{\\sigma_X} ± \\frac{Y}{\\sigma_Y} \\right] \\ge 0 \\\\ 0 \\le 2 ± \\frac{2}{\\sigma_X^2 \\sigma_Y^2}\\operatorname{cov}(X,Y) \\end{gather}'], 
  ['pmain', 'Dividing both sides by 2:'], 
  ['displayFormula', '\\begin{gather} 0 \\le 1 ± \\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2} \\\\ -1 \\le ± \\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2} \\end{gather}'], 
  ['pmain', 'If \\(\\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2}\\) is positive:'], 
  ['displayFormula', '\\[ -1 \\le \\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2}  \\]'], 
  ['pmain', 'If \\(\\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2}\\) is negative:'], 
  ['displayFormula', '\\begin{gather} -1 \\le -\\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2} \\\\ 1 \\ge \\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2} \\end{gather}'], 
  ['pmain', 'This means:'], 
  ['displayFormula', '\\[ -1 \\le \\frac{\\operatorname{cov}(X,Y)}{\\sigma_X^2 \\sigma_Y^2} \\le 1 \\]'], 
];
export default content;
