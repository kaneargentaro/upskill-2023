/**
 *
 * @param {Number[]} arr
 */
function selectionSort(arr) {
	// Loop through each value
	for (let i = 0; i < arr.length; i++) {
		// Store the smallest value's index
		let smallestValueIndex = i;

		// Loop through the list and try and find a smaller value
		// then our current smallestValueIndex
		for (let j = i + 1; j < arr.length; j++)
			if (arr[smallestValueIndex] > arr[j]) smallestValueIndex = j;


		// Perform a swap if we found a smaller value
		if (smallestValueIndex !== i) swap(arr, i, smallestValueIndex);
	}

	return arr;
}

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

console.log('selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);:', selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('selectionSort([10, 15, 50, 1, 70, 2, 99, 842147524, 0]);:', selectionSort([10, 15, 50, 1, 70, 2, 99, 842147524, 0]));
console.log('selectionSort([]);:', selectionSort([]));
