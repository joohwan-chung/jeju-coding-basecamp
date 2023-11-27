const readline = require('readline')

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  
  const result = [...quickSort(left), pivot, ...quickSort(right)]

  // 중간과정 출력
  console.log(`퀵 정렬 중간과정: ${result}`)

  return result
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('배열을 입력하세요: ', input => {
  const array = input.split(' ').map(n => parseInt(n, 10))
  console.log(`원본 배열: ${array}`)
  console.log('정렬된 결과:', quickSort(array))
  rl.close()
})
