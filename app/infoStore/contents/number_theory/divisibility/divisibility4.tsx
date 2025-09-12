export const title="[(m, n) = 1 ∧ d|mn] ⇒ ∃d1, d2 ∈ Z such that d1*d2 = d, d1|m, d2|n and (d1, d2) = 1";
const content = [
  ['h1', '[(m, n) = 1 ∧ d|mn] ⇒ ∃d<sub>1</sub>, d<sub>2</sub> ∈ Z Such That d<sub>1</sub>d<sub>2</sub> = d, d<sub>1</sub>|m, d<sub>2</sub>|n And (d<sub>1</sub>, d<sub>2</sub>) = 1'],
  ['pmain', 'Let there be integers \\(m\\) and \\(n\\) such that \\((m, n)=1\\). According to the fundamental theorem of arithmetic, both \\(m\\) and \\(n\\) can be written as a product of primes:'], 
  ['displayFormula', '$$\\begin{align} m &= p_1^{m_1} p_2^{m_2} p_3^{m_3} \\ldots p_k^{m_k} \\\\ n &= q_1^{n_1} q_2^{n_2} q_3^{n_3} \\ldots q_h^{n_h}\\end{align}$$'],
  ['pmain', '\\(p_i\\) is a prime factor of \\(m\\) and \\(q_j\\) is a prime factor of \\(n\\). Since \\((m,n)=1\\), then \\(p_i \\ne q_j\\) for all \\(i\\) and \\(j\\). For example:'], 
  ['displayFormula', '$$ \\begin{gather} 4116 = 2^2 * 3 * 7^3 \\\\ 196625 = 5^3 * 11^2 * 13 \\\\ (4116, 196625) = 1 \\quad \\text{ (no common prime divisor)}\\end{gather} $$'],
  ['pmain', 'Let \\(d\\) be a divisor of \\(mn\\). This means all prime factors of \\(d\\) are either prime factors of \\(m\\) or prime factors of \\(n\\). This means \\(d = p_1^{a_1} p_2^{a_2} \\ldots p_k^{a_k} q_1^{b_1} q_2^{b_2} \\ldots q_h^{b_h}\\) where \\(a_i \\le m_i\\) and \\(b_i \\le n_i\\). This means we can represent \\(d\\) as \\((p_1^{a_1} p_2^{a_2}\\ldots) (q_1^{b_1} q_3^{b_3}\\ldots)=d_1d_2\\), where \\(d_1\\) has all the \\(p_i\\) factors and \\(d_2\\) has all the \\(q_j\\) factors:'],
  ['displayFormula', '$$ \\begin{gather} d_1 = p_1^{a_1} p_2^{a_2}\\ldots p_k^{a_k} \\\\ d_2 = q_1^{b_1} q_2^{b_2} \\ldots q_h^{b_h} \\\\ (d=d_1d_2) \\end{gather}$$'],
  ['pmain', 'Since \\(d_1\\) has \\(p_i\\) factors, then \\(d_1|m\\), and since \\(d_2\\) has \\(q_i\\) factors, then \\(d_2|n\\). Also, since \\(p_i \\ne q_j\\) for all \\(i\\) and \\(j\\), then \\(d_1\\) and \\(d_2\\) have no common prime factors. Therefore \\((d_1, d_2)=1\\).'],
  ['pmain', 'For example, let \\(m=4116\\) and let \\(n=196625\\). The prime factors are:'],
  ['displayFormula', '$$ \\begin{align} m &= 2^2 \\cdot 3 \\cdot 7^3 \\\\ n &= 5^3 \\cdot 11^2 \\cdot 13 \\end{align} $$'],
  ['pmain', 'Let \\(d=2*5^2*7^2*11=26950\\). We know \\(d|mn\\) as all it\'s prime factors exists in either \\(m\\) or \\(n\\). This means we can do this:'],
  ['displayFormula', '$$ \\begin{gather} d=(2*7^2)(5^2*11) = (d_1)(d_2) \\\\ d_1 = 2*7^2 = 98 \\\\ d_2 = 5^2*11 = 275\\end{gather} $$'],
  ['pmain', 'Since \\(d_1\\) has factors of \\(m\\), then \\(d_1|m\\), and since \\(d_2\\) has factors of \\(n\\), then \\(d_2|n\\). Also, since \\(d_1\\) and \\(d_2\\) have no common prime factors, then \\((d_1, d_2)=1\\).'],
];
export default content;