export const title="An integer is divisble by 7 if the alternating sum of blocks of three is divisible by 7";
const content = [
  ['h1', 'An Integer Is Divisble By 7 If The Alternating Sum Of Blocks Of Three Is Divisible By 7'],
  ['pmain', 'Let \\(b_k 10^{3(k-1)}\\) represent a block of three numbers. For example:'],
  ['displayFormula', '$$ 4896927 = 927 + 896000 + 4000000 $$'],
  ['pmain', 'Here \\(b_1 = 927\\), \\(b_2 = 896\\) and \\(b_3 = 4\\). We can represent any integer \\(n\\) like this'],
  ['displayFormula', '$$ n = b_1 + b_2 10^3 + b_3 10^6 + b_4 10^9 + b_5 10^{12} + b_6 10^{15} + \\ldots $$'],
  ['pmain', 'We can manually check \\(10^3 ≡ - 1 \\bmod 7\\). This means:'],
  ['displayFormula', '$$ (10^3)^n ≡ (-1)^n \\bmod 7 $$'],
  ['pmain', 'This also means \\([(10^3)^n ≡ 1 \\bmod 7]\\) when \\(n\\) is even and \\([(10^3)^n ≡ -1 \\bmod 7]\\) when \\(n\\) is odd:'],
  ['displayFormula', '$$ \\begin{align} 7 &| 10^{3n} + 1 \\quad \\text{ if } n \\text{ is odd} \\\\ 7 &| 10^{3n} - 1 \\quad \\text{ if } n \\text{ is even} \\end{align} $$'],
  ['pmain', 'Going back to our integer \\(n\\). We can group all the blocks with even \\(k\\)\'s together and all the blocks with odd \\(k\\)\'s together:'],
  ['displayFormula', '$$\\begin{gather} n = (b_2 10^3 + b_4 10^9 + b_6 10^{15} + \\ldots) + (b_1 + b_3 10^6 + b_5 10^{12} + \\ldots) \\\\ n = (b_1 + b_3 10^{3(2)} + b_5 10^{3(4)} + b_7 10^{3(6)} + \\ldots) + (b_2 10^{3(1)} + b_4 10^{3(3)} + b_6 10^{3(5)} + \\ldots) \\end{gather}$$'],
  ['pmain', 'Let\'s divide \\(n\\) by 7:'],
  ['displayFormula', '$$\\frac{n}{7} = \\frac{b_1}{7} + \\frac{b_3 10^{3(2)} + b_5 10^{3(4)} + b_7 10^{3(6)} + \\ldots}{7} + \\frac{b_2 10^{3(1)} + b_4 10^{3(3)} + b_6 10^{3(5)} + \\ldots}{7} $$'],
  ['pmain', 'If \\(7 | 10^{3n} - 1\\) when \\(n\\) is even, then there must be an integer \\(h\\) such that:'],
  ['displayFormula', '$$ \\begin{align} \\frac{n}{7} &= \\frac{b_1 + b_3 + b_5 + \\ldots}{7} + \\frac{b_3 (10^{3(2)} - 1) + b_5 (10^{3(4)} - 1) + b_7 (10^{3(6)} - 1) + \\ldots}{7} + \\frac{b_2 10^{3(1)} + b_4 10^{3(3)} + b_6 10^{3(5)} + \\ldots}{7} \\\\ \\frac{n}{7} &= \\frac{b_1 + b_3 + b_5 + \\ldots}{7} + h + \\frac{b_2 10^{3(1)} + b_4 10^{3(3)} + b_6 10^{3(5)} + \\ldots}{7} \\end{align}$$'],
  ['pmain', 'If \\(7 | 10^{3n} + 1\\) when \\(n\\) is odd, then there must be an integer \\(j\\) such that:'],
  ['displayFormula', '$$ \\begin{align} \\frac{n}{7} &= \\frac{b_1 + b_3 + b_5 + \\ldots}{7} + h + \\frac{b_2 (10^{3(1)} +1) + b_4 (10^{3(3)}+1) + b_6 (10^{3(5)} + 1 ) + \\ldots}{7} - \\frac{b_2 + b_4 + b_6 + \\ldots}{7} \\\\ \\frac{n}{7} &= \\frac{b_1 + b_3 + b_5 + \\ldots}{7} + h + j - \\frac{b_2 + b_4 + b_6 + \\ldots}{7} \\end{align}$$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula', '$$ \\begin{align} \\frac{n}{7} &= h + j + \\frac{b_1 - b_2 + b_3 -b_4 + b_5 - b_6 + \\ldots}{7} \\end{align}$$'],
  ['pmain', 'This means \\(n/7\\) is an integer if and only if \\([(b_1 - b_2 + b_3 - b_4 + \\ldots)/7]\\) is an integer.'],
];
export default content;
