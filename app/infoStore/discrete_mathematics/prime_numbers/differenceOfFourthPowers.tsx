export const title="No primes can be expressed as a^4 - b^4";
const content = [
  ['h1', 'No Primes Can Be Expressed As a^4 - b^4'],
  ['pmain', 'Let\'s assume there is a prime which can be expressed \\(a^4 - b^4\\). Since prime numbers are greater than 1, then \\(a^4 \\gt b^4\\) and \\(a\\) cannot be 1 or 0. We can also express \\(a^4 - b^4\\) as:'],
  ['displayFormula','$$(a^2 - b^2)(a^2 + b^2)$$'],
  ['pmain','If \\(a^4 - b^4\\) then one of the factors is a prime and the other is 1. Since \\(a\\) cannot be 1 or 0, then \\(a^2 \\gt 1\\), so \\(a^2 + b^2\\) can\'t be 1, which means:'],
  ['displayFormula','$$ (a^2 - b^2) = 1 $$$$ (a + b)(a - b) = 1 $$$$ (a + b) = (a - b) = ±1 $$'],
  ['pmain','The above statement is only possible if \\(a=±1\\) and \\(b=0\\), but this cannot be true, otherwise \\(a^4 - b^4\\) would be 1 (a non-prime). This is a contradiction. So no primes can be expressed as \\(a^4 - b^4\\).'],
];
export default content;