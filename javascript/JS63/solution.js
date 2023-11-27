const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("입력 : ", function(inputSentence) {
  const words = inputSentence.split(' ')
  const abbreviation = words.map(word => word[0]).join('')

  console.log("출력 :" , abbreviation)
  rl.close()
})
