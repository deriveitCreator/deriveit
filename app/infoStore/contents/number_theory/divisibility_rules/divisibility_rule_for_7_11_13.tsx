export const title="An integer is divisble by 7, 11 or 13 if the alternating sum of blocks of three is divisible by 7, 11 or 13 respectively";
const content = [
  ['h1', 'An Integer Is Divisble By 7, 11 Or 13 If The Alternating Sum Of Blocks Of Three Is Divisible By 7, 11 Or 13 Respectively'],
  ['pmain', 'Note that \\(7*11*13=1001\\). Since \\([1000 ≡ - 1 \\bmod 1001]\\) and \\([1000^2 ≡ 1 \\bmod 1001]\\), we can claim that 1000 raised to an odd power is congruent to -1 mod 1001, and 1000 raised to an even power is congruent to 1 mod 1001. Hence:'],
  ['displayFormula', '$$ \\begin{align} (a_k a_{k-1} \\ldots a_0)_{10} &≡ a_k 10^k + a_{k-1} 10^{k-1} + \\cdots + a_1 10 + a_0 \\\\ &≡ (a_0 + 10 a_1 + 100 a_2) + 1000 (a_3 + 10 a_4 + 100 a_5) + 1000^2 (a_6 + 10 a_7 + 100 a_8) + \\cdots \\\\ &≡ (a_0 + 10 a_1 + 100 a_2) - (a_3 + 10 a_4 + 100 a_5) + (a_6 + 10 a_7 + 100 a_8) + \\cdots \\\\ &≡  (a_0 a_1 a_2)_{10} - (a_3 a_4 a_5)_{10} + (a_6 a_7 a_8)_{10} + \\cdots \\end{align}$$'],
  ['pmain', 'This shows that the alternating sum of blocks of three digits is congruent to the original integer modulo 1001. However, if \\(1001|b-a\\), then:'],
  ['displayFormula', '$$ \\begin{align} 7(11*13)|b-a \\implies 7|b-a \\\\ 11(7*11)|b-a \\implies 11|b-a \\\\ 13(7*11)|b-a \\implies 13|b-a \\end{align}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ \\begin{align} (a_k a_{k-1} \\ldots a_0)_{10} &≡ (a_0 a_1 a_2)_{10} - (a_3 a_4 a_5)_{10} + (a_6 a_7 a_8)_{10} + \\cdots \\bmod 7 \\\\ (a_k a_{k-1} \\ldots a_0)_{10} &≡ (a_0 a_1 a_2)_{10} - (a_3 a_4 a_5)_{10} + (a_6 a_7 a_8)_{10} + \\cdots \\bmod 11 \\\\ (a_k a_{k-1} \\ldots a_0)_{10} &≡ (a_0 a_1 a_2)_{10} - (a_3 a_4 a_5)_{10} + (a_6 a_7 a_8)_{10} + \\cdots \\bmod 13 \\end{align}$$'],
  ['pmain', 'This means if the alternating sum of blocks of three digits is divisible by 7, then then original integer is divisible by 7, if the alternating sum of blocks of three digits is divisible by 11, then then original integer is divisible by 11, and if the alternating sum of blocks of three digits is divisible by 13, then then original integer is divisible by 13.'],
];
export default content;
