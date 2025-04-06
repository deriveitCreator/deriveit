export const title="(Vector-valued function derivatives) The chain product property";
const content = [
  ['h1', '(Vector-valued function derivatives) The Chain Product Property'],
  ['pmain', 'Let \\(\\textbf{r}(t)\\) be defined as follows:'], 
  ['displayFormula', '$$ \\textbf{r}(t) = f(t)\\textbf{i} + g(t)\\textbf{j} + h(t)\\textbf{k} $$'],
  ['pmain', 'The derivative is:'], 
  ['displayFormula', '$$ \\frac{d}{dt} \\textbf{r}(t) = f\'(t)\\textbf{i} + g\'(t)\\textbf{j} + h\'(t)\\textbf{k} $$'],
  ['pmain', 'If we use \\(m(t)\\) instead of \\(t\\):'], 
  ['displayFormula', '$$ \\frac{d}{d \\ m(t)} \\textbf{r}(m(t)) = f\'(m(t))\\textbf{i} + g\'(m(t))\\textbf{j} + h\'(m(t))\\textbf{k} $$'],
  ['pmain', 'If we want to derivative with respect to \\(t\\), we will have to use the chain rule:'], 
  ['displayFormula', '$$\\begin{align} \\frac{d}{d t} \\textbf{r}(m(t)) &= f\'(m(t))m\'(t)\\textbf{i} + g\'(m(t))m\'(t)\\textbf{j} + h\'(m(t))m\'(t)\\textbf{k} \\\\ &= (f\'(m(t))\\textbf{i} + g\'(m(t))\\textbf{j} + h\'(m(t))\\textbf{k}) m\'(t) \\end{align}$$'],
  ['pmain', 'This means:'], 
  ['displayFormula', '$$ \\frac{d}{d t} \\textbf{r}(m(t)) = \\textbf{r}\'(m(t)) m\'(t) $$'],
];
export default content;