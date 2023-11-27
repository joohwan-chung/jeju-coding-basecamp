const nationWidth = {
  'korea': 220877,
  'Rusia': 17098242,
  'China': 9596961,
  'France': 543965,
  'Japan': 377915,
  'England': 242900,
}

const koreaWidth = nationWidth['korea']

let closestCountry = ''
let minDifference = Infinity

// 각 국가의 면적과 한국의 면적 차이 계산
for (const country in nationWidth) {
  if (country !== 'korea') {
    const difference = Math.abs(nationWidth[country] - koreaWidth)

    // 현재까지의 최소 차이보다 작으면 업데이트
    if (difference < minDifference) {
      minDifference = difference
      closestCountry = country
    }
  }
}

console.log(`${closestCountry} ${minDifference}`)
