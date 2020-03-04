class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add adge as a node, with a weight
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const distances = {};
    const previous = {};
    let path = [];
    const nodes = new PriorityQueue(); // Our distances

    Object.keys(this.adjacencyList).forEach(key => {
      if (key === start) {
        // Set distance for start to 0
        distances[key] = 0;
        nodes.enqueue(key, distances[key]);
      } else {
        // Each distance is initially infinity.
        distances[key] = Infinity;
      }
      // Put the node in the queue.
      previous[key] = null;
    });

    //When we remove from priority queue its like that node has been "visited".
    while (nodes.values.length !== 0) {
      //  Start with the smallest distance. We VISIT that node

      let visited = nodes.dequeue().val;
      if (visited === finish) {
        while (previous[visited]) {
          path.push(visited);
          visited = previous[visited];
        }
        break;
      }
      if (visited || distances[visited]) {
        // loop over each neighoburing node to the currently visited node.
        this.adjacencyList[visited].forEach(node => {
          const distance = node.weight; // Distance from our visited to our neighbour node.
          const name = node.node;
          // Distance from our node to the visited route to A.
          // Adds distance from A to visited AND visited to neighbournode.
          const totalDistance = distance + distances[visited];
          // if this distance is smaller than the existing shortest distance to the neighbour node.
          if (totalDistance < distances[name]) {
            distances[name] = totalDistance; // shortest distance from A to the neighbour node is now the current distant
            previous[name] = visited; // previous at the neighbour is now our currently visited node.
            // Visit this node next.
            nodes.enqueue(name, totalDistance);
            // Enqueue the node and sort by priority during enqueue
          }
        });
      }
    }
    console.log(distances);
    return path.concat(start).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    // push name + priority
    this.values.push({ val, priority });
    // sort to have lower # first.
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  // Smallest distance gets priority when a is smaller than b
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));

console.log(graph);
// Instead of string we now have an object
// {
//   "A": [{ node: "B", weight: 10}, {node: "C", weight:20}]
// }

//We want to visit each node.
// We always pick the smallest distance to travel from A.

// Vertex - Shortest Dis from A...
