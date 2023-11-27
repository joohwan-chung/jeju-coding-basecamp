const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function formatTime(hours, minutes) {
  return `${hours.toString().padStart(2, '0')}시간 ${minutes.toString().padStart(2, '0')}분`
}

function calculateTimeDifference(busTimetable, currentTime) {
  const result = []

  const currentHour = parseInt(currentTime.split(':')[0], 10)
  const currentMinute = parseInt(currentTime.split(':')[1], 10)

  for (let i = 0; i < busTimetable.length; i++) {
    const parts = busTimetable[i].split(':')
    const busHour = parseInt(parts[0], 10)
    const busMinute = parseInt(parts[1], 10)

    if (isNaN(busHour) || isNaN(busMinute)) {
      result.push('올바르지 않은 시간 형식입니다.')
    } else if (currentHour > busHour || (currentHour === busHour && currentMinute > busMinute)) {
      result.push('지나갔습니다.')
    } else {
      const hourDifference = busHour - currentHour
      const minuteDifference = busMinute - currentMinute

      if (minuteDifference < 0) {
        result.push(formatTime(hourDifference - 1, 60 + minuteDifference))
      } else {
        result.push(formatTime(hourDifference, minuteDifference))
      }
    }
  }

  return result
}

rl.question('버스 시간표를 입력하세요 (예: 12:30, 13:20, 14:13) : ', (timetableInput) => {
  rl.question('현재 시간을 입력하세요 (예: 12:40) : ', (currentTimeInput) => {
    const busTimetable = timetableInput.split(',').map(item => item.trim())
    const currentTime = currentTimeInput.trim()

    const result = calculateTimeDifference(busTimetable, currentTime)
    console.log(result)

    rl.close()
  })
})
