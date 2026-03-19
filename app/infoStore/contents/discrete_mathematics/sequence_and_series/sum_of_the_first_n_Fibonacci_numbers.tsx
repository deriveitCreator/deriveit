export const title="Finding a formula for the first n Fibonacci numbers";
const content = [
  ['h1', 'Finding A Formula For The First n Fibonacci Numbers'], 
  
  ['pmain', 'The first two Fibonacci numbers (\\(f_1\\) and \\(f_2\\)) are both 1, while \\(f_n = f_{n-1} + f_{n-2}\\) for \\(n \\ge 3\\). The first twelve terms are:'], 
  ['displayFormula', '\\begin{align} &1, &&1, &&2, &&3 \\\\ &5, &&8, &&13, &&21, \\\\ &34, &&55, &&89, &&144 \\end{align}'], 
  ['pmain', "The sum of the first \\(n\\) Fibonacci numbers are shown below:"],
  ['displayFormula', '\\begin{align} &1, &&2, &&4, &&7 \\\\ &12, &&20, &&33, &&54, \\\\ &88, &&143, &&232, &&376 \\end{align}'], 
  ['pmain', "We are trying to find a formula for the sum of the first \\(n\\) Fibonacci numbers:"],
  ['displayFormula', '$$ \\sum^n_{k=1} f_k $$'], 
  ['pmain', "Since \\(f_n = f_{n-1} + f_{n-2}\\), we can rewrite this as \\(f_{n+2} = f_{n+1} + f_n\\), or \\(f_n = f_{n+2} - f_{n+1}\\). This means:"],
  ['displayFormula', '\\begin{align} \\sum^n_{k=1} f_k &= \\sum^n_{k=1} (f_{k+2} - f_{k+1}) \\\\ &= \\sum^n_{k=1} f_{k+2} - \\sum^n_{k=1} f_{k+1} \\end{align}'], 
  ['pmain', "Expanding:"],
  ['displayFormula', '$$ \\sum^n_{k=1} f_k = (f_3 + f_4 + f_5 + \\cdots + f_{n+1} + f_{n+2}) - (f_2 + f_3 + f_4 + f_5 + \\cdots + f_{n+1}) $$'], 
  ['pmain', "Most of the terms cancel out:"],
  ['displayFormula', '$$ \\sum^n_{k=1} f_k = f_{n+2} - f_2 $$'], 
  ['pmain', "This shows that the sum of the first \\(n\\) Fibonacci numbers is just the value of \\(f_{n+2} - f_2\\), or \\(f_{n+2} - 1\\)."],
  ['pmain', "If the first two Fibonacci numbers were \\(f_1=7\\) and \\(f_2=4\\), then the rest of the terms would be 11, 15, 26, 41, 67, 108, 175, 283, ..., and the formula for the sum would be \\([f_{n+2} - 4]\\):"],
  ['displayFormula', '\\begin{gather} 7, 11, 22, 37, \\\\ 63, 104, 171, 279 \\end{gather}'], 
];
export default content;