const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('문자열을 입력하세요: ', (input) => {
  const characters = input.split('')

  for (let i = 0; i < characters.length - 1; i++) {
    const twoGram = `${characters[i]} ${characters[i + 1]}`
    console.log(twoGram)
  }

  rl.close()
})
