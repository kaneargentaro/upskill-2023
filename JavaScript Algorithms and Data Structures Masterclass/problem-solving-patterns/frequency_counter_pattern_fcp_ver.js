/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second array.
 * The frequency of the values must be the same.
 */

/**
 * Frequency Counter
 *
 * O(n) instead of O(n^2)
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function same(arr1, arr2) {
	// Arrays need to be the same length otherwise the frequency will be incorrect
	if (arr1.length !== arr2.length) return false;

	// Count how many times each number occurs in each array
	const frequencyCounter1 = {};
	const frequencyCounter2 = {};
	for (const val of arr1) {
		// if (frequencyCounter1[val])
		//     frequencyCounter1[val] += 1;
		// else
		//     frequencyCounter1[val] = 0;
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}

	for (const val of arr2) {
		// if (frequencyCounter2[val])
		//     frequencyCounter2[val] += 1;
		// else
		//     frequencyCounter2[val] = 0;
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	// Loop through our lists and make sure the values match
	for (const key in frequencyCounter1) {
		// If arr1 value squared is not in the arr2, exit
		if (!(key ** 2 in frequencyCounter2)) return false;

		// If arr1 value squared is in arr2, then check if the value (occurences) are the same
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
	}

	// All conditions are met, return true.
	return true;
}

// True because they match
console.log(same([1, 2, 3], [1, 4, 9]));

// False beacuse arr lengths don't match
console.log(same([1, 2, 3, 6], [1, 4, 9]));

// True even though order is out of place
console.log(same([1, 2, 3], [9, 4, 1]));

// False, one value wrong
console.log(same([1, 2, 3], [1, 4, 5]));

