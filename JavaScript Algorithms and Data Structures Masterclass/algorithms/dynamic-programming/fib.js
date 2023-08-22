/**
 * Write a recursive function called fib which accepts a number
 * and returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole
 * numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
 * where every number thereafter is equal to the sum of the
 * previous two numbers.
 *
 * @param {Number} num
 */
// function fib(num) {
// 	if (num < 0) return 0;
// 	if (num <= 2) return 1;
// 	return fib(num - 1) + fib(num - 2);
// }


// // Dynamic programming with memoization
// function fib(n, memo=[]) {
// 	if (memo[n] !== undefined) return memo[n];
// 	if (n <= 2) return 1;
// 	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// 	return memo[n];
// }

// Dynamic programming using a tabulated method
function fib(n) {
	if (n <= 2) return 1;
	const fibNums = [undefined, 1, 1];
	for (let i = 3; i <= n; i++)
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];

	return fibNums[n];
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

