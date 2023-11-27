const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function interleaveArrays(arr1, arr2) {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      result.push([arr1[i], arr2[i]])
    } else {
      result.push([arr2[i], arr1[i]])
    }
  }
  return result
}

rl.question('a 배열 입력 (, 로 구분) : ', (aInput) => {
  rl.question('b 배열 입력 (, 로 구분) : ', (bInput) => {
    const a = aInput.split(',').map(item => item.trim())
    const b = bInput.split(',').map(item => item.trim())

    if (a.length !== b.length) {
      console.log('두 배열은 서로 같은 길이를 가져야 합니다.')
      rl.close()
      return
    }

    const result = interleaveArrays(a, b)
    console.log(result)

    rl.close()
  })
})

rl.on('close', () => {
  console.log('프로그램을 종료합니다.')
  process.exit(0)
})
