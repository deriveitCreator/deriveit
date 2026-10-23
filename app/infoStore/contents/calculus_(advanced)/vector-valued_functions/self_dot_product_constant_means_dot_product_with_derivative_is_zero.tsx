export const title="If the dot product of a vector-valued function with itself is a constant, then the dot product with it's derivative is 0";
const content = [
  ['h1', 'r(t) · r(t) = c ⇒ r(t) · r\'(t) = 0'],
  ['pmain', 'Let \\(\\textbf{r}(t)\\) be a vector-valued function. According to the dot product rule of derivatives:'],
  ['displayFormula', "$$\\begin{align} \\frac{d}{d t} [\\textbf{r}(t) \\cdot \\textbf{r}(t)] &= (\\textbf{r}'(t) \\cdot \\textbf{r}(t)) + (\\textbf{r}(t) \\cdot \\textbf{r}'(t)) \\\\ &= 2(\\textbf{r}'(t) \\cdot \\textbf{r}(t))\\end{align}$$"],
  ['pmain', 'If \\(\\frac{d}{d t} [\\textbf{r}(t) \\cdot \\textbf{r}(t)]\\) is a constant, then:'],
  ['displayFormula', "$$\\begin{gather} \\frac{d}{d t} [\\textbf{r}(t) \\cdot \\textbf{r}(t)] = 0 = 2(\\textbf{r}'(t) \\cdot \\textbf{r}(t)) \\\\ \\implies \\textbf{r}'(t) \\cdot \\textbf{r}(t) = 0 \\end{gather}$$"],
  ['pmain', 'Another wat to understand this is that if \\(\\textbf{r}(t) \\cdot \\textbf{r}(t)\\) is a constant and \\(\\textbf{r}(t) \\cdot \\textbf{r}(t) = \\Vert \\textbf{r}(t) \\Vert^2\\), then for all \\(t\\), the size of the vector \\(\\textbf{r}(t)\\) does not change, implying that the path it traces is circular (or spherical if 3 dimensional). Since the derivative of \\(\\textbf{r}(t)\\) is tangent to the path it traces, then for a circular path with \\(\\textbf{r}(t)\\) as the radius, the derivative vector will always be perpendicular to \\(\\textbf{r}(t)\\):'],
  ['figure', ['1.jpeg','Image from openstax.org (Calculus 3)']],
];
export default content;