export const title="Proof that if pn is the nth prime, then pn ≤ 2^n";
const content = [
  ['h1', 'Proof That If p<sub>n</sub> is the nth prime, then p<sub>n</sub> ≤ 2<sup>n</sup>'],
  ['pmain', 'According to Bertrand\'s postulate, for every positive integer \\(k\\), there exists a prime \\(p\\) such that \\(k \\lt p \\lt 2k\\). Now let \\(n = 2^{k-1}\\). This means for every positive integer \\(n \\ge 2\\), there exists a prime \\(p\\) such that \\(2^{k-1} \\lt p \\lt 2^k\\).'],
  ['pmain', 'Another way of saying this is that in every interval of the form \\((2^{k-1}, 2^k)\\) for \\(k=2,3,4,\\ldots\\), there exists at least one prime.'],
  ['pmain', 'In the interval \\((2^1,2^2)\\), there is the prime 3. In the interval \\((2^2,2^3)\\), there is the prime 5. In the interval \\((2^3,2^4)\\), there is the prime 11.'],
  ['pmain', 'If the intervals \\((2^1,2^2)\\) and \\((2^2,2^3)\\) contain at least one prime in each, then the interval \\((2^1,2^3)\\) contains at least two primes. Similarly, \\((2^1,2^4)\\) contains at least three primes and \\((2^1,2^5)\\) contains at least four primes. In general, \\((2,2^k)\\) contains at least \\(k-1\\) primes.'],
  ['pmain', 'Since 2 it self is a prime, then the interval \\((1,2^k)\\) contains at least \\(k\\) primes. Another way of saying this is that there are at least \\(k\\) primes less than \\(2^k\\), where \\(k \\ge 2\\). This also means that the \\(k\\)th prime is \\(\\lt 2^k\\), where \\(k \\ge 2\\).'],
  ['pmain', 'What about a case where \\(k=1\\)? We are considering only one prime (2), and this is equal to \\(2^1\\). This means that the \\(k\\)th prime is \\(\\le 2^k\\), where \\(k \\ge 1\\).'],
];
export default content;
