export const title="m * gcd(a, b) = gcd(ma, mb)";
const content = [
  ['h1', 'm * gcd(a, b) = gcd(ma, mb)'],
  ['pmain', 'Let \\(gcd(a, b) = c\\) and \\(gcd(ma, mb) = d\\), so:'], 
  ['displayFormula', '\\[ \\displaylines{ c|a \\text{ and } c|b \\\\ \\therefore mc|ma \\text{ and } mc|mb \\\\ \\therefore  mc|d } \\]'],
  ['pmain', 'This means:'], 
  ['displayFormula', '$$ d = mcx $$'],
  ['pmain', 'For some integer \\(x\\), so:'], 
  ['displayFormula', '\\[ \\displaylines{ d|ma \\text{ and } d|mb \\implies \\\\ mcx|ma \\text{ and } mcx|mb \\\\ \\therefore cx|a \\text{ and } cx|b } \\]'],
  ['pmain', 'Since \\(c\\) is the greatest common divisor, then \\(x=1\\), so \\(d = mc\\).']
];
export default content;