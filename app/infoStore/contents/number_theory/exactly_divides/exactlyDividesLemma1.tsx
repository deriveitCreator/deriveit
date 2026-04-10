export const title="If [p^a ∥ m] and [p^b ∥ n], then [p^min(a,b) ∥ m+n]";
const content = [
  ['h1', 'If [p<sup>a</sup> ∥ m] And [p<sup>b</sup> ∥ n], Then [p<sup>min(a,b)</sup> ∥ m+n]'],
  ['pmain', 'According to the fundamental theorem of arithmetic, \\(m\\) can be represented as:'],
  ['displayFormula','$$ m = {p_1}^{k_1} * {p_2}^{k_2} * \\cdots $$'],
  ['pmain', 'But we are only interested in the \\(p\\) in question:'],
  ['displayFormula','$$ m = p^a * \\ldots $$'],
  ['pmain', 'As for \\(n\\):'],
  ['displayFormula','$$ n = p^b * \\ldots $$'],
  ['pmain', 'We can represent \\(m+n\\) as:'],
  ['displayFormula','$$\\begin{align} m+n &= (p^a * \\ldots) + (p^b * \\ldots) \\\\ &= p ^{\\min \\{ a, b \\}} * ((\\ldots) + ( \\ldots)) \\end{align} $$'],
  ['pmain', 'Therefore, \\(p^{\\min(a, b)}\\) exactly divides \\(m+n\\).'],
];
export default content;