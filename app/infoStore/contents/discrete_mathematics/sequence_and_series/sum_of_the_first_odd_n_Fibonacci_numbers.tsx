export const title="Finding a formula for the first odd n Fibonacci numbers";
const content = [
  ['h1', 'Finding A Formula For The First Odd n Fibonacci Numbers'], 
  
  ['pmain', 'Here are the sums of the first few odd Fibonacci numbers:'], 
  ['displayFormula', '$$\\begin{align} &f_1=1 \\\\ &f_1 + f_3 = 3 \\\\ &f_1 + f_3 + f_5 = 8 \\\\ &f_1 + f_3 +f_5 + f_7 = 21 \\end{align}$$'], 
  ['pmain', 'And here are the first few even Fibonacci numbers:'], 
  ['displayFormula', '$$\\begin{align} f_2 &=1 \\\\ f_4 &= 3 \\\\ f_6 &= 8 \\\\ f_8 &= 21 \\end{align}$$'], 
  ['pmain', 'This seems to suggest that:'], 
  ['displayFormula', '$$ \\sum^n_{k=1} f_{2k-1} = f_{2n} $$'],
  ['pmain', 'To prove the above statment for all cases, we can use proof by induction. We already have some base cases. Now we need the induction step:'],  
  ['displayFormula', '$$\\begin{align} \\sum^{n+1}_{k=1} f_{2k-1} &= \\sum^n_{k=1} f_{2k-1} + f_{2(n+1)-1} \\\\ &= f_{2n} + f_{2n+1} \\end{align}$$'],
  ['pmain', 'By definition \\(f_{2n-1} = f_{2n} + f_{2n+1}\\). This means:'],  
  ['displayFormula', '$$\\begin{align} \\sum^{n+1}_{k=1} f_{2k-1} &= f_{2n-1} \\\\ &= f_{2(n+1)-1} \\end{align}$$'],
  ['pmain', 'This shows that our statement works for \\(n+1\\) as well.'],  
];
export default content;