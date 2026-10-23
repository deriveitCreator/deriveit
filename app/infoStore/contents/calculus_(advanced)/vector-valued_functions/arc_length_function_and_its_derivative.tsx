export const title="The arc length for a vector function and it's derivative";
const content = [
  ['h1', 'The arc Length For A Vector Function And it\'s Derivative'],
  ['pmain', 'The <a href="../../calculus/parametric_curves/arc_length_of_a_parametric_curve">arc length formula</a> for a curve defined using parametric functions \\(x(t)\\) and \\(y(t)\\) between \\(t=b\\) and \\(t=a\\) is:'],
  ["displayFormula","\\[ L = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2} \\ dt \\]"],
  ['pmain', 'Let \\(\\textbf{r}(t) = y(t)\\textbf{i} + x(t)\\textbf{j}\\). The arc length made traced by \\(\\textbf{r}(t)\\) between \\(t=b\\) and \\(t=a\\) is:'],
  ["displayFormula","\\[ s = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2} \\ dt = \\int_a^b \\Vert \\textbf{r}'(t) \\Vert \\ dt \\]"],
  ['pmain', 'This is assuming \\(\\textbf{r}(t)\\) defines a smooth curve. If \\(\\textbf{r}(t)\\) is three dimensional:'],
  ["displayFormula","\\[ s = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \\ dt = \\int_a^b \\Vert \\textbf{r}'(t) \\Vert \\ dt\\]"],
  ['pmain', 'Suppose \\(a\\) is a constant and \\(b\\) is a variable, we can define the arc length function as:'],
  ["displayFormula","\\[ s(b) = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \\ dt = \\int_a^b \\Vert \\textbf{r}'(t) \\Vert \\ dt\\]"],
  ['pmain', 'According to the Fundamental Theorem of Calculus:'],
  ["displayFormula","\\[ \\frac{d}{db} s(b) = \\Vert \\textbf{r}'(b) \\Vert \\]"],
];
export default content;