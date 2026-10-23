export const title="Proof of Hensel's Lemma";
const content = [
  ['h1', 'Proof of Hensel\'s Lemma'],
  ['pmain', 'Let \\(f(x)\\) be a polynomial with integer coefficients. Assume \\(r\\) is a integer such that:'],
  ["displayFormula","\\[ f(r) ≡ 0 \\mod p^{k-1} \\]"],
  ['pmain', 'where \\(p\\) is a prime and \\(k\\) is a positive integer more than 2. Since <a href="../../calculus/power_series/polynomials_are_identical_to_their_Taylor_series">every polynomial with integer coefficients is equal to it\'s Taylor series</a>:'],
  ["displayFormula","\\[ f(x) = \\sum_{n=0}^\\infty \\frac{f^n (a)}{n!} (x-a)^n \\]"],
  ['pmain', 'where \\(f^n(x)\\) is the \\(n\\)th derivative. Let \\(x = a+b\\):'],
  ["displayFormula","\\[\\begin{align} f(a+b) &= \\sum_{n=0}^\\infty \\frac{f^n (a)}{n!} b^n \\\\ &= f(a) + f'(a)b + \\frac{f''(a)}{2} b^2 + \\frac{f'''(a)}{6} b^3 + \\cdots \\end{align} \\]"],
  ['pmain', 'The coefficients of \\(b\\), namely \\(\\left[ \\frac{f^{(n)}(a)}{n!} \\right]\\) are all integers.'],
  ['pmain', '<u>Case 1:</u> If \\(f\'(r) \\not ≡ 0 \\bmod p\\):'],
];
export default content;

