const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function longestPath(graph, start, end) {
  let maxLength = 0

  function dfs(node, visited, length) {
    visited.add(node)

    if (node === end) {
      maxLength = Math.max(maxLength, length)
      return
    }

    if (graph[node]) {
      graph[node].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          dfs(neighbor, new Set(visited), length + 1)
        }
      })
    }
  }

  dfs(start, new Set(), 0)

  return maxLength
}

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
}

rl.question('최장 경로를 구할 두 정점을 입력하세요 (예: 1 7) : ', (nodesInput) => {
  const [startNode, endNode] = nodesInput.split(' ')

  const length = longestPath(graph, Number(startNode), Number(endNode))
  console.log(`최장 경로의 길이 : ${length}`)

  rl.close()
})