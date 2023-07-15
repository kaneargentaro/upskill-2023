/**
 * Given two strings, write a function to determine if the second string is an anagram of 
 * the first. An anagram is a word, phrase, or name formed by rearranging the letters
 * of another, such as cinema, formed from iceman.
 */

/**
 * Original attempt
 */
function validAnagram(str1, str2) {
    
    // Must be the same length otherwise it's not an anagram
    if (str1.length !== str2.length ) 
        return false;
    

    // Sanitise input
    str1 = str1.toString().toLowerCase();
    str2 = str2.toString().toLowerCase();

    // Convert to arrays
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');

    // count frequency of each char in the array
    const frequencyCounter1 = {};
    for (let char of str1Arr) 
        frequencyCounter1[char] = (frequencyCounter1[char]|| 0) + 1;
    

    const frequencyCounter2 = {};
    for (let char of str2Arr) 
        frequencyCounter2[char] = (frequencyCounter2[char]|| 0) + 1;
        
    // compare frequency against other
    // eg. freq 1 { a: 2, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1 }
    // eg. freq 2 { a: 1, b: 2, c: 1, d: 1, e: 1, f: 1, z: 1 }
    for (let char in frequencyCounter1) {
        if (frequencyCounter1[char] !== frequencyCounter2[char]) 
            return false;
    }

    // It's an anagram
    return true;
}

/**
 * Do it again but this time only use one frequency counter instead of two?
 * 
 * Note: I thought he mentioned to 'try' and do it this way, but its less efficient imo
 * 
 * In the video he said to assume that:
 *  - It's always a lower case string
 *  - single string (no spaces)
 *  - no special characters
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
function validAnagram2(str1, str2) {
    
    // Must be the same length otherwise it's not an anagram
    if (str1.length !== str2.length ) 
        return false;

    // Sanitise input
    // Not necessary for the given task but leaving it in anyway. I could check if typeof is string too
    // and check for null
    str1 = str1.toString().toLowerCase();
    str2 = str2.toString().toLowerCase();

    // Convert to arrays
    const str1Arr = str1.split('');
    let str2Arr = str2.split('');

    // count frequency of each char in the array
    const frequencyCounter1 = {};
    for (let char of str1Arr) 
        frequencyCounter1[char] = (frequencyCounter1[char]|| 0) + 1;
    
    // Only use one frequency counter
    // const frequencyCounter2 = {};
    // for (let char of str2Arr) 
    //     frequencyCounter2[char] = (frequencyCounter2[char]|| 0) + 1;
    
    // // compare frequency counter against the Array String
    // // eg. freq 1 { a: 2, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1 }
    // // eg. array = [a, b, a, c, d, e, f, g]
    // for (let char in frequencyCounter1) {

    //     for (let i = 0; i < frequencyCounter1[char]; i++) {

    //         // Get the first position of the char in the array
    //         let indexOfChar = str2Arr.indexOf(char);

    //         // str2Arr doesn't contain this char
    //         if (indexOfChar === -1)  
    //             return false

    //         // Splice the first occurrence of this char from our arr
    //         str2Arr.splice(indexOfChar, 1);
    //     }
    // }

    // // There's still values in the array
    // if (str2Arr.length !== 0)
    //     return false;
    
    // Note: Instead of comparing the frequencyCounter to the array, compare the array to the frequencyCounter
    for (let char of str2Arr) {

        // This character isn't in our frequency counter
        if (!frequencyCounter1[char]) 
            return false

        // This character has occurred too many times to be valid
        if (frequencyCounter1[char] === 0) 
            return false

        // Decrease frequency occurrence of this entry
        frequencyCounter1[char] = frequencyCounter1[char] - 1
    }

    // It's an anagram
    return true;
}

/** Tests */
if (validAnagram('', '')) console.log("Test 1 Passed");
else console.log("Test 1 Failed");

if (!validAnagram('aaz', 'zza')) console.log("Test 2 Passed");
else console.log("Test 2 Failed");

if (validAnagram('anagram', 'nagaram')) console.log("Test 3 Passed");
else console.log("Test 3 Failed");

if (!validAnagram('rat', 'car')) console.log("Test 4 Passed");
else console.log("Test 4 Failed");

if (!validAnagram('awesome', 'awesom')) console.log("Test 5 Passed");
else console.log("Test 5 Failed");

if (validAnagram('qwerty', 'qwrtye')) console.log("Test 6 Passed");
else console.log("Test 6 Failed");

if (validAnagram('texttwisttime', 'texttwisttime')) console.log("Test 7 Passed");
else console.log("Test 7 Failed");

if (validAnagram2('', '')) console.log("Test 1 Passed");
else console.log("Test 1 Failed");

if (!validAnagram2('aaz', 'zza')) console.log("Test 2 Passed");
else console.log("Test 2 Failed");

if (validAnagram2('anagram', 'nagaram')) console.log("Test 3 Passed");
else console.log("Test 3 Failed");

if (!validAnagram2('rat', 'car')) console.log("Test 4 Passed");
else console.log("Test 4 Failed");

if (!validAnagram2('awesome', 'awesom')) console.log("Test 5 Passed");
else console.log("Test 5 Failed");

if (validAnagram2('qwerty', 'qwrtye')) console.log("Test 6 Passed");
else console.log("Test 6 Failed");

if (validAnagram2('texttwisttime', 'texttwisttime')) console.log("Test 7 Passed");
else console.log("Test 7 Failed");

