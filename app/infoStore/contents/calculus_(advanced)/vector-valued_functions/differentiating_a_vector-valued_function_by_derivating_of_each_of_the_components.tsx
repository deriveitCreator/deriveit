export const title="Differentiating a vector-valued function by derivating of each of the components";
const content = [
  ['h1', 'Differentiating A Vector-Valued Function By Derivating Of Each Of The Components'],
  ['pmain', 'Let the vector-valued function \\(\\textbf{r}(t)\\) be defined as:'], 
  ['displayFormula', '$$ \\textbf{r}(t) = f(t)\\textbf{i} + g(t)\\textbf{j} $$'],
  ['pmain', 'The derivative of \\(\\textbf{r}(t)\\) is defined as:'], 
  ['displayFormula', '$$\\textbf{r} \' (t) = \\lim_{\\Delta t \\to 0} \\frac{\\textbf{r}(t+\\Delta t) - \\textbf{r}(t)}{\\Delta t}$$'],
  ['pmain', 'Expanding \\(\\textbf{r}(t)\\):'], 
  ['displayFormula', '$$\\textbf{r} \' (t) = \\lim_{\\Delta t \\to 0} \\frac{f(t + \\Delta t)\\textbf{i} + g(t + \\Delta t)\\textbf{j} - f(\\Delta t)\\textbf{i} - g(\\Delta t)\\textbf{j}}{\\Delta t}$$'],
  ['pmain', 'Rearraning:'],
  ['displayFormula', '$$\\textbf{r} \' (t) = \\lim_{\\Delta t \\to 0} \\frac{f(t + \\Delta t)\\textbf{i} - f(t)\\textbf{i}}{\\Delta t} + \\lim_{\\Delta t \\to 0} \\frac{g(t + \\Delta t)\\textbf{j} - g(t)\\textbf{j}}{\\Delta t}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\textbf{r} \' (t) = \\left( \\lim_{\\Delta t \\to 0} \\frac{f(t + \\Delta t) - f(t)}{\\Delta t} \\right) \\textbf{i} + \\left( \\lim_{\\Delta t \\to 0}  \\frac{g(t + \\Delta t) - g(t)}{\\Delta t} \\right) \\textbf{j}$$'],
  ['pmain', 'By definition of a derivative:'],
  ['displayFormula', '$$\\textbf{r} \' (t) = f\'(t) \\textbf{i} + g\'(t) \\textbf{j}$$'],
  ['pmain', 'A similar argument can be made for three dimensional vectors.'],
];
export default content;