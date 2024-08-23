export const title="If gcd(a, b) = 1, then gcd(a^m, b^n) = 1";
const content = [
  ['h1', 'If gcd(a, b) = 1, Then gcd(a<sup>m</sup>, b<sup>n</sup>) = 1:'],
  ['pmain', 'Since \\(\\gcd(a, b) = 1\\), then \\(a\\) and \\(b\\) don\'t have any common prime factors:'], 
  ['displayFormula', '$$\\begin{align} a &= p_1^{a_1} * p_3^{a_3} * p_4^{a_4} \\\\ b &= p_2^{b_2} * p_5^{b_5} \\end{align}$$'],
  ['pmain', 'If we raise both integers to some integer power, there would still be no common prime factors:'],
  ['displayFormula', '$$\\begin{align} a^m &= p_1^{ma_1} * p_3^{ma_3} * p_4^{ma_4} \\\\ b^n &= p_2^{nb_2} * p_5^{nb_5} \\end{align}$$'],
  ['pmain', 'This proves that \\(\\gcd(a^m, b^n) = 1\\).']
];
export default content;