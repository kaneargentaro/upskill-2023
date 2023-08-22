/**
 * Dynamic Programming - Coin Change
 *
 * Write a function called coinChange which accepts two parameters:
 * an array of denominations and a value. The function should return
 * the number of ways you can obtain the value from the given collection of
 * denominations. You can think of this as figuring out the number of ways
 * to make change for a given value from a supply of coins.
 *
 * https://www.geeksforgeeks.org/understanding-the-coin-change-problem-with-dynamic-programming/
 */

function coinChange(coins, value) {
	if (value === 0) return 0;

	// How many times we can make the index of the array
	// using the current coins we have.
	// We can make index 0 - 1 time by default.
	const combinations = Array(value + 1).fill(0);
	combinations[0] = 1;

	// Loop through our coins to calculate the combinations
	for (let i = 0; i < coins.length; i++) {
		for (let j = 1; j <= value; j++)
			if (coins[i] <= j) combinations[j] = combinations[j - coins[i]] + combinations[j];
	}

	return combinations[combinations.length - 1];
}

const denominations = [1, 5, 10, 25];

console.log(coinChange(denominations, 1)); // 1
console.log(coinChange(denominations, 2)); // 1
console.log(coinChange(denominations, 5)); // 2
console.log(coinChange(denominations, 10)); // 4
console.log(coinChange(denominations, 25)); // 13
console.log(coinChange(denominations, 45)); // 39
console.log(coinChange(denominations, 100)); // 242
console.log(coinChange(denominations, 145)); // 622
console.log(coinChange(denominations, 1451)); // 425663
console.log(coinChange(denominations, 14511)); // 409222339
