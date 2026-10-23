export const title="(Vector-valued function derivatives) The scalar product property";
const content = [
  ['h1', '(Vector-valued function derivatives) The Scalar Product Property'],
  ['pmain', 'Let \\(\\textbf{u}(t)\\) be defined as follows:'], 
  ['displayFormula', '$$\\textbf{u}(t) = h(t)\\textbf{i} + k(t)\\textbf{j} $$'],
  ['pmain', 'The derivative of \\(f(t)\\textbf{u}(t)\\) is:'], 
  ['displayFormula', '$$\\begin{align} \\frac{d}{dt} f(t) \\textbf{u}(t) &= \\frac{d}{dt} [f(t)h(t)\\textbf{i} + f(t)k(t)\\textbf{j}] \\\\ &= \\frac{d}{dt} f(t)[h(t)\\textbf{i} + k(t)\\textbf{j}]  \\end{align}$$'],
  ['pmain', 'According to the sum property of derivatives:'], 
  ['displayFormula', '$$ \\frac{d}{dt} f(t) \\textbf{u}(t) = \\frac{d}{dt} [f(t)h(t)]\\textbf{i} + \\frac{d}{dt} [f(t)k(t)]\\textbf{j} $$'],
  ['pmain', 'According to the product rule of derivatives:'], 
  ['displayFormula', "$$ \\frac{d}{dt} f(t) \\textbf{u}(t) = \\frac{d}{dt} [f'(t)h(t)+f(t)h'(t)]\\textbf{i} + \\frac{d}{dt} [f'(t)k(t)+f(t)k'(t)]\\textbf{j} $$"],
  ['pmain', 'Rearranging:'], 
  ['displayFormula', "$$\\begin{align} \\frac{d}{dt} f(t) \\textbf{u}(t) &= f'(t)h(t)\\textbf{i}+f(t)h'(t)\\textbf{i} + f'(t)k(t) \\textbf{j}+f(t)k'(t)\\textbf{j} \\\\ &= f'(t)[h(t)\\textbf{i} + k(t) \\textbf{j}] + f(t)[ h'(t)\\textbf{i}+k'(t)\\textbf{j}]\\end{align}$$"],
  ['pmain', 'This means'], 
  ['displayFormula', "$$\\begin{align} \\frac{d}{dt} f(t) \\textbf{u}(t) &= f'(t)h(t)\\textbf{i}+f(t)h'(t)\\textbf{i} + f'(t)k(t) \\textbf{j}+f(t)k'(t)\\textbf{j} \\\\ &= f'(t)\\textbf{u}(t)+ f(t)\\textbf{u}'(t)\\end{align}$$"],
];
export default content;