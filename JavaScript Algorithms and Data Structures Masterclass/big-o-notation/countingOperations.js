/**
 * Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
 * 
 * Big O Notation Examples
 */

// 5n+2 Operations 
// total=0 is one operation
// i=1 is one
// +, =(2), ++, i<=n for each loop
function addUpTo(n) {
    let total = 0; 
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

// 3 Operations to perform (*, +, /)
function addUpTo2(n) {
    return n * (n + 1) / 2;
}