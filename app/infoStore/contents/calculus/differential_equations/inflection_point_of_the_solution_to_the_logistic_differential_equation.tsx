export const title="Finding the point of inflection of the solution to the logistic differential equation";
const content = [
  ['h1', 'Finding The Point Of Inflection Of The Solution To The Logistic Differential Equation'],
  ['pmain', 'The solution to the logistic differential equation is:'],
  ["displayFormula","\\[P(t) = \\frac{P_0 Ke^{rt}}{(K-P_0) +P_0 e^{rt}} \\]"],
  ['pmain', 'To find the point of inflection, first find the second derivative:'],
  ["displayFormula","\\[\\begin{align} P'(t) &= \\frac{rP_0 K(K-P_0)e^{rt}}{((K-P_0) +P_0 e^{rt})^2} \\\\ P''(t) &= \\frac{r^2 P_0 K (K-P_0) e^{rt}((K-P_0)-P_0 e^{rt})}{((K-P_0) +P_0 e^{rt})^3} \\end{align}\\]"],
  ['pmain', 'The find the point of inflection is where \\(P\'\'(t) = 0\\):'],
  ["displayFormula","\\[\\begin{align} r^2 P_0 K (K-P_0) e^{rt}((K-P_0)-P_0 e^{rt}) &= 0 \\\\ (r^2) (P_0) (K) (K-P_0) (e^{rt})(K - P_0 - P_0 e^{rt}) &= 0 \\end{align}\\]"],
  ['pmain', 'Let\'s look at each factor (shown in brackets). Since none of the factors in \\((r^2) (P_0) (K) (K-P_0) (e^{rt})\\) is 0. This must mean:'],
  ["displayFormula","\\[\\begin{gathered} K - P_0 - P_0 e^{rt} = 0 \\\\ K - P_0 = P_0 e^{rt} \\end{gathered}\\]"],
  ['pmain', 'Making \\(t\\) the subject:'],
  ["displayFormula","\\[\\begin{gathered} \\frac{K - P_0}{P_0} = e^{rt} \\\\ t = \\frac{1}{r}\\ln \\left( \\frac{K - P_0}{P_0} \\right) \\end{gathered}\\]"],
  ['pmain', 'If \\(P_0>K\\), then this quantity is undefined, and the graph does not have a point of inflection. In the logistic graph, the point of inflection can be seen as the point where the graph changes from concave up to concave down.'],
];
export default content;