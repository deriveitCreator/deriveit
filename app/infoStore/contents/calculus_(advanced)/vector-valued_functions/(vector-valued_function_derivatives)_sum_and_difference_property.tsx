export const title="(Vector-valued function derivatives) The sum and difference property";
const content = [
  ['h1', '(Vector-valued function derivatives) The Sum And Difference Property'],
  ['pmain', 'Let \\(\\textbf{r}(t)\\) and \\(\\textbf{u}(t)\\) be defined as follows:'], 
  ['displayFormula', '$$\\begin{align} \\textbf{r}(t) &= f(t)\\textbf{i} + g(t)\\textbf{j} \\\\ \\textbf{u}(t) &= h(t)\\textbf{i} + k(t)\\textbf{j} \\end{align}$$'],
  ['pmain', 'The derivatives are:'], 
  ['displayFormula', '$$\\begin{align} \\textbf{r} \' (t) &= \\lim_{\\Delta t \\to 0} \\frac{f(t + \\Delta t)\\textbf{i} + g(t + \\Delta t)\\textbf{j} - f(\\Delta t)\\textbf{i} - g(\\Delta t)\\textbf{j}}{\\Delta t} \\\\ \\textbf{u} \' (t) &= \\lim_{\\Delta t \\to 0} \\frac{h(t + \\Delta t)\\textbf{i} + k(t + \\Delta t)\\textbf{j} - h(\\Delta t)\\textbf{i} - k(\\Delta t)\\textbf{j}}{\\Delta t} \\end{align}$$'],
  ['pmain', 'If we add them:'], 
  ['displayFormula', '$$ \\textbf{r}(t) + \\textbf{u}(t) = f(t)\\textbf{i} +h(t)\\textbf{i}+ g(t)\\textbf{j} + k(t)\\textbf{j}$$'],
  ['pmain', 'By definition of derivatives:'], 
  ['displayFormula', '$$ \\frac{d}{dt} [ \\textbf{r}(t) + \\textbf{u}(t) ] = \\lim_{\\Delta t \\to 0} \\frac{[f(t+\\Delta t)\\textbf{i} +h(t+\\Delta t)\\textbf{i}+ g(t+\\Delta t)\\textbf{j} + k(t+\\Delta t)\\textbf{j}]-[f(t)\\textbf{i} +h(t)\\textbf{i}+ g(t)\\textbf{j} + k(t)\\textbf{j}]}{\\Delta t}$$'],
  ['pmain', 'Rearraning:'], 
  ['displayFormula', '$$ \\frac{d}{dt} [ \\textbf{r}(t) + \\textbf{u}(t) ] = \\lim_{\\Delta t \\to 0} \\frac{[f(t+\\Delta t)\\textbf{i} + g(t+\\Delta t)\\textbf{j} -f(t)\\textbf{i} - g(t)\\textbf{j}] + [h(t+\\Delta t)\\textbf{i} + k(t+\\Delta t)\\textbf{j}-h(t)\\textbf{i} - k(t)\\textbf{j}]}{\\Delta t}$$'],
  ['pmain', 'According to the sum property of limits:'], 
  ['displayFormula', '$$ \\frac{d}{dt} [ \\textbf{r}(t) + \\textbf{u}(t) ] = \\lim_{\\Delta t \\to 0} \\frac{f(t+\\Delta t)\\textbf{i}  + g(t+\\Delta t)\\textbf{j} -f(t)\\textbf{i} - g(t)\\textbf{j}}{\\Delta t} + \\lim_{\\Delta t \\to 0}\\frac{h(t+\\Delta t)\\textbf{i} + k(t+\\Delta t)\\textbf{j}-h(t)\\textbf{i} - k(t)\\textbf{j}}{\\Delta t}$$'],
  ['pmain', 'By definition of a limit:'], 
  ['displayFormula', '$$ \\frac{d}{dt} [ \\textbf{r}(t) + \\textbf{u}(t) ] = \\textbf{r}\'(t) + \\textbf{u}\'(t) $$'],
];
export default content;