const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const dan = parseInt(input)

  if (isNaN(dan) || dan < 1 || dan > 9) {
    console.log('1부터 9까지의 숫자 중 하나를 입력하세요.')
  } else {
    printMultiplicationTable(dan)
  }

  rl.close()
})

function printMultiplicationTable(dan) {
  let result = ''
  for (let i = 1; i <= 9; i++) {
    result += dan * i + ' '
  }
  console.log(`출력 : ${result.trim()}`)
}
