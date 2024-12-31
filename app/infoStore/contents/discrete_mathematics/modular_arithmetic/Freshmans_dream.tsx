export const title="Proving Freshman's Dream";
const content = [
  ['h1', 'Proving Freshman\'s Dream'],
  ['pmain', 'Let \\(p\\) be a prime. Using the binomial theorem, we use expand \\((x + y)^p\\):'],
  ['displayFormula', '$$ (x+y)^p=\\sum^p_{k=0}\\binom{p}{k}x^{k}y^{p-k} $$'],
  ['pmain', 'If we take out the first and last term:'],
  ['displayFormula', '$$\\begin{gather} (x+y)^p = x^p + y^p + \\sum^{p-1}_{k=1}\\binom{p}{k}x^{k}y^{p-k} \\\\ (x+y)^p - x^p - y^p = \\sum^{p-1}_{k=1}\\binom{p}{k}x^{k}y^{p-k} \\end{gather}$$'],
  ['pmain', 'There is a factor of \\(p\\) inside \\(\\binom{p}{k}\\), which means:'],
  ['displayFormula', '$$ \\sum^{p-1}_{k=1}\\binom{p}{k}x^{k}y^{p-k} ≡ 0 \\mod p $$'],
  ['pmain', 'This would also mean:'],
  ['displayFormula', '$$\\begin{gather} (x+y)^p - x^p - y^p ≡ 0 \\mod p \\\\ (x+y)^p ≡ x^p + y^p \\mod p \\end{gather}$$']
];
export default content;
