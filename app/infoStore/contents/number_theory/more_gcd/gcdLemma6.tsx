export const title="Proof that if (a, b) = 1 and ab = c^n, then there exists integers x and y such that a = x^n ∧ b = y^n";
const content = [
  ['h1', 'Proof That If (a, b) = 1 And ab = c<sup>n</sup>, Then There Exists integers x And y Such That a = x<sup>n</sup> And b = y<sup>n</sup>'],
  ['pmain', 'According to the fundamental theorem of arithmetic:'], 
  ["displayFormula", "$$c = p_1^{m_1} p_2^{m_2} \\ldots p_k^{m_k}$$"],
  ['pmain', 'If we raise both sides by \\(n\\):'], 
  ["displayFormula", "$$ c^n = p_1^{nm_1} p_2^{nm_2} \\ldots p_k^{nm_k}$$"],
  ['pmain', 'If \\(ab=c^n\\), then some \\(p_i\\)\'s has to be a factor of \\(a\\) and some \\(p_i\\)\'s has to a factor of \\(b\\). We can\'t have a prime that can divide both \\(a\\) and \\(b\\) because \\((a,b)=1\\). This means we can divide the prime factors of \\(c^n\\) into two groups:'], 
  ["displayFormula", "$$ c^n = (\\ldots)^n (\\ldots)^n$$"],
  ['pmain', 'The first group contains all the primes that divides \\(a\\) and the second contains all the groups that divides \\(b\\). We can use integers \\(x\\) and \\(y\\) to represent this:'], 
  ["displayFormula", "$$ c^n = x^n y^n$$"],
  ['pmain', 'If \\(c^n=ab\\), and \\(x^n\\) contains all the primes that exactly divide \\(a\\) while \\(y^n\\) contains all the primes that exactly divide \\(b\\), then \\(a=x^n\\) and \\(b=y^n\\).'], 
];
export default content;
