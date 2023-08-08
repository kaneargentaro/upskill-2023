/*
	DLL reverse - Exercise 34

	reverse

	This function should reverse all of the nodes in a
	DoublyLinkedList, and should return the list.
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

	reverse() {
		if (this.length === 0) return undefined;

		let current = this.head;
		this.head = this.tail;
		this.tail = current;

		let next = null;
		let prev = null;

		while (current) {
			next = current.next;
			current.next = prev;
			current.prev = next;
			prev = current;
			current = next;
		}

		return this;
	}
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.reverse()); // singlyLinkedList;
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.head.next.val); // 15
console.log(doublyLinkedList.head.next.next.val); // 10
console.log(doublyLinkedList.head.next.next.next.val); // 5
