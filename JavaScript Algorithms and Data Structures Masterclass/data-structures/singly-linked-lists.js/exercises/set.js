/*
SLL - set Exercise 40

Implement the following on the SinglyLinkedList class

set

This function should accept an index and a value and update the value
of the node in the SinglyLinkedList at the index with the new value.
It should return true if the node is updated successfully, or
false if an invalid index is passed in.

Examples

(Note: you don't need to re-implement push, the tests will
be provided with it)
*/


class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (this.head) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			this.head = newNode;
			this.tail = this.head;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, value) {
		if (index > this.length) return false;
		const current = this.get(index);
		if (current) {
			current.val = value;
			return true;
		}
		return false;
	}
}


const singlyLinkedList = new SinglyLinkedList();

console.log(singlyLinkedList.set(0, 10)); // true
console.log(singlyLinkedList.set(1, 2)); // true
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 10

console.log(singlyLinkedList.set(10, 10)); // false

console.log(singlyLinkedList.set(3, 100)); // true
console.log(singlyLinkedList.head.next.next.next.val); // 10
