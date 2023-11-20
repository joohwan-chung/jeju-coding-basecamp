const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('10진수를 입력하세요: ', decimalNumber => {
  const binaryNumber = convertToBinary(decimalNumber)
  console.log(`입력한 10진수 ${decimalNumber}은 2진수로 ${binaryNumber}입니다.`)

  rl.close()
})

function convertToBinary(decimalNumber) {
  return parseInt(decimalNumber, 10).toString(2)
}
