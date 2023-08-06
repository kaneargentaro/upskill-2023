/*
	Radix Sort Helper - getDigit
	Exercise 52

	Implement a function called getDigit  which accepts a positive integer
	and a position, and returns the digit in that number at the given position.
	The position reads from right to left, so the 0th position corresponds to
	the rightmost digit.
*/

function getDigit(num, pos) {
	const str = num.toString();
	const digit = str[str.length - 1 - pos];
	if (digit === undefined) return 0;
	return parseInt(digit);
}

console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(12345, 5)); // 0
console.log(getDigit(8987, 0)); // 7
console.log(getDigit(8987, 1)); // 8
console.log(getDigit(8987, 2)); // 9
console.log(getDigit(8987, 3)); // 8
console.log(getDigit(8987, 4)); // 0
