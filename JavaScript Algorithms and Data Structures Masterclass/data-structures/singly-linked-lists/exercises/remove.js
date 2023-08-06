/**
 * SLL - remove Exercise 46

Implement the following on the SinglyLinkedList class

remove

This function should remove a node at a specified index
in a SinglyLinkedList. It should return the removed node.
if the index is valid, or undefined if the index is invalid.
 */


class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(val) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

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

	remove(pos) {
		if (pos < 0 || pos >= this.length) return undefined;
		let current = this.head;
		let previous = this.head;
		for (let i = 0; i <= pos; i++) {
			if (i === pos) {
				previous.next = current.next;
				this.length--;
				return current;
			}
			previous = current;
			current = current.next;
		}
		return undefined;
	}
}


const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.remove(2).val); // 15
console.log(singlyLinkedList.remove(100)); // undefined
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 20
