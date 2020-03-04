class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (this.adjacencyList[vertexName]) throw new Error("vertex exists");
    this.adjacencyList[vertexName] = [];
  }

  // Directed graph would only be v1 to v2
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(connectedVertex =>
      this.removeEdge(vertex, connectedVertex)
    );

    delete this.adjacencyList[vertex];
  }

  DFSrecursive(vertex) {
    const results = [];
    const visited = {};

    const DFS = vertex => {
      if (!vertex) return;
      results.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach(vertex => {
        if (!visited[vertex]) {
          DFS(vertex);
        }
      });
    };

    DFS(vertex);

    return results;
  }

  DFSiterative(vertex) {
    let stack = [];
    let results = [];
    let visited = {};
    stack.push(vertex);

    while (stack.length !== 0) {
      const poppedVertex = stack.pop();
      if (!visited[poppedVertex]) {
        results.push(poppedVertex);
        visited[poppedVertex] = true;
        this.adjacencyList[poppedVertex].forEach(vertex => stack.push(vertex));
      }
    }
    return results;
  }

  BFS(vertex) {
    const queue = [vertex];
    const results = [];
    const visited = {};
    while (queue.length !== 0) {
      const shiftedVertex = queue.shift();
      if (!visited[shiftedVertex]) {
        results.push(shiftedVertex);
        visited[shiftedVertex] = true;
        this.adjacencyList[shiftedVertex].forEach(vertex => queue.push(vertex));
      }
    }
    return results;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);
console.log(g.BFS("A"));
