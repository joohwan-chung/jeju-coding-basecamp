function isBalanced(str) {
  const stack = []
  const openBrackets = ['(', '{', '[']
  const closeBrackets = [')', '}', ']']

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i]

    if (openBrackets.includes(currentBracket)) {
      stack.push(currentBracket)
    } else if (closeBrackets.includes(currentBracket)) {
      const lastOpenBracket = stack.pop()
      const correspondingOpenBracket = openBrackets[closeBrackets.indexOf(currentBracket)]

      if (lastOpenBracket !== correspondingOpenBracket) {
        return "NO"
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO"
}

// 사용자 입력을 받아 테스트
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('괄호 문자열을 입력하세요: ', (input) => {
  const result = isBalanced(input)
  console.log(result)
  rl.close()
})
