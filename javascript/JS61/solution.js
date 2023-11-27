const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('문자열을 입력하세요: ', (input) => {
  let compressedString = ''
  let currentChar = input[0]
  let charCount = 1

  for (let i = 1; i < input.length; i++) {
    if (input[i] === currentChar) {
      charCount++
    } else {
      compressedString += currentChar + charCount
      currentChar = input[i]
      charCount = 1
    }
  }

  // 마지막 문자 처리
  compressedString += currentChar + charCount

  console.log(compressedString)

  rl.close()
})
