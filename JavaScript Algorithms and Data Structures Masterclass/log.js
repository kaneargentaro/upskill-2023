// Colours
let GREEN = '\x1b[32m';
let RESET = '\x1b[37m';
let RED  = '\x1b[31m';

/**
 * Print green success message
 * @param {Number} number - Test number
 */
function testPassed(number) {
    console.log(`${GREEN}Test ${number} Passed${RESET}`);
}

/**
 * Print red error
 * @param {Number} number - Test number
 */
function testFailed(number) {
    console.error(`${RED}Test ${number} Failed${RESET}`);
}

module.exports = {
    testPassed,
    testFailed
}
