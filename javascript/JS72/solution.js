function widthFirstSearch(graph, start) {
  const queue = [start]
  const visited = new Set()
  const result = []

  visited.add(start)

  // while (queue.length > 0) {
  //   const current = queue.shift()
  //   result.push(current)

  //   if (graph[current]) {
  //     graph[current].forEach(neighbor => {
  //       if (!visited.has(neighbor)) {
  //         visited.add(neighbor)
  //         queue.push(neighbor)
  //       }
  //     })
  //   }
  // }

  for (let i = 0; i < queue.length; i++) {
    const current = queue[i]
    result.push(current)

    if (graph[current]) {
      graph[current].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      })
    }
  }

  return result
}

const graph = {
  'E': ['D', 'A'],
  'F': ['D'],
  'A': ['E', 'C', 'B'],
  'B': ['A'],
  'C': ['A'],
  'D': ['E', 'F'],
}

const startNode = 'E'
const bfsResult = widthFirstSearch(graph, startNode)
console.log(bfsResult.join(' '))
