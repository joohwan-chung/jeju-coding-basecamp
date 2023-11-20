const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('숫자를 입력하세요: ', input => {
  const number = parseInt(input)

  if (isPrime(number)) {
    console.log('YES')
  } else {
    console.log('NO')
  }

  rl.close()
})

function isPrime(num) {
  if (num <= 1) {
    return false // 1 이하의 숫자는 소수가 아님
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false // 나누어 떨어지는 경우가 있으면 소수가 아님
    }
  }

  return true // 나누어 떨어지는 경우가 없으면 소수
}
