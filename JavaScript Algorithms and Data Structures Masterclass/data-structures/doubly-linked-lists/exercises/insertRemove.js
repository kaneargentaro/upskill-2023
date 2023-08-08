/*
 Doubly Linked Lists insert / remove - Exercise 33

Implement the following on the DoublyLinkedList class

insert

This internal/helper function should insert a node at a specified index
 in a DoublyLinkedList. It should return true if the index is valid, and
 false if the index is invalid (less than 0 or greater than the length
	of the list).

remove

This function should remove a node at a specified index in a DoublyLinkedList.
It should return the removed node. if the index is valid, or undefined if the
index is invalid.
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

	insert(pos, val) {
		if (pos < 0 || pos >= this.length) return false;
		if (pos === 0) return Boolean(this.unshift(val));
		if (pos === this.length) return Boolean(this.push(val));

		const thisNode = new Node(val);
		const previousNode = this.get(pos - 1);
		const nextNode = previousNode.next;

		thisNode.next = nextNode;
		thisNode.prev = previousNode;
		previousNode.next = thisNode;
		nextNode.prev = thisNode;

		this.length++;
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

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.insert(2, 12); // true
doublyLinkedList.insert(100, 12); // false
doublyLinkedList.length; // 5
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.head.next.next.val; // 12
doublyLinkedList.head.next.next.next.val; // 15
doublyLinkedList.head.next.next.next.next.val; // 20

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.remove(2).val; // 15
doublyLinkedList.remove(100); // undefined
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.head.next.next.val; // 20
