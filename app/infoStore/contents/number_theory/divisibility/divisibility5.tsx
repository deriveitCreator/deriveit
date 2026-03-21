export const title="There are [x/d] positive integers that are ≤ x (where x ∈ Z<sup>+</sup>) and divisible by d";
const content = [
  ['h1', 'There Are [x/d] Positive Integers That Are ≤ x (Where x ∈ Z<sup>+</sup>) And Divisible By d'],

  ['pmain', 'Let \\(n_{x,d}\\) be the set of positive integers where all integers are less than \\(x\\) and divisible by \\d(\\).'],
  ['displayFormula', '$$ \\begin{align} n_{40,3} = \\{3,6,9,12,\\ldots,,36,39\\} \\\\ n_{100,5} = \\{5,10,15,20,\\ldots,100\\} \\\\ n_{101,5} = \\{5,10,15,20,\\ldots,100\\} \\end{align} $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ n_{x,d} = \\{(1)d, (2)d, (3)d, \\ldots (k)d\\} $$'],
  ['pmain', 'where \\(k\\) is the largest integer where \\(kd\\) is in the set. It is easy to understand that there are \\(k\\) integers in this set. Since all elements are less than or equal to \\(x\\):'],
  ['displayFormula', '$$\\begin{gather} kd \\le x \\\\ k \\le \\frac{x}{d} \\end{gather} $$'],
  ['pmain', 'This means \\(k\\) is the largest integer less than or equal to \\(\\frac{x}{d}\\), which also means:'],
  ['displayFormula', '$$ k = \\left[ \\frac{x}{d} \\right] $$'],
  ['pmain', 'In other words, the number of integers less than or equal to \\(x\\) that are divisible \\(d\\) is \\([x/d]\\).'],

];
export default content;