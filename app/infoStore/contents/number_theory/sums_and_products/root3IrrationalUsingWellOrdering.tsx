export const title="Proving that √3 is irrational using the well-ordering property";
const content = [
  ['h1', 'Proving That √3 Is Irrational Using The Well-Ordering Property'],
  ['pmain', 'If \\(\\sqrt{3}\\) is rational, then there are two integers \\(a\\) and \\(b\\) such that:'], 
  ['displayFormula', '$$\\begin{align} \\sqrt{3} &= \\frac{a}{b} \\\\ b\\sqrt{3} &= a \\end{align}$$'],
  ['pmain', 'This means there exists integers \\(b\\) such that \\(b\\sqrt{3}\\) is an integer. Let \\(S\\) be a set that contains these integers:'],
  ['displayFormula', '$$ S = \\{ b\\sqrt{3} \\quad | \\quad b \\text{ and } b\\sqrt{3} \\text{ are positive integers}\\}$$'],
  ['pmain', 'According to the well-ordering property, \\(S\\) contains a smallest element \\(s\\). Let \\(s=t\\sqrt{3}\\). This means:'],
  ['displayFormula', '$$\\begin{gather} s\\sqrt{3} = 3t \\\\ (t \\in \\mathbb{N}) \\wedge (s \\in \\mathbb{N}) \\implies 3t - s \\in \\mathbb{Z} \\end{gather}$$'],

  ['pmain', 'We can rewrite this as:'],
  ['displayFormula', '$$\\begin{gather} 3t - s = \\\\ s\\sqrt{3} - t\\sqrt{3} = \\\\ (s-t)\\sqrt{3} \\in \\mathbb{Z} \\end{gather}$$'],

  ['pmain', 'Since \\([s = t\\sqrt{3}]\\) and \\([\\sqrt{3} \\gt 1]\\), then \\(s \\gt t\\). Which means \\([s-t]\\) is a positive integer. This would also make \\([(s-t)\\sqrt{3}]\\) would also be a positive integer. By definition of \\(S\\), \\([(s-t)\\sqrt{3}]\\) is also in \\(S\\).'],
  
  ['pmain', 'Since \\(1.9^2 = 3.61\\), then \\(1.9 \\gt \\sqrt{3}\\).This means:'],

  ['displayFormula', '$$\\begin{gather} \\sqrt{3} \\lt 2 \\\\ t\\sqrt{t} \\lt 2t \\\\ s \\lt 2t \\\\ s-t \\lt t \\\\ (s-t)\\sqrt{3} \\lt t\\sqrt{3} \\\\ (s-t)\\sqrt{3} \\lt s \\end{gather}$$'],
  ['pmain', 'Since \\([(s-t)\\sqrt{3}]\\) exists in \\(S\\) and \\([(s-t)\\sqrt{3} \\lt s]\\), then we have a contradiction.'],
];
export default content;