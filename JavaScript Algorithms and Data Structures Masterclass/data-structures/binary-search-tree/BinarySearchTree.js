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
}

const tree = new BinarySearchTree();
tree.insert(10).insert(15).insert(5).insert(9);

console.log(tree.find(5));
console.log(tree.find(844));
console.log(tree.find(10));
console.log(tree.find(15));
console.log(tree.find(9));

