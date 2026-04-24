export const title="F_0 F_1 ... F_{n-1} + 2 = F_n";
const content = [
  ['h1', 'F<sub>0</sub>F<sub>1</sub>...F<sub>n-1</sub> + 2 = F<sub>n</sub>'],
  ['pmain','We can use induction to prove this. We already know the first five fermat numbers:'],
  ['displayFormula','$$\\begin{gather} F_0 = 3 \\\\ F_1 = 5 \\\\ F_2= 17 \\\\ F_3 = 257 \\end{gather}$$'],
  ['pmain','The statement we are trying to prove is:'],
  ['displayFormula','$$ F_0 F_1 F_2 \\cdots F_{n-1} + 2 = F_n$$'],
  ['pmain','We know that this statement is true when \\(n \\le 3\\). This means if \\(n \\le 3\\):'],
  ['displayFormula','$$\\begin{align} F_0 F_1 F_2 \\cdots F_{n-1} F_n &= (F_0 F_1 F_2 \\cdots F_{n-1}) F_n \\\\ &= (F_n - 2) F_n \\\\ &= (2^{2^n} -1)(2^{2^n}+1) \\\\ &= 2^{(2* 2^n)} - 1 = 2^{2^{n+1}} + 1 -2 \\\\ &= F_{n+1} - 2 \\end{align}$$'],
  ['pmain','This shows if the statement if true for \\(n\\), then it would be true for \\(n+1\\).'],
];
export default content;