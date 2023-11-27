const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('스탬프에 적힌 숫자를 공백으로 구분하여 입력하세요 : ', (input) => {
  const stampNumbers = input.split(' ').map(Number)
  const result = isConsecutiveStamp(stampNumbers)
  console.log(result)
  rl.close()
})

function isConsecutiveStamp(numbers) {
  numbers.sort((a, b) => a - b)

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) {
      return "NO"
    }
  }

  return "YES"
}