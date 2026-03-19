export const title="Finding a formula for the alternating sum of Fibonacci numbers";
const content = [
  ['h1', 'Finding A Formula For The Alternating Sum Of Fibonacci Numbers'], 
  
  ['pmain', 'We want to find a formula for the sums:'], 
  ['displayFormula', '$$\\begin{align} &f_n - f_{n-1} + f_{n-2} - f_{n-3} + \\cdots - f_1 \\\\ \\text{and} \\quad &f_n - f_{n-1} + f_{n-2} - f_{n-3} + \\cdots + f_1 \\end{align}$$'],
  ['pmain', 'Let\'s consider the first case where \\(n\\) is even. The sum of the first even \\(m\\) Fibanacci numbers minus the first odd \\(m\\) Fibonacci numbers is:'],
  ['displayFormula', '$$ \\sum^m_{k=1} f_{2k} - \\sum^m_{k=1} f_{2k-1} = (f_{2m+1} - 1) - (f_{2m}) $$'],
  ['pmain', 'By definition, \\(f_{2m+1} = f_{2m} + f_{2m-1}\\):'], 
  ['displayFormula', '$$\\begin{align} \\sum^m_{k=1} f_{2k} - \\sum^m_{k=1} f_{2k-1} &= (f_{2m+1} - f_{2m}) - 1 \\\\ &= (f_{2m-1}) - 1 \\end{align}$$'],
  ['pmain', 'If there are \\(m\\) even terms and \\(m\\) odd terms, then there are \\(2m\\) terms in total. Let \\(n = 2m\\):'],
  ['displayFormula', '$$\\begin{align} \\sum^{n/2}_{k=1} f_{2k} - \\sum^{n/2}_{k=1} f_{2k-1} = (f_{n-1}) - 1 \\end{align}$$'],
  ['pmain', 'This solves the first case when \\(n\\) is even. Now let \\(n\\) be odd:'],
  ['displayFormula', '$$f_n - f_{n-1} + f_{n-2} - f_{n-3} + \\cdots + f_1 $$'],
  ['pmain', 'We can rewrite the above as:'],
  ['displayFormula', '$$f_n - (f_{n-1} - f_{n-2} + f_{n-3} - \\cdots - f_1) $$'],
  ['pmain', 'Let \\(k=n-1\\). If \\(n\\) is odd, then \\(k\\) is even:'],
  ['displayFormula', '$$f_n - (f_k - f_{k-1} + f_{k-2} - \\cdots - f_1) $$'],
  ['pmain', 'We have already solved the even case:'],
  ['displayFormula', '$$\\begin{gather} f_n - (f_{k-1}-1) \\\\ f_n - (f_{n-2}-1) \\\\ (f_n - f_{n-2})+1 \\end{gather}$$'],
  ['pmain', 'Since \\(f_n = f_{n-1} + f_{n-2}\\):'],
  ['displayFormula', '$$(f_n - f_{n-2})+1 = f_{n-1}+1$$'],
  ['pmain', 'This shows that the formula for alternating sum of Fibonacci numbers is:'],
  ['displayFormula', '$$ f_{n-1} - (-1)^n $$'],

];
export default content;