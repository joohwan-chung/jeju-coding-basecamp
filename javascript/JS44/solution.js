const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', userInput => {
  const number = parseInt(userInput)
  const sum = calculateDigitSum(number)

  console.log(`출력 : ${sum}`)

  rl.close()
})

function calculateDigitSum(number) {
  let sum = 0

  // 각 자리수의 합을 계산
  while (number > 0) {
    sum += number % 10 // 현재 자리수를 더함
    number = Math.floor(number / 10) // 다음 자리수로 이동
  }

  return sum
}
