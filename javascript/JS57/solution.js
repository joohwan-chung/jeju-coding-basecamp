function countOnesInRange(start, end) {
  let count = 0

  for (let i = start; i <= end; i++) {
    const digits = i.toString().split('')

    // 각 자리의 숫자를 확인하여 1이 있는지 판단
    for (const digit of digits) {
      if (digit === '1') {
        count++
      }
    }
  }

  return count
}

const result = countOnesInRange(0, 1000)
console.log(result)
