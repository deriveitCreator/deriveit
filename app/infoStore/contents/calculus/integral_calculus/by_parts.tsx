export const title="Proof of the integration by parts formula";
const content = [
  ['h1', 'Proof Of The Integration By Parts Formula'],
  ['pmain', 'Let \\(h(x) = f(x)g(x)\\), the derivative of this is:'],
  ['displayFormula', '\\[ \\frac{d}{dx} h(x) = \\left( \\frac{d}{dx}f(x) \\right) g(x) + f(x)\\frac{d}{dx}g(x) \\]'],
  ['pmain', 'We can rewrite this as:'],
  ['displayFormula', '\\[ d \\ h(x) = d \\ f(x) * g(x) + f(x) * d \\ g(x)\\]'],
  ['pmain', 'If we take the of integral of both sides:'],
  ['displayFormula', '\\[ \\int d \\ h(x) = h(x) = \\int g(x) \\ d f(x) + \\int f(x) \\ d g(x) \\]'],
  ['pmain', 'Let \\(g(x) =u\\) and \\(f(x)=v\\):'],
  ['displayFormula', '\\[\\begin{align} uv = \\int u \\ d v + \\int v \\ d u \\\\ \\int u \\ d v = uv - \\int v \\ d u \\end{align}\\]'],
];
export default content;