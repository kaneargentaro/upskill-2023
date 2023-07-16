/**
 * Frequency Counter / Multiple Pointers - areThereDuplicates
 * 
 * Implement a function called, areThereDuplicates which accepts a variable number 
 * of arguments, and checks whether there are any duplicates among the arguments passed in.  
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * 
 * Examples:
 *      areThereDuplicates(1, 2, 3) // false
 *      areThereDuplicates(1, 2, 2) // true 
 *      areThereDuplicates('a', 'b', 'c', 'a') // true 
 * 
 * Restrictions:
 *      Time - O(n)
 *      Space - O(n)
 * 
 * Bonus:
 *      Time - O(n log n)
 *      Space - O(1)
 */
const { testPassed, testFailed } = require('./log')

// /**
//  * Use frequency counter
//  * 
//  * Making the bold assumption that there are no:
//  *      - white spaces
//  *      - null input
//  *      - nested array, etc
//  * 
//  * @param  {...any} args - Array of arguments
//  */
// function areThereDuplicates(...args) {

//     // Technically there are no duplicate values if
//     // there is no value, or only 1 value.
//     if (args.length <= 1) return false;

//     // Get the frequency count of each entry
//     // Input will be an array of arguments
//     let frequencyCounter = {}
//     for (let entry of args) {

//         // Ensure it's a string and it's lowercase
//         let sanitisedEntry = entry.toString().toLowerCase();

//         // Add 1 to our frequency counter for this entry
//         frequencyCounter[sanitisedEntry] = (frequencyCounter[sanitisedEntry] || 0) + 1

//         // If this entry has 2 counts then it's a duplicate
//         if (frequencyCounter[sanitisedEntry] === 2)
//             return true

//     }

//     // No duplicate
//     return false;
// }

/**
 * Use Multiple Pointers
 * 
 * Making the bold assumption that there are no:
 *      - white spaces
 *      - null input
 *      - nested array, etc
 * 
 * @param  {...any} args - Array of arguments
 */
function areThereDuplicates(...args) {

    // Technically there are no duplicate values if
    // there is no value, or only 1 value.
    if (args.length <= 1) return false;

    // Sort the array
    let sortedArray = args.sort();

    // Establish our pointers
    let start = 0;
    let next = 1;

    // Go through and see if there are any duplicates
    for (next; next < sortedArray.length; next++) {

        // Duplicate entry detected
        if (sortedArray[start] === sortedArray[next]) 
            return true;
        
        // Move to the next pair
        start = next;
    }

    // No duplicates
    return false;
}


/** Test cases */
// Test 1 - No duplicates
if (areThereDuplicates(1, 2, 3) === false) testPassed(1);
else testFailed(1);

// Test 2 - Duplicate number
if (areThereDuplicates(1, 2, 2) === true) testPassed(2);
else testFailed(2);

// Test 3 - Duplicate letters
if (areThereDuplicates('a', 'b', 'c', 'a') === true) testPassed(3);
else testFailed(3);
