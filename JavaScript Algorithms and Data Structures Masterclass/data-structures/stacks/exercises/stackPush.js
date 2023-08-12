/*
	Stacks - push Exercise 56

	Implement the following methods on the Stack class

	push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.
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
}


var stack = new Stack();

console.log(stack.push(10)); // 1
console.log(stack.first.value); // 10
console.log(stack.last.value); // 10
console.log(stack.push(100));
console.log(stack.first.value); // 100
console.log(stack.last.value); // 10
console.log(stack.push(1000));
console.log(stack.first.value); // 1000
console.log(stack.last.value); // 10

var stack = new Stack();

console.log(stack.push(10)); // 1
console.log(stack.size); // 1
console.log(stack.push(100)); // 2
console.log(stack.size); // 2
console.log(stack.push(1000)); // 3
console.log(stack.size); // 3
