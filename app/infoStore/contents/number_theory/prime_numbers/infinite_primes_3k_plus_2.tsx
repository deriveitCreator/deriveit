export const title="There are infinite primes of the form 3k+2";
const content = [
  ['h1', 'There Are Infinite Primes Of The Form 3k+2'],
  ['pmain', 'Let\'s assume there are finite primes of the form \\(3k+2\\). Let \\(p_0 = 2\\) and let \\(N\\) be:'],
  ['displayFormula','$$N = 3(p_1 p_2 p_3 \\ldots  p_r) + 2$$'],
  ['pmain','The set of primes \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\) are all the finite primes of the form \\(3k+2\\) (other than 2). \\(N\\) itself cannot be prime because it\'s of the form \\(3k+2\\) and is greater than \\(p_r\\). Now let\'s think about the prime factors of \\(N\\). Since multiplying two numbers of the form \\(3k+1\\) gives another number of the form \\(3k+1\\), then all prime factors of \\(N\\) cannot be of the form \\(3k+1\\), at least one has to be of the form \\(3k+2\\).'],
  ['pmain','Let \\(p\\) be a prime factor of \\(N\\) of the form \\(3k+2\\). If \\(p=2\\), then:'],
  ['displayFormula','$$2|N \\implies 2|3(p_1 p_2 p_3 \\ldots  p_r) $$'],
  ['pmain','But 2 cannot divide 3 or any prime \\(p_i\\), so \\(p\\) cannot be 2. If instead \\(p\\) is one of \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\), then \\(p|3(p_1 p_2 p_3 \\ldots  p_r)\\), but if \\(p\\) divides both \\(N\\) and \\(3(p_1 p_2 p_3 \\ldots  p_r)\\), then:'],
  ['displayFormula','$$p|N-3(p_1 p_2 p_3 \\ldots  p_r) \\implies p|2 $$'],
  ['pmain','This is a contradiction, so \\(p\\) can\'t be one of \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\), which mean\'s there exist primes (like \\(p\\)) of the form \\(3k+2\\) that don\'t belong to \\(\\{ p_1, p_2, p_3, \\ldots,  p_r \\}\\). This contradicts our assumption that there are finite primes of the form \\(3k+2\\).'],
];
export default content;