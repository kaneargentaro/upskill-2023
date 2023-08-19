class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	swap(firstIndex, secondIndex) {
		const temp = this.values[firstIndex];
		this.values[firstIndex] = this.values[secondIndex];
		this.values[secondIndex] = temp;
	}

	// Parent index is (n-1)/2, and child index is (n+1)*2 and (n+2)*2
	insert(val) {
		this.values.push(val);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while (this.values[parentIndex] < this.values[index]) {
			// let temp = this.values[parentIndex];
			// this.values[parentIndex] = this.values[index];
			// this.values[index] = temp;
			this.swap(parentIndex, index);
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
		// return this;
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

			// Make sure child is not out of bounds
			// If it exists, and is larger than our element
			// mark it as the value to swap
			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if (leftChild > element) swapIndex = leftChildIndex;
			}

			// Make sure child is not out of bounds
			// Mark this value to swap if:
			// 	1. If right is larger than the element and no value has been marked to swap
			//	2. A value has been marked to swap, but this value is bigger than the other child element
			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					swapIndex === null && rightChild > element ||
					swapIndex !== null && rightChild > leftChild
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

	extractMax() {
		if (this.values.length === 0) return undefined;

		// Get the root value, and pop and store the smallest value
		const max = this.values[0];
		const end = this.values.pop();

		// If we have more than 1 element in our heap, sink down and swap
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}

		return max;
	}
}


const maxBinaryHeap = new MaxBinaryHeap();
console.log(maxBinaryHeap.insert(10));
console.log(maxBinaryHeap.insert(5));
console.log(maxBinaryHeap.insert(3));
console.log(maxBinaryHeap.insert(20));
console.log(maxBinaryHeap.insert(60));
console.log(maxBinaryHeap.insert(100));

console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.values);

