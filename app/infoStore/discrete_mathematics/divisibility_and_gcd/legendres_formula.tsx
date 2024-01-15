export const title="Proving Legendre's Formula";
const content = [
  ['h1', 'Proving Legendre\'s Formula'],
  ['pmain', 'Suppose we want to find how many times \\(3\\) divides \\(28!\\). Let\'s say by expanding \\(28!\\):'],
  ['displayFormula','$$(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)(21)(22)(23)(24)(25)(26)(27)(28)$$'],
  ['pmain','There are in total \\(\\lfloor \\frac{n}{a} \\rfloor\\) multiples of \\(a\\) below \\(n\\), meaning there are  \\(\\lfloor \\frac{28}{3} \\rfloor\\) multiples of \\(3\\) below \\(28\\).'],
  ['displayFormula','$$\\lfloor \\frac{28}{3} \\rfloor = 9$$'],
  ['pmain','There are \\(9\\) numbers below \\(28\\) that are multiples of \\(3\\), which means there are \\(9\\) numbers in \\(28!\\) which can be divided by \\(3\\):'],
  ['displayFormula','$$ \\frac{(1)(2)(\\textcolor{red}{3})(4)(5)(\\textcolor{red}{6})(7)(8)(\\textcolor{red}{9})(10)(11)(\\textcolor{red}{12})(13)(14)(\\textcolor{red}{15})(16)(17)(\\textcolor{red}{18})(19)(20)(\\textcolor{red}{21})(22)(23)(\\textcolor{red}{24})(25)(26)(\\textcolor{red}{27})(28)}{3^9} $$$$ (1)(2)(\\textcolor{red}{1})(4)(5)(\\textcolor{red}{2})(7)(8)(\\textcolor{red}{3})(10)(11)(\\textcolor{red}{4})(13)(14)(\\textcolor{red}{5})(16)(17)(\\textcolor{red}{6})(19)(20)(\\textcolor{red}{7})(22)(23)(\\textcolor{red}{8})(25)(26)(\\textcolor{red}{9})(28) $$'],
  ['pmain','Looking at the numbers above, you can see that there are some numbers which can be divided by \\(3\\) again. There are in total \\(\\lfloor \\frac{28}{3^2} \\rfloor\\) (or \\(3\\)) numbers below \(28\) that can be divided by \(3\) twice:'],
  ['displayFormula','$$ \\frac{(1)(2)(1)(4)(5)(2)(7)(8)(\\textcolor{red}{3})(10)(11)(4)(13)(14)(5)(16)(17)(\\textcolor{red}{6})(19)(20)(7)(22)(23)(8)(25)(26)(\\textcolor{red}{9})(28)}{3^3} $$$$ (1)(2)(1)(4)(5)(2)(7)(8)(\\textcolor{red}{1})(10)(11)(4)(13)(14)(5)(16)(17)(\\textcolor{red}{2})(19)(20)(7)(22)(23)(8)(25)(26)(\\textcolor{red}{3})(28) $$'],
  ['pmain','Now there are in total \\(\\lfloor \\frac{28}{3^3} \\rfloor\\) (or \\(1\\)) number below \\(28\\) that can be divided by \\(3\\) a third time:'],
  ['displayFormula','$$ \\frac{(1)(2)(1)(4)(5)(2)(7)(8)(1)(10)(11)(4)(13)(14)(5)(16)(17)(2)(19)(20)(7)(22)(23)(8)(25)(26)(\\textcolor{red}{3})(28)}{3^1} $$$$ (1)(2)(1)(4)(5)(2)(7)(8)(1)(10)(11)(4)(13)(14)(5)(16)(17)(2)(19)(20)(7)(22)(23)(8)(25)(26)(\\textcolor{red}{1})(28) $$'],
  ['pmain','Since \\(\\lfloor \\frac{28}{3^4} \\rfloor = 0\\), then there are no numbers below \\(28\\) that can be divided by \\(3\\) \\(4\\) or more times. For the final number we calculated above, if we it\'s prime factorization, there would be some number of \\(2\\)\'s, some number of \\(5\\)\'s and so on, but no \\(3\\)\'s because we divided it all. This means \\(3\\) can divide \\(28!\\) in total \\(\\lfloor \\frac{28}{3^1} \\rfloor + \\lfloor \\frac{28}{3^2} \\rfloor + \\lfloor \\frac{28}{3^3} \\rfloor = 13\\) times.'],
];
export default content;