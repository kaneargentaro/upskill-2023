/*
Binary Search Tree Exercise 66 - Check if balanced

Write a function on the BinarySearchTree class

isBalanced - returns true if the BST is balanced, otherwise returns false.

A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.
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

	find(value) {
		if (this.root === null) return false;
		let current = this.root;
		let found = false;
		while (current && !found) {
			if (value < current.value) current = current.left;
			else if (value > current.value) current = current.right;
			else found = true;
		}
		if (!found) return undefined;
		return current;
	}

	contains(value) {
		if (this.root === null) return false;
		let current = this.root;
		while (current) {
			if (value < current.value) current = current.left;
			else if (value > current.value) current = current.right;
			else return true;
		}
		return false;
	}

	breadthFirstSearch() {
		const queue = [];
		const data = [];
		let node = this.root;

		if (node === null) return [];

		queue.push(node);

		while (queue.length !== 0) {
			node = queue.shift();
			data.push(node.value);
			if (node.left !== null) queue.push(node.left);
			if (node.right !== null) queue.push(node.right);
		}

		return data;
	}

	depthFirstSearchPreOrder() {
		const data = [];

		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return data;
	}

	depthFirstSearchPostOrder() {
		const data = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}

		traverse(this.root);

		return data;
	}

	depthFirstSearchInOrder() {
		const data = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return data;
	}

	getDepth(node = this.root) {
		if (!node) return 0;
		return Math.max(this.getDepth(node.left) + 1, this.getDepth(node.right) + 1);
	}

	isBalanced() {
		return Math.abs(this.getDepth(this.root.right) - this.getDepth(this.root.left)) <= 1;
	}
}


const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.isBalanced()); // true

const binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(6);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(7);
console.log(binarySearchTree2.isBalanced()); // false
