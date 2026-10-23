export const title="Proof that [√[x]] = √[x]";
const content = [
  ['h1', 'Proof that [√[x]] = √[x]'],
  ["pmain","Let \\(k = \\left[ \\sqrt{[x]} \\right]\\):"],
  ['displayFormula', '$$\\begin{gather} k \\le \\sqrt{[x]} \\lt k+1 \\\\ k^2 \\le [x] \\lt (k+1)^2 \\end{gather}$$'],
  ["pmain","Since \\([x]\\) is an integer:"],
  ['displayFormula', '$$\\begin{gather} k^2 = [x] \\\\ k = \\sqrt{[x]} \\end{gather}$$'],
  ["pmain","Since \\(k = \\left[ \\sqrt{[x]} \\right]\\), then \\(\\left[ \\sqrt{[x]} \\right] = \\sqrt{[x]}\\)."],
];
export default content;