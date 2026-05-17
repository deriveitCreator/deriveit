export const title="Proof that (2^a -1, 2^b -1) = 1 ⟺ (a, b) = 1";
const content = [
  ['h1', 'Proof that (2<sup>a</sup>-1, 2<sup>b</sup>-1) = 1 If And Only If (a, b) = 1'],
  ['pmain', 'According to <a href="gcdOfTwoRaisedWithMinusOne">this lemma</a>:'],
  ['displayFormula', '$$ (2^a - 1, 2^b - 1) = 2^{(a,b)}-1 $$'],
  ['pmain', 'This means if \\((a,b)=1\\), then:'],
  ['displayFormula', '$$ (2^a - 1, 2^b - 1) = 2^1 - 1 = 1 $$'],
  ['pmain', 'Conversely, if \\((2^a - 1, 2^b - 1) = 1\\), then \\(2^{(a,b)}-1 = 1\\), which means \\(2^{(a,b)} = 2\\). Therefore, \\((a,b)=1\\).'],
];
export default content;
