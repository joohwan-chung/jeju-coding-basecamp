const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function isPrime(num) {
  if (num < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

function goldbachPartition() {
  rl.question('2보다 큰 짝수를 입력하세요 (종료하려면 q를 입력하세요) : ', (input) => {
    if (input.toLowerCase() === 'q') {
      rl.close()
      return
    }

    const n = parseInt(input, 10)

    if (n <= 2 || n % 2 !== 0) {
      console.log("2보다 큰 짝수를 입력하세요.")
      goldbachPartition()
    } else {
      for (let i = 2; i <= n / 2; i++) {
        const j = n - i

        if (isPrime(i) && isPrime(j)) {
          console.log(`${n} == ${i} + ${j}`)
        }
      }
      
      goldbachPartition()
    }
  })
}

goldbachPartition()
