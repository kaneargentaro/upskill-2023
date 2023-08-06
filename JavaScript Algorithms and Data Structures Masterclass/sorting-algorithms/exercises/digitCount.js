/*
	Radix Sort Helper - digitCount
	Exercise 53

	Implement a function called digitCount
	which accepts a positive integer and returns
	the number of digits that the integer has.
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

console.log(digitCount(1)); // 1
console.log(digitCount(9)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3
console.log(digitCount(1234)); // 4
console.log(digitCount(77777)); // 5
