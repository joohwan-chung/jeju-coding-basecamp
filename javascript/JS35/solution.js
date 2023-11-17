function one(n) {
  function two(x) {
    return Math.pow(x, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); // 10의 2제곱 = 100
console.log(b(10)); // 10의 3제곱 = 1000
console.log(c(10)); // 10의 4제곱 = 10000
