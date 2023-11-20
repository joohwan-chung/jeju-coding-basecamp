const currentTimeInMilliseconds = new Date().getTime()
const millisecondsInYear = 1000 * 60 * 60 * 24 * 365 // 1년의 밀리초 수

const currentYear = Math.floor(currentTimeInMilliseconds / millisecondsInYear) + 1970

console.log(`현재 연도는 ${currentYear}년입니다.`)


// const currentDate = new Date()
// const currentYear = currentDate.getFullYear()

// console.log(`현재 연도는 ${currentYear}년입니다.`)