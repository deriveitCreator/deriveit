export const title="Proof of the inverse function theorem";
const content = [
  ['h1', 'Proof Of The Inverse Function Theorem'],
  ['pmain', 'Let \\(f\\) be an invertible function, let \\(x\\) be in the domain of \\(f\\), and let \\(y\\) be in the codomain of \\(f\\). Since \\(f\\) is an invertible function, we know that:'], 
  ["displayFormula","\\[ f(f^{-1}(y))=y\\]"],
  ['pmain', 'Differentiate both sides:'], 
  ["displayFormula","\\[ \\frac{dy}{dy} = f'(f^{-1}(y)) * (f^{-1})'(y) \\]"],
  ['pmain', 'This means:'], 
  ["displayFormula","\\[ 1 = f'(f^{-1}(y)) * (f^{-1})'(y) \\]"],
  ['pmain', 'Rearranging:'], 
  ["displayFormula","\\[ (f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))} \\]"],
];
export default content;