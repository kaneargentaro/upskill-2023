/* eslint-disable no-magic-numbers */
/**
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first
 * letter of each string in the array.
 *
 * @param {String[]} arr
 */
function capitaliseFirst(arr) {
	const result = [];
	if (arr.length === 0) return arr;
	result.push(arr[0].substring(0, 1).toUpperCase() + arr[0].substring(1));
	return result.concat(capitaliseFirst(arr.splice(1)));
}

console.log(capitaliseFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

