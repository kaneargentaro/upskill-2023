/*
	Radix Sort Helper - mostDigits
	Exercise 54

	Implement a function called mostDigits
	which accepts an array of integers and returns
	a count of the number of digits for the number in
	the array with the most digits.

	It may help to use your digitCount  code from the
	previous exercise in this function.
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

	for (let num of nums) {
		const digits = digitCount(num);
		if (digits > highestCount) highestCount = digits;
	}

	return highestCount;
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

console.log(mostDigits([1, 9, 10, 100, 99])); // 3
console.log(mostDigits([100, 1010, 1, 500])); // 4
console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
console.log(mostDigits([])); // 0
