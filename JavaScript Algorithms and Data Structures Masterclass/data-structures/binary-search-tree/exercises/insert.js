/*
Binary Search Tree - insert Exercise 60

Write a function on the BinarySearchTree class

insert - accepts a value and inserts it into the BST in
the correct position. The function should return the binary
*/

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const node = new Node(value);

		if (this.root === null) {
			this.root = node;
			return this;
		}

		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = node;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = node;
					return this;
				}
				current = current.right;
			}
		}
	}
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.root.value); // 15
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.left.right.value); // 12

var binarySearchTree = new BinarySearchTree();
binarySearchTree.
	insert(15).
	insert(20).
	insert(10).
	insert(12);
console.log(binarySearchTree.root.value); // 15
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.left.right.value); // 12
