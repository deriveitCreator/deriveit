export const title="Proving that √2 is irrational";
const content = [
  ['h1', 'Proving That √2 Is Irrational'],

  ['pmain', 'If \\(\\sqrt{2}\\) is rational, then there exists two integers \\(a\\) and \\(b\\) such that:'],
  ['displayFormula', '$$\\sqrt{2} = \\frac{a}{b}$$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$\\begin{gather}2 = \\left(\\frac{a}{b}\\right)^2 \\\\ 2 = \\frac{a^2}{b^2} \\\\ 2b^2 = a^2\\end{gather}$$'],
  ['pmain', 'Since \\(a^2\\) is a multiple of 2 (even), then \\(a\\) must be even (as proved <a href="/evenIffSquareIsEven">here</a>). Let \\(a=2k\\):'],
  ['displayFormula', '$$\\begin{gather}2b^2 = (2k)^2 \\\\ 2b^2 = 4k^2 \\\\ b^2 = 2k^2 \\end{gather}$$'],
  ['pmain', 'Since \\(b^2\\) is a multiple of 2 (even), then \\(b\\) must be even. Let \\(b=2h\\):'],
  ['displayFormula', '$$\\begin{gather} (2h)^2 = 2k^2 \\\\ 4h^2 = 2k^2 \\\\ 2h^2 = k^2 \\\\ \\sqrt{2} = \\frac{k}{h} \\end{gather}$$'],
  ['pmain', 'When we represented \\(\\sqrt{2}\\) as \\(\\frac{a}{b}\\), we were able to prove that the numerator and denominator are both even, and divided by sides by 2 to get \\(\\frac{k}{h}\\). However, if \\(\\sqrt{2} = \\frac{k}{h}\\), then we can use the same reasoning to show that \\(k\\) and \\(h\\) are both even and can be reduced further. Since we can\'t keep dividing both integers by two forever, it proves \\(\\sqrt{2}\\) begin rational is not possible.'],
];
export default content;