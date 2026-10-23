export const title="Proof of chain rule for one independent variable";
const content = [
  ['h1', 'Proof Of Chain Rule For One Independent Variable'],

  ['pmain', 'The statement we are trying to proof: Suppose that \\(x=g(t)\\) and \\(y=h(t)\\) are differentiable functions of \\(t\\) and \\(z=f(x,y)\\) is a differentiable function of \\(x\\) and \\(y\\), then \\(z=f(x(t),y(t))\\) is a differentiable function of \\(t\\) and:'],
  ['displayFormula', '$$ \\frac{dz}{dt} = \\frac{∂z}{∂x} \\cdot \\frac{dx}{dt} + \\frac{∂z}{∂y} \\cdot \\frac{dy}{dt} $$'],
  ['pmain', 'If \\(f\\) is a differentiable function, then according to <a href="differentiability_condition">this article</a>, the following shoud be true:'],
  ['displayFormula', '$$\\begin{gather} \\Delta z = \\frac{∂z}{∂x} \\Delta x + \\frac{∂z}{∂y} \\Delta y + \\epsilon_1 \\Delta x + \\epsilon_2 \\Delta y \\\\ \\text{where } \\epsilon_1 \\text{ and } \\epsilon_2 \\to 0 \\text{ as } (\\Delta x, \\Delta y) \\to (0, 0) \\end{gather}$$'],
  ['pmain', 'Divding both sides by \\(\\Delta t\\) gives:'],
  ['displayFormula', '$$ \\frac{\\Delta z}{\\Delta t} = \\frac{∂z}{∂x} \\frac{\\Delta x}{\\Delta t} + \\frac{∂z}{∂y} \\frac{\\Delta y}{\\Delta t} + \\epsilon_1 \\frac{\\Delta x}{\\Delta t} + \\epsilon_2 \\frac{\\Delta y}{\\Delta t}$$'],
  ['pmain', 'If we let \\(\\Delta t \\to 0\\), then \\(\\Delta x \\to 0\\) because \\(g\\) is differentiable and continuous. Similarly, \\(\\Delta y \\to 0\\). This means if \\(\\frac{dz}{dt} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta z}{\\Delta t}\\), then:'],
  ['displayFormula', '$$\\begin{align} \\frac{dz}{dt} &= \\frac{∂z}{∂x} \\left( \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} \\right) + \\frac{∂z}{∂y} \\left( \\lim_{\\Delta t \\to 0} \\frac{\\Delta y}{\\Delta t} \\right) + \\left( \\lim_{\\Delta t \\to 0} \\epsilon_1 \\right) \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} + \\left( \\lim_{\\Delta t \\to 0} \\epsilon_2 \\right) \\lim_{\\Delta t \\to 0} \\frac{\\Delta y}{\\Delta t} \\\\ \\frac{dz}{dt} &= \\frac{∂z}{∂x}  \\frac{dx}{dt}  + \\frac{∂z}{∂y} \\frac{dy}{dt} \\end{align}$$'],
];
export default content;