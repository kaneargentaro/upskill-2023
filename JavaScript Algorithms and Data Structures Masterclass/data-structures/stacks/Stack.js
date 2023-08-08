class Node {
	constructor(val) {
		this.val = val;
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
		const newNode = new Node(val);

		if (this.first === null) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}

		this.size++;
		return this.size;
	}

	pop() {
		if (this.size === 0) return null;
		const temp = this.first;
		if (this.first === this.last) this.last = null;
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}


let stack = new Stack();

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.push(40));
console.log(stack.push(50));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
