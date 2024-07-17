export const title="If gcd(a, b) = 1, then gcd(a+b, a-b) is either 1 or 2";
const content = [
  ['h1', 'If gcd(a, b) = 1, Then gcd(a+b, a-b) Is Either 1 Or 2'],
  ['pmain', 'Let \\(d=(a+b, a-b)\\), then:'], 
  ['displayFormula', '$$ d|a+b $$$$ d|a-b $$'],
  ['pmain', 'According to <a href="divisibility1">this lemma</a>, \\(d\\) can divide any linear combination of \\((a+b)\\) and \\((a-b)\\):'], 
  ['displayFormula', '$$ d | (a+b) + (a-b) \\implies d | 2a $$$$ d | (a+b) - (a-b) \\implies d | 2b $$'],
  ['pmain', 'Since \\(d\\) divides both \\(2a\\) and \\(2b\\), and since every linear combination of \\(2a\\) and \\(2b\\) is a multiple of \\((2a, 2b)\\), then:'],
  ['displayFormula', '$$ d|(2a, 2b) $$'],
  ['pmain', 'According to <a href="gcdLemma15">this lemma</a>, we can take the 2 out:'], 
  ['displayFormula', '$$ (a, b) = 1 \\implies (2a, 2b)=2 $$$$ \\therefore d|2$$'],
  ['pmain', 'This means \\(d\\) can only be 2 or 1.'],
];
export default content;