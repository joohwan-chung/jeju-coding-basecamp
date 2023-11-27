const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function centerAlignString(inputString, totalLength, fillChar) {
  const remainingChars = totalLength - inputString.length
  const leftPadding = Math.floor(remainingChars / 2)
  const rightPadding = totalLength - inputString.length - leftPadding

  const resultString = fillChar.repeat(leftPadding) + inputString + fillChar.repeat(rightPadding)

  return resultString
}

rl.question('문자열을 입력하세요 : ', (input) => {
  const totalLength = 50
  const fillChar = '='

  const result = centerAlignString(input, totalLength, fillChar)

  console.log(result)

  rl.close()
})
