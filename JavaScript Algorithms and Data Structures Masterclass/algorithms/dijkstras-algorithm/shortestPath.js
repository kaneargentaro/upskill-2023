class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}


// use MinBinaryHeap
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	swap(firstIndex, secondIndex) {
		const temp = this.values[firstIndex];
		this.values[firstIndex] = this.values[secondIndex];
		this.values[secondIndex] = temp;
	}

	// Parent index is (n-1)/2, and child index is (n+1)*2 and (n+2)*2
	enqueue(value, priority) {
		const node = new Node(value, priority);
		this.values.push(node);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;

		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.values[index].priority >= this.values[parentIndex].priority) break;
			this.swap(parentIndex, index);
			index = parentIndex;
		}
	}

	sinkDown() {
		let index = 0;
		const length = this.values.length;
		const element = this.values[index];

		while (true) {
			// Left and right child for this element are 2n+1 and 2n+2 respectively
			const leftChildIndex = 2 * index + 1;
			const rightChildIndex = 2 * index + 2;

			let leftChild;
			let rightChild;
			let swapIndex = null;

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if (leftChild.priority < element.priority) swapIndex = leftChildIndex;
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					swapIndex === null && rightChild.priority < element.priority ||
					swapIndex !== null && rightChild.priority < leftChild.priority
				) swapIndex = rightChildIndex;
			}

			// Break condition
			if (swapIndex === null) break;

			// Swap the elements
			this.swap(index, swapIndex);

			// Update the next starting index
			index = swapIndex;
		}
	}

	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}
}

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

	// Find the shortest path to a node
	dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {}; // Store the distance to this node eg. B:3
		const previous = {}; // Update how we got to the current node (which was the previous node visited) eg. B:A
		const path = []; // Used to store the result
		let smallest;

		// Build up initial state
		// Set everything to infinity besides the starting node,
		// add the nodes to a priority queue,
		// and set up the template for previous nodes
		for (const vertex in this.adjacencyList) {
			let distance = Infinity;
			if (vertex === start) distance = 0;
			distances[vertex] = distance;
			nodes.enqueue(vertex, distance);
			previous[vertex] = null;
		}


		// As long as there's something to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().value;

			// We're finished processing the nodes
			// Create a list to return
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (const neighbour in this.adjacencyList[smallest]) {
					// Find neighbouring node
					const nextNode = this.adjacencyList[smallest][neighbour];

					// calculate new distance to neighboring node
					const candidate = distances[smallest] + nextNode.weight;
					const nextNeighbor = nextNode.node;

					if (candidate < distances[nextNeighbor]) {
						// updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// updating previous - How we got to neighbor
						previous[nextNeighbor] = smallest;
						// enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);


console.log(graph.dijkstra('A', 'E'));
