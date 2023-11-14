const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('학생의 이름을 공백으로 구분하여 입력하세요: ', (nameInput) => {
  rl.question('학생의 수학 점수를 공백으로 구분하여 입력하세요: ', (scoreInput) => {
    const names = nameInput.split(' ')
    const scores = scoreInput.split(' ').map(Number)

    const studentObject = {}

    for (let i = 0; i < names.length; i++) {
      studentObject[names[i]] = scores[i]
    }

    console.log(studentObject)

    rl.close()
  })
})
