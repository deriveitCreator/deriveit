export const title="Proving the converse of Wilson's Theorem";
const content = [
  ['h1', 'The Converse Of Wilson\'s Theorem'],
  ['pmain', 'Wilson\'s Theorem states:'],
  ['displayFormula', '$$ n \\text{ is prime} \\implies (n - 1)! ≡ -1 \\bmod n $$'],
  ['pmain', 'The converse of this would be:'],
  ['displayFormula', '$$ (n - 1)! ≡ -1 \\bmod n \\implies n \\text{ is prime} $$'],
  ['pmain', 'Let \\(n = ab\\) where \\(a\\) and \\(b\\) are integers, and let \\(a \\le \\sqrt{n}\\).'],
  ['displayFormula', '$$ 1 \\le a \\le \\sqrt{n} \\implies a|(n-1)! $$'],
  ['pmain', 'Since \\((n - 1)! ≡ -1 \\bmod n\\). This means:'],
  ['displayFormula', '$$ n | (n - 1)! + 1 $$'],
  ['pmain', 'Since \\(a|n\\):'],
  ['displayFormula', '$$\\begin{gather} a | (n - 1)! + 1 ∧ a|(n-1)! \\\\ \\implies a|((n-1)! + 1) - (n-1)! \\implies a|1\\end{gather}$$'],
  ['pmain', 'This means if \\(a \\le \\sqrt{n}\\), then \\(a=1\\), which means \\(n\\) is prime.'],
];
export default content;
