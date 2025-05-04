export const title="If gcd(a, b) = 1, then gcd(a, ka + b) = 1";
const content = [
  ['h1', 'If gcd(a, b) = 1, Then gcd(a, ka + b) = 1'],
  ['pmain', 'Let \\(a\\) and \\(b\\) be positive integers and let \\(k\\) be any ineteger. We need to prove:'], 
  ['displayFormula', '$$ (a, b) = 1 \\implies (a, ka + b) = 1 $$'],
  ['pmain', 'The contrapositive of this is:'], 
  ['displayFormula', '$$ (a, ka + b) \\ne 1 \\implies (a,b) \\ne 1 $$'],
  ['pmain', 'Let\'s say \\((a, ka + b) = d \\ne 1\\). This means \\(d|a\\) and \\(d|ka+b\\). Therefore:'], 
  ['displayFormula', '$$ dh = ka+b $$'],
  ['pmain', 'Dividing both sides by \\(d\\):'], 
  ['displayFormula', '$$ h = \\frac{ka}{d}+\\frac{b}{d} $$'],
  ['pmain', 'Since \\(d|a\\):'], 
  ['displayFormula', '$$ h = \\text{some integer } +\\frac{b}{d} $$'],
  ['pmain', 'Since \\(h\\) is an integer, and the first operand is an integer, then \\(b/d\\) also has to be an integer. Therefore \\(d|b\\).'], 
  ['pmain', 'If \\(d|a\\) and \\(d|b\\), then \\((a,b) \\ne 1\\). Thus, we have proven that is \\((a, ka + b) = d \\ne 1\\), then \\((a,b) \\ne 1\\). This also means if \\((a,b)=1\\), then \\((a, ka + b) = 1\\).'], 
];
export default content;