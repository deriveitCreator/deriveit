export const title="Arc length of a curve defined by a polar function";
const content = [
  ['h1', 'Arc Length Of A Curve Defined By A Polar Function'],
  ['pmain', 'Consider a curve defined by the function \\(r=f(θ)\\), where \\(θ\\) is in radians and \\(α≤θ≤β\\). In rectangular coordinates, the arc length of a parameterized curve \\((x(t),y(t))\\) for \\(a≤t≤b\\) is given by:'],
  ["displayFormula","\\[ L = \\int_a^b \\sqrt{\\left( \\frac{dx}{dt} \\right)^2 + \\left( \\frac{dy}{dt} \\right)^2} \\ dt \\]"],
  ['pmain', 'In order to adapt the arc length formula for a polar curve, we use the equations:'],
  ["displayFormula","\\[\\begin{align} x &= r \\cos(θ) = f(θ) \\cos(θ) \\\\ y &= r \\sin(θ) = f(θ) \\sin(θ) \\end{align}\\]"],
  ['pmain', 'The derivative of these is:'],
  ["displayFormula","\\[\\begin{align} \\frac{dx}{dθ} &= f'(θ) \\cos(θ)-f(θ) \\sin(θ) \\\\ \\frac{dy}{dθ} &= f'(θ) \\sin(θ) + f(θ) \\cos(θ) \\end{align}\\]"],
  ['pmain', 'In the definition of \\(L\\), we can replace \\(t\\) by \\(θ\\):'],
  ["displayFormula","\\[ L = \\int_\\alpha^\\beta \\sqrt{\\left( \\frac{dx}{dθ} \\right)^2 + \\left( \\frac{dy}{dθ} \\right)^2} \\ dθ \\]"],
  ['pmain', 'We already know the definition of \\(\\frac{dx}{dθ}\\) and \\(\\frac{dy}{dθ}\\):'],
  ["displayFormula","\\[ L = \\int_\\alpha^\\beta \\sqrt{\\left( f'(θ) \\cos(θ)-f(θ) \\sin(θ) \\right)^2 + \\left( f'(θ) \\sin(θ) + f(θ) \\cos(θ) \\right)^2} \\ dθ \\]"],
  ['pmain', 'Expanding and simplifying:'],
  ["displayFormula","\\[\\begin{align} L &= \\int_\\alpha^\\beta \\sqrt{ (f'(θ))^2 (\\cos^2(θ) + \\sin^2(θ) ) + (f(θ))^2 (\\sin^2(θ) + \\cos^2(θ)) } \\ dθ \\\\ &= \\int_\\alpha^\\beta \\sqrt{ (f'(θ))^2 + (f(θ))^2 } \\ dθ \\end{align}\\]"],
  ['pmain', 'Writing this in terms of \\(r\\):'],
  ["displayFormula","\\[L = \\int_\\alpha^\\beta \\sqrt{ r^2 + \\left(\\frac{dr}{dθ} \\right)^2} \\ dθ \\]"],
];
export default content;