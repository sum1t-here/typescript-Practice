"use strict";
//---------------
// Type Aliases
//---------------
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo); // [ 130, 243, 235 ] [ 64, 92, 225 ]
const userOne = { name: 'mario', score: 12 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne); // mario has a score of 12
formatUser({ name: 'yoda', score: 69 }); // yoda has a score of 69
