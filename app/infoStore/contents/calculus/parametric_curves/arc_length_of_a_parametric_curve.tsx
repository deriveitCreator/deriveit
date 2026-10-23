export const title="Arc length of a parametric equation";
const content = [
  ['h1', 'Arc Length Of A Parametric Equation'],
  ['pmain', 'Consider a plane curve defined by the parametric equations \\(x=x(t)\\) and \\(y=y(t)\\) for \\(a \\le t \\le b\\).'],
  ['pmain', 'Suppose we want to find the arc length of this curve between \\(t=a\\) and \\(t=b\\). Let \\(x(a) = \\alpha\\) and \\(x(b) = \\beta\\). Finding the arc length of the curve between \\(t=a\\) and \\(t=b\\) is the same as finding the arc length of the curve between \\(x = \\alpha\\) and \\(x = \\beta\\):'],
  ["displayFormula","\\[L = \\int_\\alpha^\\beta \\sqrt{1+ \\left( \\frac{dy}{dx} \\right)^2} \\ dx\\]"],
  ['pmain', 'The integral with respect to \\(t\\) would be:'],
  ["displayFormula","\\[\\begin{align} L &= \\int_a^b \\sqrt{1+ \\left( \\frac{dy/dt}{dx/dt} \\right)^2} \\frac{dx}{dt}\\ dt \\\\ &= \\int_a^b \\sqrt{\\left( \\frac{dx}{dt} \\right)^2 + \\left( \\frac{dy}{dt} \\right)^2} \\ dt \\end{align}\\]"],
];
export default content;