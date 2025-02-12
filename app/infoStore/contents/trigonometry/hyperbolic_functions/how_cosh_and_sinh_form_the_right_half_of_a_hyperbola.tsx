export const title="How cosh And sinh Form The Right Half Of A Hyperbola";
const content = [
  ['h1', 'How cosh And sinh Form The Right Half Of A Hyperbola'],
  ['pmain', 'Every function may be uniquely decomposed as the sum of an even and an odd function:'],
  ["displayFormula","\\[f(a) = f_e(a) + f_o(a) = \\left( \\frac{f(a)+f(-a)}{2} \\right) + \\left( \\frac{f(a)-f(-a)}{2} \\right) \\]"],
  ['pmain', 'Consider the function [\\(g(a)=b^a\\)] where \\(b\\) is some real number, then:'],
  ["displayFormula","\\[\\begin{gather} g_e(a) = \\frac{b^a+b^{-a}}{2} \\\\ g_o(a) = \\frac{b^a - b^{-a}}{2} \\end{gather}\\]"],
  ['pmain', 'This also means:'],
  ["displayFormula","\\[ (g_e(a))^2- (g_o(a))^2 = 1 \\]"],
  ['pmain', 'If we let \\(x=g_e(a)\\) and \\(y=g_o(a)\\), then we get a unit hyperbola \\(x^2 - y^2 = 1\\) defined by the parameter \\(a\\). Since \\(g_e(a)\\) cannot be negative, only the right half of the hyperbola is formed.'],
  ['pmain', 'Now consider the function [\\(f(a)=e^a\\)]. The even part is defined as \\(\\cosh(a)\\) and the odd part is defined as \\(\\sinh(a)\\):'],
  ["displayFormula","\\[\\begin{gather} \\cosh(a) = \\frac{e^a+e^{-a}}{2} \\\\ \\sinh(a) = \\frac{e^a - e^{-a}}{2} \\end{gather} \\]"],
  ['pmain', 'This gives us a useful property:'],
  ["displayFormula","\\[ \\cosh^2(a)- \\sinh^2(a) = 1 \\]"],
  ['pmain', 'Consider the parametric equations:'],
  ["displayFormula","\\[\\begin{gather} x = \\cosh(a) \\\\ y = \\sinh(a) \\end{gather}\\]"],
  ['pmain', 'Where \\(a\\) is the parameter. This means:'],
  ["displayFormula","\\[ x^2 - y^2 = 1 \\]"],
  ['pmain', 'The above formula represents a unit hyperbola. Since the of range of \\(\\cosh\\) is \\([1,\\infty]\\), then only the right half is formed:'],
  ['displayimg', 'hyperbolaAnimation.gif'],
];
export default content;