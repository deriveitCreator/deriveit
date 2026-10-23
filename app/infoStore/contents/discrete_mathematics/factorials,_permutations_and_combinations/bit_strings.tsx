export const title="Finding the number of n-bit string of weight k";
const content = [
  ['h1', 'Finding The Number Of n-Bit String Of Weight k'], 
  ['pmain', 'A <b>bit string</b> is a string of <b>binary digits</b>. The binary digits are simply the numbers 0 and 1. All of the following are bit strings:'], 
  ['displayFormula', '\\[ 00110 \\quad 0100111 \\quad 111101 \\]'],
  ['pmain', 'The length of the bit string is how many digits it has, and the <b>weight</b> of a bit string is the number of 1\'s it has. So \\(10110\\) has length 5 and weight 3. The notation for all bit strings of length \\(n\\) with weight \\(k\\) is \\(\\textbf{B}^n_k\\). For example, the elements of \\(\\textbf{B}^3_2\\) is 110, 101, 011.'], 
  ['pmain', 'We can manually check the length of some of small bit strings:'], 
  ['displayFormula', '\\[\\begin{align} &|\\textbf{B}^0_0| = 1 \\\\ &|\\textbf{B}^1_0| = 1 \\quad |\\textbf{B}^1_1| = 1 \\\\ &|\\textbf{B}^2_0| = 1 \\quad |\\textbf{B}^2_1| = 2 \\quad |\\textbf{B}^2_2| = 1 \\\\ &|\\textbf{B}^3_0| = 1 \\quad |\\textbf{B}^3_1| = 3 \\quad |\\textbf{B}^3_2| = 3 \\quad|\\textbf{B}^3_3| = 1 \\end{align}\\]'],
  ['pmain', 'This seem to follow the pattern of Pascal\'s triangle:'], 
  ['displayFormula', '\\[\\begin{align} &C^0_0 = 1 \\\\ &C^1_0 = 1 \\quad C^1_1 = 1 \\\\ &C^2_0 = 1 \\quad C^2_1 = 2 \\quad C^2_2 = 1 \\\\ &C^3_0 = 1 \\quad C^3_1 = 3 \\quad C^3_2 = 3 \\quad C^3_3 = 1 \\end{align}\\]'],
  ['pmain', 'Does this work for all bit strings? Consider the bit strings of length 5 having weight 3:'], 
  ['displayFormula', '\\[\\begin{gather} 11100 \\quad 11010 \\quad 10110 \\quad 01110 \\\\ 11001 \\quad 10101 \\quad 01101 \\quad 10011 \\quad 01011 \\quad 00111 \\end{gather}\\]'],
  ['pmain', 'The first row has bit strings that starts with a 0 and the second row has bit strings that start with a 1. If we ignore the starting 0 in the first row, we see a 4-length bit string of weight 3. If we ignore the starting 1 in the second row, we see a 4-length bit string of weight 2. This means:'],  
  ['displayFormula', '\\[|\\textbf{B}^5_3| = |\\textbf{B}^4_3| + |\\textbf{B}^4_2|\\]'],
  ['pmain', 'We can generalize this. If we want to find \\(|\\textbf{B}^n_k|\\), we first consider all the bit strings of length \\(n-1\\) with weight \\(k\\), then add a 0 at the start (this will give \\(|\\textbf{B}^{n-1}_k|\\) number of 5-length bit strings, all of which start with 0). Next, we consider all the bit strings of length \\(n-1\\) with weight \\(k-1\\), then add a 1 at the start (this will give \\(|\\textbf{B}^{n-1}_{k-1}|\\) number of 5-length bit strings, all of which start with 1). Now we have all the 5-length bit strings, with their number being \\(|\\textbf{B}^{n-1}_{k}|+|\\textbf{B}^{n-1}_{k-1}|\\).'],
  ['pmain', 'Since we know some of \\(|\\textbf{B}^n_k|\\) follow the pattern of Pascal\'s triangle, then we can use induction \\((|\\textbf{B}^n_k| = |\\textbf{B}^{n-1}_k|+|\\textbf{B}^{n-1}_{k-1}|)\\) to show that all \\(\\textbf{B}^n_k\\) follow the pattern of Pascal\'s triangle. Therefore:'],
  ['displayFormula', '\\[ |\\textbf{B}^n_k| = C^n_k \\text{ for all } n, k \\]'],
  ['pmain', 'Another way to prove this is to use the formula for combination. Given \\(n\\) elements, there are \\(n!\\) ways to arrange them. If \\(k\\) items are the same, then we need to divide the number of ways we can arrange \\(k\\) elements \\((n!/k!)\\). Also, if \\(h\\) items are also the same, then we need to divide the number of ways we can arrange \\(h\\) elements as well:'],
  ['displayFormula', '\\[ \\frac{\\frac{n!}{k!}}{h!} = \\frac{n!}{k!*h!} \\]'],
  ['pmain', 'You can read about that [<a href="arranging_n_objects_with_k_identical" target="_blank">here</a>]. For a bit string having length \\(n\\) and weight \\(k\\), there are \\(n\\) digits, with \\(k\\) of them being 1\'s, and \\(n-k\\) of them being 0\'s. Therefore:'],
  ['displayFormula', '\\[ | \\textbf{B}^n_k |= \\frac{n!}{k!*(n-k)!} = C^n_k \\]'],
];
export default content;