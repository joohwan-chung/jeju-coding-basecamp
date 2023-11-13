const galaxy = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', (answer) => {
  console.log('출력 :', galaxy[parseInt(answer) - 1])
  rl.close()
})