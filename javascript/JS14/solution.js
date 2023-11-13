const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', (answer) => {
  if (answer % 3 === 0) {
    console.log('출력 : 짝')
  } else {
    console.log('출력 :', answer)
  }
  
  rl.close()
})