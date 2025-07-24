export const title="A condition for differentiability";
const content = [
  ['h1', 'A Condition For Differentiability'],

  ['pmain', 'Consider the function \\(f(x)\\) at point \\(x=a\\). If \\(y=f(x)\\) and \\(x\\) changes from \\(a\\) to \\(a + \\Delta x\\), we define the increment of \\(y\\) as:'], 
  ['displayFormula', '$$ \\Delta y = f(a + \\Delta x) - f(a) $$'], 
  ['pmain', 'According to the definition of a derivative, we have:'], 
  ['displayFormula', '$$ \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = f\'(a) $$'], 
  ['pmain', 'Let \\(\\epsilon\\) be the difference between these two:'], 
  ['displayFormula', '$$ \\epsilon = \\frac{\\Delta y}{\\Delta x} - f\'(a) $$'], 
  ['pmain', 'If we define \\(\\epsilon\\) to be 0 when \\(\\Delta x = 0\\), then \\(\\epsilon\\) becomes a continuous function of \\(\\Delta x\\). Thus, for a differentiable function \\(f\\), we can rearrange and write:'], 
  ['displayFormula', '$$\\begin{gather} \\Delta y = f\'(a) \\Delta x + \\epsilon \\Delta x \\\\ \\text{where } \\epsilon \\to 0 \\text{ as } \\Delta x \\to 0 \\end{gather}$$'], 

  ['pmain', 'Now consider a function of two variables, \\(z=f(x,y)\\), and suppose \\(x\\) changes from \\(a\\) to \\(a+ \\Delta x\\) and \\(y\\) changes from \\(b\\) to \\(b + \\Delta y\\), then the corresponding increment of \\(z\\) is:'], 
  ['displayFormula', '$$\\Delta z = f(a + \\Delta x, b + \\Delta y) $$'],

  ['pmain', 'If \\(f\\) is differentiable at \\((a,b)\\), then by analogy  of the function with one variable, the following should hold true:'], 
  ['displayFormula', '$$\\begin{gather} \\Delta z = f_x(a,b) \\Delta x + f_y(a,b) \\Delta y + \\epsilon_1 \\Delta x + \\epsilon_2 \\Delta y  \\\\ \\text{where } \\epsilon_1 \\text{ and } \\epsilon_2 \\to 0 \\text{ as } (\\Delta x, \\Delta y) \\to (0, 0) \\end{gather}$$'],
];
export default content;