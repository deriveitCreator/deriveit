export const title="Proof of the derivative of sinh(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of sinh(x)'],
  ['pmain', 'We need to find the derivative of \\(\\sinh(x)\\):'],
  ['displayFormula', '\\[\\frac{d}{dx}\\sinh(x) = \\frac{d}{dx}\\frac{e^x-e^{-x}}{2}\\]'],
  ['pmain', 'Since 2 is a constant:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\sinh(x) = \\frac{1}{2} \\left( \\frac{d}{dx} e^x - e^{-x} \\right) \\]'],
  ['pmain', 'We can derivative them individually:'],
  ['displayFormula', '\\[\\begin{align} \\frac{d}{dx} \\sinh(x) = \\frac{1}{2} \\left( \\frac{d}{dx} e^x - \\frac{d}{dx}e^{-x} \\right)\\\\ \\frac{d}{dx} \\sinh(x) = \\frac{1}{2} ( e^x + e^{-x} ) \\end{align}\\]'],
  ['pmain', 'This is the definition of \\(\\cosh(x)\\):'],
  ['displayFormula', '\\[ \\frac{d}{dx} \\sinh(x) = \\cosh(x)\\]'],
];
export default content;