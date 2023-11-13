const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const [korean, math, english] = input.split(' ').map(Number)

  if (!isNaN(korean) && !isNaN(math) && !isNaN(english)) {
    const average = Math.floor((korean + math + english) / 3)
    console.log('출력 :', average)
  }

  rl.close()
})