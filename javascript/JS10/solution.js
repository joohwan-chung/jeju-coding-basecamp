// MARK: 파일 입출력 모듈을 사용하지 않고 함수로 트리를 출력
// const christmastTree = (height) => {
//   let tree = ''
//   for (let i = 1; i <= height; i++) {
//     tree += ' '.repeat(height - i) + '*'.repeat(i * 2 - 1) + '\n'
//   }
//   return tree
// }

// console.log(christmastTree(5))

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('크리스마스 트리 높이를 입력해주세요 : ', (answer) => {
  // 입력값이 answer매개변수로 들어온다.
  const height = parseInt(answer, 10) // 입력값을 숫자로 변환한다.
  let tree = '' // 트리를 저장할 변수를 선언한다.

  // 입력값만큼 반복한다.
  for (let i = 1; i <= height; i++) {
    // 공백과 별을 반복해서 tree변수에 저장한다.
    tree += ' '.repeat(height - i) + '*'.repeat(i * 2 - 1) + '\n'
  }
  
  // tree변수에 저장된 트리를 출력한다.
  console.log(tree)
  
  rl.close()
})