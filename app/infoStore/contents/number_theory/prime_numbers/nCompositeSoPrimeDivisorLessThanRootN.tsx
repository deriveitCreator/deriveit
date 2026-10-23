export const title="If n is a composite number then there is a prime divisor ≤ √n";
const content = [
  ['h1', 'If n Is A Composite Number Then There Is A Prime Divisor Less Than Or Equal To Root n'],
  ['pmain', 'Since \\(n\\) is composite then:'],
  ['displayFormula','$$n=ab$$'],
  ['pmain','Assume \\(a \\le b\\), then \\(a \\le \\sqrt{n}\\), otherwise:'],
  ['displayFormula','$$\\begin{align} a \\gt \\sqrt{n} &\\implies b \\gt \\sqrt{n} \\\\ &\\implies ab \\gt \\sqrt{n}\\sqrt{n} \\\\ &\\implies ab \\gt n \\end{align}$$'],
  ['pmain','According to <a href="fundamental_theorem_of_arithmetic">the Fundamental Theorem of Arithmetic</a>, there is a prime \\(p\\) such that \\(p|a\\). That means \\(p \\le \\sqrt{n} \\).'],
];
export default content;