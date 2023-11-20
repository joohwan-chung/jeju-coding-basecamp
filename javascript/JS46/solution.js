function calculateDigitSumInRange(start, end) {
  let concatenatedNumbers = ''
  let digitSum = 0

  for (let i = start; i <= end; i++) {
    concatenatedNumbers += i.toString()

    digitSum += calculateDigitSum(i.toString())
  }

  return { concatenatedNumbers, digitSum }
}

function calculateDigitSum(numberString) {
  let sum = 0

  for (let digit of numberString) {
    sum += parseInt(digit)
  }

  return sum
}

const startNumber = 10
const endNumber = 15

const { concatenatedNumbers, digitSum } = calculateDigitSumInRange(startNumber, endNumber)

console.log(`${startNumber}부터 ${endNumber}까지의 모든 숫자를 일렬로 놓으면 ${concatenatedNumbers}이고,`)
console.log(`각 자리수의 합은 ${digitSum}입니다. (${concatenatedNumbers.split('').join('+')} = ${digitSum})`)
