export const title="Antiderivative of arccosec(x)";
const content = [
  ['h1', 'Antiderivative Of Arccosec(x)'],
  ['pmain', 'What we are trying to find is:'],
  ['displayFormula', '\\[ \\int \\operatorname{arccosec}(x) \\ dx \\]'],
  ['pmain', 'If \\(y = \\operatorname{arccosec}(x)\\), then \\(\\operatorname{cosec}(y) = x\\). So:'],
  ['displayFormula', '\\[ \\frac{dx}{dy} = - \\operatorname{cosec}(y) \\cot(y) \\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\int \\operatorname{arccosec}(x) \\ dx = \\int y (- \\operatorname{cosec}(y) \\cot(y) \\ dy) \\]'],
  ['pmain', 'To evaluate this, we can use integration by parts:'],
  ['displayFormula', '\\[ \\int u \\ dv = uv - \\int v \\ du\\]'],
  ['pmain', 'Let\'s define \\(u\\) and \\(v\\):'],
  ['displayFormula', '\\[\\begin{gathered} u = y,\\ du= dy \\\\ v = \\operatorname{cosec}(y) ,\\ dv = \\operatorname{cosec}(y) \\cot(y) dy \\end{gathered}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[ \\int y (- \\operatorname{cosec}(y) \\cot(y) \\ dy) = y \\operatorname{cosec}(y) - \\int \\operatorname{cosec}(y) \\ dy\\]'],
  ['pmain', 'The integral of \\( \\operatorname{cosec}(y)\\) is derived <a href="./antiderivative_of_cosecant(x)">here</a>:'],
  ['displayFormula', '\\[ \\int y (- \\operatorname{cosec}(y) \\cot(y) \\ dy) = y \\operatorname{cosec}(y) + \\ln | \\operatorname{cosec}(y) + \\cot(y)| +C\\]'],
  ['pmain', 'Since \\(y = \\operatorname{arccosec}(x)\\):'],
  ['displayFormula', '\\[ \\int \\operatorname{arccosec}(x) \\ dx =  \\operatorname{arccosec}(x) x + \\ln |x + \\cot(y)| +C\\]'],
  ['pmain', 'Using the Pythagorean theorem, we can say:'],
  ['displayFormula', '\\[ \\begin{align} \\cot^2(y) &= \\operatorname{cosec}^2(y) -1 \\\\ \\cot(y) &= ±\\sqrt{x^2 -1} \\end{align} \\]'],
  ['pmain', 'Therefore:'],
  ['displayFormula', '\\[\\int \\operatorname{arccosec}(x) \\ dx =  \\operatorname{arccosec}(x) x + \\ln |x ±\\sqrt{x^2 -1}| +C\\]'],
  ['pmain', 'The range of \\(y=\\operatorname{arccosec}(x)\\) is \\([-\\frac{\\pi}{2},0) \\cup (0,\\frac{\\pi}{2}]\\). In a unit circle, \\(\\cot(y)\\) and \\(x=\\operatorname{cosec}(y)\\) are either both positive (when \\(y \\in (0,\\frac{\\pi}{2}]\\)) or both negative (when \\(y \\in [-\\frac{\\pi}{2},0) \\)).'],
  ['pmain', 'If \\(x\\), is negative, then \\(\\cot(y)\\) is also negative:'],
  ['displayFormula', '\\[\\begin{align} \\int \\operatorname{arccosec}(x) \\ dx &= \\operatorname{arccosec}(x) x + \\ln (-|x| -|\\sqrt{x^2 -1}|) +C \\\\ &= \\operatorname{arccosec}(x) x +\\ln (|x| + |\\sqrt{x^2 -1}|) +C \\end{align}\\]'],
  ['pmain', 'If \\(x\\), is positive, then \\(\\cot(y)\\) is also positive:'],
  ['displayFormula', '\\[ \\int \\operatorname{arccosec}(x) \\ dx = \\operatorname{arccosec}(x) x + \\ln (|x| + |\\sqrt{x^2 -1}|) +C\\]'],
  ['pmain', 'So for the entire domain:'],
  ['displayFormula', '\\[ \\int \\operatorname{arccosec}(x) \\ dx = \\operatorname{arccosec}(x) x + \\ln (|x| + |\\sqrt{x^2 -1}|) +C\\]'],
];
export default content;