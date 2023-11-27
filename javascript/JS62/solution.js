const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('문자열을 입력하세요: ', (alphas) => {
  let count = -1
  let currentStr = alphas[0]
  let str = ""

  for (let i of alphas) {
    if (i === currentStr) {
      count++
    } else {
      str += count
      currentStr = i
      count = 0
    }
  }
  str += count
  
  console.log(str)
  
  rl.close()
})
