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


const priorityQueue = new PriorityQueue();
console.log(priorityQueue.enqueue('help 1', 1));
console.log(priorityQueue.enqueue('help 2', 1));
console.log(priorityQueue.enqueue('help 3', 8));
// console.log(priorityQueue.enqueue("help 4", 10));
// console.log(priorityQueue.enqueue("help 5", 34));
console.log(priorityQueue.enqueue('help 6', 2));


console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

// console.log(priorityQueue.values);

