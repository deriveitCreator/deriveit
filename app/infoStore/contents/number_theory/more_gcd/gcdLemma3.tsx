export const title="If gcd(m,b)=1, then gcd(ma,b) = gcd(a,b)";
const content = [
  ['h1', 'If gcd(m,b)=1, Then gcd(ma,b) = gcd(a,b)'],
  ['pmain', 'If \\((m,b)=1\\), then \\(m\\) and \\(b\\) don\'t  share any common prime factors.'], 
  ['pmain', 'Let \\(d=(ma,b)\\), so \\(d\\) contains all the prime factors that appear in both \\(ma\\) and \\(b\\), but if \\(m\\) and \\(b\\) don\'t share any common factors, then none of the prime factors of \\(m\\) appear in \\(d\\).'], 
  ['pmain', 'If \\(d\\) contains all the prime factors that appear in both \\(ma\\) and \\(b\\), and \\(d\\) doesn\'t contain any prime factor of \\(m\\), then all the prime factors that are in \\(d\\) are the ones that appear in only \\(a\\) and \\(b\\). Therefore, \\(d=(a,b)\\).'], 
];
export default content;
