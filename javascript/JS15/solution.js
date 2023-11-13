const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', (name) => {
  console.log(`출력 : 안녕하세요. 저는 ${name}입니다.`)

  rl.close()
})