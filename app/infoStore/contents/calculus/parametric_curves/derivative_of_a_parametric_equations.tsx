export const title="Derivative of a parametric equation";
const content = [
  ['h1', 'Derivative Of A Parametric Equation'],
  ['pmain', 'Consider the plane curve defined by the parametric equations \\(x=x(t)\\) and \\(y=y(t)\\). Suppose that \\(x\'(t)\\)and \\(y\'(t)\\) exist, and assume that \\(x\'(t)≠0\\). Also, assume that \\(y\\) can be defined in terms of \\(x\\), so \\(y = f(x)\\) or \\(y(t) = f(x(t))\\). This means:'],
  ["displayFormula","\\[\\begin{gather} f'(x) =\\frac{dy}{dx} \\\\ y'(t) = f'(x(t)) x'(t) \\implies f'(x(t)) = \\frac{y'(t)}{x'(t)}\\end{gather} \\]"],
  ['pmain', 'Since \\(f\'(x) = f\'(x(t))\\):'],
  ["displayFormula","\\[ \\frac{dy}{dx} = \\frac{y'(t)}{x'(t)} \\]"],
];
export default content;