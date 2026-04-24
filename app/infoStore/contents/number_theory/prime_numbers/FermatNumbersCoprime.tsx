export const title="Proof That Fermat Numbers F_n And F_m Are Coprime When n ≠ m";
const content = [
  ['h1', 'Proof That Fermat Numbers F<sub>n</sub> And F<sub>m</sub> Are Coprime When n ≠ m'],
  ['pmain', 'Let\'s assume that \\(m \\lt n\\). As <a href="./FermatNumbersRecurrenceRelations">shown here</a>, this means:'],
  ['displayFormula','$$ F_0 F_1 F_2 \\cdots F_m \\cdots F_{n-1} + 2 = F_n$$'],
  ['pmain', 'Rearranging:'],
  ['displayFormula','$$\\begin{gather} 2 = F_n - F_0 F_1 F_2 \\cdots F_m \\cdots F_{n-1} \\\\ F_n - F_m k = 2 \\end{gather}$$'],
  ['pmain', 'Any divisor that divides \\(F_n\\) and \\(F_m\\) should also be able to divide any linear combination of \\(F_n\\) and \\(F_m\\). Let \\(d\\) divide \\(F_n - F_m k\\):'],
  ['displayFormula','$$ d | F_n - F_m k \\implies d|2 $$'],
  ['pmain', 'This means \\(d=2\\) or \\(d=1\\). Since both \\(F_n\\) and \\(F_m\\) are odd, then \\(d\\) cannot be 2. Therefore \\(d=1\\). Since the <a href="../divisibility/linear_combination_smallest_gcd">smallest linear combination of two numbers is their gcd</a>, then \\((F_n, F_m) = 1\\).'],
];
export default content;