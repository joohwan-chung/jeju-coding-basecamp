const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function irregularGame(userInput) {
  let answer = 0
  let count = 1
  const data = { 
    3: 1, 
    6: 2, 
    9: 3 
  }

  while (userInput.length !== 0) {
    answer += data[parseInt(userInput.pop(), 10)] * count
    count *= 3
  }

  return answer
}

rl.question('입력해주세요 : ', (input) => {
  const userInput = input.trim().split('')
  
  console.log(irregularGame(userInput))

  rl.close()
})
