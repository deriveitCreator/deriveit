export const title="Every integer can be written as a prime or a product of primes";
const content = [
  ['h1', 'Every Integer Can Be Written As A Prime Or A Product Of Primes'],
  ['pmain', 'We can manually check that the first ten numbers are either a prime or can be written as a product of prime:'],
  ['displayFormula','$$\\begin{align} 1 \\quad 2 \\quad 3 \\quad & 4 && 5 && 6 && 7 && 8 && 9 && 10 \\\\ & 2^2 && && 2*3 && && 2^4 && 3^2 && 2*5 \\end{align} $$'],

  ['pmain', 'Let \\(P(n)\\) be the statement that "\\(n\\) is either prime or a product of primes". Choose an integer \\(k\\) such that you know for sure that the proposition \\(P\\) is true for all integers less than or equal to \\(k\\). Now we need to know whether the proposition is true for \\(k+1\\).'],
  ['pmain', 'If \\(k+1\\) is prime, then we are done. If \\(k+1 = m_1 \\cdot m_2\\) is composite, where \\(1 \\lt m_1 \\lt k+1 \\) and \\(1 \\lt m_2 \\lt k+1\\). Since both \\(m_1\\) and \\(m_2\\) are between 2 and \\(k\\) (inclusive), then they are either a prime or a product of primes. This means \\(k+1\\) would also be a product of primes.'],
  ['pmain', 'Thus, by strong induction, \\(P(n)\\) is true for all \\(n \\ge 2\\).'],
];
export default content;