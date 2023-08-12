/*
	Stacks - pop Exercise 57

	Implement the following methods on the Stack class

	pop - removes the node at the top of the stack and returns the value of that node.

	Note: The tests for pop rely on push working (it has been implemented for you)
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.size === 0) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}
		this.size++;
		return this.size;
	}

	pop() {
		if (this.size === 0) return null;

		let poppedNode;
		if (this.size === 1) {
			poppedNode = this.last;
			this.first = null;
			this.last = null;
		} else {
			poppedNode = this.first;
			this.first = poppedNode.next;
		}

		this.size--;
		return poppedNode.value;
	}
}


const stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
const removed = stack.pop();
console.log(removed); // 1000
console.log(stack.size); // 2
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size); // 0
