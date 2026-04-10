export const title="If [p^a ∥ m], then [p^(an) ∥ m^n]";
const content = [
  ['h1', 'If [p<sup>a</sup> ∥ m], Then [p<sup>an</sup> ∥ m<sup>n</sup>]'],
  ['pmain', 'According to the fundamental theorem of arithmetic, \\(m\\) can be represented as:'],
  ['displayFormula','$$ m = {p_1}^{k_1} * {p_2}^{k_2} * \\cdots $$'],
  ['pmain', 'But we are only interested in the \\(p\\) in question:'],
  ['displayFormula','$$ m = p^a * \\ldots $$'],
  ['pmain', 'We can represent \\(m^n\\) as:'],
  ['displayFormula','$$\\begin{align} m^n &= (p^a * \\ldots)^n \\\\ &= (p^a)^n * (\\ldots)^n \\\\ &= p^{an} * (\\ldots)^n \\end{align} $$'],
  ['pmain', 'Therefore, \\(p^{an}\\) exactly divides \\(m^n\\).'],
];
export default content;
