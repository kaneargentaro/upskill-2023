/**
 *
 * @param {Number[]} arr
 */
function bubbleSort(arr) {
	let noSwaps = false;

	// Work from the end and work our way down because the
	// last element is sorted and we don't need to resort it each loop
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			noSwaps = true;
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}

		// If no values are swapped, then break out
		// Arr has been sorted. If we don't break, it'll keep
		// executing unnecessarily.
		if (noSwaps) break;
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

console.log('bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);:', bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('bubbleSort([10, 15, 50, 1, 70, 2, 99, 842147524, 0]);:', bubbleSort([10, 15, 50, 1, 70, 2, 99, 842147524, 0]));
console.log('bubbleSort([]);:', bubbleSort([]));
