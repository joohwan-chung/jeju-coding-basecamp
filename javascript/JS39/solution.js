const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const result = replaceQWithE(input)
  console.log(`출력 : ${result}`)

  rl.close()
})

function replaceQWithE(str) {
  return str.replace(/q/g, 'e')
}
