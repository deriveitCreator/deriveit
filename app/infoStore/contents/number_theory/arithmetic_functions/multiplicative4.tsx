export const title="Proof of the formula for φ(n)";
const content = [
  ['h1', 'Proof Of The Formula For φ(n)'],
  ['pmain', 'Let \\(p\\) be a prime and let \\(a\\) be some positive integer. According to this <a href="multiplicative3">lemma</a>, the formula for \\(\\phi(p^a)\\) is \\(p^a-p^{a-1}\\). We can rewrite this as:'],
  ['displayFormula', '\\[ \\phi(p^a) = p^a \\left( 1 - \\frac{1}{p^a} \\right) \\]'],
  ['pmain', 'Let \\(n\\) be some positive integer. We need to find \\(\\phi(n)\\). According to the fundamental theorem of arithemtic:'],
  ['displayFormula', '\\[\\begin{gather} n = {p_1}^{b_1} \\ {p_2}^{b_2} \\ {p_3}^{b_3} \\cdots {p_k}^{b_k} \\\\ b \\in \\mathbb{Z}^+, \\ k \\in \\mathbb{Z}^+ \\end{gather}\\]'],
  ['pmain', 'This means:'],
  ['displayFormula', '\\[\\phi(n) = \\phi({p_1}^{b_1} \\ {p_2}^{b_2} \\ {p_3}^{b_3} \\cdots {p_k}^{b_k})\\]'],
  ['pmain', 'Since \\(\\phi\\) <a href="multiplicative2">is multiplicative</a>:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &= \\phi({p_1}^{b_1}) \\ \\phi({p_2}^{b_2}) \\ \\phi({p_3}^{b_3}) \\cdots \\phi({p_k}^{b_k}) \\\\ &= {p_1}^{b_1} \\left( 1 - \\frac{1}{{p_1}^{b_1}} \\right) \\ {p_2}^{b_2} \\left( 1 - \\frac{1}{{p_2}^{b_2}} \\right) \\cdots {p_k}^{b_k} \\left( 1 - \\frac{1}{{p_k}^{b_k}} \\right) \\end{align}\\]'],
  ['pmain', 'We can group this another way:'],
  ['displayFormula', '\\[\\begin{align} \\phi(n) &= {p_1}^{b_1}{p_2}^{b_2} \\cdots {p_k}^{b_k} \\ \\left( 1 - \\frac{1}{{p_1}^{b_1}} \\right) \\left( 1 - \\frac{1}{{p_2}^{b_2}} \\right) \\cdots \\left( 1 - \\frac{1}{{p_k}^{b_k}} \\right) \\\\ &= n \\ \\left( 1 - \\frac{1}{{p_1}^{b_1}} \\right) \\left( 1 - \\frac{1}{{p_2}^{b_2}} \\right) \\cdots \\left( 1 - \\frac{1}{{p_k}^{b_k}} \\right) \\end{align}\\]'],
  ['pmain', 'Another way of writing the above is:'],
  ['displayFormula', '\\[ \\phi(n) =n \\prod_{p|n, \\ p \\text{ is prime}} \\left( 1 - \\frac{1}{p} \\right) \\]'],
];

export default content;