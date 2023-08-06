/*
	Frequency Counter - findAllDuplicates
	Exercise 79

	Given an array of positive integers, some elements appear twice and others
	appear once. Find all the elements that appear twice in this array. Note that
	you can return the elements in any order.
*/
function findAllDuplicates(arr) {
	if (arr.length <= 1) return [];

	const frequencyCounter = {};
	const duplicates = [];
	for (const num of arr) {
		if (frequencyCounter[num]) duplicates.push(num);
		else frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
	}

	return duplicates;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
