const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function questionAsync(prompt) {
  return new Promise(resolve => rl.question(prompt, resolve))
}

async function main() {
  const limitWeight = await questionAsync('제한 무게 : ')
  const numberOfFriends = await questionAsync('함께한 친구들의 수 : ')
  const weights = []

  // 각 친구들의 몸무게를 입력받아 배열에 저장
  for (let i = 0; i < numberOfFriends; i++) {
    const weight = await questionAsync(`친구 ${i + 1}의 몸무게를 입력 : `)
    weights.push(Number(weight))
  }

  // 계산하여 결과 출력
  const numberOfPeople = calculateNumberOfPeople(weights, limitWeight)
  console.log(`출력 : ${numberOfPeople}`)
  rl.close()
}

function calculateNumberOfPeople(weights, limitWeight) {
  let numberOfPeople = 0
  let currentWeight = 0

  // 제한 무게를 넘지 않는 선에서 친구들을 최대한으로 태우기
  for (const weight of weights) {
    if (currentWeight + weight <= limitWeight) {
      currentWeight += weight
      numberOfPeople++
    } else {
      break // 무게 제한을 초과하면 중단
    }
  }

  return numberOfPeople
}

main()
