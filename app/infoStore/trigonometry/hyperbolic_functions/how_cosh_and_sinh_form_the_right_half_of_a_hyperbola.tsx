export const title="How cosh And sinh Form The Right Half Of A Hyperbola";
const content = [
  ['h1', 'How cosh And sinh Form The Right Half Of A Hyperbola'],
['pmain', 'Every function may be uniquely decomposed as the sum of an even and an odd function:'],
["displayFormula","\\[f(a) = f_e(a) + f_o(a) = \\left( \\frac{f(a)+f(-a)}{2} \\right) + \\left( \\frac{f(a)-f(-a)}{2} \\right) \\]"],
['pmain', 'Consider the exponential function [\\(f(a)=e^a\\)]. The even part is \\(\\cosh(a)\\) and the odd part is \\(\\sinh(a)\\):'],
["displayFormula","\\[ \\cosh(a) = \\frac{e^a+e^{-a}}{2} \\] \\[ \\sinh(a) = \\frac{e^a - e^{-a}}{2} \\]"],
['pmain', 'This gives us a useful property:'],
["displayFormula","\\[ \\cosh^2(a)- \\sinh^2(a) = 1 \\]"],
['pmain', 'Consider the parametric equations:'],
["displayFormula","\\[ x = \\cosh(a) \\] \\[ y = \\sinh(a)\\]"],
['pmain', 'Where \\(a\\) is the parameter. This means:'],
["displayFormula","\\[ x^2 - y^2 = 1 \\]"],
['pmain', 'The above formula represents a unit hyperbola. Since the of range of \\(\\cosh\\) is \\([1,\\infty]\\), then only the right half is formed:'],
['displayimg', 'hyperbolaAnimation.gif'],
];
export default content;