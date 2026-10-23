export const title="The solution of x^2 ≡ 1 mod p^k is x ≡ ±1 mod p^k (where p is an odd prime)";
const content = [
  ['h1', 'The Solution Of x<sup>2</sup> ≡ 1 mod p<sup>k</sup> Is x ≡ ±1 mod p<sup>k</sup> (Where p Is An Odd Prime)'],
  ['pmain', 'If \\(a^2 ≡ ±1 \\bmod p^k\\) (where \\(p\\) is an odd prime), then:'],
  ['displayFormula', '$$\\begin{gather} p^k|(a^2- 1) \\\\ p^k|(a-1)(a+1) \\end{gather}$$'],
  ['pmain', 'If \\(p^k\\) divides both \\(a-1\\) and \\(a+1\\), then it should divide their difference:'],
  ['displayFormula', '$$\\begin{gather} p^k|(a+1)-(a-1) \\\\ p^k|2 \\end{gather}$$'],
  ['pmain', 'This is a contradiction because \\(p^k\\) is an odd prime. Therefore, \\(p^k\\) cannot divide both \\(a-1\\) and \\(a+1\\), it can only divide one of them.'],
  ['pmain', 'If \\(p^k|a-1\\), then \\(a^2 ≡ 1 \\bmod p^k\\). If \\(p^k|a+1\\), then \\(a^2 ≡ -1 \\bmod p^k\\).'],
];
export default content;
