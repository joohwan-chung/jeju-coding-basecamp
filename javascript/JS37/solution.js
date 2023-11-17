const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const candidates = input.split(' ')

  const voteCount = {}
  for (const candidate of candidates) {
    if (voteCount[candidate]) {
      voteCount[candidate]++
    } else {
      voteCount[candidate] = 1
    }
  }

  let winner = ''
  let maxVotes = 0
  for (const candidate in voteCount) {
    if (voteCount[candidate] > maxVotes) {
      winner = candidate
      maxVotes = voteCount[candidate]
    }
  }

  console.log(`${winner}(이)가 총 ${maxVotes}표로 반장이 되었습니다.`)

  rl.close()
})
