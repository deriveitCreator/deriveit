export const title="Chebyshev's Inequality";
const content = [
  ['h1', 'Proving Chebyshev\'s Inequality'],
  ["pmain","We can represent the probability that a random variable deviates from its mean by more than \\(k \\sigma\\) like this:"],
  ["displayFormula","$$ P(|X - \\mu| \\ge k\\sigma) = P((X - \\mu)^2 \\ge k^2\\sigma^2) $$"],
  ["pmain","We get an upper bound using Markov's Inequality here:"],
  ["displayFormula","\\[ P((X - \\mu)^2 \\ge k^2\\sigma^2) \\le \\frac{E[(X- \\mu)^2]}{k^2\\sigma^2} \\]"],
  ["pmain","Simplify:"],
  ["displayFormula","$$ P(|X - \\mu| \\ge k\\sigma) \\le \\frac{\\sigma^2}{k^2\\sigma^2} $$$$ P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2} $$"],
];
export default content;