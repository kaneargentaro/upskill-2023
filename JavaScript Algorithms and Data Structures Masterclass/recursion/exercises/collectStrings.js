/* eslint-disable no-magic-numbers */
/**
 *  Write a function called collectStrings which accepts an object
 *  and returns an array of all the values in the object that have a typeof string
 *
 * @param {Object} obj
 */
function collectStrings(obj) {
	const result = [];
	const values = Object.values(obj);

	function findStrings(arr) {
		if (arr.length === 0) return;
		if (typeof arr[0] === 'string') result.push(arr[0]);
		else if (typeof arr[0] === 'object') findStrings(Object.values(arr[0]));
		findStrings(arr.slice(1));
	}

	findStrings(values);

	return result;
}

const obj = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz'
					}
				}
			}
		}
	}
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
