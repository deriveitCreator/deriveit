export const title="Proof of the reduction formula for sec(x)";
const content = [
  ['h1', 'Proof Of The Reduction Formula For sec(x)'],
  ['pmain', 'Let\'s say we have this integral:'],
  ['displayFormula', '\\[\\int \\sec^n(x) \\ dx \\]'],
  ['pmain', 'We can rewrite this as:'],
  ['displayFormula', '\\[ \\int \\sec^{n-2}(x) \\sec^2(x) \\ dx \\]'],
  ['pmain', "Now we are going to use integration by parts. Let \\(u=\\sec^{n-2}(x) \\) and \\(v = \\tan(x) \\):"],
  ['displayFormula', '\\[ \\begin{aligned} u=\\sec^{n-2}(x) &\\implies du = (n-2) \\sec^{n-2}(x)\\tan(x) \\ dx \\\\ v = \\tan(x) &\\implies dv = \\sec^2(x) \\ dx \\end{aligned} \\]'],
  ['pmain', 'Substituting \\(u\\) and \\(v\\):'],
  ['displayFormula', '\\[uv - \\int v \\ du = \\sec^{n-2}(x)\\tan(x) - \\int (n-2) \\tan^2(x) \\sec^{n-2}(x) \\ dx \\]'],
  ['pmain', 'Since \\(\\tan^2(x) = \\sec^2(x) - 1\\):'],
  ['displayFormula', '\\[\\sec^{n-2}(x)\\tan(x) - \\int (n-2) (\\sec^2(x) - 1) \\sec^{n-2}(x) \\ dx \\]'],
  ['pmain', 'Simplifying:'],
  ['displayFormula', '\\[\\sec^{n-2}(x)\\tan(x) - (n-2) \\int (\\sec^n(x) - \\sec^{n-2}(x)) \\ dx \\]'],
  ['pmain', 'Now we end up with:'],
  ['displayFormula', '\\[\\int \\sec^n(x) \\ dx = \\sec^{n-2}(x)\\tan(x) - (n-2) \\int \\sec^n(x) \\ dx + (n-2) \\int \\sec^{n-2}(x) \\ dx \\]'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '\\[ (n-1) \\int \\sec^n(x) \\ dx = \\sec^{n-2}(x)\\tan(x) + (n-2) \\int \\sec^{n-2}(x) \\ dx \\]'],
  ['pmain', 'And this brings us to our last step:'],
  ['displayFormula', '\\[ \\int \\sec^n(x) \\ dx = \\frac{1}{(n-1)} \\sec^{n-2}(x)\\tan(x) + \\frac{(n-2)}{(n-1)} \\int \\sec^{n-2}(x) \\ dx \\]'],
];
export default content;