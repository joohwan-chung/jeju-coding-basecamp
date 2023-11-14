const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('문자열을 입력하세요: ', (inputString) => {
  rl.question('찾을 문자를 입력하세요: ', (searchString) => {
    const startIndex = inputString.indexOf(searchString)

    if (startIndex !== -1) {
      console.log(`찾을 문자열의 시작 인덱스: ${startIndex}`)
    } else {
      console.log('찾을 문자열이 존재하지 않습니다.')
    }

    rl.close()
  })
})
