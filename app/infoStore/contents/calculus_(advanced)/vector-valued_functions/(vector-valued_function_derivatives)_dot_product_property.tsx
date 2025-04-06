export const title="(Vector-valued function derivatives) The dot product property";
const content = [
  ['h1', '(Vector-valued function derivatives) The Dot Product Property'],
  ['pmain', 'Let \\(\\textbf{r}(t)\\) and \\(\\textbf{u}(t)\\) be defined as follows:'], 
  ['displayFormula', '$$\\begin{align} \\textbf{r}(t) &= f(t)\\textbf{i} + g(t)\\textbf{j} \\\\ \\textbf{u}(t) &= h(t)\\textbf{i} + k(t)\\textbf{j} \\end{align}$$'],
  ['pmain', 'The dot product is:'], 
  ['displayFormula', '$$\\textbf{r}(t) \\cdot \\textbf{u}(t) = f(t)h(t) + g(t)k(t)$$'],
  ['pmain', 'The derivative of \\(\\textbf{r}(t) \\cdot \\textbf{u}(t)\\) is:'], 
  ['displayFormula', "$$\\begin{align}\\textbf{r}(t) \\cdot \\textbf{u}(t) &= \\frac{d}{dt} [f(t)h(t) + g(t)k(t)] \\\\ &= [f'(t)h(t) +f(t)h'(t) + g'(t)k(t) + g(t)k'(t)] \\end{align}$$"],
  ['pmain', 'Rearraning:'], 
  ['displayFormula', "$$\\textbf{r}(t) \\cdot \\textbf{u}(t) = [f'(t)h(t)+ g'(t)k(t)]+[f(t)h'(t) + g(t)k'(t)]$$"],
  ['pmain', 'According to the definition of a dot product:'], 
  ['displayFormula', "$$\\begin{align} \\textbf{r}(t) \\cdot \\textbf{u}(t) &= [\\langle f'(t), g'(t) \\rangle \\cdot \\langle h(t),k(t) \\rangle]+[\\langle f(t), g(t) \\rangle \\cdot \\langle h'(t),k'(t) \\rangle] \\\\ &= [\\textbf{r}'(t) \\cdot \\textbf{u}(t)]+[\\textbf{r}(t) \\cdot \\textbf{u}'(t)] \\end{align}$$"],
];
export default content;