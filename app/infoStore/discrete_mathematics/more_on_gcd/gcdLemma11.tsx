export const title="If gcd(a, b) = 1, then gcd(a+b, ab) = 1";
const content = [
  ['h1', 'If gcd(a, b) = 1, Then gcd(a+b, ab) = 1:'],
  ['pmain', 'Assume \\(\\gcd(a+b, ab) = d\\), then there is a prime \\(p\\) that divides \\(d\\). If \\(p|ab\\), then  \\(p|a\\) or \\(p|b\\) (click <a href="https://www.deriveit.net/discrete_mathematics/prime_numbers/primeLemma1">here</a> for proof).'], 
  ['pmain', 'Assume \\(p|a\\). If \\(p|a\\) and \\(p|(a+b)\\), then \\(p|b\\).'],
  ['pmain', 'If \\(p\\) divides both \\(a\\) and \\(b\\), then we have a contradiction (since \\(\\gcd(a, b)=1\\)).']
];
export default content;