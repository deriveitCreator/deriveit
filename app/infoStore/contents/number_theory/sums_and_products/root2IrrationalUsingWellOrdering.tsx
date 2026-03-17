export const title="Proving that √2 is irrational using the well-ordering property";
const content = [
  ['h1', 'Proving That √2 Is Irrational Using The Well-Ordering Property'],
  ['pmain', 'If \\(\\sqrt{2}\\) is rational, then there are two integers \\(a\\) and \\(b\\) such that:'], 
  ['displayFormula', '$$\\begin{align} \\sqrt{2} &= \\frac{a}{b} \\\\ b\\sqrt{2} &= a \\end{align}$$'],
  ['pmain', 'This means there exists integers \\(b\\) such that \\(b\\sqrt{2}\\) is an integer. Let \\(S\\) be a set that contains these integers:'],
  ['displayFormula', '$$ S = \\{ b\\sqrt{2} \\quad | \\quad b \\text{ and } b\\sqrt{2} \\text{ are positive integers}\\}$$'],
  ['pmain', 'According to the well-ordering property, \\(S\\) contains a smallest element \\(s\\). Let \\(s=t\\sqrt{2}\\). This means:'],
  ['displayFormula', '$$\\begin{gather} s\\sqrt{2} = 2t \\\\ (t \\in \\mathbb{N}) \\wedge (s \\in \\mathbb{N}) \\implies 2t - s \\in \\mathbb{Z} \\end{gather}$$'],

  ['pmain', 'We can rewrite this as:'],
  ['displayFormula', '$$\\begin{gather} 2t - s = \\\\ s\\sqrt{2} - s = s\\sqrt{2} - t\\sqrt{2} = \\\\ (s-t)\\sqrt{2} \\in \\mathbb{Z} \\end{gather}$$'],

  ['pmain', 'Since \\([s = t\\sqrt{2}]\\) and \\([\\sqrt{2} \\gt 1]\\), then \\(s \\gt t\\). Which means \\([s-t]\\) is a positive integer. This also means that \\([(s-t)\\sqrt{2}]\\) is a positive integer. By definition of \\(S\\), \\([(s-t)\\sqrt{2}]\\) is also in \\(S\\).'],
  
  ['pmain', 'Also:'],
  ['displayFormula', '$$\\begin{gather} \\sqrt{2} \\lt 2 \\\\ s\\sqrt{2} \\lt 2s \\\\ s\\sqrt{2} - s \\lt s \\\\ s\\sqrt{2} - t\\sqrt{2} \\lt s \\\\ \\therefore (s-t)\\sqrt{2} \\lt s \\end{gather}$$'],
  ['pmain', 'Since \\([(s-t)\\sqrt{2}]\\) exists in \\(S\\) and \\([(s-t)\\sqrt{2} \\lt s]\\), then we have a contradiction.'],
];
export default content;