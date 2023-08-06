/* eslint-disable no-magic-numbers */
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

	/**
	 * Add data to the end of the list
	 * @param {any} val
	 * @returns
	 */
	push(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	/**
	 * Pop an item from the end of the list
	 * @returns the item you removed
	 */
	pop() {
		if (this.length === 0) return undefined;
		let current = this.head;
		let previous = current;
		while (current.next) {
			previous = current;
			current = current.next;
		}
		this.tail = previous;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	/**
	 * Remove the head and replace it
	 */
	shift() {
		if (this.length === 0) return undefined;
		const currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) this.tail = null;
		return currentHead;
	}

	/**
	 * Add an item to the start of the list
	 */
	unshift(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	/**
	 * Get an item at a given 'position' in the list
	 */
	get(pos) {
		if (pos < 0 || pos >= this.length || this.length === 0) return undefined;
		let current = this.head;
		for (let i = 0; i <= pos; i++) {
			if (i === pos) return current;
			current = this.head.next;
		}
	}

	/**
	 * Update a value at a given index/position
	 * @param {Data} val
	 * @param {Number} pos
	 */
	set(val, pos) {
		const node = this.get(pos);
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	/**
	 * Insert a node into a given position
	 * @param {Node} node
	 * @param {Number} pos
	 */
	insert(val, pos) {
		// pos not valid
		if (pos < 0 || pos > this.length) return false;

		// Add to the start
		if (pos === 0) return Boolean(this.unshift(val, pos));

		// Add to the end
		if (pos === this.length) return Boolean(this.push(val));

		// Create a new node
		const newNode = new Node(val);

		// Get the previous node
		const previousNode = this.get(pos - 1);

		// Assign the current "pos" node to the
		// next node of the newly created node
		newNode.next = previousNode.next;

		// Assign the newly created node
		// to the next node of the previous node
		previousNode.next = newNode;

		this.length++;
		return true;
	}

	/**
	 * Remove a node from a specific location
	 * @param {Number} pos
	 */
	remove(pos) {
		// pos not valid
		if (pos < 0 || pos >= this.length) return undefined;

		// Pop the last value
		if (pos === this.length - 1) return this.pop();

		// Shift from the start
		if (pos === 0) return this.shift();

		const previousNode = this.get(pos - 1);
		const thisNode = previousNode.next;
		previousNode.next = thisNode.next;
		this.length--;
		return thisNode;
	}

	/**
	 * Reverse the order of the linked list in place
	 */
	reverse() {
		// Get the current head
		let current = this.head;

		// Swap the head and the tail
		this.head = this.tail;
		this.tail = current;

		// Create temp variables for the next and previous node
		let next = null;
		let prev = null;

		// Loop through our nodes
		// and store what the next node is,
		// swap the next and prev,
		// assign the previous to the current node,
		// and then set this node to the next value
		// see gif for explanation
		// https://www.geeksforgeeks.org/reverse-a-linked-list/
		while (current) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		return this;
	}

	/**
	 * Print all items in the list
	 */
	traverse() {
		if (this.length === 0) return console.log('List is empty');
		let current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}

	/**
	 * return all items in the list as an array
	 */
	returnAsArray() {
		if (this.length === 0) return [];
		let current = this.head;
		const arr = [];
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		return arr;
	}
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

// Tests

// Create a new list
const list = new SinglyLinkedList();

// Add some values to it
list.push('hello');
list.push('world');
list.push('my');
list.push('name');
list.push('is');
list.push('kane');

// Print it
list.traverse();
console.log();

// Delete a few entries
list.pop(); // kane
list.pop(); // is

// Print again
list.traverse(); // hello world my name
console.log();

// Delete everything
list.pop(); // name
list.pop(); // my
list.pop(); // world
list.traverse(); // hello
list.pop(); // hello
list.traverse(); // List is empty
list.pop(); // undefined
list.traverse(); // List is empty
list.pop(); // undefined
list.traverse(); // List is empty
console.log();

// Rebuild list
list.push('hello');
list.push('world');
list.push('my');
list.push('name');
list.push('is');
list.push('kane');

// Shift first entry
list.shift(); // hello
console.log(list.returnAsArray()); // world my name is kane
list.shift(); // world
list.shift(); // my
list.shift(); // name
list.shift(); // is
console.log(list.returnAsArray()); // kane
list.shift(); // kane
console.log(list.returnAsArray()); // []
list.shift(); // undefined
console.log(list.returnAsArray()); // []
console.log();

// unshift
list.unshift('hello');
console.log(list.returnAsArray()); // ["hello"]
list.unshift('world');
console.log(list.returnAsArray()); // ["world", "hello"]

// GET
console.log();
console.log(list.get(-1)); // undefined
console.log(list.get(0)); // world
console.log(list.get(1)); // hello
console.log(list.get(2)); // undefined

// SET
console.log(list.set('hello', 0)); // true
console.log(list.returnAsArray()); // [hello, hello]

// Insert
console.log(list.insert('KANE', 1)); // true
console.log(list.returnAsArray()); // [hello, kane, hello]
console.log(list.insert('KANE', -1)); // false
console.log(list.insert('KANE', 5)); // false
console.log(list.insert('KANE', 3)); // true (push to end)
console.log(list.insert('KANE', 0)); // true (unshift)
console.log(list.returnAsArray()); // [kane, hello, kane, hello, kane]

// Remove
console.log(list.remove(0)); // node
console.log(list.returnAsArray()); // [hello, kane, hello, kane]
console.log(list.remove(-1)); // undefined
console.log(list.remove(10)); // undefined
console.log(list.remove(1)); // true
console.log(list.returnAsArray()); // [hello, hello, kane]
console.log(list.remove(2)); // true
console.log(list.returnAsArray()); // [hello, hello]

let numList = new SinglyLinkedList();
numList.push(1);
numList.push(2);
numList.push(3);
numList.push(4);
numList.push(5);
numList.push(6);
numList.reverse();
console.log(numList.returnAsArray()); // [6,5,4,3,2,1]
