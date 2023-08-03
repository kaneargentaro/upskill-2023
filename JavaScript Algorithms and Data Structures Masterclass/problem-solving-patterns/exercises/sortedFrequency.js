/*
Divide and Conquer - sortedFrequency

Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

    sortedFrequency([1,1,2,2,2,2,3],2) // 4
    sortedFrequency([1,1,2,2,2,2,3],3) // 1
    sortedFrequency([1,1,2,2,2,2,3],1) // 2
    sortedFrequency([1,1,2,2,2,2,3],4) // -1

Time Complexity - O(log n)
*/

function sortedFrequency(array, element) {
	let count = 0;

	function helper(array) {
		if (array.length <= 1) {
			if (array[0] === element) count++;


			return;
		}

		const mid = Math.floor(array.length / 2);

		helper(array.slice(0, mid));

		helper(array.slice(mid));
	}

	helper(array);

	return count === 0 ? -1 : count;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1


