export const title="Area under a parametric equation";
const content = [
  ['h1', 'Area Under A Parametric Equation'],
  ['pmain', 'Consider the non-self-intersecting plane curve defined by the parametric equations \\(x=x(t)\\) and \\(y=y(t)\\) for \\(a \\le t \\le b\\), and assume \\(x(t)\\) is differentiable.'],
  ['pmain', 'Suppose we want to find the area under this curve between \\(t=a\\) and \\(t=b\\). Let \\(x(a) = \\alpha\\) and \\(x(b) = \\beta\\). Finding the area under the curve between \\(t=a\\) and \\(t=b\\) is the same as finding the area under curve between \\(x = \\alpha\\) and \\(x = \\beta\\):'],
  ["displayFormula","\\[A= \\int_\\alpha^\\beta y \\ dx \\]"],
  ['pmain', 'Since \\(y=g(t)\\) and \\(\\frac{dx}{dt} = x\'(t)\\):'],
  ["displayFormula","\\[A= \\int_a^b y(t) x'(t)\\ dt \\]"],
];
export default content;