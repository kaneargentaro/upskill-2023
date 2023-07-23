/**
 * Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
 * 
 * Big O Notation Examples
 */
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpTo2(n) {
    return n * (n + 1) / 2;
}

/**
 *  Time how fast a function executes.
 * 
 * @param {*} functionCallback 
 * @param {*} param 
 * @returns 
 */
function timeElapsed(functionCallback, options) {
    const { arguments  } = options || {};
    const timer1 = performance.now();
    const functionResult = functionCallback(...arguments);
    const timer2 = performance.now();
    const timeElapsed =  (timer2 - timer1) / 1000;
    return { result: functionResult, timeElapsed };}

/**
 * Compare the execution speed of two functions
 * 
 * @param {*} function1 
 * @param {*} function1Options 
 * @param {*} function2 
 * @param {*} function2Options 
 */
function compareFunctionsExecutionSpeed(function1, function1Options, function2, function2Options) {
    const result1 = timeElapsed(function1, function1Options);
    const result2 = timeElapsed(function2, function2Options);

    if (result1.timeElapsed === result2.timeElapsed) {
        console.log("Both functions executed at the same speed");
    } else if (result1.timeElapsed > result2.timeElapsed) {
        console.log(`${function2.name} executed ${result1.timeElapsed - result2.timeElapsed} seconds faster`);
    } else {
        console.log(`${function1.name} executed ${result2.timeElapsed - result1.timeElapsed} seconds faster`);
    }
}

const function1Options = { arguments: [1000000000] };
const function2Options = { arguments: [1000000000] };
compareFunctionsExecutionSpeed(addUpTo, function1Options, addUpTo2, function2Options);