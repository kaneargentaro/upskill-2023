/* eslint-disable no-negated-condition */
/* eslint-disable curly */
/*
Binary Search Tree - remove Exercise

Implement the following function on the BinarySearchTree.prototype.
insert is implemented to help with testing.

remove

This function should remove a node from a binary search tree. Your remove
function should be able to handle removal of the root node, removal of a
node with one child and removal of a node with two children. The function
should return the node removed.
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

	remove(value) {
		let deletedNode;
		function deleteNode(root, value) {
			if (root === null) return root;
			else if (value > root.value) root.right = deleteNode(root.right, value);
			else if (value < root.value) root.left = deleteNode(root.left, value);
			else { // if node is found
				if (deletedNode === undefined) deletedNode = root.value;
				// case 1: no children (leaf)
				if (root.left === null && root.right === null) {
					root = null;
				}

				// case 2: 1 child
				else if (root.left === null) { // right child
					root = root.right;
				} else if (root.right === null) { // left child
					root = root.left;
				}

				// case 3: 2 children
				else {
					const temp = min(root.right); // assign a root to min in a right subtree
					root.value = temp.value;
					root.right = deleteNode(root.right, root.value);
				}
			}
			return root;
		}

		function min(root) {
			if (root === null) return root;
			if (root.left) return min(root.left);
			return root;
		}

		this.root = deleteNode(this.root, value);
		return deletedNode;
	}
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.
	insert(15).
	insert(20).
	insert(10).
	insert(12).
	insert(1).
	insert(5).
	insert(50);
binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.right.right); // null

binarySearchTree.remove(5);
console.log(binarySearchTree.root.left.left.value); // 1
console.log(binarySearchTree.root.left.left.right); // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree.
	insert(15).
	insert(20).
	insert(10).
	insert(12).
	insert(1).
	insert(5).
	insert(50);

binarySearchTree.remove(1);
console.log(binarySearchTree.root.left.left.value); // 5
console.log(binarySearchTree.root.left.left.left); // null
console.log(binarySearchTree.root.left.left.right); // null

binarySearchTree.remove(20);
console.log(binarySearchTree.root.right.value); // 50
console.log(binarySearchTree.root.right.right); // null
console.log(binarySearchTree.root.right.left); // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree.
	insert(15).
	insert(20).
	insert(10).
	insert(12).
	insert(1).
	insert(5).
	insert(50).
	insert(60).
	insert(30).
	insert(25).
	insert(23).
	insert(24).
	insert(70);

binarySearchTree.remove(10);
console.log(binarySearchTree.root.left.value); // 12
console.log(binarySearchTree.root.left.left.value); // 1
console.log(binarySearchTree.root.left.left.right.value); // 5

binarySearchTree.remove(50);
console.log(binarySearchTree.root.right.value); // 20
console.log(binarySearchTree.root.right.right.value); // 60
console.log(binarySearchTree.root.right.right.left.value); // 30

var binarySearchTree = new BinarySearchTree();
binarySearchTree.
	insert(22).
	insert(49).
	insert(85).
	insert(66).
	insert(95).
	insert(90).
	insert(100).
	insert(88).
	insert(93).
	insert(89);

binarySearchTree.remove(85);
console.log(binarySearchTree.root.right.right.value); // 88
console.log(binarySearchTree.root.right.right.right.left.left.value); // 89
