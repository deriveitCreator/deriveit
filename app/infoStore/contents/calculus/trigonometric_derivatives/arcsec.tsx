export const title="Proof Of The Derivative Of Arcsec(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of Arcsec(x)'],
  ['pmain', 'Look at this unit circle:'],
  ['displayimg', 'asec3.png'],
  ['pmain', 'Let \\(x\\) be the distance from point \\(Q\\) to \\(B\\) (which would be negative if on the other side), and let \\(y\\) be the angle between the line \\(\\overline{QA}\\) and the x-axis.'],
  ['pmain', 'Let \\(\\operatorname{arcsec}(x) = y\\). The range of arcsec(x) is \\([0,\\pi/2) \\cup (\\pi/2,\\pi]\\). If \\(y\\) is a number within this range, then:'],
  ['displayFormula', '\\[ \\begin{align} \\sec(y) &= x \\\\ \\tan(y) &= ±\\sqrt{x^2 -1} \\end{align}\\]'],
  ['pmain', 'Whether tan(y) would be positive or negative depends on the sign of \\(x\\). In other words, whether \\(\\overline{QB}\\) is on the right or the left of the y-axis:'],
  ['displayFormula', '\\[ \\tan(y) = \\left( \\frac{|x|}{x} \\right) \\left| \\sqrt{x^2 -1} \\right| \\]'],
  ['pmain', 'As for the derivative of arcsec(x), let\'s start with:'],
  ['displayimg', 'as3.png'],
  ['pmain', 'Since x = sec(y):'], 
  ['displayimg', 'asec4.png'],
  ['pmain', 'Using the chain rule:'],
  ['displayimg', 'asec5.png'],
  ['pmain', 'And we already know what sec(y) and tan(y) is equal to:'],
  ['displayFormula', '\\[ \\frac{d}{dx} y= \\frac{1}{ x \\left( \\frac{|x|}{x} \\left| \\sqrt{x^2-1} \\right| \\right)} = \\frac{1}{ |x| \\left| \\sqrt{x^2-1} \\right| } \\]'],
  ['pmain', 'Below is the graph of the derivative (<span style="color:green">green</span>) and arcsec(x) (<span style="color:blue">blue</span>):'],
  ['displayimg', 'asec6.png'],
];
export default content;