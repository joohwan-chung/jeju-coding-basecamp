const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const numbers = input.split(' ').map(Number)

  if (numbers.length !== 10) {
    console.log('10개의 숫자를 입력해야 합니다.')
  } else {
    const maxNumber = Math.max(...numbers)
    console.log('출력 : ', maxNumber)
  }

  rl.close()
})
