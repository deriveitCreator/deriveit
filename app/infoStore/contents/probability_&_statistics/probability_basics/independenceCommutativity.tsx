export const title="P(A|B) = P(A) ⇒ P(B|A) = P(B)";

const content = [
  ['h1', 'P(A|B) = P(A) ⇒ P(B|A) = P(B)'],

  ['pmain', 'By definition of \\(P(A|B)\\):'],
  ['displayFormula', '\\[ P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\]'],

  ['pmain', 'If \\(P(A|B) = P(A)\\):'],
  ['displayFormula', '\\[ P(A) = \\frac{P(A \\cap B)}{P(B)} \\]'],
  
  ['pmain', 'Rearranging the above:'],
  ['displayFormula', '\\[ P(B) = \\frac{P(A \\cap B)}{P(A)} \\]'],
  
  ['pmain', 'Since \\(\\frac{P(A \\cap B)}{P(A)} = P(B|A)\\):'],
  ['displayFormula', '\\[ P(B) = \\frac{P(A \\cap B)}{P(A)} \\implies P(B) = P(B|A) \\]'],
];
export default content;