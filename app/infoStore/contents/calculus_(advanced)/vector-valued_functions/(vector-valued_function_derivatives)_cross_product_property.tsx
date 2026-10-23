export const title="(Vector-valued function derivatives) The cross product property";
const content = [
  ['h1', '(Vector-valued function derivatives) The Cross Product Property'],
  ['pmain', 'Let \\(\\textbf{r}(t)\\) and \\(\\textbf{u}(t)\\) be defined as follows:'], 
  ['displayFormula', '$$\\begin{align} \\textbf{r}(t) &= f(t)\\textbf{i} + g(t)\\textbf{j} + h(t)\\textbf{k} \\\\ \\textbf{u}(t) &= l(t)\\textbf{i} + m(t)\\textbf{j}+ n(t)\\textbf{k} \\end{align}$$'],
  ['pmain', 'The cross product is:'], 
  ['displayFormula', '$$\\begin{gather} \\textbf{r}(t) \\times \\textbf{u}(t) \\\\ = [g(t)n(t)-m(t)h(t)]\\textbf{i} - [f(t)n(t)-l(t)h(t)]\\textbf{j}+ [f(t)m(t)-l(t)g(t)]\\textbf{k} \\\\ = g(t)n(t)\\textbf{i}-m(t)h(t)\\textbf{i} - f(t)n(t)\\textbf{j}+l(t)h(t)\\textbf{j}+ f(t)m(t)\\textbf{k}-l(t)g(t)\\textbf{k}\\end{gather}$$'],
  ['pmain', 'Taking the derivative of this:'], 
  ['displayFormula', "$$\\begin{gather} g'(t)n(t)\\textbf{i}+g(t)n'(t)\\textbf{i} - m'(t)h(t)\\textbf{i} - m(t)h'(t)\\textbf{i} \\\\ - f'(t)n(t)\\textbf{j} - f(t)n'(t)\\textbf{j} + l'(t)h(t)\\textbf{j} + l(t)h'(t)\\textbf{j} \\\\ + f'(t)m(t)\\textbf{k} + f(t)m'(t)\\textbf{k} - l'(t)g(t)\\textbf{k} - l(t)g'(t)\\textbf{k} \\end{gather}$$"],
  ['pmain', 'Rearraning:'], 
  ['displayFormula', "$$\\begin{gather} g'(t)n(t)\\textbf{i}- m(t)h'(t)\\textbf{i} - f'(t)n(t)\\textbf{j} + l(t)h'(t)\\textbf{j}  + f'(t)m(t)\\textbf{k}- l(t)g'(t)\\textbf{k}\\\\+ g(t)n'(t)\\textbf{i} - m'(t)h(t)\\textbf{i} - f(t)n'(t)\\textbf{j} + l'(t)h(t)\\textbf{j} + f(t)m'(t)\\textbf{k} - l'(t)g(t)\\textbf{k} \\end{gather}$$"],
  ['pmain', 'Or:'], 
  ['displayFormula', "$$\\begin{vmatrix}\\textbf{i} & \\textbf{j} & \\textbf{k} \\\\ f'(t) & g'(t) & h'(t) \\\\ l(t) & m(t) & n(t) \\end{vmatrix} + \\begin{vmatrix}\\textbf{i} & \\textbf{j} & \\textbf{k} \\\\ f(t) & g(t) & h(t) \\\\ l'(t) & m'(t) & n'(t) \\end{vmatrix}$$"],
  ['pmain', 'This means:'], 
  ['displayFormula', '$$\\frac{d}{dt} [\\textbf{r}(t) \\times \\textbf{u}(t)] = (\\textbf{r}\'(t) \\times \\textbf{u}(t)) + (\\textbf{r}(t) \\times \\textbf{u}\'(t)) $$'],
];
export default content;