/*
Binary Search Tree Exercise - Find 2nd largest node
Exercise 65

Write a function on the BinarySearchTree class

insert - accepts a value and inserts it into the BST in the correct position.
The function should return the binary search tree.
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


	findSecondLargest() {
		const data = [];
		if (this.root === null) return undefined;
		function traverse(node) {
			if (node.right) traverse(node.right);
			data.push(node.value);
		}

		traverse(this.root);

		return data[data.length - 1];
	}
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.findSecondLargest()); // 15
