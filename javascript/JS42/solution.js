const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('월을 입력하세요: ', monthInput => {
  rl.question('일을 입력하세요: ', dayInput => {
    const month = parseInt(monthInput)
    const day = parseInt(dayInput)

    const result = solution(month, day)
    console.log(`${month}월 ${day}일은 ${result} 요일입니다.`)

    rl.close()
  })
})

function solution(a, b) {
  const startDate = new Date('2020-01-01')
  const targetDate = new Date(`2020-${a}-${b}`)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const dayIndex = targetDate.getDay()

  return daysOfWeek[dayIndex]
}
