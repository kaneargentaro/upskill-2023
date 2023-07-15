/**
 * Implement a function called countUniqueValues, which accepts
 * a sorted array, and counts the unique values in the array. There 
 * can be negative numbers in the array, but it will always be sorted.
 */


/**
 * Attempting the exercise before the tutor goes over it.
 *  
 * Paused video at 1min.
 * 
 * @param {*} arr 
 * @returns 
 */
function countUniqueValues(arr) {
    
    // Unique Counter
    let counter = 0;

    // Pointers
    let start = 0;
    let next = 1;

    // Loop through all entries until the next point reaches the end
    while (next <= arr.length) {
        
        // If this entry is unique:
        //      Move the starting position to the next unique value
        //      Move the next value one space up the arr
        //      Add to our unique counter
        // Otherwise:
        //      Increment the next value so we can keep trying
        if (arr[start] !== arr[next]) {
            start = next; 
            next++; 
            counter++;
        } else {
            next++;
        }

    }

    // Return the unique values
    return counter;
}

/**
 * Teachers example
 * 
 * Rebuild the array like this
 * [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] => [1, 2, 3, 4, 7, 12, 13, x, x, x, x]
 * 
 * then return the length that we figure out from i
 */
function countUniqueValues1(arr) {
    if (arr.length === 0) 
        return 0
    let i = 0;
    for (let j = 1; j < arr.length; j++ ) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]; 
        } 
    }
    return i + 1;
}

if (countUniqueValues([1, 1, 1, 1, 1, 2]) === 2) 
    console.log("test 1 passed");

if (countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7) 
    console.log("test 2 passed");

if (countUniqueValues([]) === 0) 
    console.log("test 3 passed");

if (countUniqueValues([-2, -1, -1, 0, 1]) === 4) 
    console.log("test 4 passed");
