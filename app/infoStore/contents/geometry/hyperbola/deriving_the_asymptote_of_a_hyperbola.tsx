export const title="Deriving the asymptote of a hyperbola";
const content = [
['h1', 'Deriving The Asymptote Of A Hyperbola'],
['pmain', 'The standard formula of a hyperbola is:'],
["displayFormula","\\[\\frac{x^2}{a^2} - \\frac{y^2}{(c^2 - a^2)} = 1\\]"],
['pmain', 'We can rearrange this:'],
["displayFormula","\\[\\left( \\frac{x^2}{a^2} - 1 \\right) (c^2 - a^2) = y^2\\]"],
['pmain', 'Let define \\(b\\) such that \\(b^2 = c^2 - a^2\\):'],
["displayFormula","\\[y^2 = b^2(x^2/a^2 - 1)\\] \\[y = ± b \\sqrt{x^2/a^2 - 1}\\]"],
['pmain', 'We can multiply the RHS with \\(\\frac{x}{a} * \\frac{a}{x}\\):'],
["displayFormula","\\[y= ± \\left( \\frac{xb}{a} \\right) \\left( \\frac{a}{x} \\sqrt{\\frac{x^2}{a^2}-1}\\right)\\]"],
['pmain', 'we can simplify this:'],
["displayFormula","\\[y = ±\\left( \\frac{xb}{a} \\right) \\sqrt{1 - \\frac{a^2}{x^2}} \\]"],
['pmain', 'If we take the limit \\(x \\to \\infty \\), the first term \\([xb/a]\\) will increase linearly as \\(x\\) increases, and the second term will approach \\(\\sqrt{1-0}\\). So as \\(x\\) approaches \\(\\infty\\), the second term will approach \\(1\\), which means that the hyperbola will continually approach the lines \\(±\\frac{xb}{a}\\), but never touch it. It suffices to say that the asymptote is:'],
["displayFormula","\\[y = ±\\frac{xb}{a} \\]"],
];
export default content;