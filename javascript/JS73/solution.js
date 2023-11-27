const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function shortestDistance(graph, start, end) {
  const queue = [{ node: start, distance: 0 }]
  const visited = new Set()

  while (queue.length > 0) {
    const { node, distance } = queue.shift()

    if (node === end) {
      return distance
    }

    if (!visited.has(node)) {
      visited.add(node)
      if (graph[node]) {
        graph[node].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            queue.push({ node: neighbor, distance: distance + 1 })
          }
        })
      }
    }
  }

  return -1
}

const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
}

rl.question('최단 거리를 구할 두 정점을 입력하세요 (예: A F) : ', (nodesInput) => {
  const [startNode, endNode] = nodesInput.split(' ')

  const distance = shortestDistance(graph, startNode, endNode)
  console.log(`최단 거리 : ${distance}`)

  rl.close()
})
