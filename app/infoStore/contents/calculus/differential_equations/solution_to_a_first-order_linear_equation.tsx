export const title="Solving a first-order linear differential equation";
const content = [
  ['h1', 'Solving A First-Order Linear Differential Equation'],
  ['pmain', 'A first-order linear equation in standard form is written like this:'], 
  ["displayFormula","\\[ y' + p(x)y = q(x) \\]"],
  ['pmain', 'We start by multiplying both sides by an unknown function \\(u(x)\\):'], 
  ["displayFormula","\\[ u(x) y' + u(x) p(x)y = u(x)q(x) \\]"],
  ['pmain', 'Let \\(u(x)\\) be a function such that \\(u\'(x) = u(x)p(x)\\):'], 
  ["displayFormula","\\[ u(x) y' + u'(x)y = u(x)q(x) \\]"],
  ['pmain', 'Now we can use the product rule here:'], 
  ["displayFormula","\\[ \\frac{d}{dx} \\left( y u(x) \\right) = u(x)q(x) \\]"],
  ['pmain', 'We can rewrite this as:'], 
  ["displayFormula","\\[u(x) \\ dy = u(x)q(x) \\ dx \\]"],
  ['pmain', 'Integrating both sides:'], 
  ["displayFormula","\\[\\int u(x) \\ dy = \\int u(x)q(x) \\ dx \\]"],
  ['pmain', 'Evaluting and simplifying:'], 
  ["displayFormula","\\[\\begin{gathered} u(x)y = \\int u(x)q(x) \\ dx \\\\ y = \\frac{1}{u(x)}\\left[ \\int u(x)q(x) \\ dx \\right] \\end{gathered}\\]"],
  ['pmain', 'This is our solution. As for \\(u(x)\\), let\'s try to find an equation for it. We can start with:'], 
  ["displayFormula","\\[ \\frac{d}{dx} u'(x) = u(x)p(x) \\]"],
  ['pmain', 'Rearranging:'], 
  ["displayFormula","\\[ \\frac{1}{u(x)} d(u(x))= p(x) \\ dx \\]"],
  ['pmain', 'Integrating both sides and evaluating:'], 
  ["displayFormula","\\[\\begin{gathered} \\int \\frac{1}{u(x)} \\ d(u(x))= \\int p(x) \\ dx \\\\ \\ln |u(x)| = \\int p(x) \\ dx + C \\end{gathered}\\]"],
  ['pmain', 'Making \\(u(x)\\):'], 
  ["displayFormula","\\[\\begin{aligned} |u(x)| &= e^{\\int p(x) \\ dx + C} = e^{\\int p(x) \\ dx}e^C \\\\ &= e^{\\int p(x) \\ dx}D\\end{aligned}\\]"],
  ['pmain', 'Since \\(D\\) can be a positive or negative constant:'], 
  ["displayFormula","\\[ u(x) = D e^{\\int p(x) \\ dx} \\]"],
];
export default content;