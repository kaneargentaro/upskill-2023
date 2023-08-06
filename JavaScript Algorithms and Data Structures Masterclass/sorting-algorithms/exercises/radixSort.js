/*
	Radix Sort
	Exercise 55

	Finally, you're ready to implement Radix Sort! Write a function called radixSort
	which accepts an array of numbers and sorts them in ascending order.
*/
function getDigit(num, pos) {
	const str = num.toString();
	const digit = str[str.length - 1 - pos];
	if (digit === undefined) return 0;
	return parseInt(digit);
}

function digitCount(num) {
	return num.toString().length;
}

function mostDigits(nums) {
	if (nums.length === 0) return 0;

	let highestCount = 0;

	for (const num of nums) {
		const digits = digitCount(num);
		if (digits > highestCount) highestCount = digits;
	}

	return highestCount;
}

function radixSort(arr) {
	let maxDigitsCount = mostDigits(arr);

	for (let i = 0; i < maxDigitsCount; i++) {
		const digitBuckets = Array.from({length: 10}, () => []);
		for (const num of arr)
			digitBuckets[getDigit(num, i)].push(num);
		arr = [].concat(...digitBuckets);
	}

	return arr;
}

// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1
// console.log(getDigit(12345, 5)); // 0
// console.log(getDigit(8987, 0)); // 7
// console.log(getDigit(8987, 1)); // 8
// console.log(getDigit(8987, 2)); // 9
// console.log(getDigit(8987, 3)); // 8
// console.log(getDigit(8987, 4)); // 0

// console.log(digitCount(1)); // 1
// console.log(digitCount(9)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3
// console.log(digitCount(1234)); // 4
// console.log(digitCount(77777)); // 5

// console.log(mostDigits([1, 9, 10, 100, 99])); // 3
// console.log(mostDigits([100, 1010, 1, 500])); // 4
// console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
// console.log(mostDigits([])); // 0

console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
