export const title="Proving the existence of a modular inverse if (a, m) = 1";
const content = [
  ['h1', 'Proving the existence of a modular inverse if (a, m) = 1'],
  ['pmain', 'If \\((a, m) = 1\\), then \\(ax+my=1\\) or \\(ax=m(q)+1\\), which means:'],
  ['displayFormula', '$$ ax ≡ 1 \\mod m $$'],
  ['pmain', 'Here, \\(x\\) is the inverse. If \\(ab_1 ≡ 1\\) and \\(ab_2 ≡ 1\\), then:'],
  ['displayFormula', '$$ ab_1 ≡ ab_2 \\mod m ⇒ m|a(b_1 - b_2) $$'],
  ['pmain', 'Since \\((m, a) = 1\\):'],
  ['displayFormula', '$$ m|b_1 - b_2 ⇒ b_1 ≡ b_2 \\mod m $$'],
  ['pmain', 'This shows that the inverse is unique. By \'unique\', it means there is only one solution in modulo \\(m\\).'],
];
export default content;
