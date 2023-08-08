/*
DLL pop - Exercise 31

Implement the following on the DoublyLinkedList class

pop

This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.
*/
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.head === null) return undefined;
		const poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	shift() {
		if (this.length === 0) return undefined;
		const shiftedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = shiftedNode.next;
			this.head.prev = null;
			shiftedNode.next = null;
		}
		this.length--;
		return shiftedNode;
	}

	unshift(val) {
		if (this.length === 0) return this.push(val);
		const node = new Node(val);
		this.head.prev = node;
		node.next = this.head;
		this.head = node;
		this.length++;
		return this;
	}

	get(pos) {
		if (pos < 0 || pos >= this.length) return null;
		let current = null;
		if (pos > Math.floor(this.length / 2)) {
			current = this.tail;
			for (let i = this.length - 1; i >= 0; i--) {
				if (pos === i) return current;
				current = current.prev;
			}
		} else {
			current = this.head;
			for (let i = 0; i < this.length; i++) {
				if (pos === i) return current;
				current = current.next;
			}
		}
		return null;
	}

	set(pos, val) {
		const node = this.get(pos);
		if (node === null) return false;
		node.val = val;
		return true;
	}

	remove(pos) {
		if (pos < 0 || pos >= this.length) return undefined;
		if (pos === 0) return this.shift();
		if (pos === this.length - 1) return this.pop();

		const removeNode = this.get(pos);
		const previousNode = removeNode.prev;
		const nextNode = removeNode.next;

		previousNode.next = nextNode;
		nextNode.prev = previousNode;
		removeNode.next = null;
		removeNode.prev = null;

		this.length--;
		return removeNode;
	}
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.prev // null
doublyLinkedList.push(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.tail.val; // 10
doublyLinkedList.head.next.prev.val // 10
doublyLinkedList.push(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 15
doublyLinkedList.tail.prev.val; // 10
doublyLinkedList.head.next.next.val; // 15
 
doublyLinkedList.pop().val; // 15
doublyLinkedList.length; // 2
doublyLinkedList.pop().val; // 10
doublyLinkedList.length; // 1
doublyLinkedList.pop().val; // 5
doublyLinkedList.length; // 0
doublyLinkedList.pop(); // undefined
doublyLinkedList.length; // 0