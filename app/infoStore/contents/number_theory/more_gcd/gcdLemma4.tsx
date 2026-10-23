export const title="If (a, b, c) = 1, then (ab, c) = (a, c)(b, c)";
const content = [
  ['h1', 'If (a, b, c) = 1, then (ab, c) = (a, c)(b, c)'],
  ['pmain', 'The integers \\(a\\), \\(b\\) and \\(c\\) don\'t share any common prime factors. Keep in mind that two of these integers may have common prime factors, but all three don\'t.'], 
  ["pmain","Let \\(d=(a,c)\\). \\(d\\) contains all the prime factors that exists in both \\(a\\) and \\(c\\). Let \\(e=(b,c)\\). \\(e\\) contains all the prime factors that exists in both \\(b\\) and \\(c\\). However, \\(d\\) and \\(e\\) can have no common prime factors, because \\((a,b,c)=1\\) (\\(a\\), \\(b\\) and \\(c\\) don\'t have a common prime factor). Let\'s represent the prime factors of \\(a\\), \\(b\\) and \\(c\\) like so:"],
  ['displayFormula', '$$\\begin{align} a &= p_1^{a_1} p_2^{a_2} p_3^{a_3} \\ldots \\\\ b &= q_1^{b_1} q_2^{b_2} q_3^{b_3} \\ldots \\\\ c &= r_1^{c_1} r_2^{c_2} r_3^{c_3} \\ldots \\end{align}$$'],
  ["pmain","There may be some \\(i\\) and \\(j\\) such that \\(p_i=q_j\\). There may be some \\(i\\) and \\(k\\) such that \\(p_i=r_k\\). There may be some \\(j\\) and \\(k\\) such that \\(q_j=r_k\\). However, there are no \\(i\\), \\(j\\) and \\(k\\) such that \\(p_i=q_j=r_k\\), this is because \\((a,b,c)=1\\)."],
  ["pmain","\\(d\\) contains all the \\(p_i\\)\'s where \\(p_i=r_k\\), and \\(e\\) contains all the \\(q_j\\)\'s where \\(q_j = r_k\\)."],
  ["pmain","Let \\(f=de\\). This means \\(de\\) contains all the primes which both \\(a\\) and \\(b\\) have in common with \\(c\\), so \\(f\\) has all the \\(p_i\\)\'s and \\(q_j\\)\'s such that either \\(p_i = r_k\\) for some \\(i\\) and \\(k\\) or that \\(q_j = r_k\\) for some \\(j\\) and \\(k\\). For example:"],
  ['displayFormula', '$$\\begin{gather} a = (2^5)(3^2)(7) \\wedge b = (3)(5^4)(11^2) \\wedge c = (2^4)(5)(7)(11^3) \\\\ \\implies d = (2^4)(7) \\wedge e = (5)(11^2) \\\\ \\implies f = (2^4)(5)(7)(11^2) \\end{gather}$$'],
  ["pmain","Looking back at our prime factorization, we can represent \\(ab\\) like so:"],
  ['displayFormula', '$$ ab = p_1^{a_1} q_1^{b_1} p_2^{a_2} q_2^{b_2} p_3^{a_3} q_3^{b_3} \\ldots $$'],
  ["pmain","Remember, it\'s possible that \\(p_i=q_j\\) for some \\(i\\) and \\(j\\). Let \\(g=(ab,c)\\). \\(g\\) contains all the prime factors that exists in both \\(ab\\) and \\(c\\), so \\(g\\) contains all the \\(p_i\\)\'s where \\(p_i=r_k\\) and all the \\(q_j\\)\'s where \\(q_j=r_k\\). Using the above example:"],
  ['displayFormula', '$$\\begin{gather} ab = (2^5)(3^3)(5^4)(7)(11^2) \\wedge c = (2^4)(5)(7)(11^3) \\\\ \\implies g = (2^4)(5)(7)(11^2) \\end{gather}$$'],
  ["pmain", "Notice that in our example, \\(f = (2^4)(5)(7)(11^2)\\) and \\(g = (2^4)(5)(7)(11^2)\\). This suggests that \\(f = g\\)."],
  ["pmain", "To see why this must be true in general, consider the prime factors of \\(ab\\) that are also in \\(c\\). Since \\((a, b, c) = 1\\), any prime factor that divides \\(c\\) can divide \\(a\\) or it can divide \\(b\\), but it cannot divide both. The set of prime factors shared by \\(a\\) and \\(c\\) is completely disjoint from the set of prime factors shared by \\(b\\) and \\(c\\)."],
  ["pmain", "Because \\(d = (a, c)\\) and \\(e = (b, c)\\) share no common factors, their product \\(de\\) simply combines all prime factors that \\(c\\) shares with either \\(a\\) or \\(b\\). Since \\(ab\\) is just the product of all prime factors in \\(a\\) and \\(b\\), then \\((ab,c)\\) must be the product of these two independent sets of shared primes. Therefore, we can conclude that:"],
  ["displayFormula", "$$ (a, c)(b, c) = (ab, c) $$"]
];
export default content;
