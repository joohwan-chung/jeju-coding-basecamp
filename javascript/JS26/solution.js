function translatePlanetName(koreanName) {
  const planetNames = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune'
  }

  return planetNames[koreanName] || '해당하는 행성이 없습니다.'
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('행성의 한글 이름을 입력하세요: ', (input) => {
  const koreanName = input.trim()
  const englishName = translatePlanetName(koreanName)
  
  console.log(`행성의 영어 이름: ${englishName}`)

  rl.close()
})
