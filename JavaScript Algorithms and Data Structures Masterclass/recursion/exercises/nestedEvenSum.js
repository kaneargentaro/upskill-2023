/* eslint-disable no-magic-numbers */
/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object
 * which may contain nested objects.
 *
 * @param {Object} obj
 */
function nestedEvenSum(obj) {
	let sum = 0;
	const val = Object.values(obj);

	// Inner recursive helper function
	function helper(input) {
		// Break case
		if (input.length === 0) return;

		// Add even numbers
		if (typeof input[0] === 'number' && input[0] % 2 === 0) sum += input[0];
		else if (typeof input[0] === 'object') helper(Object.values(input[0]));

		// Remove one from the list and go again
		helper(input.slice(1));
	}

	// Call the helper
	helper(val);

	return sum;
}

const obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup'
		}
	}
};

const obj2 = {
	a: 2,
	b: {b: 2, bb: {b: 3, bb: {b: 2}}},
	c: {c: {c: 2}, cc: 'ball', ccc: 5},
	d: 1,
	e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
