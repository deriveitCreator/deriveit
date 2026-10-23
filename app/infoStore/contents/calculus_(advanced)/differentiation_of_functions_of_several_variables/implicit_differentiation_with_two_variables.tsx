export const title="Implicit differentiation of a function of two variables";
const content = [
  ['h1', 'Implicit Differentiation Of A Function Of Two Variables'],

  ['pmain', 'Consider these equations:'],
  ['displayFormula', '$$ \\begin{gather} x^3 + y^3 = 6xy \\\\ x^2 + 3y^2 + 4y = 4 \\end{gather}$$'],
  ['pmain', 'These equations implicitly define \\(y\\) as a function of \\(x\\). They can be written as follows:'],
  ['displayFormula', '$$ \\begin{gather} x^3 + y^3 - 6xy = 0 \\\\ x^2 + 3y^2 + 4y - 4 = 0 \\end{gather}$$'],
  ['pmain', 'We can define a function using the left hand side:'],
  ['displayFormula', '$$ \\begin{gather} H(x,y) = x^3 + y^3 - 6xy \\\\ G(x,y) = x^2 + 3y^2 + 4y - 4 \\end{gather}$$'],
  ['pmain', 'In the first case, \\(H(x,y)=0\\) defines \\(y\\) as an implicit function of \\(x\\), and in the second case, \\(G(x,y)=0\\) defines \\(y\\) as an implicit function of \\(x\\).'],

  ['pmain', 'If an equation of the form \\(F(x,y)=0\\) defines \\(y\\) as an implicit differentiable function of \\(x\\), and \\(F\\) is differentiable, we can use the chain rule to state:'],
  ['displayFormula', '$$\\frac{∂F}{∂x} \\frac{dx}{dx} + \\frac{∂F}{∂y} \\frac{dy}{dx} = 0 $$'],
  ['pmain', 'In other words:'],
  ['displayFormula', '$$ \\frac{dy}{dx} = -\\frac{\\frac{∂F}{∂x}}{\\frac{∂F}{∂y}}$$'],
];
export default content;