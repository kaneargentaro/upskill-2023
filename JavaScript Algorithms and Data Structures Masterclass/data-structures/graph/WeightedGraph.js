// Undirected
// Weighted
// Use an Adjacency List

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
		this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1);
	}

	removeVertex(vertex) {
		for (let i = 0; i < vertex.length; i++)
			this.removeEdge(vertex, vertex[i]);

		delete this.adjacencyList[vertex];
	}

	depthFirstRecursive(start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach((neighbour) => {
				if (!visited[neighbour]) return dfs(neighbour);
			});
		}(start));

		return result;
	}

	depthFirstIterative(start) {
		const stack = [];
		const result = [];
		const visited = {};
		stack.push(start);
		visited[stack] = true;
		while (stack.length) {
			const vertex = stack.pop();
			result.push(vertex);
			this.adjacencyList[vertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					stack.push(neighbour);
				}
			});
		}
		return result;
	}

	breadthFirst(start) {
		const queue = [];
		const result = [];
		const visited = {};
		queue.push(start);
		visited[queue] = true;
		while (queue.length) {
			const vertex = queue.shift();
			result.push(vertex);
			this.adjacencyList[vertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					queue.push(neighbour);
				}
			});
		}
		return result;
	}
}

// // const graph = new Graph();
// // graph.addVertex('Tokyo');
// // graph.addVertex('Osaka');
// // graph.addVertex('Kyoto');
// // graph.addVertex('Tokyo');
// // graph.addEdge('Tokyo', 'Osaka');
// // graph.addEdge('Osaka', 'Kyoto');
// // graph.removeEdge('Tokyo', 'Osaka');
// // graph.removeVertex('Kyoto');
// // console.log(graph.adjacencyList);

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');
// // console.log(graph.depthFirstRecursive('A'));
// // console.log(graph.depthFirstIterative('A'));
// console.log(graph.breadthFirst('A'));
