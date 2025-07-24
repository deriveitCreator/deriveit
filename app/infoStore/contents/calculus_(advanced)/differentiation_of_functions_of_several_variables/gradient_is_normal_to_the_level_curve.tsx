export const title="Proof that the gradient is normal to the level curve";
const content = [
  ['h1', 'Proof That The Gradient Is Normal To The Level Curve'],

  ['pmain', 'If a curve is defined parametrically by the function pair \\((x(t),y(t))\\), then the vector \\(x\'(t)\\textbf{i} + y\'(t)\\textbf{j}\\) is tangent to the curve for every value of \\(t\\) in the domain.'],
  ['pmain', 'Let \\(f(x,y)\\) be a differentiable function of \\(x\\) and \\(y\\). Consider the level curve \\(f(x,y)=k\\). Let\'s say there exists a parametric function \\(f(x(t),y(t))\\) such that it traces this level curve (i.e. \\(f(x(t),y(t))=k\\)). If we take the derivative with respect to \\(t\\) from both sides:'],
  ['displayFormula', '$$ \\frac{∂f}{∂x}\\frac{dx}{dt} + \\frac{∂f}{∂y}\\frac{dy}{dt} = 0 $$'],
  ['pmain', 'This can be rewritten as:'],
  ['displayFormula', '$$∇f(x,y) \\cdot ⟨x\'(t),y\'(t)⟩ = 0$$'],
  ['pmain', 'Thus, the dot product of these vectors is equal to zero, which implies they are orthogonal. However, the second vector is tangent to the level curve, which implies the gradient must be normal to the level curve. Note that both vectors are parallel to the \\(x\\), \\(y\\)-plane.'],

];
export default content;