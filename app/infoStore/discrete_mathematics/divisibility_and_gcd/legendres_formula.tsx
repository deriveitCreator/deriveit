export const title="Proving Legendre's Formula";
const content = [
  ['h1', 'Proving Legendre\'s Formula'],
  ['pmain', 'Suppose we want to find how many times \\(3\\) divides \\(28!\\). Let\'s say by expanding \\(28!\\):'],
  ['displayFormula','$$(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)(21)(22)(23)(24)(25)(26)(27)(28)$$'],
  ['pmain','There are in total \\(\\lfloor \\frac{n}{a} \\rfloor\\) multiples of \\(a\\) below \\(n\\), meaning there are  \\(\\lfloor \\frac{28}{3} \\rfloor\\) multiples of \\(3\\) below \\(28\\).'],
  ['displayFormula','$$\\lfloor \\frac{28}{3} \\rfloor = 9$$'],
  ['pmain','There are \\(9\\) numbers below \\(28\\) that are multiples of \\(3\\), which means there are \\(9\\) numbers in \\(28!\\) which can be divided by \\(3\\):'],
  ['displayFormula','$$ \\frac{(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)(21)(22)(23)(24)(25)(26)(27)(28)}{3^9} $$$$ (1)(2)(1)(4)(5)(2)(7)(8)(3)(10)(11)(4)(13)(14)(5)(16)(17)(6)(19)(20)(7)(22)(23)(8)(25)(26)(9)(28) $$'],
  ['pmain','Looking at the numbers above, you can see that there are some numbers which can be divided by \\(3\\) again. There are in total \\(\\lfloor \\frac{28}{3^2} \\rfloor\\) (or \\(3\\)) numbers below 28 that can be divided by 3 twice:'],
  ['displayFormula','$$ \\frac{(1)(2)(1)(4)(5)(2)(7)(8)(3)(10)(11)(4)(13)(14)(5)(16)(17)(6)(19)(20)(7)(22)(23)(8)(25)(26)(9)(28)}{3^3} $$$$ (1)(2)(1)(4)(5)(2)(7)(8)(1)(10)(11)(4)(13)(14)(5)(16)(17)(2)(19)(20)(7)(22)(23)(8)(25)(26)(3)(28) $$'],
  ['pmain','Now there are in total \\(\\lfloor \\frac{28}{3^3} \\rfloor\\) (or \\(1\\)) number below 28 that can be divided by 3 a third time:'],
  ['displayFormula','$$ \\frac{(1)(2)(1)(4)(5)(2)(7)(8)(1)(10)(11)(4)(13)(14)(5)(16)(17)(2)(19)(20)(7)(22)(23)(8)(25)(26)(3)(28)}{3^1} $$$$ (1)(2)(1)(4)(5)(2)(7)(8)(1)(10)(11)(4)(13)(14)(5)(16)(17)(2)(19)(20)(7)(22)(23)(8)(25)(26)(1)(28) $$'],
];
export default content;