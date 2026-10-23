export const title="Proof that the gradient vector is perpendicular to the tangent vector to any curve on a surface";
const content = [
  ['h1', 'Proof That The Gradient Vector Is Perpendicular To The Tangent Vector To Any Curve On A Surface'],

  ['pmain', 'Suppose surface \\(S\\) is a surface defined by the equation \\(f(x,y,z)=k\\). Let \\(P(x_0, y_0, z_0)\\) be a point on \\(S\\). Let \\(C\\) be any curve that lies on the surface \\(S\\) and passes through the point \\(P\\). Also, let\'s say there exist a vector function \\(\\textbf{r}(t) = \\langle x(t), y(t), z(t) \\rangle \\) that describes the curve \\(C\\). Let \\(t_0\\) be the parameter value corresponding to \\(P\\); that is, \\(\\textbf{r}(t_0) = \\langle x_0, y_0, z_0 \\rangle \\).'],

  ['pmain', 'Since \\(C\\) lies on \\(S\\), then for all values of \\(t\\), the point \\((x(t), y(t), z(t))\\) must satisfy the equation of \\(S\\):'],
  ['displayFormula', '$$ f(x(t), y(t), z(t)) = k $$'],
  
  ['pmain', 'If \\(x\\), \\(y\\) and \\(z\\) are differentiable functions of \\(t\\), and if \\(f\\) is also differentiable, then we can use the chain rule:'],
  ['displayFormula', '$$ \\frac{∂f}{∂x}\\frac{dx}{dt} + \\frac{∂f}{∂y}\\frac{dy}{dt} + \\frac{∂f}{∂z}\\frac{dz}{dt} = 0 $$'],

  ['pmain', 'This can be rewritten as:'],
  ['displayFormula', '$$\\begin{gather} ∇f(x,y,z) \\cdot ⟨x\'(t),y\'(t),z\'(t)⟩ = 0 \\\\ ∇f(x,y,z) \\cdot \\textbf{r}\'(t) = 0 \\end{gather}$$'],
  ['pmain', 'If \\(t=t_0\\):'],
  ['displayFormula', '$$∇f(x_0, y_0, z_0) \\cdot \\textbf{r}\'(t_0) = 0 $$'],
  ['pmain', 'If the dot product of these vectors is equal to zero, this means they are orthogonal. The second vector is tangent to the curve \\(C\\) at point \\(P\\), which implies the gradient vector is perpendicular to \\(C\\) at \\(P\\).'],

];
export default content;