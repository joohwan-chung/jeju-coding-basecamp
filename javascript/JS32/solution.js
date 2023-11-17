const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('입력 : ', input => {
  const wordCount = countWords(input)
  
  console.log(`출력 : ${wordCount}`)

  rl.close()
})

function countWords(str) {
  const trimmedStr = str.trim()
  const words = trimmedStr.split(/\s+/)
  return words.length
}
