export const title="Finding a formula for the first even n Fibonacci numbers";
const content = [
  ['h1', 'Finding A Formula For The First Even n Fibonacci Numbers'], 
  
  ['pmain', 'Here are the sums of the first few even Fibonacci numbers:'], 
  ['displayFormula', '$$\\begin{align} &f_2=2 \\\\ &f_2 + f_4 = 4 \\\\ &f_2 + f_4 + f_6 = 12 \\\\ &f_2 + f_4 +f_6 + f_8 = 33 \\end{align}$$'], 
  ['pmain', 'And here are the first few odd Fibonacci numbers:'], 
  ['displayFormula', '$$\\begin{align} f_1 &=1 \\\\ f_3 &= 2 \\\\ f_5 &= 5 \\\\ f_7 &= 13 \\\\ f_9 &= 34 \\end{align}$$'], 
  ['pmain', 'This seems to suggest that:'], 
  ['displayFormula', '$$ \\sum^n_{k=1} f_{2k} = f_{2n+1} - 1 $$'],
  ['pmain', 'The sum of the first odd \\(n\\) Fibonacci numbers (derived <a href="./sum_of_the_first_odd_n_Fibonacci_numbers">here</a>) is:'],
  ['displayFormula', '$$\\sum^n_{k=1} f_{2k-1} = f_{2n}$$'],
  ['pmain', 'The sum of the first \\(n\\) Fibonacci numbers (derived <a href="./sum_of_the_first_n_Fibonacci_numbers">here</a>) is:'],
  ['displayFormula', '$$\\sum^n_{k=1} f_k = f_{n+2} - 1$$'],
  ['pmain', 'The sum of the first \\(n\\) even and the first \\(n\\) odd Fibonacci numbers can be written as:'],
  ['displayFormula', '$$\\begin{align}\\sum^{n}_{k=1} f_{2k-1} + \\sum^{n}_{k=1} f_{2k} &= \\sum^{2n}_{k=1} f_k \\\\ f_{2n} + \\sum^{n}_{k=1} f_{2k} &= f_{2n+2} - 1 \\end{align}$$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '$$\\begin{align} \\sum^{n}_{k=1} f_{2k} &= f_{2n+2} - f_{2n} - 1 \\\\ \\sum^{n}_{k=1} f_{2k} &= f_{2n+1} - 1\\end{align}$$'],
];
export default content;