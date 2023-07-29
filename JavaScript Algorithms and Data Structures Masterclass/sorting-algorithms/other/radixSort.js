/* eslint-disable no-magic-numbers */

/**
 * Gets the digit at a given position.
 *
 * Pos is the position from the right-most side of the number.
 *
 * @param {Number} num
 * @param {Number} pos
 */
function getDigit(num, pos) {
	const str = num.toString();
	const digit = str[str.length - 1 - pos];
	if (digit === undefined) return 0;
	return parseInt(digit);
}

/**
 * How many digits are in a number
 *
 * @param {Number} num
 * @returns {Number} number of digits
 */
function digitCount(num) {
	return num.toString().length;
}

/**
 * Given an array of numbers, returns the number of
 * digits in the largest numbers in the list.
 *
 * @param {Number[]} arr
 */
function mostDigits(nums) {
	let highestCount = 0;

	if (nums.length === 0) return highestCount;

	for (const num of nums) {
		const digits = digitCount(num);
		if (digits > highestCount) highestCount = digits;
	}

	return highestCount;
}

/**
 * Pseudocode:
 *  Define a function that accepts a list of numbers
 *  Figure out how many digits the largest number has
 *  Loop through k=0 up to the largest number of the digits
 *  For each iteration of the loop
 *      Create a bucket for each digit (0-9)
 *      Place each number in the corresponding bucket based on it's kth digit
 *  Replace our existing array with values in our buckets, starting with 0 and going up to 9.
 *  Return the list
 *
 * @param {Number[]} nums
 */
function radixSort(nums) {
	const maxDigitCount = mostDigits(nums);

	for (let i = 0; i < maxDigitCount; i++) {
		const digitBuckets = Array.from({length: 10}, () => []);
		for (const num of nums)
			digitBuckets[getDigit(num, i)].push(num);
		nums = [].concat(...digitBuckets);
	}

	return nums;
}

// console.log(getDigit(12345, 0));
// console.log(digitCount(1));
// console.log(digitCount(345));
// console.log(mostDigits([1234, 56, 3])); // 4
// console.log(mostDigits([1, 1, 11111, 1])); // 5
// console.log(mostDigits([13, 34, 56, 78])); // 2
console.log(radixSort([19, 37847, 1513, 523, 3, 9, 39]));
