export const title="Binomial theorem";
const content = [
  ['h1', 'Binomial Theorem'], 

  ['pmain', 'Let\'s try to expand \\((x+y)^4\\):'], 
  ['displayFormula', '\\[(x+y)^4 = (x+y)(x+y)(x+y)(x+y) \\]'],
  ['pmain', 'Expanding:'], 
  ['displayFormula', '\\[(x+y)^4 = xxxx + \\begin{aligned} &xxxy + \\\\ &xxyx + \\\\ &xyxx + \\\\ &yxxx \\end{aligned} + \\begin{aligned} &xxyy + \\\\ &xyxy + \\\\ &yxxy + \\\\ &xyyx + \\\\ &yxyx + \\\\ &yyxx \\end{aligned} + \\begin{aligned} &yyyx + \\\\ &yyxy + \\\\ &yxyy + \\\\ &xyyy \\end{aligned} + yyyy \\]'],
  ['pmain', 'The first group contain 4 \\(x\\)\'s, the second group contains 3 \\(x\\)\'s and 1 \\(y\\)\'s, the third group contains 2 \\(x\\)\'s and 2 \\(y\\)\'s, the fourth group contains 1 \\(x\\)\'s and 3 \\(y\\)\'s, and the fifth group contains 4 \\(y\\)\'s. Let\'s look at the third group, with 2 \\(x\\)\'s and 2 \\(y\\)\'s.'], 
  ['pmain', 'According to <a href="arranging_n_objects_with_k_identical" target="_blank">this article</a>, we know that there are \\(\\binom n k\\) ways to arranging \\(n\\) items with \\(k\\) belonging to one group and the others belonging to another group. For the second group above, there are a total of \\(\\binom 4 1\\) ways to arrange 4 items, with 1 belonging to one group (\\(y\\)), and the rest belonging to another group (\\(x\\)). For the third group above, there are a total of \\(\\binom 4 2\\) ways to arrange 4 items, with 2 belonging to one group (\\(y\\)) and 2 belonging to the other group (\\(x\\)). A similar argument can be made for every other group.'], 
  ['displayFormula', '\\[(x+y)^4 = \\binom 4 0 x^4 + \\binom 4 1 x^3y^1 + \\binom 4 2 x^2y^2 + \\binom 4 3 x^1 y^3 + \\binom 4 4 y^4  \\]'],
  ['pmain', 'We can genelarize this and say:'], 
  ['displayFormula', '\\[\\begin{align} (x+y)^n &= \\binom n 0 x^n + \\binom n 1 x^{n-1} y^1 + \\binom n 2 x^{n-2} y^2 + \\cdots \\\\ &= \\sum^n_{i=0} \\binom n i x^{n-i} y^i \\end{align}\\]'],

];
export default content;