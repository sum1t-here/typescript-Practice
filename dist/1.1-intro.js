"use strict";
// -----------------------
// Benefits of typeScript
// -----------------------
// 1 - better error feedback
function reverse(str) {
    return str.split('').reverse().join('');
}
const result = reverse('hello');
// 2 - better autocompletion and code hints
const reversed = reverse('ninja');
function printMenuItem(item) {
    console.log(item.title, ':', item.cost);
}
// error example 1
// printMenuItem();
// error example 2
// printMenuItem({ item: 'cola', cost: '8' });
// correct example
printMenuItem({ title: 'cola', cost: 8 });
// 4 - self documenting
