class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	hash(key) {
		let total = 0;
		const WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const char = key[i];
			const value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		const index = this.hash(key);
		if (!this.keyMap[index]) this.keyMap[index] = [];
		this.keyMap[index].push([key, value]);
	}

	get(key) {
		const index = this.hash(key);
		if (this.keyMap[index]) {
			const chain = this.keyMap[index];
			for (let i = 0; i < chain.length; i++)
				if (chain[i][0] === key) return chain[i][1];
		}
		return undefined;
	}

	keys() {
		const keys = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++)
					if (!keys.includes(this.keyMap[i][j][0])) keys.push(this.keyMap[i][j][0]);
			}
		}
		return keys;
	}

	values() {
		const values = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++)
					if (!values.includes(this.keyMap[i][j][1])) values.push(this.keyMap[i][j][1]);
			}
		}
		return keys;
	}
}

const ht = new HashTable();
ht.set('hi', 'lol1');
ht.set('hello', 'lol2');
ht.set('p23', 'lol3');
ht.set('jaac', 'lol4');

// console.log(ht.get('hi'));
console.log(ht.keys());
console.log(ht.values());
