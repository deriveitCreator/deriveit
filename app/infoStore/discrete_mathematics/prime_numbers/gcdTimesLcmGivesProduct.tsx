export const title="gcd(a, b) * lcm(a, b) = ab";
const content = [
  ['h1', 'gcd(a, b) * lcm(a, b) = ab'],
  ['pmain', 'Let\'s represent two integer (\\(a\\) and \\(b\\)) as products of prime: \\(a={p_1}^{a_1}{p_2}^{a_2} \\ldots {p_n}^{a_n}\\) and \\(b={p_1}^{b_1}{p_2}^{b_2} \\ldots {p_n}^{b_n}\\), where \\(p_n\\) is the largest prime that divides \\(max\\{a,b\\}\\). It\'s possible that \\(a_i\\) or \\(b_i\\) could be 0 (i.e there prime \\(p_i\\) is not a factor).'],
  ['pmain', 'Looking at the "products of prime" representation, it\'s obvious that \\({p_i}^{min \\{a_i, b_i\\} }\\) divides both \\(a\\) and \\(b\\). We can use this to find the largest divisor:'],
  ['displayFormula', '$$gcd(a,b) = {p_1}^{min \\{a_1, b_1\\} } {p_2}^{min \\{a_2, b_2\\} } \\ldots {p_n}^{min \\{a_n, b_n\\} }$$'],
  ['pmain', 'If we try \\(max \\{a_i, b_i\\} \\), instead of \\(min \\{a_i, b_i\\} \\), we get:'],
  ['displayFormula', '$${p_1}^{max \\{a_1, b_1\\} } {p_2}^{max \\{a_2, b_2\\} } \\ldots {p_n}^{max \\{a_n, b_n\\} }$$'],
  ['pmain', 'Both \\(a\\) and \\(b\\) can divide this number. In fact, this number is the smallest multiple of both \\(a\\) and \\(b\\) (also represented as \\([a, b]\\)).'],
  ['pmain', 'Now let\'s multiply both gcd and lcm:'],
  ['displayFormula', '$$\\begin{align} (a, b) &* [a, b] \\\\ {p_1}^{min \\{a_1, b_1\\} } {p_2}^{min \\{a_2, b_2\\} } \\ldots {p_n}^{min \\{a_n, b_n\\} } &* {p_1}^{max \\{a_1, b_1\\} } {p_2}^{max \\{a_2, b_2\\} } \\ldots {p_n}^{max \\{a_n, b_n\\} } \\end{align}$$'],
  ['pmain', 'We can rewrite this as:'],
  ['displayFormula', '$$ ({p_1}^{min \\{a_1, b_1\\} }{p_1}^{max \\{a_1, b_1\\} }) ({p_2}^{min \\{a_2, b_2\\} }{p_2}^{max \\{a_2, b_2\\} }) \\ldots ({p_n}^{min \\{a_n, b_n\\} }{p_n}^{max \\{a_n, b_n\\} }) $$$$ ({p_1}^{min \\{a_1, b_1\\} max \\{a_1, b_1\\} }) ({p_2}^{min \\{a_2, b_2\\} max \\{a_2, b_2\\} }) \\ldots ({p_n}^{min \\{a_n, b_n\\} max \\{a_n, b_n\\} }) $$'],
  ['pmain', 'Since \\( min \\{ a_i, b_i \\} max \\{ a_i, b_i \\} = a_i b_i \\):'],
  ['displayFormula', '$$ {p_1}^{a_1 b_1 } {p_2}^{a_2 b_2 } \\ldots {p_n}^{a_n b_n } $$$$ ({p_1}^{a_1 } {p_2}^{a_2 } \\ldots {p_n}^{a_n})  ({p_1}^{b_1 } {p_2}^{b_2 } \\ldots {p_n}^{b_n }) $$'],
  ['pmain', 'The above is equal to \\(ab\\). Therefore, \\((a,b)[a,b] = ab\\).'],
];
export default content;