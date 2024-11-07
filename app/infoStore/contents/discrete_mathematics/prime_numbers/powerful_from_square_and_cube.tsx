export const title="A powerful number is a product of a square number and a cube number";
const content = [
  ['h1', 'A Powerful Number Is A Product Of A Square Number And A Cube Number'],
  ['pmain','According to the fundamental theorem of arithmetic, every integer greater than 1 can be represented uniquely as a product of prime numbers. Let\'s represent even exponents as \\(e_i\\) and odd exponents as \\(o_i\\). Example:'],
  ['displayFormula','$$ n = {p_1}^{e_1} * {p_2}^{o_2} * {p_3}^{e_3} * {p_4}^{o_4} * {p_5}^{o_5} $$'],
  ['pmain','Let\'s group all the factors with even exponents together, and the factors with odd exponents together:'],
  ['displayFormula','$$ n = ({p_1}^{e_1} * {p_3}^{e_3}) * ({p_2}^{o_2} * {p_4}^{o_4} * {p_5}^{o_5}) $$'],
  ['pmain','Since \\(p^{3+b} = p^3 * p^b\\):'],
  ['displayFormula','$$ n = ({p_1}^{e_1} * {p_3}^{e_3}) * ({p_2}^3 * {p_4}^3 * {p_5}^3) * ({p_2}^{f_2} * {p_4}^{f_4} * {p_5}^{f_5}) $$'],
  ['pmain','where \\(f_i = o_i - 3\\). We can group the even primes again, and also factor 3 out:'],
  ['displayFormula','$$\\begin{align} n &= ({p_1}^{e_1} * {p_3}^{e_3} * {p_2}^{f_2} * {p_4}^{f_4} * {p_5}^{f_5}) * ({p_2}^3 * {p_4}^3 * {p_5}^3) \\\\ n &= ({p_1}^{e_1} * {p_3}^{e_3} * {p_2}^{f_2} * {p_4}^{f_4} * {p_5}^{f_5}) * ({p_2} * {p_4} * {p_5})^3 \\end{align}$$'],
  ['pmain','All \\(e_i\\) and \\(f_i\\) are even, so we can factor 2 out. This shows that the powerful number can presented as a product of a square number and cube number:'],
  ['displayFormula','$$ n = (\\ldots )^2 * (\\ldots )^3 $$'],
];
export default content;