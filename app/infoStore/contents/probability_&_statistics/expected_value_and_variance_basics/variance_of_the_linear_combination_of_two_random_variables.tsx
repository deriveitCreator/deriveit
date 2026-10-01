export const title="Proof That Var[aX + bY] = a^2 Var[X] + b^2 Var[Y] + 2ab cov(X,Y)";
const content = [
  ['h1', 'Proof That Var[aX + bY] = a^2 Var[X] + b^2 Var[Y] + 2ab cov(X,Y)'],
  ['pmain', '\\(\\operatorname{Var}[X]\\) is defined as:'],
  ['displayFormula', '\\[ \\operatorname{Var}[X] = \\operatorname{E}[(X - E[X])^2] \\]'],
  ['pmain', 'Similarly:'],
  ['displayFormula', '\\[ \\operatorname{Var}[aX+bY] = \\operatorname{E}[(aX+bY - \\operatorname{E}[aX+bY])^2] \\]'],
  ['pmain', 'Using the <a href="linearity_of_expectation">linearity of expectation</a> property:'],
  ['displayFormula', '\\begin{align} \\operatorname{Var}[aX+bY] &= \\operatorname{E}[(aX+bY - \\operatorname{E}[aX+bY])^2] \\\\ &= \\operatorname{E}[(aX+bY - \\operatorname{E}[aX]-\\operatorname{E}[bY])^2] \\\\ &= \\operatorname{E}[(aX - \\operatorname{E}[aX]+bY-\\operatorname{E}[bY])^2] \\end{align}'],
  ['pmain', 'Since we can <a href="loe2">take the constant out</a>:'],
  ['displayFormula', '\\begin{align} \\operatorname{Var}[aX+bY] &= \\operatorname{E}[(aX - a\\operatorname{E}[X]+bY-b\\operatorname{E}[Y])^2] \\\\ &= \\operatorname{E}[(a(X - \\operatorname{E}[X])+b(Y-\\operatorname{E}[Y]))^2] \\end{align}'],
  ['pmain', 'Squaring:'],
  ['displayFormula', '\\begin{align} \\operatorname{Var}[aX+bY] &= \\operatorname{E}[a^2(X - \\operatorname{E}[X])^2+b^2(Y-\\operatorname{E}[Y])^2 + 2 ab(X - \\operatorname{E}[X])(Y - \\operatorname{E}[Y])] \\end{align}'],
  ['pmain', 'Using the previous two properties again:'],
  ['displayFormula', '\\begin{align} \\operatorname{Var}[aX+bY] &= \\operatorname{E}[a^2(X - \\operatorname{E}[X])^2]+\\operatorname{E}[b^2(Y-\\operatorname{E}[Y])^2] + 2 ab\\operatorname{E}[(X - \\operatorname{E}[X])(Y - \\operatorname{E}[Y])] \\\\ &= \\operatorname{Var}[X]+\\operatorname{Var}[Y] + 2 ab \\operatorname{cov}(X,Y) \\end{align}'],
  ['pmain', 'Using the same steps as above, we can proof that:'],
  ['displayFormula', '\\[ \\operatorname{Var}[aX-bY] = \\operatorname{Var}[X]+\\operatorname{Var}[Y] - 2 ab \\operatorname{cov}(X,Y) \\]'],
];
export default content;