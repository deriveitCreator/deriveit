export const title="Uniqueness of a power series";
const content = [
  ['h1', 'Uniqueness Of A Power Series'],
  ['pmain', 'Let there be two power series which are equal for all \\(x\\) in an interval containing \\(a\\):'],
  ["displayFormula","\\[\\sum^{\\infty}_{n=0} c_n (x-a)^n = \\sum^{\\infty}_{n=0} d_n (x-a)^n\\]"],
  ['pmain', 'Let the series be equal to \\(f(x)\\):'],
  ["displayFormula","\\[\\begin{align} f(x) &= c_0 + c_1 (x-a) + c_2(x-a)^2 + c_3(x-a)^3 + c_4(x-a)^4 + \\cdots \\\\ &= d_0 + d_1 (x-a) + d_2(x-a)^2 + d_3(x-a)^3 + d_4(x-a)^4 + \\cdots\\end{align}\\]"],
  ['pmain', 'This means, when \\(x=a\\), \\(f(a) = c_0 = d_0\\). If we differetiate the power series, we get:'],
  ["displayFormula","\\[\\begin{align} f'(x) &= c_1 + (2)c_2(x-a) + (3)c_3(x-a)^2 + (4)c_4(x-a)^3 + \\cdots \\\\ &= d_1 + (2)d_2(x-a) + (3)d_3(x-a)^2 + (4)d_4(x-a)^3 + \\cdots\\end{align}\\]"],
  ['pmain', 'This means, when \\(x=a\\), \\(f\'(a) = c_1 = d_1\\). If we differetiate again, we get:'],
  ["displayFormula","\\[\\begin{align} f'(x) &= (2)c_2 + (3)(2)c_3(x-a) + (4)(3)c_4(x-a)^2 + \\cdots \\\\ &= (2)d_2 + (3)(2)d_3(x-a) + (4)(3)d_4(x-a)^2 + \\cdots\\end{align}\\]"],
  ['pmain', 'This means, when \\(x=a\\), \\(f\'\'(a) = c_2 = d_2\\). Using a similar argument, we can claim \\(c_i = d_i\\) for all integer \\(i \\ge 3\\).'],
];
export default content;