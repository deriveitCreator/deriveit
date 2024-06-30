export const title="If a^n + 1 is odd prime, then a is even and n is a power of 2";
const content = [
  ['h1', 'If a^n + 1 Is Odd Prime, Then a Is Even And n Is A Power Of 2'],
  ['pmain', 'We are going to assume that \\(a \\gt 1\\). If \\(a\\) is odd, then \\(a^n\\) is odd, so \\(a^n + 1\\) would be even and therefore can\'t be prime. Which means \\(a^n + 1\\) being prime means \\(a\\) is even:'],
  ['displayFormula','$$ a^n + 1 \\in \\mathbb{P} \\implies 2 | a $$'],
  ['pmain','Now suppose \\(n\\) is not a power of 2. If \\(n \\ne 2^k\\), then according to the Fundamental Theorem of Arithmetic, there must be an odd prime (let\'s call it \\(s\\)) that divides \\(n\\), so \\(n = rs\\) for some integer \\(r\\). Also, according to <a href="">this lemma</a>:'],
  ['displayFormula','$$ (i - j) | (i^m - j^m) $$'],
  ['pmain', 'Let \\(i = a^r\\), \\(j=-1\\) and \\(m=s\\):'],
  ['displayFormula','$$ (a^r + 1) | (a^{rs} + 1) $$$$ (a^r + 1) | (a^n + 1) $$'],
  ['pmain', 'If \\(a \\gt 1\\) and \\((a^r + 1) | (a^n + 1)\\), then \\((a^n + 1)\\) cannot be prime, which means:'],
  ['displayFormula','$$ n \\ne 2^k \\implies a^n + 1 \\notin \\mathbb{P}$$'],
  ['pmain', 'The contrapositive of this is:'],
  ['displayFormula','$$ a^n + 1 \\in \\mathbb{P} \\implies n = 2^k $$'],
];
export default content;