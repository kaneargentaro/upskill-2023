class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const node = new Node(val);
		if (this.size === 0) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		this.size++;
		return this.size;
	}

	dequeue() {
		if (this.size === 0) return null;
		const firstNode = this.first;
		if (this.size === 1) this.last = null;
		this.first = this.first.next;
		this.size--;
		return firstNode.val;
	}
}

const queue = new Queue();
console.log(queue.enqueue(10)); // 1
console.log(queue.size); // 1
console.log(queue.enqueue(100)); // 2
console.log(queue.size); // 2
console.log(queue.enqueue(1000)); // 3
console.log(queue.size); // 3
