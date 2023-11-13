const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', (height) => {
  if (height >= 150) {
    console.log('출력 : YES')
  } else {
    console.log('출력 : NO')
  }

  rl.close()
})