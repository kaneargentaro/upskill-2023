// Using basic push/pop
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

// Using unshift/shift - slow in bigo because we're adding./removing from the start
const stack1 = [];
stack.unshift(1);
stack.unshift(2);
stack.unshift(3);
stack.shift();
