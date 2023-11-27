const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function findMinMoves(N) {
  const dp = Array(N + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.min(dp[i], dp[i - 3] + 1)
  }

  for (let i = 7; i <= N; i++) {
    dp[i] = Math.min(dp[i], dp[i - 7] + 1)
  }

  return dp[N] === Infinity ? -1 : dp[N]
}

rl.question('중량(N) 입력 : ', (input) => {
  const N = parseInt(input)

  if (isNaN(N) || N < 0) {
    console.log('유효하지 않은 값입니다.')
    rl.close()
    return
  }

  const result = findMinMoves(N)
  console.log('가장 적게 옮길 수 있는 횟수:', result)

  rl.close()
})

rl.on('close', () => {
  console.log('프로그램을 종료합니다.')
  process.exit(0)
})
