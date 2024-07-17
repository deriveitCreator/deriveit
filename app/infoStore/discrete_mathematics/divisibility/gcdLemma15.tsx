export const title="If gcd(a, b) = 1, then gcd(ma, mb) = m";
const content = [
  ['h1', 'If gcd(a, b) = 1, Then gcd(ma, mb) = m:'],
  ['pmain', 'Since \\(m\\) is a common divisor in \\(ma\\) and \\(mb\\), then the greatest common divisor has to be atleast \\(m\\)'], 
  ['displayFormula', '$$ (ma, mb) \\ge m $$'],
  ['pmain', 'Suppose \\((ma, mb) = x \\gt m \\):'], 
  ['displayFormula', '$$ ma = jx $$$$ mb = kx $$'],
  ['pmain', 'According to <a href="every_linear_combination">this lemma</a>, every linear combination (including \\(m\\)) can divide \\(x\\):'],
  ['displayFormula', '$$ m|x \\implies x = my $$'],
  ['pmain', 'This means:'], 
  ['displayFormula', '$$ ma = jx = jmy $$$$ mb = kx = kmy $$'],
  ['pmain', 'Therefore:'], 
  ['displayFormula', '$$ a = jy $$$$ b = ky $$'],
  ['pmain', 'Since \\((a,b)=1\\) then \\(y\\) (a common divisor) has to be 1. This is a contradiction, because:'],
  ['displayFormula', '$$ x=my \\implies x=m (\\text{ but } x \\gt m) $$'],
  ['pmain', 'This means if \\((ma, mb) \\ge m\\) and \\((ma, mb) \\ngtr m\\), then \\((ma, mb) = m\\).'],
];
export default content;