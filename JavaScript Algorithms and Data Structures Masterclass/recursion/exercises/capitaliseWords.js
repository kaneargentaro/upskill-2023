/* eslint-disable no-magic-numbers */
/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words, return a new array
 * containing each word capitalized.
 *
 * @param {String[]} arr
 */
function capitalizeWords(arr) {
	const result = [];
	if (arr.length === 0) return arr;
	result.push(arr[0].toUpperCase());
	return result.concat(capitalizeWords(arr.splice(1)));
}

const words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
