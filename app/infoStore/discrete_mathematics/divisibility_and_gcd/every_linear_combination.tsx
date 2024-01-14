export const title="Every Linear Combination Of a And b Is A Multiple Of gcd(a, b) And Vice Versa";
const content = [
  ['h1', 'Every Linear Combination Of a And b Is A Multiple Of gcd(a, b) And Vice Versa'],
  ["pmain","Let \\(d = \\gcd(a, b)\\), and lets define two sets (\\(S\\) and \\(T\\)):"],
  ["displayFormula","$$\\begin{align}S &= \\{as+bt | s,t \\in \\mathbb{Z} \\} \\\\ T &= \\{nd| n \\in \\mathbb{Z}\\} \\end{align}$$"],
  ["pmain","Since \\(d\\) is the smallest linear combination  of \\(a\\) and \\(b\\) (let's call it \\(ax+by\\)) then \\(T \\subseteq S\\):"],
  ["displayFormula","$$\\begin{align} d &= ax + by \\in S \\\\ 2d &= a(2x) + b(2y) \\in S \\\\ 3d &= a(3x) + b(3y) \\in S \\end{align}$$"],
  ["pmain","Since \\(d = \\gcd(a, b)\\), then \\(d|a\\) and \\(d|b\\). ∴ \\(a = kd\\) and \\(b = hd\\):"],
  ["displayFormula","$$\\begin{align} S &= \\{as + bt\\} \\\\ &= d(ks) + d(ht) \\\\ &= nd \\end{align}$$"],
  ["pmain","∴ \\(S=T\\)."]
];
export default content;