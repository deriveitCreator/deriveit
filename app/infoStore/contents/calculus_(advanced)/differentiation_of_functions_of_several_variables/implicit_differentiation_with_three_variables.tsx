export const title="Implicit differentiation of a function of three variables";
const content = [
  ['h1', 'Implicit Differentiation Of A Function Of Three Variables'],

  ['pmain', 'Suppose \\(z=f(x,y)\\) is defined as an implicit differentiable function of \\(x\\) and \\(y\\), by an equation of the form \\(F(x, y, z) = 0\\), where \\(F\\) is also differentiable. If we use the chain rule to differentiate \\(F\\) with respect to \\(x\\):'],
  ['displayFormula', '$$ \\frac{∂F}{∂x}\\frac{∂x}{∂x} + \\frac{∂F}{∂y}\\frac{∂y}{∂x} + \\frac{∂F}{∂z}\\frac{∂z}{∂x} = 0$$'],
  ['pmain', 'Since \\(\\frac{∂x}{∂x} = 1\\), and \\(\\frac{∂y}{∂x} = 0\\):'],
  ['displayFormula', '$$ \\frac{∂F}{∂x} + \\frac{∂F}{∂z}\\frac{∂z}{∂x} = 0$$'],
  ['pmain', 'If \\(\\frac{∂F}{∂z} \\ne 0\\), we can solve for \\(\\frac{∂z}{∂x}\\) and obtain:'],
  ['displayFormula', '$$  \\frac{∂z}{∂x} = -\\frac{\\frac{∂F}{∂x}}{\\frac{∂F}{∂z}}$$'],
  ['pmain', 'If we differentiate \\(F\\) with respect to \\(y\\), we can get \\(\\frac{∂z}{∂y}\\) in a similar manner:'],
  ['displayFormula', '$$  \\frac{∂z}{∂y} = -\\frac{\\frac{∂F}{∂y}}{\\frac{∂F}{∂z}}$$'],
];
export default content;