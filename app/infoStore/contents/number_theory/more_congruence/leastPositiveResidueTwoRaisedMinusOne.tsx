export const title="Proof that the least positive residue of (2^a)-1 mod (2^b)-1 is (2^r)-1 where r is the least positive residue of a mod b";
const content = [
  ['h1', 'Proof That Least Positive Residue Of 2<sup>a</sup>-1 mod 2<sup>b</sup>-1 Is 2<sup>r</sup>-1 Where r Is The Least Positive Residue Of a mod b'],
  ['pmain', 'From the division algorithm, we know that:'],
  ['displayFormula', ' a=bq+r '],
  ['pmain', 'where \\(r\\) is the least positive residue of \\(a \\bmod b\\). Since \\(a=bq+r\\), if we exponentiate both sides by 2 and then subtract one:'],
  ['displayFormula', ' 2^a -1=2^{bq+r}-1 '],
  ['pmain', 'We can rewrite this as:'],
  ['displayFormula', '\\begin{gather} 2^a -1=(2^b-1)(2^{b(q-1)+r} + 2^{b(q-2)+r} + \\cdots + 2^{b+r} + 2^r) + (2^r - 1)\\\\ 2^a -1 = (2^b-1)k + (2^r - 1) \\end{gather}'],
  ['pmain', 'This shows that when \\(2^a -1\\) is divided by \\(2^b-1\\), then the remainder is \\(2^r - 1\\).'],
];
export default content;
