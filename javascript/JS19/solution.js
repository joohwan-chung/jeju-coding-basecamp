const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const [numberA, numberB] = input.split(' ').map(Number)
  console.log('출력 :', numberA ** numberB)

  rl.close()
})