const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function multiplyMatrices(a, b) {
  const aRows = a.length
  const aCols = a[0].length
  const bRows = b.length
  const bCols = b[0].length

  // 곱할 수 없는 경우
  if (aCols !== bRows) {
    console.log(-1)
    rl.close()
    return
  }

  // 결과 행렬 초기화
  const result = Array.from({ length: aRows }, () => Array(bCols).fill(0))

  // 행렬 곱셈
  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      for (let k = 0; k < aCols; k++) {
        result[i][j] += a[i][k] * b[k][j]
      }
    }
  }

  console.log(result)
  rl.close()
}

// 첫 번째 행렬 입력 함수
function inputMatrix() {
  const matrix = []
  rl.question('행렬의 행 수와 열 수를 입력하세요 (예: 2 2) : ', (dimensions) => {
    const [rows, cols] = dimensions.split(' ').map(Number)

    // MARK: ; (세미콜론) 제거 시, TypeError: console.log(...) is not a function 에러 발생
    console.log('행렬의 요소를 입력하세요. 각 행의 요소는 공백으로 구분되어야 합니다.');

    (function inputRow(rowIndex) {
      if (rowIndex === rows) {
        inputMatrixPair(matrix)
        return
      }

      rl.question(`행렬의 ${rowIndex + 1}행을 입력하세요 : `, (row) => {
        const rowElements = row.split(' ').map(Number)
        matrix.push(rowElements)
        inputRow(rowIndex + 1)
      })
    })(0)
  })
}

// 두 번째 행렬 입력 함수
function inputMatrixPair(matrixA) {
  const matrixB = []
  rl.question(`두 번째 행렬의 행 수와 열 수를 입력하세요 (예: 2 2) : `, (dimensions) => {
    const [rows, cols] = dimensions.split(' ').map(Number)

    // MARK: ; (세미콜론) 제거 시, TypeError: console.log(...) is not a function 에러 발생
    console.log('두 번째 행렬의 요소를 입력하세요. 각 행의 요소는 공백으로 구분되어야 합니다.');

    (function inputRow(rowIndex) {
      if (rowIndex === rows) {
        multiplyMatrices(matrixA, matrixB)
        return
      }

      rl.question(`두 번째 행렬의 ${rowIndex + 1}행을 입력하세요 : `, (row) => {
        const rowElements = row.split(' ').map(Number)
        matrixB.push(rowElements)
        inputRow(rowIndex + 1)
      })
    })(0)
  })
}

// 시작
inputMatrix()
