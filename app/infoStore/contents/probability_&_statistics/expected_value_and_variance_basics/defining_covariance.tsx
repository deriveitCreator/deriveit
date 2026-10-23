export const title="Defining covariance";
const content = [
  ['h1', 'Defining Covariance'], 
  ['pmain', 'Covariance is defined like so:'],
  ['displayFormula', '\\[\\begin{gather} \\operatorname{cov}(X,Y) = E[(X-E[X])(Y-E[Y])] \\\\ \\operatorname{cov}(X,Y) = \\sum^h_i \\sum^k_j p_{i,j} (x_i - \\overline{x})(y_j - \\overline{y}) \\end{gather}\\]'], 
  ['pmain', 'If only the pairs \\((x_i, y_i)\\) can occur, so \\(p_{i,j}=0\\) for \\(i \\neq j\\), and we write \\(p_i = p_{i,i}\\):'],
  ['displayFormula', '\\[ \\operatorname{cov}(X,Y) = \\sum^n_i p_{i} (x_i - \\overline{x})(y_i - \\overline{y}) \\]'], 
  ['pmain', 'And if we assume each value \\((x_i,y_i)\\) has equal chance of occurring:'],
  ['displayFormula', '\\[\\begin{gather} \\operatorname{cov}(X,Y) = \\sum^n_i \\frac{1}{n} (x_i - \\overline{x})(y_i - \\overline{y}) \\\\ \\operatorname{cov}(X,Y) = \\frac{1}{n} \\sum^n_i (x_i - \\overline{x})(y_i - \\overline{y}) \\end{gather}\\]'], 
];
export default content;
