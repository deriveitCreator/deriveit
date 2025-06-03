export const title="All composite integers can be expressed as a product of two coprime integers";
const content = [
  ['h1', 'All Composite Integers Can Be Expressed As A Product Of Two Coprime Integers'],
  ['pmain', 'According to the <a href="fundamental_theorem_of_arithmetic">fundamental theorem of arithmetic</a>, any positive integer \\(n\\) can be written as:'],
  ['displayFormula','$$ p_1^{a_1} p_2^{a_2} p_3^{a_3} \\cdots p_k^{a_k}$$'],
  ['pmain', 'Where \\(p_i\\) is a prime factor of \\(n\\), and \\(a_i \\ge 1\\). Now pick any random group of \\(i\\)\'s, let\'s say 1, 3 and 5. We can assign \\(p_i^{a_i}\\) of our selected \\(i\\)\'s to \\(b\\), and the rest of the \\(p_i^{a_i}\\) to \\(c\\):'],
  ['displayFormula','$$\\begin{align} b &= p_1^{a_1} p_3^{a_3} p_5^{a_5} \\\\ c &= p_2^{a_2}  p_4^{a_4} p_6^{a_6} p_7^{a_7} \\cdots p_k^{a_k} \\end{align} $$'],
  ['pmain', 'Since \\(b\\) and \\(c\\) have no common prime factors, they are coprime, and since the prime factors of both \\(b\\) and \\(c\\) together are also the prime factors of \\(n\\), then \\(bc=n\\). We can again select a other group of \\(p_i^{a_i}\\) and repeated the same process to get another pair of coprime integers that multiply to give \\(n\\).'],
  ['pmain', 'As an example, let \\(n=1746360=2^3 * 3^4 * 5 * 7^2 * 11\\). We can assign random \\(p_i^{a_i}\\) to \\(b\\) and the rest to \\(c\\):'],
  ['displayFormula','$$\\begin{align} b &= 2^3 * 7^2 = 392 \\\\ c &= 3^4 * 5 * 11 = 4455 \\end{align} $$'],
  ['pmain', 'Since \\(b\\) and \\(c\\) share no common prime factors, they are coprime, and also \\(bc=1746360=n\\).'],
];
export default content;