export const title="Proof that if [(a,b) = (c,d) = 1] and [a/b + c/d ∈ Z], then b = d";
const content = [
  ['h1', 'Proof That If [(a,b) = (c,d) = 1] And [a/b + c/d ∈ Z], Then b = d'],
  ['pmain', 'Since \\(\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + cb}{bd}\\) is an integer, then \\(bd | ad + cb\\), which means:'], 
  ["displayFormula", "$$\\begin{gather} bd | d(ad + cb) \\\\ bd | ad^2 + cbd \\end{gather}$$"],
  ['pmain', 'Since \\(bd | cbd\\):'], 
  ["displayFormula", "$$\\begin{gather} bd | ad^2 \\\\ b|ad \\\\ (a,b)=1 \\implies b|d \\end{gather}$$"],
  ['pmain', 'We can make a similar argument to show that \\(d|b\\), which means \\(b=d\\).'], 
];
export default content;
