const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calculateCircleArea(radius) {
  return radius * radius * 3.14
}

rl.question('반지름의 길이를 입력하세요: ', (input) => {
  const radius = parseInt(input, 10)

  if (!isNaN(radius)) {
    const result = calculateCircleArea(radius)
    console.log('원의 넓이 :', result)
  } else {
    console.log('올바른 숫자를 입력하세요.')
  }

  rl.close()
})
