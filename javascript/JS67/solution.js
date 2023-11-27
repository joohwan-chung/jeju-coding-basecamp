const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function countHandshakes(n) {
  let participants = 1

  while ((participants - 1) * participants / 2 < n) {
    participants++
  }

  const minGyuHandshakes = n - ((participants - 1) * (participants - 2) / 2)

  return [minGyuHandshakes, participants]
}

rl.question('입력 : ', (input) => {
  const n = parseInt(input, 10)

  const result = countHandshakes(n)
  console.log('출력 :', result)

  rl.close()
})
