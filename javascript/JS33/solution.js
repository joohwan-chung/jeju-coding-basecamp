const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  // 입력값에서 숫자들을 추출하여 배열로 변환
  const numbers = input.split(' ').map(Number)

  // 배열을 역순으로 순회하며 각 숫자 출력
  const reversedNumbers = numbers.reverse()
  const output = reversedNumbers.join(' ')
  console.log(`출력 : ${output}`)

  rl.close()
})
