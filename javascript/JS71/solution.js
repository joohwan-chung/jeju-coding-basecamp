function dfs(graph, visited, result, node) {
  visited.add(node)
  result.push(node)
  if (graph[node]) {
    graph[node].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        dfs(graph, visited, result, neighbor)
      }
    })
  }
}

function depthFirstSearch(graph, start) {
  const visited = new Set()
  const result = []

  dfs(graph, visited, result, start)

  return result
}

const graph = {
  'E': ['D', 'A'],
  'F': ['D'],
  'A': ['E', 'C', 'B'],
  'B': ['A'],
  'C': ['A'],
  'D': ['E','F'],
}

const startNode = 'E'
const dfsResult = depthFirstSearch(graph, startNode)
console.log(dfsResult.join(' '))