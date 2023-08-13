/*
	Stack with 2 Queues
	Exercise 58

	Implement a stack using two queues:

	You should implement the following functions:

	- push (returns the stack)

	- pop (returns the value popped)

	Comment on your time complexity for all of these operations:
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(data) {
		const node = new Node(data);

		if (this.first) {
			this.last.next = node;
			this.last = node;
		} else {
			this.first = node;
			this.last = node;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;

		const temp = this.first;
		if (this.first === this.last) this.last = null;

		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

class Stack {
	constructor() {
		this.queue = new Queue();
	}

	push(val) {
		const queue = this.queue;
		const queueTwo = new Queue();
		queueTwo.enqueue(val);
		while (queue.size)
			queueTwo.enqueue(queue.dequeue());

		this.queue = queueTwo;
		return this;
	}

	pop() {
		return this.queue.dequeue();
	}
}

const s = new Stack();
s.push(10).push(20).push(30);
console.log(s.pop()); // 30
console.log(s.pop()); // 20
console.log(s.pop()); // 10
console.log(s.pop()); // null
s.push(30).push(40).push(50);
console.log(s.pop()); // 50
s.push(60);
console.log(s.pop()); // 60
