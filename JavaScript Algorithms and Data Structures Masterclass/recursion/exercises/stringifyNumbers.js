/* eslint-disable no-magic-numbers */
/**
 * Write a function called stringifyNumbers which takes in an object
 * and finds all of the values which are numbers and converts them
 * to strings. Recursion would be a great way to solve this!
 *
 * @param {Object} obj
 */
function stringifyNumbers(obj) {
	// Default start type
	const newObj = Array.isArray(obj) ? [] : {};

	function stringifyIfNumber(subObj) {
		if (typeof subObj === 'number') return subObj.toString();
		if (typeof subObj === 'object') return stringifyNumbers(subObj);
		return subObj;
	}

	for (const key in obj)
		newObj[key] = stringifyIfNumber(obj[key]);

	return newObj;
}

const obj = {
	num: 1,
	test: [1, 2, 3],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66
		}
	}
};

console.log(stringifyNumbers(obj)); // 6

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
