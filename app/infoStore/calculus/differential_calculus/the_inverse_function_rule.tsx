export const title="Proof of the inverse function rule";
const content = [
  ['h1', 'Proof Of The Inverse Function Rule'],
  ['pmain', 'Let \\(f\\) be an invertible function, let \\(x\\) be in the domain of \\(f\\), and let \\(y\\) be in the codomain of \\(f\\). Since \\(f\\) is an invertible function, we know that \\(f(f^{-1}(y))=y\\):'], 
  ["displayFormula","\\[ \\frac{d f(f^{-1}(y))}{dy} = \\frac{dy}{dy} = 1\\]"],
  ['pmain', 'Using the chain rule:'], 
  ["displayFormula","\\[ \\frac{d f(f^{-1}(y))}{d f^{-1}(y)} \\frac{d f^{-1}(y)}{dy} = 1 \\]"],
  ['pmain', 'Using the other notation:'], 
  ["displayFormula","\\[ f'(f^{-1}(y)) (f^{-1})'(y) = 1 \\]"],
  ['pmain', 'Rearranging:'], 
  ["displayFormula","\\[ (f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))} \\]"],
];
export default content;