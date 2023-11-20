const readline = require('readline')

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  console.log(`분할 결과: [${left.join(', ')}], [${right.join(', ')}]`)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }

  console.log(`병합 결과: [${result.join(', ')}]`)

  return result
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('배열을 입력하세요: ', input => {
  const array = input.split(' ').map(n => parseInt(n, 10))
  const sortedArray = mergeSort(array)
  console.log('정렬된 결과:', sortedArray)
  rl.close()
})
