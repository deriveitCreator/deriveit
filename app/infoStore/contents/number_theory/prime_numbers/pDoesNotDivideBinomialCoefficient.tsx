export const title="Proof that if [2n/3 ≤ p < n] then [p ∤ 2n choose n]";
const content = [
  ['h1', 'Proof That If [2n/3 ≤ p < n] Then [p ∤ <sub>2n</sub>C<sub>n]'],
  ['pmain', 'If \\(p \\le n\\), then \\(n!\\) contains \\(p\\). It also means that \\(2p \\le 2n\\), which means \\((2n)!\\) contains both \\(p\\) and \\(2p\\).'],
  ['pmain', 'If \\(p \\gt 2n/3\\), then \\(3p \\gt 2n\\). That means \\(3p\\) is not in \\((2n)!\\). Same goes for all \\(kp\\) where \\(k \\gt 3\\).'],
  ['pmain', 'Putting the above statements together: \\(2n/3 \\lt p \\le n\\) means \\(p\\) and \\(2p\\) are in \\((2n)!\\) but not \\(3p\\) (or any higher multiple). This means \\(p\\) divides \\((2n)!\\) twice and \\(n!\\) once.'],
  ['pmain', 'If \\({2n \\choose n} = \\frac{(2n)!}{n!n!}\\) and if \\(p\\) divides both the numerator twice and the denominator twice, then the \\(p\\)\'s in the numerator and the denominator would cancel out. This means \\(p\\) can\'t divide \\(\\frac{(2n)!}{n!n!}\\).'],
];
export default content;
