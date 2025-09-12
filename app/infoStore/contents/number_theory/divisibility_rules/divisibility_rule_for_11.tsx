export const title="An integer is divisble by 11 if the integer obtained by alternately adding and substracting the digits is divisible by 11";
const content = [
  ['h1', 'An Integer Is Divisible By 11 If Ihe Integer Obtained By Alternately Adding And Substracting The Digits Is Divisible By 11'],
  ['pmain', 'Suppose an integer \\(n\\) has \\(k\\) digits and let \\(a_k\\) be the \\(k\\)th digit. We can represent \\(n\\) like this:'],
  ['displayFormula', '$$\\begin{align} n &= a_1 + a_2 10^1 + a_3 10^2 + a_4 10^3 + a_5 10^4 + a_6 10^5 + \\cdots \\\\ n &= (a_1 + a_3 10^2 + a_5 10^4 + a_7 10^6 + \\cdots) + (a_2 10 + a_4 10^3 + a_6 10 ^5 + \\cdots) \\end{align}$$'],
  ['pmain', 'Before going any further, I am going to make two claims.'],
  ['pmain', '<b><u>Claim 1:</u></b> An integer made of even number of 9\'s is divisible by 11:'],
  ['displayFormula', '$$\\begin{align} 11 &| 99 \\\\ 11 &| 9999 &&\\text{ because } 11 | 99 \\implies 11| 9900 \\implies 11 | (9900 + 99) \\\\ 11 &| 999999 &&\\text{ because } 11 | 9999 \\implies 11| 999900 \\implies 11 | (999900 + 99) \\end{align}$$'],
  ['pmain', '<b><u>Claim 2:</u></b> An integer with even digits in the form of \\(10\\ldots01\\) (like 1001 or 100001) is divisible by 11:'],
  ['displayFormula', '$$\\begin{align} 11 &| 99 &&\\implies 11 |990 && \\implies 11 |990+11 && \\implies 11 |1001 \\\\ 11 & | 9999 && \\implies 11 |99990 && \\implies 11 |99990+11 && \\implies 11 |100001\\\\ 11 & | 999999 && \\implies 11 | 9999990 && \\implies 11 |9999990+11 && \\implies 11 |10000001 \\end{align}$$'],
  ['pmain', 'Now let\'s divide \\(n\\) by 11:'],
  ['displayFormula', '$$\\frac{n}{11} = \\frac{(a_1 + a_3 10^2 + a_5 10^4 + a_7 10^6 + \\cdots)}{11} + \\frac{(a_2 10 + a_4 10^3 + a_6 10 ^5 + \\cdots)}{11}$$'],
  ['pmain', 'Since \\((10^k = 99\\ldots +1)\\), where \\((99\\ldots)\\) has \\(k\\) digits:'],
  ['displayFormula', '$$\\frac{n}{11} = \\frac{(a_3 99 + a_5 9999 + a_7 999999 + \\cdots)}{11} + \\frac{(a_1 + a_3 + a_5 +  \\cdots)}{11} + \\frac{(a_2 10 + a_4 10^3 + a_6 10 ^5 + \\cdots)}{11}$$'],
  ['pmain', 'Using claim 1, there exists an integer \\(h\\) such that:'],
  ['displayFormula', '$$\\frac{n}{11} = h + \\frac{(a_1 + a_3 + a_5 + \\cdots)}{11} + \\frac{(a_2 10 + a_4 10^3 + a_6 10^5 + \\cdots)}{11}$$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '$$\\begin{gather} \\frac{n}{11} = h + \\frac{(a_1 + a_3 + a_5 + \\cdots)}{11} + \\frac{(a_2 10 + a_4 1000 + a_6 100000 + \\cdots)}{11} \\\\ \\frac{n}{11} = h + \\frac{(a_1 + a_3 + a_5 + \\cdots)}{11} + \\frac{(a_2 11 + a_4 1001 + a_6 100001 + \\cdots)}{11} - \\frac{(a_2 + a_4 + a_6 + \\cdots)}{11} \\end{gather}$$'],
  ['pmain', 'Using claim 2, there exists an integer \\(j\\) such that:'],
  ['displayFormula', '$$\\begin{gather} \\frac{n}{11} = h + \\frac{(a_1 + a_3 + a_5 + \\cdots)}{11} + j - \\frac{(a_2 + a_4 + a_6 + \\cdots)}{11} \\\\ \\frac{n}{11} = h + j + \\frac{(a_1 - a_2 + a_3 - a_4 + a_5 - a_6 + \\cdots)}{11} \\end{gather}$$'],
  ['pmain', 'This means \\(\\frac{n}{11}\\) would an integer if and only if \\(\\frac{(a_1 - a_2 + a_3 - a_4 + a_5 - a_6 + \\cdots)}{11}\\) is an integer.'],
];
export default content;
