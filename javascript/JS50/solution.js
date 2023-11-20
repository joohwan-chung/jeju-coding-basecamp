const readline = require('readline')

function bubble(arr) {
  let result = arr.slice()

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = result.length - 1; j > i; j--) {
      if (result[j] < result[j - 1]) { // 원래 문제의 if 조건은 result[j] > result[j + 1] 입니다.
        // 두 원소의 위치를 바꿉니다.
        [result[j], result[j - 1]] = [result[j - 1], result[j]]

        // 패스마다의 배열 상태 출력
        console.log(`패스 ${i + 1}, 비교 ${result.length - j}: [${result.join(', ')}]`)
      }
    }
  }
  return result
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('숫자들을 입력하세요 (공백으로 구분): ', input => {
  const items = input.split(' ').map(n => parseInt(n, 10))
  const sortedItems = bubble(items)
  console.log('정렬된 결과:', sortedItems)
  rl.close()
})
