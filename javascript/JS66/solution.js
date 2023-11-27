const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function checkRule(rule, arr) {
  let temp = -1
  for (let i = 0; i < rule.length; i++) {
    if (arr.indexOf(rule[i]) !== -1) {
      let index = arr.indexOf(rule[i])
      if (temp < index) {
        temp = index
      } else {
        return "불가능"
      }
    }
  }
  return "가능"
}

function checkBlockOrder(tower, rule) {
  const result = []

  for (let i = 0; i < tower.length; i++) {
    const blocks = tower[i]
    result.push(checkRule(rule, blocks))
  }

  return result
}

rl.question('탑 입력: ', (towerInput) => {
  const tower = towerInput.split(',').map(item => item.trim())

  rl.question('규칙 입력: ', (ruleInput) => {
    const rule = ruleInput.trim()

    const result = checkBlockOrder(tower, rule)
    console.log(result)

    rl.close()
  })
})