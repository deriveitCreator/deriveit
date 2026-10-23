export const title="If [p^a ∥ m] and [p^b ∥ n], then [p^(a+b) ∥ mn]";
const content = [
  ['h1', 'If [p<sup>a</sup> ∥ m] And [p<sup>b</sup> ∥ n], Then [p<sup>(a+b)</sup> ∥ mn]'],
  ['pmain', 'According to the fundamental theorem of arithmetic, \\(m\\) can be represented as:'],
  ['displayFormula','$$ m = {p_1}^{k_1} * {p_2}^{k_2} * \\cdots $$'],
  ['pmain', 'But we are only interested in the \\(p\\) in question:'],
  ['displayFormula','$$ m = p^a * \\ldots $$'],
  ['pmain', 'As for \\(n\\):'],
  ['displayFormula','$$ n = p^b * \\ldots $$'],
  ['pmain', 'We can represent \\(mn\\) as:'],
  ['displayFormula','$$\\begin{align} mn &= (p^a * \\ldots) * (p^b * \\ldots) \\\\ &= p^a * p^b * (\\ldots) \\\\ &= p^{a+b} * (\\ldots) \\end{align} $$'],
  ['pmain', 'Therefore, \\(p^{(a+b)}\\) exactly divides \\(mn\\).'],
];
export default content;
