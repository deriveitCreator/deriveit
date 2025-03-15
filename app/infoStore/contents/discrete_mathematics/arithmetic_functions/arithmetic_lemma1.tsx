export const title="Proof that if f is a multiplicative function, then [F(n) = ∑_{d|n, d>0} f(d)] is also a multiplicative function";
const content = [
  ['h1', 'Proof That If f Is A Multiplicative Function, Then [F(n) = ∑<sub>d|n, d>0</sub> f(d)] Is Also A Multiplicative Function'],
  ['pmain', 'Let \\(f\\) be a multiplicative arithmetic function, and, for \\(n \\in \\mathbb{Z}\\) with \\(n \\gt 0\\), let:'],
  ['displayFormula', '\\[ F(n) = \\sum_{d|n, d \\gt 0} f(d) \\]'],
  ['pmain', 'We need to prove that \\(F(n)\\) would also be multiplicative. Let \\(h\\) and \\(k\\) be two relatively positive prime integer. \\(F\\) being multiplicative means \\(F(hk) = F(h)F(k)\\).'],
  ['pmain', 'According to <a href="../divisibility/divisibility4">this lemma</a>, for each divisor \\(d\\) of \\(hk\\), there should be integers \\(d_1\\) and \\(d_2\\) such that \\(d=d_1d_2\\), \\(d_1|h\\), \\(d_2|k\\) and \\((d_1,d_2)= 1\\).'],
  ['displayFormula', '\\[\\begin{gather} F(hk) = \\sum_{d|n, d \\gt 0} f(d) \\\\ F(hk) = \\sum_{d_1|h,d_2|k, d_1 \\gt 0,d_2 \\gt 0} f(d_1d_2) \\end{gather}\\]'],
  ['pmain', 'Since \\(f\\) is multiplicative:'],
  ['displayFormula', '\\[\\begin{align} F(hk) &= \\sum_{d_1|h,d_2|k, d_1 \\gt 0,d_2 \\gt 0} f(d_1)f(d_2) \\\\ &= \\sum_{d_1|h, d_1 \\gt 0} \\sum_{d_2|k,d_2 \\gt 0} f(d_1) f(d_2) \\end{align}\\]'],
  ['pmain', 'According to the distributive property of double summation:'],
  ['displayFormula', '\\[\\begin{gather} F(hk) = \\sum_{d_1|h, d_1 \\gt 0} f(d_1)\\sum_{d_2|k,d_2 \\gt 0} f(d_2) \\\\ \\therefore F(hk)=F(h) * F(k) \\end{gather}\\]'],
  ['pmain', 'For example, let \\(h=3\\) and \\(k=4\\), so \\(hk=12\\):'],
  ['displayFormula', '\\[\\begin{align} F(12) &= \\sum_{d|12, d \\gt 0} f(d) \\\\ &= f(1)+f(2)+f(3)+f(4)+f(6)+f(12) \\end{align}\\]'],
  ['pmain', 'Each \\(d\\) can be written as \\(d_1d_2\\) where \\(d_1|3\\), \\(d_2|4\\), and \\((d_1,d_2)=1\\):'],
  ['displayFormula', '\\[F(12) = f(1*1)+f(1*2)+f(3*1)+f(1*4)+f(3*2)+f(3*4)\\]'],
  ['pmain', 'Since \\(f\\) is multiplicative:'],
  ['displayFormula', '\\[\\begin{align} F(12) &= f(1)f(1)+f(1)f(2)+f(3)f(1)+f(1)f(4)+f(3)f(2)+f(3)f(4) \\\\ &= [f(1)+f(3)][f(1)+f(2)+f(4)]\\end{align}\\]'],
];

export default content;