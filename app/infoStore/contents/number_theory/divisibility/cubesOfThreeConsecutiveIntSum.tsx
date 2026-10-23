export const title="Proof that cubes of three consecutive integers is divisible by 9";
const content = [
  ['h1', 'Proof That Cubes Of Three Consecutive Integers Is Divisible By 9'],
  ['pmain', 'We need to show that the sum of the cubes \\(n-1\\), \\(n\\) and \\(n+1\\) is divisible by 9. We will use mathematical induction to prove this. Consider the integers -1, 0 and 1. If we sum their cubes:'], 
  ['displayFormula', '$$\\begin{gather} (-1)^3 + 0^3 + 1^3 = \\\\ -1 + 0 + 1 = 0 \\end{gather}$$'],
  ['pmain', 'This shows that the sum of the cubes of \\(n-1\\), \\(n\\) and \\(n+1\\) is divisible by 9 when \\(n=0\\).'],
  ['pmain', 'Now consider \\((n+k)^3\\):'],
  ['displayFormula', '$$ (n+k)^3 = n^3 + 3kn^2 + 3nk^2 + k ^3 $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\begin{align} k = -1 &\\implies n^3 - 3n^2 + 3n -1 \\\\ k=0 &\\implies n^3 \\\\ k = 1 &\\implies n^3 + 3n^2 + 3n + 1 \\end{align}$$'],
  ['pmain', 'Summing them we get:'],
  ['displayFormula', '$$ (n-1)^3 + n^3 + (n+1)^3 = 3n^3 + 6n $$'],
  ['pmain', 'Let\'s call this expression \\(f(n)\\):'],
  ['displayFormula', '$$ f(n) = 3n^3 + 6n $$'],
  ['pmain', 'We have already shown that \\(f(n)\\) is divisible by 9 when \\(n=0\\). Now replace \\(n\\) with \\(n+1\\):'],
  ['displayFormula', '$$\\begin{align} f(n+1) &= 3(n+1)^3 + 6(n+1) \\\\ &= 3(n^3+3n^2+3n+1) + 6(n+1) \\\\ &= 3n^3+9n^2+9n+3 + 6n+6 \\\\ &= (3n^3+6n)+9n^2+ 9n + 9 \\\\ &= f(n) + 9n^2+ 9n + 9 \\end{align}$$'],
  ['pmain', 'We know that \\((9n^2+ 9n + 9)\\) is divisible by 9 because all the terms have a factor of 9. This means if \\(f(n)\\) is divisible by 9, then so it \\(f(n+1)\\). Since \\(f(0)\\) is divisible by 9, then so is \\(f(1)\\). Since \\(f(1)\\) is divisible by 9, then so is \\(f(2)\\), and so on.'],
  ['pmain', 'We have proved that \\(f(n)\\) is divisible by 9 for \\(n \\ge 0\\). Now let\'s focus on the negative integers. Replace \\(n\\) with \\(n-1\\):'],
  ['displayFormula', '$$\\begin{align} f(n-1) &= 3(n-1)^3 + 6(n-1) \\\\ &= 3(n^3-3n^2+3n-1) + 6(n-1) \\\\ &= 3n^3-9n^2+9n-3 + 6n-6 \\\\ &= (3n^3+6n)-9n^2+ 9n -9 \\\\ &= f(n) - 9n^2+ 9n -9 \\end{align}$$'],
  ['pmain', 'If \\(f(n)\\) is divisible by 9, then \\(f(n-1)=f(n) - 9n^2+ 9n -9\\) is divisible by 9 aswell. Since \\(f(0)\\) is divisible by 9, then so is \\(f(-1)\\). Since \\(f(-1)\\) is divisible by 9, then so in \\(f(-2)\\), and so on. Therefore, \\(f(n)\\) is divisible by 9 for all negative integers.'],
];
export default content;