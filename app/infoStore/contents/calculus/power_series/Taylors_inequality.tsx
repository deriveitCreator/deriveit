export const title="Proof of Taylor's inequality";
const content = [
  ['h1', 'Proof Of Taylor\'s Inequality'],
  ['pmain', 'In <a href="./Lagranges_Form_of_the_remainder">this proof</a>, we showed the Lagrange\'s form of the remainder:'],
  ["displayFormula","\\[ \\frac{f^{(n+1)}(c)}{(n+1)!} (x-a)^{n+1}= R_n(x)\\]"],
  ['pmain', 'Let there be some positive integer \\(M\\) such that \\(|f^{(n+1)}(x)| \\le M\\) for all \\(x \\in I\\) (including \\(c\\)):'],
  ["displayFormula","\\[\\begin{gather} |f^{(n+1)}(c)| \\le M \\\\ \\frac{|f^{(n+1)}(c)|}{(n+1)!} (x-a)^{n+1} \\le \\frac{M}{(n+1)!} (x-a)^{n+1} \\end{gather}\\]"],
  ['pmain', 'By definition of \\(R_n(x)\\):'],
  ["displayFormula","\\[ |R_n(x)| \\le \\frac{M}{(n+1)!} (x-a)^{n+1}\\]"],
];
export default content;

