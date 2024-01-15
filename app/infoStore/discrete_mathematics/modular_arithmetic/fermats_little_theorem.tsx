export const title="Proving Fermat's Little Theorem";
const content = [
  ['h1', 'Proving Fermat\'s Little Theorem'],
  ['pmain', 'Given a prime \\(p\\) and some integer \\(a\\), we can use Euler\'s theorem to say:'],
  ['displayFormula', '$$ (a, p) = 1 \\implies a^{\\phi(p)} ≡ 1 mod p $$'],
  ['pmain', 'By definition of prime \\(p\\), all numbers in it\'s complete residue system other than \\(p\\) itself is coprime. In other words, \\( \\phi(p) = p - 1 \\):'],
  ['displayFormula', '$$ a^{p-1} ≡ 1 mod p $$'],
  ['pmain', 'This would also mean:'],
  ['displayFormula', '$$ a^p ≡ a mod p $$'],
  ['pmain', 'If \\(p | a\\), then \\(a ≡ 0 \\mod p\\).'],
];
export default content;
