export const title="A powerful number is a product of a square number and a cube number";
const content = [
  ['h1', 'A Powerful Number Is A Product Of A Square Number And A Cube Number'],
  ['pmain','According to the fundamental theorem of arithmetic, every integer greater than 1 can be represented uniquely as a product of prime numbers. So any powerful number can be represented as:'],
  ['displayFormula','$$ n = {p_1}^{e_1} * {p_2}^{e_2} * {p_3}^{e_3} * {p_4}^{e_4} * \\ldots $$'],
  ['pmain','The prime numbers  would have either even exponents or odd exponents. Let\'s represent even exponents as \\(e_i\\) and odd exponents as \\(o_i\\). Example:'],
  ['displayFormula','$$ n = {p_1}^{e_1} * {p_2}^{o_2} * {p_3}^{e_3} * {p_4}^{o_4} * {p_5}^{o_5} $$'],
  ['pmain','Let\'s group all the factors with even exponents together, and the factors with odd exponents together:'],
  ['displayFormula','$$ n = ({p_1}^{e_1} * {p_3}^{e_3}) * ({p_2}^{o_2} * {p_4}^{o_4} * {p_5}^{o_5}) $$'],
  ['pmain','Since \\(e_i \\ge 2\\), then  we can factor 2 out. Let \\(e_i = 2 f_i\\):'],
  ['displayFormula','$$\\begin{align} n &= ({p_1}^{2 f_1} * {p_3}^{2 f_3}) * ({p_2}^{o_2} * {p_4}^{o_4} * {p_5}^{o_5}) \\\\ n &= ({p_1}^{f_1} * {p_3}^{f_3})^2 * ({p_2}^{o_2} * {p_4}^{o_4} * {p_5}^{o_5}) \\end{align}$$'],
  ['pmain','Since \\(o_i \\ge 3\\), then  we can factor 3 out. Let \\(o_i = 3 m_i\\):'],
  ['displayFormula','$$\\begin{align} n &= ({p_1}^{f_1} * {p_3}^{f_3})^2 * ({p_2}^{3 m_2} * {p_4}^{3 m_4} * {p_5}^{3 m_5}) \\\\ n &= ({p_1}^{f_1} * {p_3}^{f_3})^2 * ({p_2}^{m_2} * {p_4}^{m_4} * {p_5}^{m_5})^3 \\end{align}$$'],
  ['pmain','This shows that the powerful number can presented as a product of a square number and cube number:'],
  ['displayFormula','$$ n = (\\ldots )^2 * (\\ldots )^3 $$'],
];
export default content;