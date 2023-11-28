"use strict";
// functions
function addTwoNum(a, b) {
    return a + b;
}
const substractTwonum = (a, b) => {
    return a - b;
};
addTwoNum(3, 9);
function addAllNum(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNum([1, 2, 3, 4, 5]);
// 0 is the starting position
// return type interference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const greet = formatGreeting('mario', 'hello');
