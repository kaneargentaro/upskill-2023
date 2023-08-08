/*
DLL get - Exercise 32

Implement the following on the DoublyLinkedList.prototype

get

This internal/helper function should find a node at a 
specified index in a DoublyLinkedList. It should return the found node.
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

	unshift(val) {
		if (this.length === 0) return this.push(val);
		const node = new Node(val);
		this.head.prev = node;
		node.next = this.head;
		this.head = node;
		this.length++;
		return this;
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
}

var doublyLinkedList = new DoublyLinkedList();
     
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.get(0).val // 5
doublyLinkedList.get(1).val // 10
doublyLinkedList.get(2).val // 15
doublyLinkedList.get(3).val // 20
doublyLinkedList.get(4) // null