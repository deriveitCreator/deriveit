export const title="Proof of the derivative of arccosecant(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of Arccosecant(x)'],
  ['pmain', 'Below is a graph of arccosecant(x). The range of this function is \\([\\pi/2, 0) \\cup (0,-\\pi/2]\\):'],
  ['displayimg', 'acosec2.png'],
  ['pmain', 'Look at this unit circle:'],
  ['displayimg', 'acosec1.png'],
  ['pmain', 'Let \\(x\\) be the distance from point \\(Q\\) to \\(D\\), and let \\(y\\) be the angle between the line \\(\\overline{QA}\\) and the x-axis. This means cosec(y) is the distance from point \\(Q\\) to \\(D\\), and cosec(-y) is the negative distance from point \\(Q\\) to \\(F\\). If arccosec(x) = y:'],
  ['displayFormula', '\\[ \\begin{align} \\operatorname{cosec}(y) &= x \\\\ \\cot(y) &= ±\\sqrt{x^2 - 1} \\end{align}\\]'],
  ['pmain', 'The cotagent would be negative if x is negative:'],
  ['displayFormula', '\\[ \\cot(y) = \\frac{|x|}{x} \\left| \\sqrt{x^2 - 1} \\right| \\]'],
  ['pmain', 'As for the derivative of arccosec, let\'s start with:'],
  ['displayimg', 'as3.png'],
  ['pmain', 'Since x = cosec(y):'],
  ['displayimg', 'acosec4.png'],
  ['pmain', 'Using the chain rule:'],
  ['displayimg', 'acosec5.png'],
  ['pmain', 'And we already know what cosec(y) and cotan(y) is equal to:'],
  ['displayFormula', '\\[\\frac{d}{dx}y = - \\frac{1}{x \\frac{|x|}{x} \\left| \\sqrt{x^2 - 1} \\right|} = - \\frac{1}{ |x| \\left| \\sqrt{x^2 - 1} \\right|}\\]'],
  ['pmain', 'Below is the graph of the derivative (<span style="color:green">green</span>):'],
  ['displayimg', 'acosec8.png'],
];
export default content;