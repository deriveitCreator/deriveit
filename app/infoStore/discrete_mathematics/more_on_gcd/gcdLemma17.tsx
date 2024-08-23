export const title="If gcd(a, b) = d and gcd(a, c) = d, then  gcd(a, b, c) = d";
const content = [
  ['h1', 'If gcd(a, b) = d And gcd(a, c) = d, Then  gcd(a, b, c) = d'],
  ['pmain', 'Let:'], 
  ['displayFormula', '$$ \\gcd(a, b) = d $$$$ \\gcd(a, b, c) = e $$'],
  ['pmain', 'Then \\(e \\le d \\), because there can be no integer that can divide \\(a\\) and \\(b\\) and also be greater than \\(d\\).'], 
  ['pmain', 'If \\(\\gcd(a, c) = d\\), then \\(d|a\\), \\(d|b\\) and \\(d|c\\). Since \\(e\\) is the greatest common divisor of \\(a\\), \\(b\\) and \\(c\\), then \\(e \\ge d\\).'],
  ['pmain', 'If \\(e \\le d \\) and \\(e \\ge d\\), then \\(e=d\\).'],
];
export default content;