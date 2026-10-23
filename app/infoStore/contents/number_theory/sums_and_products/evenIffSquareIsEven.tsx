export const title="Proving that x^2 is even if and only if x is even";
const content = [
  ['h1', 'Proving That x^2 Is Even If And Only If x Is Even'],

  ['pmain', 'If \\(x\\) is even, then there exists an integer \\(k\\) such that \\(x=2k\\). This means:'],
  ['displayFormula', '$$\\begin{align}x^2 &= (2k)^2 \\\\ &= 4k^2 = 2 *(2k^2) \\\\ &= 2h \\end{align}$$'],
  ['pmain', 'Therefore \\(x^2\\) is also even. It\'s contrapositive states that when \\(x^2\\) is odd, then \\(x\\) is odd.'],
  ['pmain', 'If \\(x\\) is odd, then \\(x=2k+1\\). This means:'],
  ['displayFormula', '$$\\begin{align}x^2 &= (2k+1)^2 \\\\ &= 4k^2 + 4k + 1 = 2 *(2k^2 + 2k) + 1 \\\\ &= 2h + 1 \\end{align}$$'],
  ['pmain', 'Therefore \\(x^2\\) is also odd. It\'s contrapositive states that when \\(x^2\\) is even, then \\(x\\) is even.'],
];
export default content;