export const title="Proof of the reduction formula for tan(x)";
const content = [
  ['h1', 'Proof Of The Reduction Formula For tan(x)'],
  ['pmain', 'Let\'s say we have this integral:'],
  ['displayFormula', '\\[\\int \\tan^n(x) \\ dx \\]'],
  ['pmain', 'We can rewrite this as:'],
  ['displayFormula', '\\[ \\int \\tan^{n-2}(x) \\tan^2(x) \\ dx \\]'],
  ['pmain', 'Since \\(\\tan^2(x) = \\sec^2(x) - 1\\):'],
  ['displayFormula', '\\[ \\int \\tan^{n-2}(x) (\\sec^2(x) - 1) \\ dx = \\int \\tan^{n-2}(x) \\sec^2(x) \\ dx - \\int \\tan^{n-2}(x) \\ dx \\]'],
  ['pmain', 'For now let\'s focus on just \\(\\int \\tan^{n-2}(x) \\sec^2(x) \\ dx\\). We can use integration by parts to evaluate this. Let \\(u = \\tan^{n-2}(x)\\) and \\(v = \\tan(x)\\):'],
  ['displayFormula', '\\[ \\begin{aligned} u=\\tan^{n-2}(x) &\\implies du = (n-2) \\tan^{n-3}(x)\\sec^2(x) \\ dx \\\\ v = \\tan(x) &\\implies dv = \\sec^2(x) \\ dx \\end{aligned} \\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\int \\tan^{n-2}(x) \\sec^2(x) \\ dx = \\tan^{n-1}(x) - \\int (n-2) \\tan^{n-2}(x)\\sec^2(x) \\ dx \\]'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '\\[\\int \\tan^{n-2}(x) \\sec^2(x) \\ dx = \\frac{1}{(n-1)} \\tan^{n-1}(x) \\]'],
  ['pmain', 'Going back to our main integral:'],
  ['displayFormula', '\\[\\begin{aligned} \\int \\tan^{n-2}(x) (\\sec^2(x) - 1) \\ dx &= \\int \\tan^{n-2}(x) \\sec^2(x) \\ dx - \\int \\tan^{n-2}(x) \\ dx \\\\ \\int \\tan^n(x) \\ dx &= \\frac{1}{(n-1)} \\tan^{n-1}(x) - \\int \\tan^{n-2}(x) \\ dx \\end{aligned}\\]'],
];
export default content;