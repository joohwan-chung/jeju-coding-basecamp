const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('알파벳을 입력하세요: ', (input) => {
  const isUpperCase = input === input.toUpperCase()
  const result = isUpperCase ? 'YES' : 'NO'
  console.log(result)

  rl.close()
})
