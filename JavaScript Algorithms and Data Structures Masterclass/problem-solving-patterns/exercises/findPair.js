/*
	Frequency Counter / Multiple Pointer - findPair
	Exercise 80

	Given an unsorted array and a number n, find if there
	exists a pair of elements in the array whose difference
	is n. This function should return true if the pair exists
	or false if it does not.

	Part 1 - solve this with the following requirements:
		Time Complexity Requirement - O(n)
		Space Complexity Requirement - O(n)

	Part 2 - solve this with the following requirements:
		Time Complexity Requirement - O(n log n)
		Space Complexity Requirement - O(1)
*/
function findPair(arr, n) {
	if (arr.length <= 1) return false;

	let left = 0;
	let right = left + 1;

	while (left < arr.length - 1) {
		if (arr[left] - arr[right] === n || arr[right] - arr[left] === n) return true;
		if (right < arr.length - 1) {
			right++;
		} else {
			left++;
			right = left + 1;
		}
	}

	return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
