/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second array.
 * The frequency of the values must be the same.
 */

/**
 * Naive way of doing it
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function same(arr1, arr2) {
    // Arrays need to be the same length otherwise the frequency will be incorrect
    if (arr1.length !== arr2.length)
        return false;

    for (let i = 0; i < arr1.length; i++) {
        // Check to see if the value of the current element of array1 squared is somewhere in array2.
        // If the returned index !== -1, then its in there.
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1)
            return false;

        // Remove the entry from array2 so we can ensure the frequency of the values are the same
        arr2.splice(correctIndex, 1);
    }

    // All conditions are met, return true.
    return true;
}

// True because they match
console.log(same([1, 2, 3], [1, 4, 9]));

// False beacuse arr lengths don't match
console.log(same([1, 2, 3, 6], [1, 4, 9]));

// True even though order is out of place
console.log(same([1, 2, 3], [9, 4, 1]));

// False, one value wrong
console.log(same([1, 2, 3], [1, 4, 5]));

