class Graph {

    constructor() {
  
      this.vertices = [];
  
      this.edges = {};
  
    }
  
    addVertex(vertex) {
  
      this.vertices.push(vertex);
  
      this.edges[vertex] = [];
  
    }
  
    addEdge(vertex1, vertex2) {
  
      this.edges[vertex1].push(vertex2);
  
      this.edges[vertex2].push(vertex1);
  
    }

    getDegree(vertex) {
      return this.edges[vertex].length;
    }
  
    getDegrees() {
      const degrees = {};
      for (const vertex of this.vertices) {
        degrees[vertex] = this.getDegree(vertex);
      }
      return degrees;
    }
  
    bfs(startVertex) {
  
      const visited = {};
  
      const queue = [];
  
      visited[startVertex] = true;
  
      queue.push(startVertex);
  
      while (queue.length > 0) {
  
        const vertex = queue.shift();
   

        console.log(vertex);
  
        this.edges[vertex].forEach( (neighbor) => {
            if (!visited[neighbor]) {
                visited[neighbor] = true; 
                queue.push(neighbor);
            }
        } );
  
      }
  
    }
  
    dfs(startVertex) {
  
      const visited = {};
  
      const dfsHelper = (vertex) => {
  
        visited[vertex] = true;
  
        console.log(vertex);
  
        this.edges[vertex].forEach((neighbor) => { 
            if (!visited[neighbor]) { 
                dfsHelper(neighbor); 
            } 
        } );
  
      };
  
      dfsHelper(startVertex);
  
    }

    //to find shortest path
    bfsShortestDistance(startVertex, targetVertex) {
        const visited = {};
        const queue = [];
      
        visited[startVertex] = true;
        queue.push({ node: startVertex, distance: 0 });
      
        while (queue.length > 0) {
          const { node, distance } = queue.shift();
          console.log(`Node: ${node}, Distance: ${distance}`);
      
          if (node === targetVertex) {
            return distance; // Shortest distance found
          }
      
          this.edges[node].forEach((neighbor) => {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push({ node: neighbor, distance: distance + 1 });
            }
          });
        }
      
        return -1; 
      }
  }
  
  
  // ==========================TEST CASES==========================
  
  const graph = new Graph();
  
  // add vertices
  graph.addVertex("1");
  graph.addVertex("2");
  graph.addVertex("3");
  graph.addVertex("4");
  graph.addVertex("5")
  
  // add edges
  graph.addEdge("1", "2");
  graph.addEdge("2", "4");
  graph.addEdge("3", "4");
  graph.addEdge("1", "5");
  
  // perform BFS
  console.log("BFS:");
  graph.bfs("1");
  3
  // perform DFS
  console.log("DFS:");
  graph.dfs("1")

  
const startVertex = "1";
const targetVertex = "4";
const shortestDistance = graph.bfsShortestDistance(startVertex, targetVertex);
console.log(`Shortest distance from ${startVertex} to ${targetVertex}: ${shortestDistance}`);

const vertexToCheck = 3;
console.log(`Degree of vertex ${vertexToCheck}: ${graph.getDegree(vertexToCheck)}`);


//wieghted graph implementation
class WeightedGraph {

  constructor() {
      this.vertices = [];
      this.edges = {};
  }

  addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
      this.edges[vertex1].push({ vertex: vertex2, weight });
      this.edges[vertex2].push({ vertex: vertex1, weight });
  }

  getEdges(vertex) {
      return this.edges[vertex];
  }
}

// Example usage:
const weightedGraph = new WeightedGraph();

weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');

weightedGraph.addEdge('A', 'B', 2);
weightedGraph.addEdge('B', 'C', 3);
weightedGraph.addEdge('C', 'A', 1);

console.log('Edges of vertex A:', weightedGraph.getEdges('A'));
