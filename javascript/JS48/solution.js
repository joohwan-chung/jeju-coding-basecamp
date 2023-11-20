const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', inputString => {
  let resultString = ""

  for (let char of inputString) {
    if (char === char.toUpperCase()) {
      resultString += char.toLowerCase()
    } else {
      resultString += char.toUpperCase()
    }
  }

  console.log(`출력 : ${resultString}`)

  rl.close()
})
