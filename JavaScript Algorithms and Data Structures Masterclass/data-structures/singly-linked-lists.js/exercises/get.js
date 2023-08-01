/*
   SLL - get Exercise 37

    Implement the following on the SinglyLinkedList class

    get

    This function should find a node at a specified index in a SinglyLinkedList. It should return the found node.
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
		const node = new Node(val);
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		let current = this.head;
		let prev = current;
		while (current.next) {
			prev = current;
			current = current.next;
		}
		prev.next = null;
		this.tail = prev;
		this.length--;
		return current;
	}

	get(pos) {
		if (pos < 0) return null;
		if (pos > this.length - 1) return null;
		if (this.length === 0) return null;
		let current = this.head;
		for (let i = 0; i <= pos; i++) {
			if (i === pos) return current;
			current = current.next;
		}
		return null;
	}
}

const singlyLinkedList = new SinglyLinkedList();

// console.log(singlyLinkedList.push(5)); // singlyLinkedList
// console.log(singlyLinkedList.length); // 1
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.tail.val); // 5

// console.log(singlyLinkedList.push(10)); // singlyLinkedList
// console.log(singlyLinkedList.length); // 2
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.head.next.val); // 10
// console.log(singlyLinkedList.tail.val); // 10

// console.log(singlyLinkedList.push(15)); // singlyLinkedList
// console.log(singlyLinkedList.length); // 3
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.head.next.val); // 10
// console.log(singlyLinkedList.head.next.next.val); // 15
// console.log(singlyLinkedList.tail.val); // 15

// console.log(singlyLinkedList.pop().val); // 15
// console.log(singlyLinkedList.tail.val); // 10
// console.log(singlyLinkedList.length); // 2
// console.log(singlyLinkedList.pop().val); // 10
// console.log(singlyLinkedList.length); // 1
// console.log(singlyLinkedList.pop().val); // 5
// console.log(singlyLinkedList.length); // 0
// console.log(singlyLinkedList.pop()); // undefined
// console.log(singlyLinkedList.length); // 0

singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.get(0).val); // 5
console.log(singlyLinkedList.get(1).val); // 10
console.log(singlyLinkedList.get(2).val); // 15
console.log(singlyLinkedList.get(3).val); // 20
console.log(singlyLinkedList.get(4)); // null
