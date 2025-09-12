export const title="if a^k | b^k then a | b";
const content = [
  ['h1', 'If a<sup>k</sup> | b<sup>k</sup> Then a | b'],
  ['pmain', 'According to the fundamental theorem of arithmetic:'],
  ['displayFormula','$$ \\begin{align} a &= {p_1}^{m_1} * {p_2}^{m_2} * {p_3}^{m_3} * \\dots \\\\ b &= {p_1}^{n_1} * {p_2}^{n_2} * {p_3}^{n_3} * \\dots \\end{align} $$'],
  ['pmain','If we raise both numbers to the power of \\(k\\):'],
  ['displayFormula','$$ \\begin{align} a^k &= {p_1}^{k m_1} * {p_2}^{k m_2} * {p_3}^{k m_3} * \\dots \\\\ b^k &= {p_1}^{k n_1} * {p_2}^{k n_2} * {p_3}^{k n_3} * \\dots \\end{align} $$'],
  ['pmain','Since \\(a^k | b^k\\), then \\(km_i \\le kn_i\\) for all \\(i\\). This also means \\(m_i \\le n_i\\) for all \\(i\\), and this implies \\(a|b\\).']
];
export default content;