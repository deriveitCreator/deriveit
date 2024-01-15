export const title="A lower bound for the Legendre's formula";
const content = [
  ['h1', 'A Lower Bound For The Legendre\'s Formula'],
  ['pmain', 'Given prime \\(p\\) and a positive integer \\(n\\), the Legendre\'s formula states:'],
  ['displayFormula','$$p^e \\| n! \\implies$$$$e = \\left \\lfloor \\frac{n}{p} \\right \\rfloor + \\left \\lfloor \\frac{n}{p^2} \\right \\rfloor + \\left \\lfloor \\frac{n}{p^3} \\right \\rfloor \\ldots$$'],
  ['pmain','This gives a lower bound:'],
  ['displayFormula','$$e \\le \\frac{n}{p} + \\frac{n}{p} \\left ( \\frac{1}{p} \\right ) + \\frac{n}{p} \\left ( \\frac{1}{p} \\right )^2 + \\frac{n}{p} \\left ( \\frac{1}{p} \\right )^3 + \\ldots$$'],
  ['pmain','This is a geometric series, and using geometric series sum formula (<a href="https://www.deriveit.net/discrete_mathematics/sequence_and_series/the_sum_of_a_geometric_series_with_finite_terms">click here</a> for more info), we get:'],
  ['displayFormula','$$e \\le \\frac{ \\frac{n}{p} \\left ( \\frac{1}{p}^\\infty - 1 \\right ) }{\\left ( \\frac{1}{p} - 1 \\right ) }$$'],
  ['pmain','Since \\( \\frac{1}{p} \\) is less than one:'],
  ['displayFormula','$$e \\le \\frac{ \\frac{1}{p} ( 0 - 1 ) }{\\frac{1}{p} - 1 }$$'],
];
export default content;