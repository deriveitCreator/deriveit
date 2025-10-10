export const title="The fundamental theorem of arithmetic (Proof)";
const content = [
  ['h1', 'The Fundamental Theorem Of Arithmetic (Proof)'],
  ['pmain', 'The <b>fundamental theorem of arithmetic</b> states that every integer greater than 1 can be represented uniquely as a product of prime numbers. We will first show the existence of these product and then we will prove the uniqueness.'],
  ['pmain', 'Given an integer \\(n \\gt 1\\), \\(n\\) prime or composite. If \\(n\\) is composite, then it <a href="primeOrProductOfPrimes">can be writen as a product of primes</a>. This shows that some product for \\(n\\) exists.'],
  ['pmain', 'It could be possible that \\(n=p_1p_2p_3 \\ldots p_k = q_1q_2q_3 \\ldots q_h\\), where \\(h \\ge k\\) and where \\(q_i\\) is either a prime or 1. If \\(n=p_1p_2p_3 \\ldots p_k = q_1q_2q_3 \\ldots q_h\\), then:'],
  ['displayFormula','$$\\begin{gather} p_1p_2p_3 \\ldots p_k = q_1q_2q_3 \\ldots q_h \\\\ p_2p_3 \\ldots p_k = \\frac{q_1q_2q_3 \\ldots q_h}{p_1}  \\end{gather} $$'],
  ['pmain', 'Since \\(p_2p_3 \\ldots p_k\\) is an integer, then \\(p_1 | q_1q_2q_3 \\ldots q_h\\). According to <a href="./primeLemma1">this lemma</a>, either \\(p_1 | q_1\\) or \\(p_1 | q_2q_3 \\ldots q_h\\). If \\(p_1 | q_2q_3 \\ldots q_h\\), then either \\(p_1 | q_2\\) or \\(p_1 | q_3 \\ldots q_h\\). By repeating this process, we can claim that one of these has to be true: \\(p_1 | q_1\\), \\(p_1 | q_2\\), \\(p_1 | q_3\\), ..., \\(p_1 | q_{h-1}\\) or \\(p_1 | q_h\\). Let\'s assume that \\(q_1\\) is the prime that can be divided by \\(p_1\\). Since \\(q_1\\) is a prime, then \\(p_1=q_1\\), therefore \\(\\frac{q_1}{p_1}=1\\). So now we have:'],
  ['displayFormula','$$\\begin{gather} p_2p_3 \\ldots p_k = q_2q_3 \\ldots q_h \\\\ p_3 \\ldots p_k = \\frac{q_2q_3 \\ldots q_h}{p_2} \\end{gather} $$'],
  ['pmain', 'Using the same argument as above, we can claim that one of \\(q_i\\) should be divisible by \\(p_2\\). Let\'s assume \\(q_2\\) is the one that is divisble by \\(p_2\\). Then we have:'],
  ['displayFormula','$$\\begin{gather} p_3p_4 \\ldots p_k = q_3 \\ldots q_h \\\\ p_4 \\ldots p_k = \\frac{q_3 \\ldots q_h}{p_3} \\end{gather} $$'],
  ['pmain', 'If we keep repeating the same argument as above, eventually we would end up with:'],
  ['displayFormula','$$1 = q_{h-k} \\ldots q_h $$'],
  ['pmain', 'This means only \\(k\\) numbers of \\(q_i\\) integers were primes, and all those \\(q_i\\) primes were equal to some \\(p_j\\) primes. This proves the uniquesness.'],
];
export default content;