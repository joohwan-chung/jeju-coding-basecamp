const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', (inverse) => {
  console.log('출력 :',inverse.split('').reverse().join(''))

  rl.close()
})