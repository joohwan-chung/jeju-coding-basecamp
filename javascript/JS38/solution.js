const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const scores = input.split(' ').map(Number)

  const sortedScores = scores.sort((a, b) => b - a)

  const topThreeScores = sortedScores.slice(0, 3)
  const candyReceiversCount = [...new Set(topThreeScores)].length

  console.log(`출력 : ${candyReceiversCount}`)

  rl.close()
})