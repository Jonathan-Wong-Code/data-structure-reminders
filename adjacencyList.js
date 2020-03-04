class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex])
      throw new Error("Graph vertex already exists");
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    // Add vertex to the neighbour array
    // A: []
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
  }

  removeEdge(vertex1, vertex2) {
    // Filter from properties array;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(vertexConnection => {
      this.removeEdge(vertex, vertexConnection);
    });
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(vertex) {
    const visited = {};
    const results = [];

    const helper = vertex => {
      if (!vertex) return;
      // Mark as visited and push to results
      visited[vertex] = true;
      results.push(vertex);
      // If not in results then recursively call.
      this.adjacencyList[vertex].forEach(vertexConnection => {
        if (!visited[vertexConnection]) {
          helper(vertexConnection);
        }
      });
    };
    helper(vertex);
    return results;
  }
  // Use a stack/queue to determine what to visit next!
  DFSIterative(vertex) {
    const stack = [];
    const results = [];
    const visited = {};
    // Push vertex into queue
    stack.push(vertex);
    let currentVertex;
    while (stack.length !== 0) {
      // Pop next node to visit
      currentVertex = stack.pop();
      // If vertex not visited
      if (!visited[currentVertex]) {
        // Mark as visited
        visited[currentVertex] = true;
        // Push to results
        results.push(currentVertex);
        // Push its neighbours to visit to the stack.
        this.adjacencyList[currentVertex].forEach(neighbour => {
          if (!visited[neighbour]) stack.push(neighbour);
        });
      }
    }
    return results;
  }

  BFS(vertex) {
    const visited = {};
    const queue = [];
    const results = [];
    queue.push(vertex);
    visited[vertex] = true;
    while (queue.length !== 0) {
      const currentVertex = queue.shift();
      // visit that node.
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbour => {
        // if it is not visited neighbour
        if (!visited[neighbour]) {
          // VISIT IT.
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return results;
  }
}

const graph = new Graph();

// graph.addVertex("San Francisco");
// graph.addVertex("Tokyo");
// graph.addVertex("Asping");
// graph.addVertex("Hong Kong");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.BFS("A"));
