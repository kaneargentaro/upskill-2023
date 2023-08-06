/**
 SLL - Rotate Exercise 39

Implement the following on the SinglyLinkedList class

rotate

This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

Time Complexity: O(N), where N is the length of the list.

Space Complexity: O(1)

Examples

(Note: push is implemented to help you test your rotate function)
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
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	rotate(num) {
		if (num === 0 || num >= this.length) return this;
		if (num < 0) num += this.length;

		let current = this.head;

		for (let i = 0; i < num; i++) {
			// push to the end
			this.push(current.val);

			// shift to the front
			this.head = this.head.next;

			// go to next entry in the next loop
			current = current.next;
		}
		return this;
	}
}


var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 25;

console.log(singlyLinkedList.rotate(3));
console.log(singlyLinkedList.head.val); // 20
console.log(singlyLinkedList.head.next.val); // 25
console.log(singlyLinkedList.head.next.next.val); // 5
console.log(singlyLinkedList.head.next.next.next.val); // 10
console.log(singlyLinkedList.head.next.next.next.next.val); // 15
console.log(singlyLinkedList.tail.val); // 15
console.log(singlyLinkedList.tail.next); // null

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 25;

console.log(singlyLinkedList.rotate(-1));
console.log(singlyLinkedList.head.val); // 25
console.log(singlyLinkedList.head.next.val); // 5
console.log(singlyLinkedList.head.next.next.val); // 10
console.log(singlyLinkedList.head.next.next.next.val); // 15
console.log(singlyLinkedList.head.next.next.next.next.val); // 20
console.log(singlyLinkedList.tail.val); // 20
console.log(singlyLinkedList.tail.next); // null

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 25;

console.log(singlyLinkedList.rotate(1000));
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.head.next.next.next.val); // 20
console.log(singlyLinkedList.head.next.next.next.next.val); // 25
console.log(singlyLinkedList.tail.val); // 25
console.log(singlyLinkedList.tail.next); // null
