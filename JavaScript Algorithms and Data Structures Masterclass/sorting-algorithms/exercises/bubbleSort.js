/* eslint-disable no-magic-numbers */
/**
Bubble Sort
Exercise 44

ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort.
Given an array, bubbleSort will sort the values in the array. The function
takes 2 parameters: an array and an optional comparator function.

    function bubbleSort(arr, comparator) {
      if (typeof comparator !== 'function') {
        // provide a default
      }
    }

The comparator function is a callback that will take two values from the
array to be compared. The function returns a negative value if the first
value is less than the second, a positive value if the first value is greater
than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters
are numbers and that we are sorting the values from smallest to largest.

Bubble sort is an O(n^2) algorithm. You can read more about it here:
https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms
 */

/**
 *
 * @param {Number[]} arr
 * @param {Number} index1
 * @param {Number} index2
 */
function swap(arr, index1, index2) {
	const temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

/**
 *
 * @param {Number[]} arr
 * @param {Function} comparator
 */
function bubbleSort(arr, comparator) {
	if (arr.length === 0) return arr;
	let noSwaps = false;

	if (typeof comparator !== 'function') {
		comparator = function(num1, num2) {
			if (num1 > num2) return 1;
			else if (num1 < num2) return -1;
			return 0;
		};
	}

	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (comparator(arr[j], arr[j + 1]) > 0) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(JSON.stringify(bubbleSort([4, 20, 12, 10, 7, 9])) === JSON.stringify([4, 7, 9, 10, 12, 20])); // [4, 7, 9, 10, 12, 20]
console.log(JSON.stringify(bubbleSort([0, -10, 7, 4])) === JSON.stringify([-10, 0, 4, 7])); // [-10, 0, 4, 7]
console.log(JSON.stringify(bubbleSort([1, 2, 3])) === JSON.stringify([1, 2, 3])); // [1, 2, 3]
console.log(JSON.stringify(bubbleSort([])) === JSON.stringify([]));

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
	if (a < b) return -1; else if (a > b) return 1;
	return 0;
}

console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

const moarKittyData = [{
	name: 'LilBub',
	age: 7
}, {
	name: 'Garfield',
	age: 40
}, {
	name: 'Heathcliff',
	age: 45
}, {
	name: 'Blue',
	age: 1
}, {
	name: 'Grumpy',
	age: 6
}];

function oldestToYoungest(a, b) {
	return b.age - a.age;
}

console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
