export const title="If 2^p - 1 is prime, then p is prime";
const content = [
  ['h1', 'If 2^p - 1 Is Prime, Then p Is Prime'],
  ['pmain', 'Let \\(p\\) be a composite number, then \\(p\\) can be written as \\(ab\\) where both \\(a\\) and \\(b\\) are greater than 1. So:'],
  ['displayFormula','$$\\begin{align} 2^p - 1 &= 2^{ab} - 1 \\\\ &= (2^a)^b - 1 \\end{align}$$'],
  ['pmain','We can rewrite this as:'],
  ['displayFormula','$$(2^a)^b + \\left( (2^a)^{b-1} - (2^a)^{b-1} \\right) + \\left( (2^a)^{b-2} - (2^a)^{b-2} \\right) + \\ldots + \\left( (2^a)^1 - (2^a)^1 \\right) - 1$$'],
  ['pmain','We can put all the negatives in one side:'],
  ['displayFormula','$$ \\left( (2^a)^b + (2^a)^{b-1} + \\ldots + (2^a) \\right) - \\left( (2^a)^{b-1} + \\ldots + (2^a) + 1\\right)$$'],
  ['pmain','We can factor this:'],
  ['displayFormula','$$ (2^a) \\left( (2^a)^{b-1} + \\ldots + (2^a) + 1 \\right) - \\left( (2^a)^{b-1} + \\ldots + (2^a) + 1\\right)$$$$ (2^a -1) \\left( (2^a)^{b-1} + \\ldots + (2^a) + 1 \\right)$$'],
  ['pmain', 'The above expression is a composite number. This means, if \\(p\\) is a composite number, then \\(2^p - 1\\) is also composite. The contrapositive of this would be "if \\(2^p - 1\\) is prime, then \\(p\\) is prime".'],
];
export default content;