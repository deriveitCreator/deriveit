export const title="There are infinite primes of the form 4k+3";
const content = [
  ['h1', 'There Are Infinite Primes Of The Form 4k+3'],
  ['pmain', 'Let\'s assume there are finite primes of the form \\(4k+3\\). Let \\(p_0 = 3\\) and let \\(N\\) be:'],
  ['displayFormula','$$N = 4(p_1 p_2 p_3 \\ldots  p_r) + 3$$'],
  ['pmain','The set of primes \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\) are all the finite primes of the form \\(4k+3\\) (other than 3). \\(N\\) itself cannot be prime because it\'s of the form \\(4k+3\\) and is greater than \\(p_r\\). Now let\'s think about the prime factors of \\(N\\). Since multiplying two numbers of the form \\(4k+1\\) gives another number of the form \\(4k+1\\), then all prime factors of \\(N\\) cannot be of the form \\(4k+1\\), at least one has to be of the form \\(4k+3\\).'],
  ['pmain','Let \\(p\\) be a prime factor of \\(N\\) of the form \\(4k+3\\). If \\(p=3\\), then:'],
  ['displayFormula','$$3|N \\implies 3|4(p_1 p_2 p_3 \\ldots  p_r) $$'],
  ['pmain','But 3 cannot divide 4 or any prime \\(p_i\\), so \\(p\\) cannot be 3. If instead \\(p\\) is one of \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\), then \\(p|4(p_1 p_2 p_3 \\ldots  p_r)\\), but if \\(p\\) divides both \\(N\\) and \\(4(p_1 p_2 p_3 \\ldots  p_r)\\), then:'],
  ['displayFormula','$$p|N-4(p_1 p_2 p_3 \\ldots  p_r) \\implies p|3 $$'],
  ['pmain','This is a contradiction, so \\(p\\) can\'t be one of \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\), which mean\'s there exist primes (like \\(p\\)) of the form \\(4k+3\\) that don\'t belong to \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\). This contradicts our assumption that there are finite primes of the form \\(4k+3\\).'],
];
export default content;