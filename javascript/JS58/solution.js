const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('숫자를 입력하세요 : ', (input) => {
  const result = String(parseInt(input, 10)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  console.log(result)
  
  rl.close()
})
