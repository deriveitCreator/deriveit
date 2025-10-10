export const title="Fundamental theorem for line integrals";

const content = [
  ['h1', 'Fundamental Theorem For Line Integrals'],

  ['pmain', 'We start with:'],
  ['displayFormula', '$$\\int_C ∇f \\cdot dr $$'],
  
  ['pmain', 'where \\(C\\) is a piecewise smooth curve with parameterization \\(\\textbf{r}(t)\\), \\(a≤t≤b\\), and \\(f\\) be a function of two or three variables with first-order partial derivatives that exist and are continuous on \\(C\\). Since \\(\\textbf{r}\'(t) = d\\textbf{r}(t)/dt\\):'],
  ['displayFormula', '$$\\int_C ∇f \\cdot dr = \\int^a_b ∇f(\\textbf{r}(t)) \\cdot \\textbf{r}\'(t) dt $$'],

  ['pmain', 'According to the chain rule:'], 
  ['displayFormula', '$$ \\frac{d \\ f(x(t),y(t))}{dt} = \\frac{\\partial f}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial f}{\\partial y} \\frac{dy}{dt} = \\langle f_x, f_y \\rangle \\cdot \\langle x\'(t), y\'(t) \\rangle $$'],
  ['pmain', 'Since \\([∇f = \\langle f_x, f_y \\rangle]\\) and \\([dr = \\langle x\'(t), y\'(t) \\rangle]\\):'], 
  ['displayFormula', '$$ \\frac{d f}{dt} = ∇f \\cdot dr $$'],

  ['pmain', 'This means:'], 
  ['displayFormula', '$$\\begin{align} \\int^a_b ∇f(\\textbf{r}(t)) \\cdot \\textbf{r}\'(t) dt &= \\int^a_b \\frac{d}{dt} f(\\textbf{r}(t)) \\ dt = [f(\\textbf{r}(t))]^{t=a}_{t=b} \\\\ &= f(\\textbf{r}(b)) - f(\\textbf{r}(a)) \\end{align}$$'],
];
export default content;