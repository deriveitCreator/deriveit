export const title="If gcd(x, y) divides (x + y) then there are infinite values of x and y, otherwise no values of x and y exists";
const content = [
  ['h1', 'If gcd(x, y) Divides (x + y) Then There Are Infinite Values Of x And y'],
  ['pmain', 'Let\'s say there exists an integer \\(z\\), such that:'], 
  ['displayFormula', '$$ \\frac{x+y}{(x,y)} = z $$'],
  ['pmain', 'Now let \\(x+y=s\\) and \\((x, y) = d\\), then:'], 
  ['displayFormula', '$$ x = dm $$$$ y = dn $$'],
  ['pmain', 'This means:'],
  ['displayFormula', '$$ s = dm + dn $$$$ \\frac{s}{d} = m + n = z$$'],
  ['pmain', 'Since \\(z\\) is some integer, then there are infinite possible values of \\(m\\) and \\(n\\), which means there will also be infinite possible values for \\(x\\) and \\(y\\). If \\(z\\) wasn\'t an integer, then both \\(m\\) and \\(n\\) wouldn\'t be integers as well, which means no integers \\(x\\) and \\(y\\) would exist.'],
];
export default content;