export const title="Equation of a tangent line (width derivatives)";
const content = [
  ['h1', 'Equation of a tangent line'],
  ['pmain', 'Let \\(f(x)\\) be a function differentiable at \\(a\\):'],
  ['displayimg', 't1.png'],
  ['pmain', 'The derivative of \\(f(x)\\) at \\(a\\) is \\(f\'(a)\\). Since the equation of a line is \\(y=mx+c\\), then we can define the tangent line like this:'],
  ['displayFormula', '\\[y=f\'(a)x + c\\]'],
  ['pmain', 'What about \\(c\\) though? Since the tangent line touches \\(f(x)\\) at \\(a\\), then:'],
  ['displayFormula', '\\[\\begin{gather} f(a)=f\'(a) a + c \\\\ \\therefore c = f(a) - f\'(a) a \\end{gather}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\begin{gather} y = f\'(a)x + f(a) - f\'(a)a \\\\ y = f(a) + f\'(a)(x - a) \\end{gather}\\]'],
  ['pmain', 'This is the equation of our tangent line.'],
  ['displayimg', 't2.png'],
];
export default content;