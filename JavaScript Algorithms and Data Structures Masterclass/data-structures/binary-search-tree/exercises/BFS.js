// Exercise 63

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
}

const tree = new BinarySearchTree();
tree.insert(10).insert(15).insert(5).insert(9);
// console.log(tree.breadthFirstSearch());
// console.log(tree.depthFirstSearchPreOrder());
// console.log(tree.depthFirstSearchPostOrder());
console.log(tree.depthFirstSearchInOrder());
