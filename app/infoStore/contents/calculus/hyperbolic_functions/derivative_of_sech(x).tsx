export const title="Proof of the derivative of sech(x)";
const content = [
  ['h1', 'Proof Of The Derivative Of sech(x)'],
  ['pmain', 'We need to find the derivative of \\(\\operatorname{sech}(x)\\):'],
  ['displayFormula', '\\[\\frac{d}{dx}\\operatorname{sech}(x) = \\frac{d}{dx}\\frac{1}{\\cosh(x)}\\]'],
  ['pmain', 'If we derivative this:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\operatorname{sech}(x) = \\frac{d}{dx} (\\cosh(x))^{-1} = -(\\cosh(x))^{-2} (\\sinh(x)) \\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\frac{d}{dx}\\operatorname{sech}(x) = -(\\cosh(x))^{-1}(\\tanh(x)) = -\\operatorname{sech}(x)\\tanh(x)\\]'],
];
export default content;