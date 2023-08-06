/*
	Frequency Counter - constructNote
	Exercise 78

	Write a function called constructNote, which accepts two strings,
	a message and some letters. The function should return true if the
	message can be built with the letters that you are given, or it
	should return false.

	Assume that there are only lowercase letters and no space or special
	characters in both the message and the letters.

	Bonus Constraints:

	If M is the length of message and N is the length of letters:

	Time Complexity: O(M+N)

	Space Complexity: O(N)
*/

function constructNote(message, letters) {
	// Unable to build it since theres not enough letters
	if (message.length > letters.length) return false;

	const messageFrequencyCounter = {};
	for (const char of message)
		messageFrequencyCounter[char] = (messageFrequencyCounter[char] || 0) + 1;

	for (const char of letters) {
		if (messageFrequencyCounter[char]) messageFrequencyCounter[char] -= 1;
		if (messageFrequencyCounter[char] === 0) delete messageFrequencyCounter[char];
	}

	return Object.entries(messageFrequencyCounter).length === 0;
}

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true
