export const title="Proof that [x ≡ a_1 mod m_1 and x ≡ a_2 mod m_2] has a solution iff (m_1, m_2)|(a_1 - a_2)";
const content = [
  ['h1', 'Proof That [x ≡ a<sub>1</sub> mod m<sub>1</sub> And x ≡ a<sub>2</sub> mod m<sub>2</sub>] Has A Solution Iff (m<sub>1</sub>, m<sub>2</sub>)|(a<sub>1</sub>-a<sub>2</sub>)'],
  ['pmain', 'Suppose there is an integer \\(x\\) such that \\(x ≡ a_1 \\bmod m_1\\) and \\(x ≡ a_2 \\bmod m_2\\). This means:'],
  ['displayFormula', '$$\\begin{gather} x = km_1 + a_1 \\\\ km_1 + a_1 ≡ a_2 \\bmod m_2 \\\\ km_1 + a_1 - a_2 = jm_2 \\\\ a_1 - a_2 = jm_2 -km_1  \\end{gather}$$'],
  ['pmain', 'Since \\((m_1,m_2)\\) divides both \\(m_1\\) and \\(m_2\\), then it should also divide \\(a_1 - a_2\\). The contrapositive is that if \\((m_1,m_2) \\nmid (a_1 - a_2)\\), then the system of congruences does not have a solution.'],
  ['pmain', 'Now assume that we don\'t know whether there is a solution but we do know that \\((m_1,m_2) | (a_1 - a_2)\\). This means \\((m_1,m_2)n = a_1 - a_2 \\). Since the \\(\\gcd\\) can be written as a linear combination, then there are integers \\(p\\) and \\(q\\) such that \\((m_1,m_2)=m_2 p - m_1 q\\). This means \\(m_2 pn - m_1 qn = a_1 - a_2 \\) or:'],
  ['displayFormula', '$$\\begin{gather} m_2 s - m_1 t = a_1 - a_2 \\\\ m_2 s +a_2 = m_1 t + a_1 \\end{gather} $$'],
  ['pmain', 'Let \\(x=m_2 s +a_2\\), then \\(x=m_1 t + a_1\\). Therefore:'],
  ['displayFormula', '$$\\begin{gather} x ≡ a_2 \\bmod m_2 \\\\ x ≡ a_1 \\bmod m_1 \\end{gather}$$'],
  ['pmain', 'Thus we have shown that if \\((m_1,m_2) | (a_1 - a_2)\\), then the system of congruences has a solution.'],
  ['pmain', 'Now suppose we have another solution \\(y\\):'],
  ['displayFormula', '$$\\begin{gather} y ≡ a_2 \\bmod m_2 \\\\ y ≡ a_1 \\bmod m_1 \\end{gather}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\begin{gather} x ≡ a_2 \\bmod m_2 \\wedge y ≡ a_2 \\bmod m_2 \\implies x-y ≡ a_2 - a_2 ≡ 0 \\bmod m_2 \\\\ x ≡ a_1 \\bmod m_1 \\wedge y ≡ a_1 \\bmod m_1 \\implies x-y ≡ a_1 - a_1 ≡ 0 \\bmod m_1 \\end{gather} $$'],
  ['pmain', 'If \\(x-y\\) is a common multiple of both \\(m_1\\) and \\(m_2\\), then it is a multiple of the lowest common mutiple:'],
  ['displayFormula', '$$ [m_1,m_2]|x-y $$'],
  ['pmain', 'This means \\(x ≡y \\bmod [m_1, m_2]\\). Therefore, the solution is unique modulo \\([m_1,m_2]\\).'],
];
export default content;
