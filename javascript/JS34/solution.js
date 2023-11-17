const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('키를 입력하세요 (공백으로 구분): ', input => {
  // 입력값에서 키들을 추출하여 배열로 변환
  const heights = input.split(' ').map(Number)

  // 키 배열을 오름차순으로 정렬
  const sortedHeights = [...heights].sort((a, b) => a - b)

  // 입력된 키 배열과 정렬된 키 배열이 같은지 확인
  const isOrdered = JSON.stringify(heights) === JSON.stringify(sortedHeights)

  // 결과 출력
  if (isOrdered) {
    console.log('YES')
  } else {
    console.log('NO')
  }

  rl.close()
})
